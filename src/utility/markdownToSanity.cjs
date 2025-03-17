// Markdown to Sanity converter script
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { createClient } = require('@sanity/client');

// Configuration
const MARKDOWN_FOLDER = './content'; // The folder to scan for markdown files
const BACKUP_FOLDER = './content-processed'; // Optional backup folder for processed files
const CREATE_BACKUPS = false; // Set to true if you want to keep backups

// Sanity client configuration
const client = createClient({
  projectId: '090e1vat',
  dataset: 'production',
  token: 'skvxcYZPQR9pZJcov4b8lPffsGSzZC1kGTNddregUuHl6MwP9JhKAdGsf0gZyPXed8fBvZHQ2YtCscq2TD1VdwzbgiSSvkQaW8qMuPYWxngij9C6p08X0s08QkG5Mkd7XpX64zNjymlv3hrrrr21C8Zg9DkBFwgJ8nwQVuVQfrkiIK5soenU', // Using the token from sanity.ts for testing
  apiVersion: '2023-05-03',
  useCdn: false
});

// Function to read and parse markdown files
function readMarkdownFiles() {
  console.log(`Scanning ${MARKDOWN_FOLDER} for markdown files...`);
  
  if (!fs.existsSync(MARKDOWN_FOLDER)) {
    console.error(`❌ Folder ${MARKDOWN_FOLDER} does not exist!`);
    return [];
  }
  
  const files = fs.readdirSync(MARKDOWN_FOLDER).filter(file => file.endsWith('.md'));
  console.log(`Found ${files.length} markdown files.`);
  
  return files.map(file => {
    const filePath = path.join(MARKDOWN_FOLDER, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Validate required fields
    const requiredFields = ['title', 'slug', 'description', 'category'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      console.warn(`⚠️ File ${file} is missing required fields: ${missingFields.join(', ')}`);
    }
    
    return {
      ...data,
      body: content,
      filename: file,
      filePath
    };
  });
}

// Function to get or create categories
async function getOrCreateCategories(markdownFiles) {
  console.log('Getting category references...');
  
  // Extract unique category names from markdown files
  const categoryNames = [...new Set(markdownFiles.map(file => file.category).filter(Boolean))];
  console.log(`Found ${categoryNames.length} unique categories: ${categoryNames.join(', ')}`);
  
  // Get existing categories from Sanity
  const existingCategories = await client.fetch(`*[_type == "category"] {
    _id,
    title
  }`);
  console.log(`Found ${existingCategories.length} existing categories in Sanity.`);
  
  // Create a map of category names to their IDs
  const categoryMap = {};
  
  // Add existing categories to the map
  existingCategories.forEach(category => {
    categoryMap[category.title] = category._id;
  });
  
  // Create any missing categories
  for (const categoryName of categoryNames) {
    if (!categoryMap[categoryName]) {
      console.log(`Creating new category: ${categoryName}`);
      
      try {
        const newCategory = await client.create({
          _type: 'category',
          title: categoryName,
          slug: {
            _type: 'slug',
            current: categoryName.toLowerCase().replace(/\s+/g, '-')
          },
          description: `Content related to ${categoryName}`
        });
        
        categoryMap[categoryName] = newCategory._id;
        console.log(`✅ Created category: ${categoryName} (${newCategory._id})`);
      } catch (error) {
        console.error(`❌ Failed to create category ${categoryName}:`, error.message);
      }
    }
  }
  
  return categoryMap;
}

// Function to get or create author
async function getOrCreateAuthor() {
  console.log('Getting author reference...');
  
  // Check if author already exists
  const existingAuthors = await client.fetch(`*[_type == "author"] {
    _id,
    name
  }`);
  
  if (existingAuthors.length > 0) {
    console.log(`Using existing author: ${existingAuthors[0].name} (${existingAuthors[0]._id})`);
    return existingAuthors[0]._id;
  }
  
  // Create a new author
  console.log('Creating new author: Sreejan');
  
  try {
    const newAuthor = await client.create({
      _type: 'author',
      name: 'Sreejan',
      slug: {
        _type: 'slug',
        current: 'sreejan'
      },
      bio: 'Developer, creator, and tech enthusiast.'
    });
    
    console.log(`✅ Created author: Sreejan (${newAuthor._id})`);
    return newAuthor._id;
  } catch (error) {
    console.error(`❌ Failed to create author:`, error.message);
    throw error; // Re-throw to stop the process
  }
}

// Function to create a Sanity post from markdown data
async function createSanityPost(fileData, authorId, categoryMap) {
  console.log(`Creating post: ${fileData.title}`);
  
  // Check if category exists
  if (!fileData.category || !categoryMap[fileData.category]) {
    console.error(`❌ Invalid category for post "${fileData.title}": ${fileData.category}`);
    return null;
  }
  
  // Prepare post data
  const postData = {
    _type: 'post',
    title: fileData.title,
    subtitle: fileData.subtitle || null,
    slug: {
      _type: 'slug',
      current: fileData.slug
    },
    description: fileData.description,
    author: {
      _type: 'reference',
      _ref: authorId
    },
    category: {
      _type: 'reference',
      _ref: categoryMap[fileData.category]
    },
    publishedAt: fileData.publishedAt ? new Date(fileData.publishedAt).toISOString() : new Date().toISOString(),
    readTime: fileData.readTime || null,
    icon: fileData.icon || null,
    iconColor: fileData.iconColor || null,
    body: fileData.body
  };
  
  try {
    const createdPost = await client.create(postData);
    console.log(`✅ Post created successfully: ${createdPost._id}`);
    return createdPost;
  } catch (error) {
    console.error(`❌ Failed to create post "${fileData.title}":`, error.message);
    return null;
  }
}

// Process a single markdown file
async function processMarkdownFile(fileData, authorId, categoryMap) {
  try {
    // Create Sanity post
    const result = await createSanityPost(fileData, authorId, categoryMap);
    
    // If successful, delete or backup the file
    if (result && result._id) {
      if (CREATE_BACKUPS) {
        // Create backup folder if it doesn't exist
        if (!fs.existsSync(BACKUP_FOLDER)) {
          fs.mkdirSync(BACKUP_FOLDER, { recursive: true });
        }
        
        // Move file to backup folder
        fs.renameSync(fileData.filePath, path.join(BACKUP_FOLDER, fileData.filename));
        console.log(`✅ Successfully created post "${fileData.title}" and moved file to backup`);
      } else {
        // Delete file
        fs.unlinkSync(fileData.filePath);
        console.log(`✅ Successfully created post "${fileData.title}" and deleted file`);
      }
      
      return true;
    }
    
    console.warn(`⚠️ Post "${fileData.title}" was not created. File not deleted.`);
    return false;
  } catch (error) {
    console.error(`❌ Error processing file ${fileData.filename}:`, error.message);
    return false;
  }
}

// Main function to process markdown files
async function processMarkdownFiles() {
  try {
    console.log('Starting markdown to Sanity migration...');
    
    // Validate Sanity token
    if (!client.config().token) {
      console.error('❌ Error: No Sanity token provided. Set the SANITY_TOKEN environment variable or add it directly to the script.');
      console.log('You can get a token from https://www.sanity.io/manage/personal/project/090e1vat/api');
      return false;
    }
    
    // Read markdown files
    const markdownFiles = readMarkdownFiles();
    if (markdownFiles.length === 0) {
      console.log('No markdown files found. Nothing to do.');
      return true;
    }
    
    // Get category references
    const categoryMap = await getOrCreateCategories(markdownFiles);
    
    // Get author reference
    const authorId = await getOrCreateAuthor();
    
    // Process each markdown file
    console.log(`Processing ${markdownFiles.length} markdown files...`);
    
    let successCount = 0;
    let failCount = 0;
    
    for (const fileData of markdownFiles) {
      const success = await processMarkdownFile(fileData, authorId, categoryMap);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    }
    
    console.log(`Migration completed: ${successCount} posts created, ${failCount} failed`);
    return true;
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    return false;
  }
}

// Run the migration if this is the main script
if (require.main === module) {
  console.log('Running as main script');
  
  // Run the migration
  processMarkdownFiles()
    .then(success => {
      console.log('Migration process finished with status:', success ? 'SUCCESS' : 'FAILURE');
      process.exit(success ? 0 : 1);
    })
    .catch(err => {
      console.error('Unexpected error during migration:', err);
      process.exit(1);
    });
}

module.exports = { processMarkdownFiles };

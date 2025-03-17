// Migration script to push existing content to Sanity
import { createClient } from '@sanity/client';

// Sanity client configuration
const client = createClient({
  projectId: '090e1vat',
  dataset: 'production',
  token: 'skvxcYZPQR9pZJcov4b8lPffsGSzZC1kGTNddregUuHl6MwP9JhKAdGsf0gZyPXed8fBvZHQ2YtCscq2TD1VdwzbgiSSvkQaW8qMuPYWxngij9C6p08X0s08QkG5Mkd7XpX64zNjymlv3hrrrr21C8Zg9DkBFwgJ8nwQVuVQfrkiIK5soenU',
  apiVersion: '2023-05-03',
  useCdn: false
});

// Sample content from the original files
const contentData = {
  'api-services': {
    title: 'Comprehensive API Services for Developers',
    subtitle: 'Explore our collection of powerful APIs for seamless integration into your projects',
    slug: 'api-services',
    description: 'Explore our collection of powerful APIs for developers, including AI integration, data processing, and more.',
    category: 'API',
    publishedAt: new Date('2025-03-15').toISOString(),
    readTime: '8 min read',
    icon: 'Database',
    iconColor: 'from-blue-500 to-indigo-600',
    body: `
# API Services for Developers

In today's interconnected digital landscape, APIs (Application Programming Interfaces) serve as the fundamental building blocks that enable seamless communication between different software systems. As a developer passionate about creating tools that empower others, I've developed several APIs that address common challenges in web development, data processing, and AI integration.

## The AI Integration API

My flagship API offering provides a unified interface to access multiple AI models through a single endpoint. Instead of managing different API keys, authentication methods, and response formats for each AI provider, developers can use this API to access gpt-4o, Claude, Gemini, and other leading models.

\`\`\`javascript
fetch('https://api.sree.shop/v1/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Explain APIs in simple terms.' }
    ]
  })
})
\`\`\`

## Data Processing API

Working with large datasets can be challenging, especially when you need to perform complex transformations or extract specific insights. My Data Processing API simplifies these tasks with endpoints for data transformation, analysis, and visualization.
`
  },
  'jarvis-ai': {
    title: 'Meet Jarvis: My Advanced AI Assistant',
    subtitle: 'How I built a personal AI assistant to automate tasks and enhance productivity',
    slug: 'jarvis-ai',
    description: 'Meet Jarvis, my advanced AI assistant that helps automate tasks, answer questions, and make your life easier.',
    category: 'AI',
    publishedAt: new Date('2025-03-10').toISOString(),
    readTime: '10 min read',
    icon: 'Bot',
    iconColor: 'from-emerald-500 to-teal-600',
    body: `
# Jarvis: My Advanced AI Assistant

Inspired by Tony Stark's AI companion in the Iron Man films, I set out to create my own version of Jarvis—a personal AI assistant designed to automate repetitive tasks, answer questions, and help manage my digital life.

## The Architecture Behind Jarvis

Jarvis is built on a modular architecture that combines several key components including natural language understanding, custom-trained models, and a voice interface.

### Core Components:
1. **Natural Language Processing**: Using advanced NLP models to understand and respond to queries
2. **Task Automation**: Scripts and integrations to control smart home devices, manage schedules, and more
3. **Voice Interface**: Custom wake word detection and speech synthesis for hands-free interaction
`
  },
  'web-projects': {
    title: 'Web Development Portfolio: Modern Frameworks & Design',
    subtitle: 'A showcase of my latest web projects using React, Next.js, and cutting-edge design principles',
    slug: 'web-projects',
    description: 'A showcase of my latest web development projects, featuring modern frameworks and cutting-edge design.',
    category: 'Web',
    publishedAt: new Date('2025-03-05').toISOString(),
    readTime: '7 min read',
    icon: 'Globe',
    iconColor: 'from-purple-500 to-pink-600',
    body: `
# Web Development Portfolio

Web development continues to evolve at a rapid pace, with new frameworks, libraries, and design paradigms emerging regularly.

## E-commerce Platform with Next.js

One of my most comprehensive projects has been building a full-featured e-commerce platform using Next.js and modern design principles.

### Key Features:
- Server-side rendering for optimal performance and SEO
- Headless CMS integration for content management
- Stripe payment processing with custom checkout flow
- Responsive design with Tailwind CSS
- Dark mode support and accessibility features

## Personal Portfolio Website

This website showcases my work and provides a platform for sharing my knowledge through blog posts and tutorials.

### Technologies Used:
- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Sanity CMS for content management
`
  }
};

// First create the author
async function createAuthor() {
  console.log('Creating author...');
  const author = {
    _type: 'author',
    name: 'Sreejan',
    slug: {
      _type: 'slug',
      current: 'sreejan'
    },
    bio: 'Developer, creator, and tech enthusiast.'
  };

  return client.create(author);
}

// Then create categories
async function createCategories() {
  console.log('Creating categories...');
  const categories = [
    {
      _type: 'category',
      title: 'API',
      slug: {
        _type: 'slug',
        current: 'api'
      },
      description: 'Content related to API development and services'
    },
    {
      _type: 'category',
      title: 'AI',
      slug: {
        _type: 'slug',
        current: 'ai'
      },
      description: 'Content related to artificial intelligence and machine learning'
    },
    {
      _type: 'category',
      title: 'Web',
      slug: {
        _type: 'slug',
        current: 'web'
      },
      description: 'Content related to web development and design'
    }
  ];

  return Promise.all(categories.map(category => client.create(category)));
}

// Finally create posts
async function createPosts(authorId, categoryMap) {
  console.log('Creating posts...');
  const posts = Object.values(contentData).map(post => {
    return {
      _type: 'post',
      title: post.title,
      subtitle: post.subtitle,
      slug: {
        _type: 'slug',
        current: post.slug
      },
      description: post.description,
      author: {
        _type: 'reference',
        _ref: authorId
      },
      category: {
        _type: 'reference',
        _ref: categoryMap[post.category]
      },
      publishedAt: post.publishedAt,
      readTime: post.readTime,
      icon: post.icon,
      iconColor: post.iconColor,
      body: post.body
    };
  });

  return Promise.all(posts.map(post => client.create(post)));
}

// Run the migration
async function migrate() {
  try {
    console.log('Starting migration process...');
    console.log('Sanity client configuration:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      apiVersion: client.config().apiVersion,
      useCdn: client.config().useCdn,
      tokenLength: client.config().token ? client.config().token.length : 0
    });

    // Create author first
    console.log('Creating author...');
    const author = await createAuthor();
    console.log('Author created successfully:', author._id);

    // Create categories
    console.log('Creating categories...');
    const categories = await createCategories();
    console.log('Categories created successfully:', categories.length);
    console.log('Category IDs:', categories.map(c => c._id));

    // Map category titles to their IDs
    const categoryMap = categories.reduce((map, category) => {
      map[category.title] = category._id;
      return map;
    }, {});
    console.log('Category map:', categoryMap);

    // Create posts
    console.log('Creating posts...');
    const posts = Object.values(contentData).map(post => {
      return {
        _type: 'post',
        title: post.title,
        subtitle: post.subtitle,
        slug: {
          _type: 'slug',
          current: post.slug
        },
        description: post.description,
        author: {
          _type: 'reference',
          _ref: author._id
        },
        category: {
          _type: 'reference',
          _ref: categoryMap[post.category]
        },
        publishedAt: post.publishedAt,
        readTime: post.readTime,
        icon: post.icon,
        iconColor: post.iconColor,
        body: post.body
      };
    });
    
    console.log('Post objects prepared:', posts.length);
    
    for (const post of posts) {
      console.log(`Creating post: ${post.title}`);
      try {
        const createdPost = await client.create(post);
        console.log(`Post created successfully: ${createdPost._id}`);
      } catch (error) {
        console.error(`Failed to create post ${post.title}:`, error);
      }
    }

    console.log('Migration completed successfully!');
    return true;
  } catch (error) {
    console.error('Migration failed:', error);
    return false;
  }
}

// Run the migration
console.log('Script starting...');
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('migrateContent.js')) {
  console.log('Running as main script');
  // You need to add your write token here before running this script
  if (!client.config().token) {
    console.error('Error: You need to add your Sanity write token to run this script.');
    console.log('1. Go to https://www.sanity.io/manage/personal/project/090e1vat/api');
    console.log('2. Create a new token with write access');
    console.log('3. Add the token to this script');
    process.exit(1);
  }

  // Run the migration
  migrate()
    .then(success => {
      console.log('Migration process finished with status:', success ? 'SUCCESS' : 'FAILURE');
      process.exit(success ? 0 : 1);
    })
    .catch(err => {
      console.error('Unexpected error during migration:', err);
      process.exit(1);
    });
}

export { migrate };

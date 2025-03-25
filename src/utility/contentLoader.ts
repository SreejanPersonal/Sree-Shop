// Client-side content loader for local content structure
// This implementation dynamically loads content from the file system

export interface PostMetadata {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
  iconColor: string;
  publishedAt: string;
  readTime: string;
  subtitle: string;
}

export interface Author {
  name: string;
  image: string;
}

export interface Post extends PostMetadata {
  body: string;
  author: Author;
}

// Dynamic import of all post metadata
const metadataFiles = import.meta.glob('/content/posts/*/metadata.json', { eager: true });
// Dynamic import of all post content
const contentFiles = import.meta.glob('/content/posts/*/index.md', { eager: true, as: 'raw' });
// Dynamic import of all author data
const authorFiles = import.meta.glob('/content/posts/*/author.json', { eager: true });

// Get all posts for ContentHub
export async function getAllPosts(): Promise<PostMetadata[]> {
  try {
    const posts: PostMetadata[] = [];
    
    // Process all metadata files
    for (const path in metadataFiles) {
      const metadata = (metadataFiles[path] as any).default;
      posts.push(metadata);
    }
    
    // Sort by date (newest first)
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error: any) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Find the metadata file for this slug
    const metadataPath = Object.keys(metadataFiles).find(
      path => (metadataFiles[path] as any).default.slug === slug
    );
    
    if (!metadataPath) return null;
    
    // Extract the post directory from the metadata path
    // e.g., '/content/posts/my-post/metadata.json' -> '/content/posts/my-post'
    const postDir = metadataPath.substring(0, metadataPath.lastIndexOf('/'));
    
    // Get the corresponding content and author files
    const contentPath = `${postDir}/index.md`;
    const authorPath = `${postDir}/author.json`;
    
    if (!contentFiles[contentPath] || !authorFiles[authorPath]) return null;
    
    const metadata = (metadataFiles[metadataPath] as any).default;
    const body = contentFiles[contentPath] as string;
    const author = (authorFiles[authorPath] as any).default;
    
    return {
      ...metadata,
      body,
      author
    };
  } catch (error: any) {
    console.error('Error loading post:', error);
    return null;
  }
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  try {
    const posts = await getAllPosts();
    // Extract unique categories
    return Array.from(new Set(posts.map(post => post.category)));
  } catch (error: any) {
    console.error('Error loading categories:', error);
    return [];
  }
}

// Format date for display
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Calculate estimated read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

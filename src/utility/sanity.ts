import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Sanity configuration
export const config = {
  projectId: '090e1vat',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, // Set to false for development
  // Token is not needed for read operations in the browser
};

// For server-side operations that need write access
export const writeClient = createClient({
  ...config,
  token: 'skvxcYZPQR9pZJcov4b8lPffsGSzZC1kGTNddregUuHl6MwP9JhKAdGsf0gZyPXed8fBvZHQ2YtCscq2TD1VdwzbgiSSvkQaW8qMuPYWxngij9C6p08X0s08QkG5Mkd7XpX64zNjymlv3hrrrr21C8Zg9DkBFwgJ8nwQVuVQfrkiIK5soenU',
  useCdn: false,
});

// Create a Sanity client
export const sanityClient = createClient(config);

// Helper function to generate image URLs
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => {
  return builder.image(source);
};

// Fetch all posts for ContentHub
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    "category": category->title,
    icon,
    iconColor,
    publishedAt,
    mainImage
  }`;
  
  return await sanityClient.fetch(query);
}

// Fetch a single post by slug for ContentDetail
export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "category": category->title,
    publishedAt,
    readTime,
    body,
    mainImage,
    "author": author->{name, image},
    iconColor
  }`;
  
  return await sanityClient.fetch(query, { slug });
}

// Fetch all categories
export async function getAllCategories() {
  const query = `*[_type == "category"] {
    _id,
    title
  }`;
  
  return await sanityClient.fetch(query);
}

// Format date for display
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

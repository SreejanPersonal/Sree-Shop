import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Determine if we're in production or development
const isProduction = import.meta.env.PROD;
const baseUrl = isProduction ? 'https://sree.shop' : 'http://localhost:8080';

// Standard Sanity API host without project ID (will be added automatically)
const apiHost = 'https://api.sanity.io';

// Sanity configuration
export const config = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: isProduction, // Use CDN in production for better performance
  // CORS configuration
  withCredentials: true,
  apiHost: apiHost,
  // Add the current origin to the request
  headers: {
    Origin: baseUrl
  }
};

// For server-side operations that need write access
export const writeClient = createClient({
  ...config,
  token: import.meta.env.VITE_SANITY_TOKEN,
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

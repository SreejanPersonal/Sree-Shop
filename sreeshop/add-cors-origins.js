// Script to add CORS origins to Sanity project
const { createClient } = require('@sanity/client');
require('dotenv').config();

// The Sanity Management API client
const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  token: process.env.VITE_SANITY_TOKEN, // Use token from environment variables
  useCdn: false,
  apiVersion: '2023-05-03'
});

// Origins to add
const origins = [
  {
    origin: 'http://localhost:8080',
    allowCredentials: true
  },
  {
    origin: 'https://sree.shop',
    allowCredentials: true
  },
  {
    origin: 'https://www.sree.shop',
    allowCredentials: true
  }
];

// Function to add CORS origins
async function addCorsOrigins() {
  try {
    // Get the current CORS origins
    const currentCors = await client.request({
      uri: '/cors',
      method: 'GET'
    });
    
    // Add each origin
    for (const { origin, allowCredentials } of origins) {
      // Check if origin already exists
      const existingOrigin = currentCors.find(entry => entry.origin === origin);
      
      if (existingOrigin) {
        // Delete existing origin by ID to update it
        await client.request({
          uri: `/cors/${existingOrigin.id}`,
          method: 'DELETE'
        });
      }
      
      // Add the origin with CORS configuration
      await client.request({
        uri: '/cors',
        method: 'POST',
        body: {
          origin,
          allowCredentials
        }
      });
    }
  } catch (error) {
    // Silent error handling for security
  }
}

// Run the function
addCorsOrigins();

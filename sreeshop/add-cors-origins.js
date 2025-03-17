// Script to add CORS origins to Sanity project
const { createClient } = require('@sanity/client');

// The Sanity Management API client
const client = createClient({
  projectId: '090e1vat',
  dataset: 'production',
  token: 'skvxcYZPQR9pZJcov4b8lPffsGSzZC1kGTNddregUuHl6MwP9JhKAdGsf0gZyPXed8fBvZHQ2YtCscq2TD1VdwzbgiSSvkQaW8qMuPYWxngij9C6p08X0s08QkG5Mkd7XpX64zNjymlv3hrrrr21C8Zg9DkBFwgJ8nwQVuVQfrkiIK5soenU', // Your token with manage rights
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
  }
];

// Function to add CORS origins
async function addCorsOrigins() {
  try {
    console.log('Adding CORS origins to Sanity project...');
    
    // Get the current CORS origins
    const currentCors = await client.request({
      uri: '/cors',
      method: 'GET'
    });
    
    console.log('Current CORS origins:', currentCors);
    
    // Add each origin
    for (const { origin, allowCredentials } of origins) {
      console.log(`Adding origin: ${origin}`);
      
      // Check if origin already exists
      const exists = currentCors.some(entry => entry.origin === origin);
      
      if (exists) {
        console.log(`Origin ${origin} already exists, skipping...`);
        continue;
      }
      
      // Add the origin
      await client.request({
        uri: '/cors',
        method: 'POST',
        body: {
          origin,
          allowCredentials
        }
      });
      
      console.log(`Successfully added origin: ${origin}`);
    }
    
    console.log('CORS origins added successfully!');
  } catch (error) {
    console.error('Error adding CORS origins:', error);
  }
}

// Run the function
addCorsOrigins();

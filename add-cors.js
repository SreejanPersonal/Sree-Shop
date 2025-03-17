// A simple script to add CORS origins to Sanity
import { execSync } from 'child_process';

// Run the Sanity CLI commands
try {
  console.log('Adding CORS origins to Sanity project...');
  
  // Add localhost:8080
  console.log('Adding http://localhost:8080...');
  execSync('npx sanity cors add http://localhost:8080 --credentials', {
    cwd: './sreeshop',
    stdio: 'inherit'
  });
  
  // Add production domain
  console.log('Adding https://sree.shop...');
  execSync('npx sanity cors add https://sree.shop --credentials', {
    cwd: './sreeshop',
    stdio: 'inherit'
  });
  
  console.log('CORS origins added successfully!');
} catch (error) {
  console.error('Error adding CORS origins:', error);
}

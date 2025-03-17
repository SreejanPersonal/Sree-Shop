/**
 * CORS configuration for Sanity Studio
 * This file configures CORS settings for the Sanity Studio
 * to allow requests from both development and production environments
 */

// Define the CORS configuration type
interface CorsConfig {
  allowedOrigins: string[];
  allowCredentials: boolean;
  maxAge: number;
}

// Export the CORS configuration
const corsConfig: CorsConfig = {
  // Allow requests from these origins
  allowedOrigins: [
    // Development environment
    'http://localhost:8080',
    // Production environment
    'https://sree.shop'
  ],
  // Allow credentials to be sent with requests
  allowCredentials: true,
  // Maximum age (in seconds) of the CORS preflight response
  maxAge: 600
};

export default corsConfig;

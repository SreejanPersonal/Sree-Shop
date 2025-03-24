import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createDatabaseError, createNetworkError } from '../contexts/ErrorContext';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Error messages that will be shown to users
export const DB_ERROR_MESSAGES = {
  PERMISSION_DENIED: 'You do not have permission to access this resource. This is likely due to Row Level Security (RLS) policies in Supabase.',
  NETWORK_ERROR: 'Unable to connect to the database. Please check your internet connection.',
  UNKNOWN_ERROR: 'An unexpected error occurred while accessing the database.'
};

/**
 * API key management functions with improved error handling
 */
export const supabaseService = {
  /**
   * Get beta API key for a user
   * @param userEmail - The email of the user
   * @returns The beta API key data or an error handler function
   */
  getBetaApiKey: async (userEmail: string) => {
    try {
      // Query without .single() to avoid PGRST116 error
      const { data, error } = await supabase
        .from('beta_api_keys')
        .select('id, user_email, name, api_key, created_at, complete_api_key')
        .eq('user_email', userEmail);
      
      if (error) {
        console.error('Error fetching beta API key:', error);
        return { 
          data: null, 
          error: createDatabaseError(
            'Error retrieving your beta API key from the database.',
            error.code
          )
        };
      }
      
      // Check if we got any results
      if (data && data.length > 0) {
        return { data: data[0], error: null };
      }
      
      // No error, just no data found
      return { data: null, error: null };
    } catch (err) {
      console.error('Exception fetching beta API key:', err);
      return { 
        data: null, 
        error: createNetworkError(
          'Network error while retrieving your beta API key.',
          'NETWORK_ERROR'
        )
      };
    }
  },
  
  /**
   * Store a new beta API key
   * @param userEmail - The email of the user
   * @param name - The name of the beta API key
   * @param apiKey - The beta API key value
   * @returns The stored beta API key data or an error handler function
   */
  storeBetaApiKey: async (userEmail: string, name: string, apiKey: string, uid: string) => {
    try {
      // Check if the user already has a beta API key
      const { data: existingKey, error: fetchError } = await supabaseService.getBetaApiKey(userEmail);
      
      if (fetchError) {
        return { data: null, error: fetchError };
      }
      
      if (existingKey) {
        // If key exists, return it without creating a new one
        return { data: existingKey, error: null };
      }
      
      // Insert new beta API key
      const { data, error } = await supabase
        .from('beta_api_keys')
        .insert([
          { 
            id: uid.replace(/-/g, '').substring(0, 50), // Format UID: remove hyphens and limit to 50 chars
            user_email: userEmail, 
            name, 
            api_key: apiKey 
          }
        ])
        .select();
      
      if (error) {
        console.error('Error storing beta API key:', error);
        
        // Check for RLS policy violation
        if (error.code === '42501') {
          return { 
            data: null, 
            error: createDatabaseError(
              DB_ERROR_MESSAGES.PERMISSION_DENIED,
              error.code,
              {
                label: 'Learn More',
                onClick: () => {
                  window.open('https://supabase.com/docs/guides/auth/row-level-security', '_blank');
                }
              }
            )
          };
        }
        
        return { 
          data: null, 
          error: createDatabaseError(
            'Error saving your beta API key to the database.',
            error.code
          )
        };
      }
      
      return { data: data[0], error: null };
    } catch (err) {
      console.error('Exception storing beta API key:', err);
      return { 
        data: null, 
        error: createNetworkError(
          'Network error while saving your beta API key.',
          'NETWORK_ERROR'
        )
      };
    }
  },
  /**
   * Get API key for a user
   * @param userEmail - The email of the user
   * @returns The API key data or an error handler function
   */
  getApiKey: async (userEmail: string) => {
    try {
      // Query without .single() to avoid PGRST116 error
      const { data, error } = await supabase
        .from('api_keys')
        .select('*')
        .eq('user_email', userEmail);
      
      if (error) {
        console.error('Error fetching API key:', error);
        return { 
          data: null, 
          error: createDatabaseError(
            'Error retrieving your API key from the database.',
            error.code
          )
        };
      }
      
      // Check if we got any results
      if (data && data.length > 0) {
        return { data: data[0], error: null };
      }
      
      // No error, just no data found
      return { data: null, error: null };
    } catch (err) {
      console.error('Exception fetching API key:', err);
      return { 
        data: null, 
        error: createNetworkError(
          'Network error while retrieving your API key.',
          'NETWORK_ERROR'
        )
      };
    }
  },
  
  /**
   * Store a new API key
   * @param userEmail - The email of the user
   * @param name - The name of the API key
   * @param apiKey - The API key value
   * @returns The stored API key data or an error handler function
   */
  storeApiKey: async (userEmail: string, name: string, apiKey: string) => {
    try {
      // Check if the user already has an API key
      const { data: existingKey, error: fetchError } = await supabaseService.getApiKey(userEmail);
      
      if (fetchError) {
        return { data: null, error: fetchError };
      }
      
      if (existingKey) {
        // If key exists, return it without creating a new one
        return { data: existingKey, error: null };
      }
      
      // Insert new API key
      const { data, error } = await supabase
        .from('api_keys')
        .insert([
          { user_email: userEmail, name, api_key: apiKey }
        ])
        .select();
      
      if (error) {
        console.error('Error storing API key:', error);
        
        // Check for RLS policy violation
        if (error.code === '42501') {
          return { 
            data: null, 
            error: createDatabaseError(
              DB_ERROR_MESSAGES.PERMISSION_DENIED,
              error.code,
              {
                label: 'Learn More',
                onClick: () => {
                  window.open('https://supabase.com/docs/guides/auth/row-level-security', '_blank');
                }
              }
            )
          };
        }
        
        return { 
          data: null, 
          error: createDatabaseError(
            'Error saving your API key to the database.',
            error.code
          )
        };
      }
      
      return { data: data[0], error: null };
    } catch (err) {
      console.error('Exception storing API key:', err);
      return { 
        data: null, 
        error: createNetworkError(
          'Network error while saving your API key.',
          'NETWORK_ERROR'
        )
      };
    }
  }
};

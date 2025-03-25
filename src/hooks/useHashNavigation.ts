import { useEffect, useRef } from 'react';

interface UseHashNavigationOptions {
  /**
   * Offset from the top of the element when scrolling (to account for fixed headers)
   */
  offset?: number;
  /**
   * Delay in milliseconds before scrolling to the element
   */
  delay?: number;
  /**
   * Optional callback to execute when hash changes
   */
  onHashChange?: (hash: string) => void;
  /**
   * Whether to update the hash in the URL when scrolling to a section
   * Set to false to prevent circular dependencies with state updates
   */
  updateUrlHash?: boolean;
}

/**
 * A hook that handles hash-based navigation, ensuring proper scrolling to elements
 * when navigating directly to a URL with a hash or when the hash changes.
 */
export const useHashNavigation = ({
  offset = 80,
  delay = 100,
  onHashChange,
  updateUrlHash = true
}: UseHashNavigationOptions = {}) => {
  // Use a ref to track if we're handling a programmatic hash change
  const isHandlingHashChange = useRef(false);

  useEffect(() => {
    // Function to scroll to the element identified by the hash
    const scrollToSection = () => {
      // If we're already handling a hash change, don't process it again
      if (isHandlingHashChange.current) {
        return;
      }

      const hash = window.location.hash;
      if (hash) {
        // Call the onHashChange callback if provided
        if (onHashChange) {
          onHashChange(hash.substring(1)); // Remove the # character
        }
        
        // Add a small delay to ensure the element is mounted
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Add offset for fixed headers
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, delay);
      }
    };

    // Scroll on initial load if hash exists
    scrollToSection();

    // Listen for hash changes
    const handleHashChange = () => {
      // Only process if it's not a programmatic change we initiated
      if (!isHandlingHashChange.current) {
        scrollToSection();
      } else {
        // Reset the flag after our programmatic change is processed
        isHandlingHashChange.current = false;
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);

    // Listen for router navigation completion
    const handleRouteChange = () => {
      if (window.location.hash) {
        scrollToSection();
      }
    };
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [offset, delay, onHashChange, updateUrlHash]);

  // Return a function to programmatically navigate to a hash
  return {
    navigateToHash: (hash: string) => {
      if (!hash) return;
      
      // Set the flag to indicate we're handling a programmatic change
      isHandlingHashChange.current = true;
      
      // Update the URL if updateUrlHash is true
      if (updateUrlHash) {
        window.history.pushState(null, '', `#${hash}`);
      }
      
      // Scroll to the element
      const element = document.getElementById(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
};

export default useHashNavigation;

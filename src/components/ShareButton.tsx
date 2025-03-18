import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  slug: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, slug }) => {
  const [isShared, setIsShared] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const getShareUrl = () => {
    // Get the base URL (works in both development and production)
    const baseUrl = window.location.origin;
    return `${baseUrl}/content/${slug}`;
  };

  const handleShare = async () => {
    const shareUrl = getShareUrl();
    
    setIsAnimating(true);

    try {
      // Check if the Web Share API is available (primarily mobile devices)
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: `Check out this article: ${title}`,
          url: shareUrl,
        });
        setIsShared(true);
      } else {
        // Fallback for desktop: copy to clipboard
        await navigator.clipboard.writeText(shareUrl);
        setIsShared(true);
        
        // Reset the "Copied" state after 2 seconds
        setTimeout(() => {
          setIsShared(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      // Reset animation state
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`relative flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary 
                 ${isShared ? 'text-green-500 dark:text-green-400' : 'hover:text-blue-600 dark:hover:text-blue-400'} 
                 transition-colors group`}
      aria-label="Share"
    >
      <span className={`relative ${isAnimating ? 'animate-pop' : ''}`}>
        {isShared ? (
          <Check className="w-4 h-4" />
        ) : (
          <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
        )}
      </span>
      
      <span className="text-sm">{isShared ? 'Copied!' : 'Share'}</span>
    </button>
  );
};

export default ShareButton;

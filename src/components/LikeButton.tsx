import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  initialLiked?: boolean;
  onLike?: (liked: boolean) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ 
  initialLiked = false,
  onLike
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setLiked(!liked);
    setIsAnimating(true);
    
    if (onLike) {
      onLike(!liked);
    }
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`relative flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary 
                 ${liked ? 'text-red-500 dark:text-red-400' : 'hover:text-blue-600 dark:hover:text-blue-400'} 
                 transition-colors group`}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <span className={`relative inline-flex ${isAnimating ? 'animate-heartbeat' : ''}`}>
        <Heart 
          className={`w-4 h-4 transition-all duration-300 ${liked ? 'fill-current' : 'group-hover:scale-110'}`} 
        />
        
        {/* Heart burst effect */}
        {isAnimating && liked && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="absolute w-8 h-8 -m-2 bg-red-500/20 rounded-full scale-0 animate-ping-once"></span>
            {[...Array(6)].map((_, i) => (
              <span 
                key={i}
                className="absolute h-1 w-1 bg-red-500 rounded-full animate-particle-burst"
                style={{ 
                  '--particle-angle': `${i * 60}deg`,
                  animationDelay: `${i * 50}ms`
                } as React.CSSProperties}
              ></span>
            ))}
          </span>
        )}
      </span>
      
      <span className="text-sm">Like</span>
    </button>
  );
};

export default LikeButton;

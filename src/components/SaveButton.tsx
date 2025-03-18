import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';
import Notification from './Notification';

interface SaveButtonProps {
  onSave?: (saved: boolean) => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleSave = () => {
    setIsAnimating(true);
    setShowNotification(true);
    
    if (onSave) {
      onSave(true);
    }
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  
  return (
    <>
      <button
        onClick={handleSave}
        className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        aria-label="Save for later"
      >
        <span className={`relative ${isAnimating ? 'animate-pop' : ''}`}>
          <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
        </span>
        <span className="text-sm">Save</span>
      </button>
      
      <Notification
        message="This feature is currently in development and will be available soon!"
        isVisible={showNotification}
        onClose={handleCloseNotification}
        duration={5000}
      />
    </>
  );
};

export default SaveButton;

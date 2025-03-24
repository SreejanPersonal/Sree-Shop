import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  duration = 5000,
  onClose,
  isVisible
}) => {
  const [progress, setProgress] = useState(100);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const remainingTimeRef = useRef<number>(duration);

  // Handle progress bar
  useEffect(() => {
    if (isVisible && !isHovered) {
      startTimeRef.current = Date.now();
      
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      // Set up timer for auto-dismiss
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const remaining = Math.max(0, remainingTimeRef.current - elapsed);
        const newProgress = (remaining / duration) * 100;
        
        setProgress(newProgress);
        
        if (newProgress <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          onClose();
        }
      }, 50);
      
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [isVisible, isHovered, duration, onClose]);

  // Pause timer on hover
  useEffect(() => {
    if (isHovered && timerRef.current) {
      clearInterval(timerRef.current);
      const elapsed = Date.now() - startTimeRef.current;
      remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
    } else if (isVisible && !isHovered) {
      startTimeRef.current = Date.now();
      
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const remaining = Math.max(0, remainingTimeRef.current - elapsed);
        const newProgress = (remaining / duration) * 100;
        
        setProgress(newProgress);
        
        if (newProgress <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          onClose();
        }
      }, 50);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-sm w-full transform transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } hover-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-premium-lg overflow-hidden">
        <div className="relative p-4">
          {/* Close button - visible on hover for desktop, always visible on mobile */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full text-light-text-tertiary dark:text-dark-text-tertiary transition-opacity duration-200 
                      hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary hover:text-light-text dark:hover:text-dark-text
                      hover-reveal"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
          
          <div className="pr-6">
            <p className="text-light-text dark:text-dark-text font-medium">{message}</p>
          </div>
          
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-light-primary-100 dark:bg-dark-primary-700 w-full">
            <div
              className="h-full bg-gradient-to-r from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface AuthAlertProps {
  show: boolean;
  onClose: () => void;
}

const AuthAlert: React.FC<AuthAlertProps> = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="relative">
        {/* Premium blur effect */}
        <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20 rounded-xl blur-xl"></div>
        
        {/* Main container */}
        <div className="relative px-6 py-4 bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-lg rounded-xl shadow-premium-xl border border-light-primary-100/50 dark:border-dark-primary-700/50 flex items-center gap-4">
          {/* Icon container with gradient background */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20 rounded-lg blur"></div>
            <div className="relative p-2 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-light-text dark:text-dark-text font-medium">
              Authentication Required
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Please sign in to create and manage API keys
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-light-bg/50 dark:hover:bg-dark-bg/50 transition-colors group"
          >
            <X className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthAlert;

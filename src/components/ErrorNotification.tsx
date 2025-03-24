import React, { useState, useEffect } from 'react';
import { AlertCircle, X, RefreshCw, ExternalLink, Info } from 'lucide-react';

export type ErrorSeverity = 'critical' | 'warning' | 'info';
export type ErrorCategory = 'database' | 'network' | 'auth' | 'general';

export interface ErrorDetails {
  message: string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  code?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  autoHide?: boolean;
  autoHideDelay?: number;
}

interface ErrorNotificationProps {
  error: ErrorDetails;
  onDismiss: () => void;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ error, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Colors based on severity
  const severityStyles = {
    critical: {
      gradient: 'from-red-500/20 to-pink-500/20 dark:from-red-600/20 dark:to-pink-600/20',
      border: 'border-red-200/50 dark:border-red-800/50',
      icon: 'text-red-500 dark:text-red-400',
      actionBg: 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
    },
    warning: {
      gradient: 'from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20',
      border: 'border-amber-200/50 dark:border-amber-800/50',
      icon: 'text-amber-500 dark:text-amber-400',
      actionBg: 'bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700',
    },
    info: {
      gradient: 'from-blue-500/20 to-indigo-500/20 dark:from-blue-600/20 dark:to-indigo-600/20',
      border: 'border-blue-200/50 dark:border-blue-800/50',
      icon: 'text-blue-500 dark:text-blue-400',
      actionBg: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
    },
  };

  const styles = severityStyles[error.severity];

  // Animation entrance effect
  useEffect(() => {
    // Small delay for the entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // Auto-hide functionality
  useEffect(() => {
    if (error.autoHide && error.autoHideDelay) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, error.autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [error.autoHide, error.autoHideDelay]);

  const handleDismiss = () => {
    setIsExiting(true);
    // Wait for exit animation to complete
    setTimeout(() => {
      onDismiss();
    }, 300);
  };

  // Icon based on category
  const CategoryIcon = () => {
    switch (error.category) {
      case 'database':
        return <AlertCircle className="w-5 h-5" />;
      case 'network':
        return <RefreshCw className="w-5 h-5" />;
      case 'auth':
        return <ExternalLink className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-md w-full transform transition-all duration-300 ease-premium ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${isExiting ? 'translate-y-4 opacity-0' : ''}`}
    >
      <div
        className={`bg-gradient-to-r ${styles.gradient} backdrop-blur-lg rounded-xl border ${styles.border} shadow-premium-lg overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 ${styles.icon}`}>
              <CategoryIcon />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium text-light-text dark:text-dark-text mb-1">
                  {getCategoryTitle(error.category)}
                </h3>
                {error.code && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-light-bg/50 dark:bg-dark-bg/50 text-light-text-secondary dark:text-dark-text-secondary">
                    {error.code}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                {error.message}
              </p>
              
              {error.action && (
                <button
                  onClick={error.action.onClick}
                  className={`mt-3 px-3 py-1.5 text-xs font-medium text-white rounded-lg ${styles.actionBg} transition-colors shadow-sm`}
                >
                  {error.action.label}
                </button>
              )}
            </div>
            
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 rounded-full text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bg/50 dark:hover:bg-dark-bg/50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get a human-readable title for error categories
const getCategoryTitle = (category: ErrorCategory): string => {
  switch (category) {
    case 'database':
      return 'Database Error';
    case 'network':
      return 'Network Error';
    case 'auth':
      return 'Authentication Error';
    default:
      return 'Error';
  }
};

export default ErrorNotification;

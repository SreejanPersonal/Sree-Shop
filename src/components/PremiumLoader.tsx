import React from 'react';

interface PremiumLoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PremiumLoader: React.FC<PremiumLoaderProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: {
      container: 'w-12 h-12',
      inner: 'w-10 h-10',
      spinner: 'w-8 h-8 border-2',
      text: 'text-xs mt-2'
    },
    md: {
      container: 'w-16 h-16',
      inner: 'w-14 h-14',
      spinner: 'w-11 h-11 border-2',
      text: 'text-sm mt-3'
    },
    lg: {
      container: 'w-24 h-24',
      inner: 'w-22 h-22',
      spinner: 'w-18 h-18 border-3',
      text: 'text-base mt-4'
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Ambient glow effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/30 to-light-accent-500/30 dark:from-dark-primary-400/30 dark:to-dark-accent-400/30 rounded-full blur-xl opacity-70 scale-150 animate-pulse"></div>
        
        {/* Gradient ring */}
        <div className={`relative ${classes.container} p-1 rounded-full bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 animate-premium-gradient bg-[size:400%_400%]`}>
          {/* Inner circle */}
          <div className={`${classes.inner} rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center`}>
            {/* Spinning element */}
            <div className={`${classes.spinner} border-light-primary-100 dark:border-dark-primary-800 rounded-full border-t-light-primary-500 dark:border-t-dark-primary-400 border-r-light-primary-400/60 dark:border-r-dark-primary-500/60 animate-spin`}></div>
          </div>
        </div>
      </div>
      
      {/* Text with gradient */}
      {message && (
        <div className={`${classes.text} font-medium bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent animate-premium-gradient bg-[size:400%_400%]`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default PremiumLoader;

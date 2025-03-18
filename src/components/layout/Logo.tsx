
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/50 to-light-accent-500/50 dark:from-dark-primary-400/50 dark:to-dark-accent-400/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150"></div>
        
        <div className="relative p-0.5 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400">
          <div className="relative p-2.5 rounded-[10px] bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 rounded-lg animate-pulse"></div>
              <Sparkles className="w-6 h-6 relative z-10 text-white dark:text-white/90" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent">
          Sree.shop
        </span>
        <span className="text-[10px] text-light-text-tertiary dark:text-dark-text-tertiary leading-none">
          Unlimited AI Power
        </span>
      </div>
    </Link>
  );
};

export default Logo;

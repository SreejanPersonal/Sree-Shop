import React from 'react';
import { AlertCircle, Settings, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MaintenanceCardProps {
  className?: string;
  onLearnMoreClick: () => void;
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({ className, onLearnMoreClick }) => {
  return (
    <div className={`bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-lg rounded-2xl shadow-premium-2xl border border-amber-200/50 dark:border-amber-800/50 overflow-hidden animate-scale-fade ${className || ''}`}>
      <div className="p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-400/20 flex items-center justify-center mb-6">
          <Settings className="w-8 h-8 text-amber-500 dark:text-amber-400" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-3">
            Stable API Under Maintenance
          </h3>
          
          <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-lg mb-6">
            We're currently performing maintenance on our stable API service. It will be back online in the next 2-3 days. In the meantime, you can use our beta API which provides all the same functionality.
          </p>
          
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-400/10 dark:to-orange-400/10 rounded-xl border border-amber-200/30 dark:border-amber-800/30 p-4 mb-6 w-full max-w-md">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                  The beta API includes all the features of our stable API, plus some experimental capabilities we're testing.
                </p>
              </div>
            </div>
          </div>
          
          <Link
            to="/beta-api-keys"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 ease-premium relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-500 dark:to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 shadow-premium-lg hover:shadow-premium-xl"
          >
            <div className="absolute inset-0 bg-gradient-premium-shine opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Create Beta API Key</span>
            </div>
          </Link>
          
          <button
            onClick={onLearnMoreClick}
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors group"
          >
            <span>Learn more about the beta API</span>
            <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;

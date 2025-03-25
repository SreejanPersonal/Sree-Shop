import React from 'react';
import { AlertCircle, Settings, Sparkles } from 'lucide-react';

const BetaMaintenanceCard: React.FC = () => {
  // Calculate remaining time string
  const getTimeString = () => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(9, 0, 0, 0); // Set to 9 AM
    
    // If current time is past 9 AM, set target to next day
    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }
    
    return targetTime.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <div className="bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-lg rounded-2xl shadow-premium-2xl border border-purple-200/50 dark:border-purple-800/50 overflow-hidden animate-scale-fade">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20 flex items-center justify-center mb-6">
            <Settings className="w-8 h-8 text-purple-500 dark:text-purple-400" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-3">
            Beta API Under Maintenance
          </h3>
          
          <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-lg mb-6">
            We're currently performing maintenance on our beta API service. It will be available at {getTimeString()} IST.
          </p>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 rounded-xl border border-purple-200/30 dark:border-purple-800/30 p-4 mb-6 w-full max-w-md">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                  During this maintenance period, we're implementing important updates to enhance the beta API's performance and reliability.
                </p>
              </div>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary">
            <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            <span>Please check back at 25th March 2025 - {getTimeString()} IST</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaMaintenanceCard;

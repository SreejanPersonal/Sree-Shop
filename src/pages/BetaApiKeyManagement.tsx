import React from 'react';
import { Sparkles } from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';
import BetaMaintenanceCard from '../components/BetaMaintenanceCard';

const BetaApiKeyManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-down-fade">
          <h1 className="text-4xl font-bold bg-gradient-premium from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 bg-premium bg-[size:400%_400%] animate-premium-gradient">
            Beta API Key Management
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              You're part of our exclusive beta program!
            </p>
          </div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Create and manage your beta API keys securely. Currently, we support one beta API key per account.
          </p>
        </div>

        <div className="space-y-8">
          <ErrorBoundary>
            <BetaMaintenanceCard />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default BetaApiKeyManagement;

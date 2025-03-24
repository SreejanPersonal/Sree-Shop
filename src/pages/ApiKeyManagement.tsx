import React, { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import MaintenanceCard from '../components/MaintenanceCard';
import BetaAccessModal from '../components/BetaAccessModal';

const ApiKeyManagement: React.FC = () => {
  const [showBetaModal, setShowBetaModal] = useState(false);
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-down-fade">
          <h1 className="text-4xl font-bold bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent mb-4 bg-premium bg-[size:400%_400%] animate-premium-gradient">
            API Key Management
          </h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Create and manage your API keys securely. Currently, we support one API key per account.
          </p>
        </div>

        <div className="space-y-8">
          {/* Maintenance Card */}
          <ErrorBoundary>
            <MaintenanceCard onLearnMoreClick={() => setShowBetaModal(true)} />
          </ErrorBoundary>
          
          {/* Beta Access Modal */}
          <BetaAccessModal isOpen={showBetaModal} onClose={() => setShowBetaModal(false)} />
        </div>
      </div>
    </div>
  );
};

export default ApiKeyManagement;

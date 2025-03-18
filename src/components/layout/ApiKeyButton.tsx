
import React from 'react';
import { Key } from 'lucide-react';

interface ApiKeyButtonProps {
  onClick: () => void;
}

const ApiKeyButton: React.FC<ApiKeyButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 text-white rounded-lg hover:from-light-primary-600 hover:to-light-accent-600 dark:hover:from-dark-primary-600 dark:hover:to-dark-accent-600 transition-all shadow-premium-lg hover:shadow-premium-xl flex items-center gap-2"
    >
      <Key className="w-4 h-4" />
      Get API Key
    </button>
  );
};

export default ApiKeyButton;

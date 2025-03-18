
import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Database, BookOpen, Activity, Youtube, Key } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openApiKeyModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, openApiKeyModal }) => {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden py-4 border-t border-light-primary-100 dark:border-dark-primary-700">
      <div className="flex flex-col gap-4">
        <Link
          to="/pricing"
          className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
          onClick={onClose}
        >
          <CreditCard className="w-4 h-4" />
          Pricing
        </Link>
        <Link
          to="/models"
          className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
          onClick={onClose}
        >
          <Database className="w-4 h-4" />
          Models
        </Link>
        <Link
          to="/docs"
          className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
          onClick={onClose}
        >
          <BookOpen className="w-4 h-4" />
          Documentation
        </Link>
        <Link
          to="/status"
          className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
          onClick={onClose}
        >
          <Activity className="w-4 h-4" />
          Status
        </Link>
        <Link
          to="/content"
          className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
          onClick={onClose}
        >
          <Youtube className="w-4 h-4" />
          Content Hub
        </Link>
        <button
          onClick={() => {
            openApiKeyModal();
            onClose();
          }}
          className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
        >
          <Key className="w-4 h-4" />
          Get API Key
        </button>
      </div>
    </nav>
  );
};

export default MobileMenu;

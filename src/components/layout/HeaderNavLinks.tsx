
import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Database, BookOpen, Activity, Youtube } from 'lucide-react';

const HeaderNavLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      <Link
        to="/pricing"
        className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
      >
        <CreditCard className="w-4 h-4" />
        Pricing
      </Link>
      <Link
        to="/models"
        className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
      >
        <Database className="w-4 h-4" />
        Models
      </Link>
      <Link
        to="/docs"
        className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
      >
        <BookOpen className="w-4 h-4" />
        Documentation
      </Link>
      <Link
        to="/status"
        className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
      >
        <Activity className="w-4 h-4" />
        Status
      </Link>
      <Link
        to="/content"
        className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
      >
        <Youtube className="w-4 h-4" />
        Content Hub
      </Link>
    </div>
  );
};

export default HeaderNavLinks;

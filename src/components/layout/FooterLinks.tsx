
import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 md:justify-end">
      <Link to="/about" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
        About
      </Link>
      <Link to="/terms" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
        Terms & Conditions
      </Link>
      <Link to="/privacy" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
        Privacy Policy
      </Link>
      <Link to="/refund-policy" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
        Refund Policy
      </Link>
    </div>
  );
};

export default FooterLinks;

import React, { useState } from 'react';
import { Link, Check } from 'lucide-react';

interface SectionLinkProps {
  id: string;
  className?: string;
}

const SectionLink: React.FC<SectionLinkProps> = ({ id, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const baseUrl = window.location.origin;
    const path = window.location.pathname;
    const url = `${baseUrl}${path}#${id}`;
    
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copyLink}
      className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${className}`}
      aria-label="Copy link to this section"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Link className="w-4 h-4" />
          <span>Copy link</span>
        </>
      )}
    </button>
  );
};

export default SectionLink;


import React, { useState } from 'react';
import { Filter, ChevronDown, Check } from 'lucide-react';

interface ProviderDropdownProps {
  value: string | null;
  onChange: (value: string | null) => void;
  providers: string[];
}

const ProviderDropdown: React.FC<ProviderDropdownProps> = ({ value, onChange, providers }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between gap-2 group"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium">
            {value || 'All Providers'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg backdrop-blur-sm">
          <button
            onClick={() => {
              onChange(null);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {!value && <Check className="w-4 h-4 text-blue-500" />}
            </span>
            All Providers
          </button>
          {providers.map(provider => (
            <button
              key={provider}
              onClick={() => {
                onChange(provider);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                {value === provider && <Check className="w-4 h-4 text-blue-500" />}
              </span>
              {provider}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProviderDropdown;

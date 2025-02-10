import React from 'react';
import { X, Sparkles, Rocket, ArrowRight } from 'lucide-react';

interface MainWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainWebsiteModal: React.FC<MainWebsiteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-xl">
        {/* Header */}
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold">Coming Soon</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6">
              <Sparkles className="w-12 h-12 text-blue-500/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 transform rotate-180">
              <Sparkles className="w-12 h-12 text-indigo-500/20" />
            </div>
            
            {/* Main message */}
            <div className="relative space-y-4">
              <p className="text-lg">
                We're building something incredible! Our main website will be a revolutionary platform offering:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Enhanced free tier with more capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>OpenAI-level features at no cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Beautiful, intuitive interface</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our mission is to provide the same experience that OpenAI offers for $200, completely free for everyone.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            Can't wait to show you
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainWebsiteModal;
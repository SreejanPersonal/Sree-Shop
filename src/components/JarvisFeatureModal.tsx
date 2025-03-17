import React from 'react';
import { X, AlertCircle } from 'lucide-react';

interface JarvisFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JarvisFeatureModal: React.FC<JarvisFeatureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                <AlertCircle className="w-6 h-6" />
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
        <div className="p-6 space-y-4">
          <div className="relative">
            {/* Main message */}
            <div className="relative space-y-4">
              <p className="text-lg">
                Jarvis features are currently in development and will be available soon!
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our team is working hard to bring you an exceptional AI assistant experience. 
                Jarvis will include advanced capabilities like:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Natural language understanding and generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Personalized assistance and task automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Seamless integration with your workflow</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay tuned for updates! We'll notify you as soon as Jarvis features become available.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            I'll check back later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JarvisFeatureModal;

import React, { useState } from 'react';
import { X, MapPin, Eye, Bot, ArrowRight } from 'lucide-react';
import JarvisFeatureModal from './JarvisFeatureModal';

interface JarvisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JarvisModal: React.FC<JarvisModalProps> = ({ isOpen, onClose }) => {
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);

  if (!isOpen) return null;

  const handleRoadmapClick = () => {
    window.open('https://roadmap.jarvis.sree.shop/', '_blank');
  };

  const handleFeaturesClick = () => {
    setIsFeatureModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] shadow-xl mx-auto overflow-auto">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Jarvis AI Assistant</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Your personal AI companion</p>
                </div>
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
          <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg">
              Jarvis is our next-generation AI assistant designed to help you with a wide range of tasks. 
              Choose an option below to learn more:
            </p>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Roadmap Option */}
              <div 
                onClick={handleRoadmapClick}
                className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border border-cyan-100 dark:border-teal-800/30 hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500 text-white group-hover:bg-cyan-600 transition-colors">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">Jarvis Road Map</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm sm:text-base">
                  Explore our development roadmap and see what features are coming next for Jarvis.
                </p>
                <div className="flex justify-end">
                  <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-medium group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    View Roadmap
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Features Option */}
              <div 
                onClick={handleFeaturesClick}
                className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border border-teal-100 dark:border-emerald-800/30 hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-teal-500 text-white group-hover:bg-teal-600 transition-colors">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">See Jarvis Features</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm sm:text-base">
                  Discover the powerful capabilities and features that make Jarvis special.
                </p>
                <div className="flex justify-end">
                  <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                    Explore Features
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-1.5 sm:mb-2 text-gray-800 dark:text-gray-200 text-base sm:text-lg">Why Jarvis?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 text-sm sm:text-base">
                Jarvis is built to be more than just an assistant - it's designed to be an extension of your workflow, 
                understanding context and providing intelligent responses tailored to your needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Advanced natural language processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Seamless integration with your existing tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Personalized assistance that learns from your preferences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl">
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <JarvisFeatureModal 
        isOpen={isFeatureModalOpen} 
        onClose={() => setIsFeatureModalOpen(false)} 
      />
    </>
  );
};

export default JarvisModal;

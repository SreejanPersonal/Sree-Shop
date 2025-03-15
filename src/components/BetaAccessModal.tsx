
import React from 'react';
import { X, CheckCircle2, Circle, Sparkles, Zap, Gift } from 'lucide-react';

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaAccessModal: React.FC<BetaAccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "10 RPM Rate Limit",
      description: "Higher rate limits compared to free tier"
    },
    {
      icon: <Gift className="w-5 h-5 text-purple-500" />,
      title: "Free Access",
      description: "No cost during beta period"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      title: "32K Context Window",
      description: "Extended context for better responses"
    }
  ];

  const steps = [
    {
      title: 'Join Telegram Group',
      description: 'Join our community to get started',
      completed: false
    },
    {
      title: 'Use Beta Command',
      description: 'Type "/create_beta_key" in the group',
      completed: false
    },
    {
      title: 'Activate Beta Access',
      description: 'Follow bot instructions to activate',
      completed: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-xl">
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Join Beta Program</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Limited time opportunity</p>
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

        <div className="p-6 space-y-8">
          {/* Benefits Grid */}
          <div className="grid grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 text-center">
                <div className="flex justify-center mb-2">{benefit.icon}</div>
                <h3 className="text-sm font-medium mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  {step.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Beta Notice */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Beta access is completely free but available for a limited time only. Join now to secure your spot!
            </p>
          </div>
        </div>

        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl">
          <a
            href="https://t.me/devsdocode"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-center font-medium transition-colors"
          >
            Join Beta Program
          </a>
        </div>
      </div>
    </div>
  );
};

export default BetaAccessModal;

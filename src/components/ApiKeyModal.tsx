import React, { useState } from 'react';
import { X, CheckCircle2, Circle } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  completed: boolean;
}

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [steps, setSteps] = useState<Step[]>([
    {
      title: 'Join our Community',
      description: 'Join our Telegram group to get started',
      completed: false
    },
    {
      title: 'Use the Bot',
      description: 'Interact with DDC Support Bot in the group',
      completed: false
    },
    {
      title: 'Generate Key',
      description: 'Click "Create API Key" command',
      completed: false
    },
    {
      title: 'Stay Active',
      description: 'Remain in the group to maintain access',
      completed: false
    }
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-xl">
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Get Your API Key</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="aspect-video mb-6 bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

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
        </div>

        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl">
          <a
            href="https://t.me/devsdocode"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition-colors"
          >
            Join Telegram Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
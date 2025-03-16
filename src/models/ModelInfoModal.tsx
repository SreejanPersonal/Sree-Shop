
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  Rocket, 
  Zap, 
  Gauge, 
  Brain, 
  Info, 
  AlertCircle,
  X,
  ExternalLink,
  Image
} from 'lucide-react';

interface ModelInfoModalProps {
  model: string;
  provider: string;
  isPro: boolean;
  isBeta: boolean;
  onClose: () => void;
}

const ModelInfoModal: React.FC<ModelInfoModalProps> = ({ model, provider, isPro, isBeta, onClose }) => {
  const navigate = useNavigate();
  const isImageModel = model.toLowerCase().includes('flux');

  const handleViewDocs = () => {
    onClose(); // Close the modal first
    navigate('/docs'); // Then navigate to docs
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                isBeta 
                  ? isImageModel
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  : isPro 
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
              }`}>
                {isImageModel ? <Image className="w-5 h-5" /> : (isBeta ? <Rocket className="w-5 h-5" /> : isPro ? <Star className="w-5 h-5" /> : <Zap className="w-5 h-5" />)}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{model.split('/').pop()}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{provider}</p>
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
        <div className="p-4 space-y-4">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-1.5">
                <Gauge className="w-4 h-4 text-blue-500" />
                <h4 className="text-sm font-medium">Rate Limit</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isImageModel ? '5 IPM' : (isPro ? 'Unlimited' : isBeta ? '10 RPM' : '3 RPM')}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-1.5">
                {isImageModel ? (
                  <Image className="w-4 h-4 text-purple-500" />
                ) : (
                  <Brain className="w-4 h-4 text-purple-500" />
                )}
                <h4 className="text-sm font-medium">{isImageModel ? 'Type' : 'Context Window'}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isImageModel ? 'Image Generation' : (isPro ? 'Original' : isBeta ? '32K tokens' : '4K tokens')}
              </p>
            </div>
          </div>

          {/* Full Model Name */}
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center gap-2 mb-1.5">
              <Info className="w-4 h-4 text-blue-500" />
              <h4 className="text-sm font-medium">Full Model Name</h4>
            </div>
            <div className="font-mono text-sm break-all">
              {model}
            </div>
          </div>

          {/* Beta Notice */}
          {isBeta && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/30">
              <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Beta model available for free for a limited time
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-xl">
          <button
            onClick={handleViewDocs}
            className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            View Documentation
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelInfoModal;

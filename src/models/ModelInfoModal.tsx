import React, { useEffect } from 'react';
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
  Image,
  Cpu,
  Clock,
  Workflow,
  Sparkles,
  ShieldCheck,
  Server
} from 'lucide-react';
import modelProviderMapping from '../utility/models/modelProviderMapping.json';

// Define type for the modelProviderMapping
type ModelProviderMappingType = {
  [key: string]: string[];
};

// Cast the imported JSON to the defined type
const typedModelProviderMapping = modelProviderMapping as ModelProviderMappingType;

interface ModelInfoModalProps {
  model: string;
  provider: string;
  isPro: boolean;
  isBeta: boolean;
  isImage?: boolean;
  onClose: () => void;
}

const ModelInfoModal: React.FC<ModelInfoModalProps> = ({ model, provider, isPro, isBeta, isImage, onClose }) => {
  const navigate = useNavigate();

  const handleViewDocs = () => {
    onClose(); // Close the modal first
    navigate('/docs'); // Then navigate to docs
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Get tier-specific styling
  const getTierStyles = () => {
    if (isBeta) {
      return {
        gradientHeader: "bg-gradient-to-r from-yellow-100 to-amber-200 dark:from-yellow-900/40 dark:to-amber-800/40",
        borderColor: "border-yellow-300 dark:border-yellow-700",
        iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
        iconColor: "text-yellow-700 dark:text-yellow-400",
        accentColor: "text-yellow-600 dark:text-yellow-400",
        accentBg: "bg-yellow-50 dark:bg-yellow-900/20",
        noticeBg: "bg-yellow-50 dark:bg-yellow-900/30",
        noticeText: "text-yellow-800 dark:text-yellow-200",
        buttonBg: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600"
      };
    } else if (isPro) {
      return {
        gradientHeader: "bg-gradient-to-r from-purple-100 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-800/40",
        borderColor: "border-purple-300 dark:border-purple-700",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-700 dark:text-purple-400",
        accentColor: "text-purple-600 dark:text-purple-400",
        accentBg: "bg-purple-50 dark:bg-purple-900/20",
        noticeBg: "bg-purple-50 dark:bg-purple-900/30",
        noticeText: "text-purple-800 dark:text-purple-200",
        buttonBg: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
      };
    } else {
      return {
        gradientHeader: "bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/40 dark:to-emerald-800/40",
        borderColor: "border-green-300 dark:border-green-700",
        iconBg: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-700 dark:text-green-400",
        accentColor: "text-green-600 dark:text-green-400",
        accentBg: "bg-green-50 dark:bg-green-900/20",
        noticeBg: "bg-green-50 dark:bg-green-900/30",
        noticeText: "text-green-800 dark:text-green-200",
        buttonBg: "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
      };
    }
  };

  const styles = getTierStyles();
  const modelName = model.split('/').pop() || model;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-lg shadow-2xl border-2 dark:border-gray-700 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className={`${styles.gradientHeader} p-4 border-b ${styles.borderColor}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${styles.iconBg} ${styles.iconColor} shadow-sm`}>
                {isBeta ? <Rocket className="w-6 h-6" /> : isPro ? <Star className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{modelName}</h3>
                  <div className={`px-2 py-0.5 text-xs font-semibold rounded-full ${styles.accentBg} ${styles.accentColor}`}>
                    {isBeta ? 'Beta' : isPro ? 'Pro' : 'Free'}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{provider}</p>
                  {isImage && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded text-xs">
                      <Image className="w-3 h-3" />
                      Image
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Model Type Banner */}
          {isImage && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-2">
                <Image className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-blue-700 dark:text-blue-300">Image Generation Model</span>
              </div>
              {isBeta && (
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-800/40 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-blue-700 dark:text-blue-300" />
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Limited Time</span>
                </div>
              )}
            </div>
          )}

          {/* Features Grid - Enhanced with more info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-4 h-4 text-blue-500" />
                <h4 className="text-sm font-medium">Rate Limit</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {isImage ? '5 IPM' : (isPro ? 'Unlimited' : isBeta ? '10 RPM' : '3 RPM')}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {isImage ? 'Images per minute' : 'Requests per minute'}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                {isImage ? (
                  <Image className="w-4 h-4 text-purple-500" />
                ) : (
                  <Brain className="w-4 h-4 text-purple-500" />
                )}
                <h4 className="text-sm font-medium">{isImage ? 'Type' : 'Context Window'}</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {isImage ? 'Image' : (isPro ? 'Original' : isBeta ? '32K tokens' : '4K tokens')}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {isImage ? 'Output format' : 'Maximum input size'}
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4 text-indigo-500" />
                <h4 className="text-sm font-medium">Priority</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {isPro ? 'High' : isBeta ? 'Medium' : 'Normal'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Request processing priority
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <h4 className="text-sm font-medium">Response Time</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {isPro ? 'Fast' : isBeta ? 'Medium' : 'Standard'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Typical processing speed
              </p>
            </div>
          </div>

          {/* Available Providers Section */}
          {isBeta && typedModelProviderMapping[model] && typedModelProviderMapping[model].length > 0 && (
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <h4 className="text-sm font-medium">Available Providers</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {typedModelProviderMapping[model].map((provider: string, index: number) => (
                  <div 
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800/50 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-300">{provider}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Model Name */}
          <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-blue-500" />
              <h4 className="text-sm font-medium">Full Model Name</h4>
            </div>
            <div className="font-mono text-sm break-all bg-gray-50 dark:bg-gray-900/50 p-2 rounded border border-gray-200 dark:border-gray-700">
              {model}
            </div>
          </div>

          {/* Beta Notice */}
          {isBeta && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800/50">
              <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Beta Access
                </p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  This model is available for free for a limited time during our beta testing phase.
                </p>
              </div>
            </div>
          )}

          {/* Pro Notice */}
          {isPro && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50">
              <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                  Pro Access
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                  This premium model is available exclusively to Pro tier subscribers.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-xl">
          <button
            onClick={handleViewDocs}
            className={`block w-full py-2.5 px-4 text-white rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center gap-2
              ${isBeta 
                ? 'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600' 
                : isPro 
                  ? 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600'
                  : 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600'
              }`}
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

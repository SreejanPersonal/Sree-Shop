
import React from 'react';
import { Gauge, Brain, Workflow, Rocket, Star, Zap } from 'lucide-react';

interface ModelCardProps {
  model: string;
  isPro: boolean;
  isBeta: boolean;
  provider: string;
  onClick: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, isPro, isBeta, provider, onClick }) => {
  const modelName = model.split('/').pop() || model;

  const features = [
    {
      name: 'RPM',
      value: isPro ? 'Unlimited' : isBeta ? '10 RPM' : '3 RPM',
      icon: <Gauge className="w-3.5 h-3.5" />
    },
    {
      name: 'Context',
      value: isPro ? 'Original' : isBeta ? '32K' : '4K',
      icon: <Brain className="w-3.5 h-3.5" />
    },
    {
      name: 'Priority',
      value: isPro ? 'High' : isBeta ? 'Medium' : 'Normal',
      icon: <Workflow className="w-3.5 h-3.5" />
    }
  ];

  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left bg-white dark:bg-gray-800 rounded-lg p-3 border transition-all duration-300 hover:shadow-lg ${
        isBeta 
          ? 'border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600'
          : isPro 
            ? 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600'
            : 'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className={`p-1.5 rounded-md ${
            isBeta 
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
              : isPro 
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
          }`}>
            {isBeta ? <Rocket className="w-4 h-4" /> : isPro ? <Star className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-sm truncate" title={modelName}>
              {modelName}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {provider}
            </p>
          </div>
        </div>
        <div className={`px-2 py-1 text-[10px] font-medium rounded-full ${
          isBeta 
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
            : isPro 
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
              : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        }`}>
          {isBeta ? 'Beta' : isPro ? 'Pro' : 'Free'}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-1.5 rounded-md bg-gray-50 dark:bg-gray-900/50">
            <div className={`mb-1 ${
              isBeta 
                ? 'text-yellow-600 dark:text-yellow-400'
                : isPro 
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-green-600 dark:text-green-400'
            }`}>
              {feature.icon}
            </div>
            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
              {feature.value}
            </span>
          </div>
        ))}
      </div>
    </button>
  );
};

export default ModelCard;

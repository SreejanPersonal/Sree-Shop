
import React, { useState } from 'react';
import { Gauge, Brain, Workflow, ChevronDown, Image } from 'lucide-react';
import ModelFeature from './components/ModelFeature';
import ModelCardHeader from './components/ModelCardHeader';
import ImageModelIndicator from './components/ImageModelIndicator';

interface ModelCardProps {
  model: string;
  isPro: boolean;
  isBeta: boolean;
  provider: string;
  onClick: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, isPro, isBeta, provider, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const modelName = model.split('/').pop() || model;
  const isImageModel = model.includes("flux-");

  const features = isImageModel 
    ? [
        {
          name: 'RPM',
          value: isBeta ? '5 IPM' : isPro ? 'Unlimited' : '3 RPM',
          icon: <Gauge className="w-3.5 h-3.5" />
        },
        {
          name: 'Type',
          value: 'Image',
          icon: <Image className="w-3.5 h-3.5" />
        },
        {
          name: 'Priority',
          value: isPro ? 'High' : isBeta ? 'Medium' : 'Normal',
          icon: <Workflow className="w-3.5 h-3.5" />
        }
      ] 
    : [
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

  // Get tier-specific styling
  const getTierStyles = () => {
    if (isBeta) {
      return {
        gradientHeader: "bg-gradient-to-r from-yellow-100 to-amber-200 dark:from-yellow-900/40 dark:to-amber-800/40",
        borderColor: "border-yellow-300 dark:border-yellow-700",
        hoverBorderColor: "group-hover:border-yellow-400 dark:group-hover:border-yellow-600",
        shadowColor: "group-hover:shadow-yellow-200/50 dark:group-hover:shadow-yellow-900/30",
        iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
        iconColor: "text-yellow-700 dark:text-yellow-400",
        badgeBg: "bg-yellow-100 dark:bg-yellow-900/40",
        badgeText: "text-yellow-800 dark:text-yellow-400",
        featureIconColor: "text-yellow-600 dark:text-yellow-400",
        accentColor: "bg-yellow-50 dark:bg-yellow-900/20"
      };
    } else if (isPro) {
      return {
        gradientHeader: "bg-gradient-to-r from-purple-100 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-800/40",
        borderColor: "border-purple-300 dark:border-purple-700",
        hoverBorderColor: "group-hover:border-purple-400 dark:group-hover:border-purple-600",
        shadowColor: "group-hover:shadow-purple-200/50 dark:group-hover:shadow-purple-900/30",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-700 dark:text-purple-400",
        badgeBg: "bg-purple-100 dark:bg-purple-900/40",
        badgeText: "text-purple-800 dark:text-purple-400",
        featureIconColor: "text-purple-600 dark:text-purple-400",
        accentColor: "bg-purple-50 dark:bg-purple-900/20"
      };
    } else {
      return {
        gradientHeader: "bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/40 dark:to-emerald-800/40",
        borderColor: "border-green-300 dark:border-green-700",
        hoverBorderColor: "group-hover:border-green-400 dark:group-hover:border-green-600",
        shadowColor: "group-hover:shadow-green-200/50 dark:group-hover:shadow-green-900/30",
        iconBg: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-700 dark:text-green-400",
        badgeBg: "bg-green-100 dark:bg-green-900/40",
        badgeText: "text-green-800 dark:text-green-400",
        featureIconColor: "text-green-600 dark:text-green-400",
        accentColor: "bg-green-50 dark:bg-green-900/20"
      };
    }
  };

  const styles = getTierStyles();

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative w-full text-left bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
        border-2 ${styles.borderColor} ${styles.hoverBorderColor} 
        transition-all duration-300 transform hover:-translate-y-1 
        shadow-sm ${styles.shadowColor} hover:shadow-xl`}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className={`absolute transform rotate-45 translate-x-4 -translate-y-1 w-16 h-3 ${
          isBeta ? 'bg-yellow-300 dark:bg-yellow-700' : 
          isPro ? 'bg-purple-300 dark:bg-purple-700' : 
          'bg-green-300 dark:bg-green-700'
        }`}></div>
      </div>
      
      {/* Header with gradient */}
      <ModelCardHeader 
        modelName={modelName}
        provider={provider}
        isPro={isPro}
        isBeta={isBeta}
        isImageModel={isImageModel}
        styles={styles}
      />

      {/* Content area with shadow separation */}
      <div className="px-3 pb-3 pt-1">
        {/* Model type indicator */}
        {isImageModel && (
          <ImageModelIndicator isBeta={isBeta} accentColor={styles.accentColor} />
        )}

        {/* Features with enhanced styling */}
        <div className="grid grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <ModelFeature
              key={index}
              icon={feature.icon}
              name={feature.name}
              value={feature.value}
              featureIconColor={styles.featureIconColor}
            />
          ))}
        </div>

        {/* Visual indicator for clickable expansion */}
        <div className="mt-2 flex justify-center">
          <div className={`text-gray-400 dark:text-gray-500 transition-transform duration-300 ${isHovered ? 'transform translate-y-0.5' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ModelCard;

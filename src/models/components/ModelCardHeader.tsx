
import React from 'react';
import { Rocket, Star, Zap, Image } from 'lucide-react';
import ModelCardBadge from './ModelCardBadge';

interface ModelCardHeaderProps {
  modelName: string;
  provider: string;
  isPro: boolean;
  isBeta: boolean;
  isImageModel: boolean;
  styles: any;
}

const ModelCardHeader: React.FC<ModelCardHeaderProps> = ({ 
  modelName, 
  provider, 
  isPro, 
  isBeta, 
  isImageModel, 
  styles 
}) => {
  return (
    <div className={`${styles.gradientHeader} px-3 pt-3 pb-2 mb-1`}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className={`p-1.5 rounded-md ${styles.iconBg} ${styles.iconColor} shadow-sm`}>
            {isBeta ? <Rocket className="w-4 h-4" /> : isPro ? <Star className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-sm truncate" title={modelName}>
              {modelName}
            </h3>
            <div className="flex items-center gap-1">
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                {provider}
              </p>
              {isImageModel && (
                <span className="inline-flex items-center">
                  <Image className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                </span>
              )}
            </div>
          </div>
        </div>
        <ModelCardBadge 
          text={isBeta ? 'Beta' : isPro ? 'Pro' : 'Free'} 
          badgeBg={styles.badgeBg} 
          badgeText={styles.badgeText} 
        />
      </div>
    </div>
  );
};

export default ModelCardHeader;

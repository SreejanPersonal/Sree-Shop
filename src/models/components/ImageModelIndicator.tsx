
import React from 'react';
import { Image, Sparkles } from 'lucide-react';

interface ImageModelIndicatorProps {
  isBeta: boolean;
  accentColor: string;
}

const ImageModelIndicator: React.FC<ImageModelIndicatorProps> = ({ isBeta, accentColor }) => {
  return (
    <div className="mb-2 flex items-center gap-1.5">
      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${accentColor}`}>
        <Image className="w-3 h-3" />
        <span>Image Generation</span>
      </div>
      {isBeta && (
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
          <Sparkles className="w-3 h-3" />
          <span>Limited Time</span>
        </div>
      )}
    </div>
  );
};

export default ImageModelIndicator;

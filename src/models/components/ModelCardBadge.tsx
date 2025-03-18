
import React from 'react';

interface ModelCardBadgeProps {
  text: string;
  badgeBg: string;
  badgeText: string;
}

const ModelCardBadge: React.FC<ModelCardBadgeProps> = ({ text, badgeBg, badgeText }) => {
  return (
    <div className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${badgeBg} ${badgeText} shadow-sm`}>
      {text}
    </div>
  );
};

export default ModelCardBadge;

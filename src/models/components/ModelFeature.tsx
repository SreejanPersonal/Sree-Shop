
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ModelFeatureProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  featureIconColor: string;
}

const ModelFeature: React.FC<ModelFeatureProps> = ({ icon, name, value, featureIconColor }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-2 rounded-lg 
      bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700
      shadow-sm transition-all duration-200 group-hover:shadow group-hover:-translate-y-0.5`}
    >
      <div className={`mb-1 ${featureIconColor}`}>
        {icon}
      </div>
      <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">
        {name}
      </span>
      <span className="text-[10px] font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </span>
    </div>
  );
};

export default ModelFeature;

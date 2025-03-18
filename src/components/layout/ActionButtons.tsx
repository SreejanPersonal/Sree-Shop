
import React from 'react';
import { ExternalLink, Sparkles, Bot } from 'lucide-react';

interface ActionButtonsProps {
  buttonsOffset: number;
  onMainWebsiteClick: () => void;
  onBetaClick: () => void;
  onJarvisClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  buttonsOffset, 
  onMainWebsiteClick, 
  onBetaClick, 
  onJarvisClick 
}) => {
  return (
    <div 
      className="fixed right-6 z-40 transition-all duration-300 ease-in-out"
      style={{ 
        bottom: '1.5rem',
        transform: `translateY(-${buttonsOffset}px)`
      }}
    >
      <button
        onClick={onMainWebsiteClick}
        className="group relative mb-4 block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
        <div className="relative px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl text-white shadow-xl flex items-center gap-3 transform hover:scale-105 transition-all duration-300">
          <div className="p-1 bg-white/20 rounded-lg">
            <ExternalLink className="w-4 h-4" />
          </div>
          <span className="font-medium">Visit Main Website</span>
          <div className="absolute -top-1 -right-1 w-3 h-3">
            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </button>

      <button
        onClick={onBetaClick}
        className="group relative mb-4 block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
        <div className="relative px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white shadow-xl flex items-center gap-3 transform hover:scale-105 transition-all duration-300">
          <div className="p-1 bg-white/20 rounded-lg">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-medium">Join Beta Program</span>
          <div className="absolute -top-1 -right-1 w-3 h-3">
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </button>

      <button
        onClick={onJarvisClick}
        className="group relative block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
        <div className="relative px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 rounded-xl text-white shadow-xl flex items-center gap-3 transform hover:scale-105 transition-all duration-300" style={{ minWidth: '210px' }}>
          <div className="p-1 bg-white/20 rounded-lg">
            <Bot className="w-4 h-4" />
          </div>
          <span className="font-medium">Jarvis AI Assistant</span>
          <div className="absolute -top-1 -right-1 w-3 h-3">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ActionButtons;

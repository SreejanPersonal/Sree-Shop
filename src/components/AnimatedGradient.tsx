
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[100px] opacity-20 animate-float blob-animation" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[100px] opacity-20 animate-float blob-animation" style={{ animationDelay: '-5s' }} />
    </div>
  );
};

export default AnimatedGradient;

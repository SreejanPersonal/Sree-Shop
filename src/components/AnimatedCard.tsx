
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  highlightOnHover?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className,
  highlightOnHover = true
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!highlightOnHover) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl transition-all duration-300',
        isHovering && highlightOnHover && 'shadow-md',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && highlightOnHover && (
        <div 
          className="absolute inset-0 opacity-[0.07] bg-white blur-xl pointer-events-none" 
          style={{ 
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,100,255,0.15), transparent 40%)`,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      {children}
    </div>
  );
};

export default AnimatedCard;

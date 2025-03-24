import React, { useState, useEffect, useRef } from 'react';
import { X, LogIn, Loader2, Sparkles, Shield, Zap, Smartphone } from 'lucide-react';
import AuthErrorHandler, { AuthErrorType } from './AuthErrorHandler';

interface GoogleSignInPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => Promise<void>;
}

const GoogleSignInPopup: React.FC<GoogleSignInPopupProps> = ({
  isOpen,
  onClose,
  onSignIn,
}) => {
  // All hooks must be at the top level of the component
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthErrorType | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await onSignIn();
      onClose();
    } catch (error) {
      console.error('Sign in error:', error);
      
      // Determine error type
      if (error instanceof Error) {
        if (error.message.includes('popup')) {
          setError('popup_blocked');
        } else if (error.message.includes('network')) {
          setError('network_error');
        } else if (error.message.includes('cancelled')) {
          setError('user_cancelled');
        } else if (error.message.includes('already')) {
          setError('already_signed_in');
        } else {
          setError('general_error');
        }
      } else {
        setError('general_error');
      }
    } finally {
      setLoading(false);
    }
  };
  
  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
  };
  
  // Particle animation effect
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Initialize particles
    const colors = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981'];
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with enhanced blur */}
      <div 
        className="absolute inset-0 backdrop-blur-xl bg-light-bg/20 dark:bg-dark-bg/20" 
        onClick={onClose}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)'
        }}
      />
      
      <div 
        className="relative w-full max-w-md transform transition-all duration-500 scale-100"
        onMouseMove={handleMouseMove}
      >
        {/* Enhanced premium outer glow with pulsating effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-blue-500/30 dark:from-purple-500/30 dark:via-pink-400/30 dark:to-blue-400/30 rounded-2xl blur-xl opacity-80" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-pink-500/20 dark:from-blue-400/20 dark:via-purple-500/20 dark:to-pink-400/20 rounded-2xl blur-md opacity-70" />
        
        {/* Main container with enhanced glass effect */}
        <div className="relative bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-dark-primary-700/30 overflow-hidden">
          {/* Particle animation canvas */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 pointer-events-none opacity-30"
          />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />
          
          {/* Enhanced Header with better typography and spacing */}
          <div className="relative p-8 border-b border-light-primary-200/30 dark:border-dark-primary-700/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Welcome to Sree.shop
                  </h2>
                </div>
                <p className="mt-1 text-light-text-primary/90 dark:text-dark-text-primary/90 font-medium tracking-wide">
                  Your gateway to unlimited AI power
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-light-bg-secondary/50 dark:bg-dark-bg-tertiary/50 hover:bg-light-bg-secondary/80 dark:hover:bg-dark-bg-tertiary/80 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <X className="w-5 h-5 text-light-text-primary dark:text-dark-text-primary opacity-80 group-hover:opacity-100 transition-opacity group-hover:rotate-90 transform duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Content with better visual hierarchy */}
          <div className="p-8 space-y-7">
            <div className="space-y-5">
              {/* Feature highlights with improved visual design */}
              <div className="bg-gradient-to-br from-light-bg-secondary/80 to-light-bg-secondary/40 dark:from-dark-bg/80 dark:to-dark-bg/40 rounded-xl p-5 border border-light-primary-200/30 dark:border-dark-primary-700/30 shadow-inner">
                <p className="text-light-text-primary dark:text-dark-text-primary font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  <span>Sign in to unlock:</span>
                </p>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-light-text-primary dark:text-dark-text-primary group transition-all duration-300 hover:translate-x-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    </div>
                    <span className="font-medium">Create and manage API keys</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-light-text-primary dark:text-dark-text-primary group transition-all duration-300 hover:translate-x-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 dark:from-pink-400/20 dark:to-purple-400/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                    </div>
                    <span className="font-medium">Access premium features</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-light-text-primary dark:text-dark-text-primary group transition-all duration-300 hover:translate-x-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-400/20 dark:to-indigo-400/20 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="font-medium">Sync across devices</span>
                  </li>
                </ul>
              </div>

              {/* Error Handler */}
              {error && (
                <AuthErrorHandler
                  error={error}
                  onRetry={() => {
                    setError(null);
                    handleSignIn();
                  }}
                  onClose={() => setError(null)}
                />
              )}

              {/* Enhanced Sign In Button with interactive effects */}
              <button
                onClick={handleSignIn}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-500 dark:to-pink-500 text-white rounded-xl hover:from-purple-700 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(147, 51, 234, 0.3), 0 8px 10px -6px rgba(236, 72, 153, 0.2)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -skew-x-45 transition-opacity" />
                <div className="flex items-center justify-center gap-3">
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium tracking-wide">Continue with Google</span>
                    </>
                  )}
                </div>
              </button>

              {/* Enhanced footer text */}
              <p className="text-xs text-center text-light-text-primary/60 dark:text-dark-text-primary/60 font-medium">
                By signing in, you agree to our{' '}
                <a href="/terms" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignInPopup;


import React, { useEffect, useRef } from 'react';
import AnimatedGradient from './AnimatedGradient';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const words = ["GPT-4o", "AI Models", "Assistants", "Text-to-Speech"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let textElement = textRef.current;
    
    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (textElement) textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      } else {
        if (textElement) textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(() => type(), 1500); // Pause at end of word
          return;
        }
      }
      
      const typingSpeed = isDeleting ? 80 : 120;
      setTimeout(() => type(), typingSpeed);
    };
    
    type();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <AnimatedGradient />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-xs font-medium text-primary">OpenAI API Marketplace</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Unlock the power of{' '}
            <br className="hidden sm:block" />
            <span ref={textRef} className="text-primary"></span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8 text-balance">
            Integrate cutting-edge AI capabilities into your applications with our simple, reliable, and cost-effective API access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Get Started
            </a>
            <a href="#features" className="btn btn-outline btn-lg">
              Explore Features
            </a>
          </div>
          
          <div className="mt-12 md:mt-16">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 flex items-center">
                <div className="w-24 h-6 bg-foreground/80 rounded-md"></div>
              </div>
              <div className="h-8 flex items-center">
                <div className="w-28 h-6 bg-foreground/80 rounded-md"></div>
              </div>
              <div className="h-8 flex items-center">
                <div className="w-20 h-6 bg-foreground/80 rounded-md"></div>
              </div>
              <div className="h-8 flex items-center">
                <div className="w-26 h-6 bg-foreground/80 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#features"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/80 transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            className="animate-pulse-slow"
          >
            <path 
              d="M8 12L2.5 6.5L3.5 5.5L8 10L12.5 5.5L13.5 6.5L8 12Z" 
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

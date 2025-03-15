
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AI</span>
              </div>
              <span className="text-lg font-semibold">OpenAI Marketplace</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Providing access to cutting-edge AI models for developers and businesses.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 text-sm hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-white/70 text-sm hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/70 text-sm hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Data Processing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} OpenAI Marketplace. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-white/70 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

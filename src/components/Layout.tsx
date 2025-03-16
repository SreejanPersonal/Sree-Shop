import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Github, 
  Moon, 
  Sun, 
  Key, 
  Menu, 
  X, 
  Database, 
  Youtube, 
  Linkedin, 
  Instagram, 
  CreditCard, 
  Activity, 
  Sparkles, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import ApiKeyModal from './ApiKeyModal';
import ContactModal from './ContactModal';
import BetaAccessModal from './BetaAccessModal';
import MainWebsiteModal from './MainWebsiteModal';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMainWebsiteModalOpen, setIsMainWebsiteModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [buttonsOffset, setButtonsOffset] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const buffer = 20; // Space to maintain above footer

      if (footerTop < windowHeight) {
        const overlap = windowHeight - footerTop;
        setButtonsOffset(overlap + buffer);
      } else {
        setButtonsOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark');
  };

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/50 to-light-accent-500/50 dark:from-dark-primary-400/50 dark:to-dark-accent-400/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150"></div>
        
        <div className="relative p-0.5 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400">
          <div className="relative p-2.5 rounded-[10px] bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 rounded-lg animate-pulse"></div>
              <Sparkles className="w-6 h-6 relative z-10 text-white dark:text-white/90" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent">
          Sree.shop
        </span>
        <span className="text-[10px] text-light-text-tertiary dark:text-dark-text-tertiary leading-none">
          Unlimited AI Power
        </span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <header className="fixed w-full top-0 z-50 border-b border-light-primary-100 dark:border-dark-primary-800 backdrop-blur-premium bg-light-bg/50 dark:bg-dark-bg/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Link
                  to="/pricing"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <CreditCard className="w-4 h-4" />
                  Pricing
                </Link>
                <Link
                  to="/models"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <Database className="w-4 h-4" />
                  Models
                </Link>
                <Link
                  to="/docs"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </Link>
                <Link
                  to="/status"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <Activity className="w-4 h-4" />
                  Status
                </Link>
              </div>

              <button
                onClick={() => setIsApiKeyModalOpen(true)}
                className="px-4 py-2 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 text-white rounded-lg hover:from-light-primary-600 hover:to-light-accent-600 dark:hover:from-dark-primary-600 dark:hover:to-dark-accent-600 transition-all shadow-premium-lg hover:shadow-premium-xl flex items-center gap-2"
              >
                <Key className="w-4 h-4" />
                Get API Key
              </button>

              <div className="flex items-center gap-4 border-l border-light-primary-100 dark:border-dark-primary-700 pl-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href="https://github.com/SreejanPersonal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-light-primary-100 dark:border-dark-primary-700">
              <div className="flex flex-col gap-4">
                <Link
                  to="/pricing"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CreditCard className="w-4 h-4" />
                  Pricing
                </Link>
                <Link
                  to="/models"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Database className="w-4 h-4" />
                  Models
                </Link>
                <Link
                  to="/docs"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </Link>
                <Link
                  to="/status"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Activity className="w-4 h-4" />
                  Status
                </Link>
                <button
                  onClick={() => {
                    setIsApiKeyModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 flex items-center gap-1"
                >
                  <Key className="w-4 h-4" />
                  Get API Key
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-light-primary-100 dark:border-dark-primary-700 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-light-text-tertiary dark:text-dark-text-tertiary max-w-md">
                Access unlimited AI power with our API. Start building amazing applications with cutting-edge AI models.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://github.com/SreejanPersonal/ai4free-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-light-text dark:text-dark-text-tertiary dark:hover:text-dark-text transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-red-600 dark:text-dark-text-tertiary dark:hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-[#229ED9] dark:text-dark-text-tertiary dark:hover:text-[#229ED9] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/sree.shades_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-pink-600 dark:text-dark-text-tertiary dark:hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/developer-sreejan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-blue-600 dark:text-dark-text-tertiary dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end justify-between">
              <div className="flex flex-wrap gap-6 md:justify-end">
                <Link to="/about" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  About
                </Link>
                <Link to="/terms" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  Privacy Policy
                </Link>
              </div>

              <div className="mt-6 md:mt-0">
                <a
                  href="https://buymeacoffee.com/devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFDD00] hover:bg-[#FFDD00]/90 transition-colors shadow-premium-sm hover:shadow-premium-md"
                >
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Buy me a coffee"
                    className="h-4"
                  />
                  <span className="text-black font-semibold text-sm">Buy me a coffee</span>
                </a>
              </div>

              <p className="mt-6 text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                © {new Date().getFullYear()} Sree.shop. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div 
        className="fixed right-6 z-40 transition-all duration-300 ease-in-out"
        style={{ 
          bottom: '1.5rem',
          transform: `translateY(-${buttonsOffset}px)`
        }}
      >
        <button
          onClick={() => setIsMainWebsiteModalOpen(true)}
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
          onClick={() => setIsBetaModalOpen(true)}
          className="group relative block"
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
      </div>

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <MainWebsiteModal
        isOpen={isMainWebsiteModalOpen}
        onClose={() => setIsMainWebsiteModalOpen(false)}
      />
      <BetaAccessModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </div>
  );
}

export default Layout;

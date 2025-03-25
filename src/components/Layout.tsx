import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
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
  BookOpen,
  Bot,
  LogIn,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ContactModal from './ContactModal';
import BetaAccessModal from './BetaAccessModal';
import MainWebsiteModal from './MainWebsiteModal';
import JarvisModal from './JarvisModal';
import AuthAlert from './AuthAlert';
import GoogleSignInPopup from './GoogleSignInPopup';
import UserMenu from './UserMenu';

function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthAlert, setShowAuthAlert] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMainWebsiteModalOpen, setIsMainWebsiteModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isJarvisModalOpen, setIsJarvisModalOpen] = useState(false);
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
      const buffer = 20;

      if (footerTop < windowHeight) {
        const overlap = windowHeight - footerTop;
        setButtonsOffset(overlap + buffer);
      } else {
        setButtonsOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark');
  };

  const handleCreateApiKey = useCallback(() => {
    if (!user) {
      setShowAuthAlert(true);
      return;
    }
    navigate('/api-keys');
  }, [user, navigate]);

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/50 to-light-accent-500/50 dark:from-dark-primary-400/50 dark:to-dark-accent-400/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150"></div>
        <div className="relative p-0.5 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400">
          <div className="relative p-2.5 rounded-[10px] bg-light-bg dark:bg-dark-bg backdrop-blur-sm">
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
      <header className="fixed w-full top-0 z-50 border-b border-light-primary-100/50 dark:border-dark-primary-700/50 backdrop-blur-premium bg-light-bg/70 dark:bg-dark-bg/70">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Navigation */}
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
                <Link
                  to="/content"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <Youtube className="w-4 h-4" />
                  Content Hub
                </Link>
              </div>

              <div className="flex items-center gap-4">
                {user ? (
                  <button
                    onClick={handleCreateApiKey}
                    className="px-4 py-2 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 text-white rounded-lg hover:from-light-primary-600 hover:to-light-accent-600 dark:hover:from-dark-primary-600 dark:hover:to-dark-accent-600 transition-all shadow-premium-lg hover:shadow-premium-xl flex items-center gap-2"
                  >
                    <Key className="w-4 h-4" />
                    Create API Key
                  </button>
                ) : (
                  <button
                    onClick={() => setShowSignInPopup(true)}
                    className="px-4 py-2 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 text-white rounded-lg hover:from-light-primary-600 hover:to-light-accent-600 dark:hover:from-dark-primary-600 dark:hover:to-dark-accent-600 transition-all shadow-premium-lg hover:shadow-premium-xl flex items-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4 border-l border-light-primary-100/50 dark:border-dark-primary-700/50 pl-4">
                {user && <UserMenu user={user} />}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-light-bg/80 dark:bg-dark-bg-secondary/80 hover:bg-light-bg-secondary dark:hover:bg-dark-bg-tertiary transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href="https://github.com/SreejanPersonal/sree-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-light-bg/80 dark:bg-dark-bg-secondary/80 hover:bg-light-bg-secondary dark:hover:bg-dark-bg-tertiary transition-colors"
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
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      
      {/* Premium mobile menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-gradient-to-br from-light-bg to-light-bg-secondary dark:from-dark-bg dark:to-dark-bg-secondary shadow-2xl border-l border-light-primary-100/50 dark:border-dark-primary-700/50 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b border-light-primary-100/50 dark:border-dark-primary-700/50">
            <Logo />
            <button 
              className="p-2 rounded-full bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* User profile section when logged in */}
          {user && (
            <div className="p-4 border-b border-light-primary-100/50 dark:border-dark-primary-700/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-premium from-light-primary-500/30 to-light-accent-500/30 dark:from-dark-primary-400/30 dark:to-dark-accent-400/30 rounded-full blur opacity-80"></div>
                  <img
                    src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                    alt="Profile"
                    className="relative w-12 h-12 rounded-full border-2 border-light-primary-500/50 dark:border-dark-primary-400/50"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-light-text dark:text-dark-text truncate">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary truncate">
                    {user.email}
                  </p>
                </div>
                
                {/* Hidden UserMenu component for mobile */}
                <div className="hidden">
                  <UserMenu user={user} data-user-menu-mobile="true" />
                </div>
              </div>
              
              {/* Mobile avatar button */}
              <div className="mt-4 flex justify-center">
                <div className="relative inline-block">
                  <UserMenu user={user} isMobile={true} />
                </div>
              </div>
            </div>
          )}
          
          {/* Main navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              <Link
                to="/pricing"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <CreditCard className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Pricing</span>
              </Link>
              
              <Link
                to="/models"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <Database className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Models</span>
              </Link>
              
              <Link
                to="/docs"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <BookOpen className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Documentation</span>
              </Link>
              
              <Link
                to="/status"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <Activity className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Status</span>
              </Link>
              
              <Link
                to="/content"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <Youtube className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Content Hub</span>
              </Link>
            </div>
            
            <div className="mt-6 pt-6 border-t border-light-primary-100/50 dark:border-dark-primary-700/50">
              {user ? (
                <button
                  onClick={() => {
                    handleCreateApiKey();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 text-white hover:from-light-primary-600 hover:to-light-accent-600 dark:hover:from-dark-primary-600 dark:hover:to-dark-accent-600 transition-all shadow-premium-lg hover:shadow-premium-xl"
                >
                  <Key className="w-4 h-4" />
                  <span className="font-medium">Create API Key</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowSignInPopup(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-500 dark:to-dark-accent-500 text-white hover:from-light-primary-600 hover:to-light-accent-600 dark:hover:from-dark-primary-600 dark:hover:to-dark-accent-600 transition-all shadow-premium-lg hover:shadow-premium-xl"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="font-medium">Sign In</span>
                </button>
              )}
            </div>
          </div>
          
          {/* Footer with theme toggle and social links */}
          <div className="p-4 border-t border-light-primary-100/50 dark:border-dark-primary-700/50">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors flex items-center gap-2"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/SreejanPersonal/Sree-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-light-primary-100/50 dark:border-dark-primary-700/50 bg-light-bg dark:bg-dark-bg">
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
                <Link to="/refund-policy" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  Refund Policy
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

      {/* Fixed buttons */}
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
          onClick={() => setIsJarvisModalOpen(true)}
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
      <JarvisModal
        isOpen={isJarvisModalOpen}
        onClose={() => setIsJarvisModalOpen(false)}
      />
      <AuthAlert 
        show={showAuthAlert}
        onClose={() => setShowAuthAlert(false)}
      />
      <GoogleSignInPopup
        isOpen={showSignInPopup}
        onClose={() => setShowSignInPopup(false)}
        onSignIn={signIn}
      />
    </div>
  );
}

export default Layout;

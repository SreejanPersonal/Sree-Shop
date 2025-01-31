import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Github, Moon, Sun, Key, Menu, X, Database, Youtube, Linkedin, Instagram, CreditCard } from 'lucide-react';
import ApiKeyModal from './ApiKeyModal';
import ContactModal from './ContactModal';

function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial value from localStorage, default to true for dark mode
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  // Initialize dark mode on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 border-b backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Key className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sree.shop
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Main Navigation */}
              <div className="flex items-center gap-6">
                <Link
                  to="/pricing"
                  className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  <CreditCard className="w-4 h-4" />
                  Pricing
                </Link>
                <Link
                  to="/models"
                  className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  <Database className="w-4 h-4" />
                  Models
                </Link>
              </div>

              {/* Get API Key Button - Highlighted */}
              <button
                onClick={() => setIsApiKeyModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Key className="w-4 h-4" />
                Get API Key
              </button>

              {/* Utility Navigation */}
              <div className="flex items-center gap-4 border-l pl-4 dark:border-gray-700">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t dark:border-gray-800">
              <div className="flex flex-col gap-4">
                <Link
                  to="/pricing"
                  className="text-sm font-medium hover:text-blue-600 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CreditCard className="w-4 h-4" />
                  Pricing
                </Link>
                <Link
                  to="/models"
                  className="text-sm font-medium hover:text-blue-600 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Database className="w-4 h-4" />
                  Models
                </Link>
                <button
                  onClick={() => {
                    setIsApiKeyModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium hover:text-blue-600 flex items-center gap-1"
                >
                  <Key className="w-4 h-4" />
                  Get API Key
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Sree.shop. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Social Media Links */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://youtube.com/@devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#229ED9] dark:text-gray-400 dark:hover:text-[#229ED9] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/sree.shades_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/developer-sreejan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://discord.gg/your-discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#5865F2] dark:text-gray-400 dark:hover:text-[#5865F2] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              {/* Buy Me a Coffee Button */}
              <a
                href="https://buymeacoffee.com/devsdocode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFDD00] hover:bg-[#FFDD00]/90 transition-colors"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                  alt="Buy me a coffee"
                  className="h-4"
                />
                <span className="text-black font-semibold text-sm">Buy me a coffee</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default Layout;
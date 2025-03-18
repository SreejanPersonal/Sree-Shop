
import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import Logo from './Logo';
import HeaderNavLinks from './HeaderNavLinks';
import ApiKeyButton from './ApiKeyButton';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openApiKeyModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, openApiKeyModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 border-b border-light-primary-100 dark:border-dark-primary-800 backdrop-blur-premium bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            <HeaderNavLinks />

            <ApiKeyButton onClick={openApiKeyModal} />

            <div className="flex items-center gap-4 border-l border-light-primary-100 dark:border-dark-primary-700 pl-4">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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

        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
          openApiKeyModal={openApiKeyModal}
        />
      </div>
    </header>
  );
};

export default Header;

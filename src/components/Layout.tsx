
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ActionButtons from './layout/ActionButtons';
import ApiKeyModal from './modals/ApiKeyModal';
import ContactModal from './modals/ContactModal';
import BetaAccessModal from './modals/BetaAccessModal';
import MainWebsiteModal from './modals/MainWebsiteModal';
import JarvisModal from './jarvis/JarvisModal';

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

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        openApiKeyModal={() => setIsApiKeyModalOpen(true)} 
      />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />

      <ActionButtons 
        buttonsOffset={buttonsOffset}
        onMainWebsiteClick={() => setIsMainWebsiteModalOpen(true)}
        onBetaClick={() => setIsBetaModalOpen(true)}
        onJarvisClick={() => setIsJarvisModalOpen(true)}
      />

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
      <JarvisModal
        isOpen={isJarvisModalOpen}
        onClose={() => setIsJarvisModalOpen(false)}
      />
    </div>
  );
}

export default Layout;

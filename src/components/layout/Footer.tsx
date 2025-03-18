
import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-light-primary-100 dark:border-dark-primary-700 bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-light-text-tertiary dark:text-dark-text-tertiary max-w-md">
              Access unlimited AI power with our API. Start building amazing applications with cutting-edge AI models.
            </p>
            <SocialLinks />
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <FooterLinks />

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
  );
};

export default Footer;

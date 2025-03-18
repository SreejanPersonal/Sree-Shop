
import React from 'react';
import { X, Linkedin, Twitter, Instagram } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const socialLinks = [
    {
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      href: 'https://t.me/devsdocode',
      color: 'bg-[#229ED9]/10 text-[#229ED9] hover:bg-[#229ED9]/20',
      priority: 'Most Active - Preferred Contact Method',
      description: 'Fastest response time, available 24/7'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/sree.shades_',
      color: 'bg-pink-500/10 text-pink-500 hover:bg-pink-500/20',
      priority: 'Second Most Active',
      description: 'Regular updates and quick responses'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/developer-sreejan',
      color: 'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20',
      priority: 'Professional Contact',
      description: 'Business inquiries and networking'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/Anand_Sreejan',
      color: 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20',
      priority: 'Least Active',
      description: 'Occasional updates and announcements'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-xl">
        {/* Header */}
        <div className="relative p-6 border-b dark:border-gray-700">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Choose your preferred way to connect
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="p-6 grid grid-cols-1 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${link.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative p-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-xs opacity-75">{link.priority}</div>
                  </div>
                </div>
                <p className="mt-2 text-sm opacity-75">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

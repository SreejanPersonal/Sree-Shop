import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, Settings, Info, X } from 'lucide-react';
import { User as FirebaseUser } from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';

interface UserMenuProps {
  user: FirebaseUser;
  isMobile?: boolean;
}

interface PremiumNotificationState {
  visible: boolean;
  message: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState<PremiumNotificationState>({
    visible: false,
    message: ''
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handlePremiumNotification = (event: CustomEvent) => {
      if (event.detail && event.detail.feature) {
        showPremiumNotification(event.detail.feature);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);
    document.addEventListener('show-premium-notification', handlePremiumNotification as EventListener);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
      document.removeEventListener('show-premium-notification', handlePremiumNotification as EventListener);
    };
  }, []);

  const showPremiumNotification = (feature: string) => {
    setNotification({
      visible: true,
      message: `${feature} will be implemented in a future update. Stay tuned!`
    });
    
    // Close the menu
    setIsOpen(false);
    
    // Auto hide notification after 5 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, visible: false }));
    }, 5000);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group ${isMobile ? 'w-full' : ''}`}
      >
        <div className="absolute -inset-1 bg-gradient-premium from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
        {isMobile ? (
          <div className="relative flex items-center justify-center gap-2 p-2 rounded-xl bg-gradient-to-r from-light-primary-500/10 to-light-accent-500/10 dark:from-dark-primary-400/10 dark:to-dark-accent-400/10 border border-light-primary-100/50 dark:border-dark-primary-700/50 hover:from-light-primary-500/20 hover:to-light-accent-500/20 dark:hover:from-dark-primary-400/20 dark:hover:to-dark-accent-400/20 transition-all duration-200">
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || ''}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-light-primary-500/50 dark:border-dark-primary-400/50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`;
                }}
              />
              <span className="font-medium text-light-text dark:text-dark-text">Account</span>
            </div>
            <User className="w-4 h-4 ml-auto text-light-primary-600 dark:text-dark-primary-400" />
          </div>
        ) : (
          <div className="relative flex items-center gap-2 p-1 rounded-full bg-light-bg-secondary/80 dark:bg-dark-bg-secondary/80 border border-light-primary-100/50 dark:border-dark-primary-700/50">
            <img
              src={user.photoURL || ''}
              alt="Profile"
              className="w-8 h-8 rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`;
              }}
            />
          </div>
        )}
      </button>

      {isOpen && (
        <div className={`absolute ${isMobile ? 'left-1/2 -translate-x-1/2 right-auto' : 'right-0'} mt-2 w-56 rounded-xl overflow-hidden bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-lg shadow-premium-xl border border-light-primary-100/50 dark:border-dark-primary-700/50 z-50`}>
          <div className="p-3 border-b border-light-primary-100/50 dark:border-dark-primary-700/50">
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || ''}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-light-primary-500/50 dark:border-dark-primary-400/50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`;
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">
                  {user.displayName}
                </p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="p-1">
            <button
              onClick={() => showPremiumNotification('Profile')}
              className="w-full px-3 py-2 text-left text-sm text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-secondary dark:hover:bg-dark-bg rounded-lg flex items-center gap-2 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => showPremiumNotification('Settings')}
              className="w-full px-3 py-2 text-left text-sm text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-secondary dark:hover:bg-dark-bg rounded-lg flex items-center gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>

          <div className="p-1 border-t border-light-primary-100/50 dark:border-dark-primary-700/50">
            <button
              onClick={() => showPremiumNotification('Sign Out')}
              className="w-full px-3 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Premium Notification */}
      {notification.visible && (
        <div className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4 pointer-events-none md:px-6">
          <div 
            className="pointer-events-auto max-w-md w-full animate-slide-down-fade"
            style={{animationDuration: '0.3s'}}
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/95 to-white/90 dark:from-dark-bg-secondary/95 dark:to-dark-bg-secondary/90 backdrop-blur-lg shadow-premium-xl border border-light-primary-200/50 dark:border-dark-primary-600/50">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400"></div>
              <div className="p-4 flex items-start gap-3">
                <div className="flex-shrink-0 p-1.5 rounded-full bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <Info className="w-5 h-5 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-light-text dark:text-dark-text">
                    {notification.message}
                  </p>
                </div>
                <button 
                  onClick={() => setNotification(prev => ({ ...prev, visible: false }))}
                  className="flex-shrink-0 p-1 rounded-full text-light-text-tertiary dark:text-dark-text-tertiary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary hover:text-light-text dark:hover:text-dark-text transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* Animated progress bar */}
              <div className="h-0.5 bg-light-primary-100 dark:bg-dark-primary-800 w-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 animate-shrink"
                  style={{animationDuration: '5s'}}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
@keyframes slide-down-fade {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.animate-slide-down-fade {
  animation: slide-down-fade 0.3s ease-out forwards;
}

.animate-shrink {
  animation: shrink linear forwards;
}
`;
document.head.appendChild(style);

export default UserMenu;

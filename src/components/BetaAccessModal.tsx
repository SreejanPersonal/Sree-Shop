import React, { useState } from 'react';
import { X, Sparkles, Zap, Gift, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import GoogleSignInPopup from './GoogleSignInPopup';

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaAccessModal: React.FC<BetaAccessModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  
  if (!isOpen) return null;

  // Check if user is logged in, if not show sign in popup
  const handleJoinBeta = () => {
    if (!user) {
      setShowSignInPopup(true);
    } else {
      navigate('/beta-api-keys');
      onClose();
    }
  };

  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-indigo-500" />,
      title: "10 RPM Rate Limit",
      description: "Higher rate limits compared to free tier"
    },
    {
      icon: <Gift className="w-5 h-5 text-purple-500" />,
      title: "Free Access",
      description: "No cost during beta period"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      title: "32K Context Window",
      description: "Extended context for better responses"
    }
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md shadow-xl">
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Join Beta Program</h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Exclusive access to advanced features</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-center">
                  <div className="flex justify-center mb-2">{benefit.icon}</div>
                  <h3 className="text-xs font-medium mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Beta Key Info */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-lg p-3">
              <h3 className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">How to Get Beta Access:</h3>
              <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1 ml-4 list-decimal">
                <li>Log in with your Google account</li>
                <li>Generate your partial API key on the website</li>
                <li>Complete your key via Telegram</li>
                <li>Access all beta tier models</li>
              </ol>
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-xl">
            <button
              onClick={handleJoinBeta}
              className="block w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-center font-medium transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Join Beta Program</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Sign In Popup */}
      <GoogleSignInPopup
        isOpen={showSignInPopup}
        onClose={() => setShowSignInPopup(false)}
        onSignIn={async () => {
          try {
            await signIn();
            navigate('/beta-api-keys');
            onClose();
          } catch (error) {
            console.error('Error signing in:', error);
          }
        }}
      />
    </>
  );
};

export default BetaAccessModal;

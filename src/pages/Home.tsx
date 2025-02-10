import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Shield, Cpu, ArrowRight, ExternalLink, XCircle } from 'lucide-react';
import ApiSandbox from '../components/ApiSandbox';
import MainWebsiteModal from '../components/MainWebsiteModal';

interface ErrorModalProps {
  error: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ error, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4 text-red-500">
        <XCircle className="w-6 h-6" />
        <h3 className="text-xl font-semibold">Invalid API Key</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
      <button
        onClick={onClose}
        className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

function Home() {
  const [apiKey, setApiKey] = useState('');
  const [isMainWebsiteModalOpen, setIsMainWebsiteModalOpen] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateApiKey = async (key: string) => {
    try {
      const response = await fetch('https://beta.sree.shop/v1/usage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ api_key: key }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your credentials and try again.');
        }
        throw new Error('Failed to validate API key. Please try again later.');
      }

      // If we get here, the API key is valid
      sessionStorage.setItem('apiKey', key);
      return true;
    } catch (err) {
      if (err instanceof Error && err.message === 'Failed to fetch') {
        throw new Error('Network error. Please check your connection and try again.');
      }
      throw err;
    }
  };

  const handleDashboardAccess = async () => {
    if (!apiKey.trim()) {
      const input = document.getElementById('api-key-input');
      input?.classList.add('animate-shake');
      setTimeout(() => input?.classList.remove('animate-shake'), 500);
      return;
    }

    setIsValidating(true);
    setError(null);

    try {
      const isValid = await validateApiKey(apiKey.trim());
      if (isValid) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to validate API key');
      const input = document.getElementById('api-key-input');
      input?.classList.add('animate-shake');
      setTimeout(() => input?.classList.remove('animate-shake'), 500);
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Floating Main Website Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsMainWebsiteModalOpen(true)}
          className="group relative"
        >
          {/* Pulsing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
          
          {/* Button content */}
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
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Unlimited Free AI API Access</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Unlimited AI Power, Forever Free
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Access 100+ AI models with no hidden limits. Start building now with our generous free tier,
              or upgrade to Pro for the price of a coffee ☕️
            </p>

            {/* API Key Check */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center mb-8 sm:mb-12">
              <div className="relative flex-1 max-w-md">
                <input
                  id="api-key-input"
                  type="text"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleDashboardAccess();
                    }
                  }}
                  placeholder="Enter your API key"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
                />
              </div>
              <button
                onClick={handleDashboardAccess}
                disabled={isValidating}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Validating...
                  </>
                ) : (
                  <>
                    View Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Truly Unlimited",
                  description: "No hidden limits. Use the API freely with 3 RPM rate limit"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Premium Models",
                  description: "Access GPT-4, Claude, Gemini & 100+ more models"
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Developer First",
                  description: "OpenAI-compatible API with excellent documentation"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* API Sandbox */}
          <ApiSandbox />
        </div>
      </section>

      {/* Modals */}
      <MainWebsiteModal
        isOpen={isMainWebsiteModalOpen}
        onClose={() => setIsMainWebsiteModalOpen(false)}
      />

      {error && <ErrorModal error={error} onClose={() => setError(null)} />}
    </div>
  );
}

export default Home;
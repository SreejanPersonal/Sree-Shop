import React, { useState, useEffect } from 'react';
import { Key, Copy, Check, AlertCircle, ExternalLink, Database, Sparkles } from 'lucide-react';
import { botConfig } from '../config/botConfig';
import { useAuth } from '../contexts/AuthContext';
import { supabaseService } from '../services/supabase';
import PremiumLoader from '../components/PremiumLoader';
import ErrorBoundary from '../components/ErrorBoundary';
import { useError } from '../contexts/ErrorContext';

interface ApiKey {
  name: string;
  key: string;
  createdAt: Date;
  completeKey?: string;
}

const BetaApiKeyManagement: React.FC = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [fetchingKey, setFetchingKey] = useState(true);
  const [copied, setCopied] = useState(false);
  const [apiKey, setApiKey] = useState<ApiKey | null>(null);

  const { showError } = useError();

  // Effect to fetch beta API key from Supabase when component mounts
  useEffect(() => {
    const fetchApiKey = async () => {
      if (user && user.email) {
        setFetchingKey(true);
        try {
          // Only get beta API key from Supabase
          const { data: existingKey, error } = await supabaseService.getBetaApiKey(user.email);
          
          if (error) {
            showError(error);
          }
          
          if (existingKey) {
            // If key exists in Supabase, use it
            setApiKey({
              name: existingKey.name,
              key: existingKey.api_key,
              createdAt: new Date(existingKey.created_at),
              completeKey: existingKey.complete_api_key || undefined
            });
          }
        } catch (error) {
          console.error('Error fetching beta API key:', error);
        } finally {
          setFetchingKey(false);
          setLoading(false);
        }
      } else {
        setFetchingKey(false);
        setLoading(false);
      }
    };

    fetchApiKey();
  }, [user, showError]);

  const generatePartialKey = () => {
    return `ddc-beta-${Math.random().toString(36).substring(2, 12)}-xxx`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey || !user?.email) return; // Only one key allowed and user must be logged in

    setLoading(true);
    try {
      const newKey = generatePartialKey();
      
      // Store in Supabase only
      // Get Firebase UID and format it
      const uid = user.uid;
      
      const { data: result, error } = await supabaseService.storeBetaApiKey(user.email, name, newKey, uid);
      
      if (error) {
        showError(error);
      }
      
      if (result) {
        // Update local state with the result from Supabase
        setApiKey({
          name: result.name,
          key: result.api_key,
          createdAt: new Date(result.created_at)
        });
      }
    } catch (error) {
      console.error('Error generating beta API key:', error);
    } finally {
      setLoading(false);
      setName('');
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-down-fade">
          <h1 className="text-4xl font-bold bg-gradient-premium from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 bg-premium bg-[size:400%_400%] animate-premium-gradient">
            Beta API Key Management
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              You're part of our exclusive beta program!
            </p>
          </div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Create and manage your beta API keys securely. Currently, we support one beta API key per account.
          </p>
        </div>

        <div className="space-y-8">
          {/* API Key Creation Form */}
          <ErrorBoundary>
            <div className="bg-white/80 dark:bg-dark-bg-secondary/80 backdrop-blur-lg rounded-2xl shadow-premium-2xl border border-purple-100/50 dark:border-purple-700/50 overflow-hidden animate-slide-up-fade">
              <div className="p-8">
                {fetchingKey ? (
                  <div className="py-12 flex flex-col items-center justify-center">
                    <PremiumLoader message="Retrieving your beta API key..." size="lg" />
                    <p className="mt-6 text-sm text-light-text-secondary dark:text-dark-text-secondary max-w-md text-center">
                      We're securely fetching your beta API key from the database. This ensures your key remains consistent across all your devices.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-light-text dark:text-dark-text mb-2"
                  >
                    Beta API Key Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!!apiKey}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-light-bg-secondary/50 dark:bg-dark-bg/50 border border-purple-100/50 dark:border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-light-text dark:text-dark-text disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 ease-premium"
                    placeholder="Enter a name for your beta API key"
                  />
                </div>

                    <button
                      type="submit"
                      disabled={loading || !!apiKey}
                      className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-300 ease-premium relative overflow-hidden group
                        ${apiKey 
                          ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-500 dark:to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 shadow-premium-lg hover:shadow-premium-xl'
                        }
                      `}
                    >
                      <div className="absolute inset-0 bg-gradient-premium-shine opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                      <div className="relative flex items-center justify-center gap-3">
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5" />
                            <span>Generate Beta API Key</span>
                          </>
                        )}
                      </div>
                    </button>

                    {apiKey && (
                      <div className="flex items-center gap-2 text-sm text-amber-500 dark:text-amber-400 animate-slide-up-fade">
                        <AlertCircle className="w-4 h-4" />
                        <span>You can only create one beta API key at this time.</span>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </ErrorBoundary>

          {/* API Keys Table */}
          {apiKey && (
            <ErrorBoundary>
              <div className="bg-white/80 dark:bg-dark-bg-secondary/80 backdrop-blur-lg rounded-2xl shadow-premium-2xl border border-purple-100/50 dark:border-purple-700/50 overflow-hidden animate-scale-fade">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Your Beta API Key
                </h3>
                <div className="overflow-hidden rounded-xl">
                  <table className="min-w-full divide-y divide-purple-100/50 dark:divide-purple-700/50">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-400/5 dark:to-pink-400/5">
                        <th className="px-6 py-4 text-left text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                          Name
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                          API Key
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                          Created
                        </th>
                        <th className="px-6 py-4 text-right text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100/50 dark:divide-purple-700/50">
                      <tr className="transition-colors duration-200 hover:bg-light-bg-secondary/50 dark:hover:bg-dark-bg/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text dark:text-dark-text">
                          {apiKey.name}
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-light-text dark:text-dark-text overflow-hidden text-ellipsis">
                          <div className="max-w-xs overflow-x-auto scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-purple-800 pb-2">
                            {apiKey.completeKey || apiKey.key}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          {new Date(apiKey.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                          <button
                            onClick={() => copyToClipboard(apiKey.key)}
                            className="text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors p-2 rounded-lg hover:bg-light-bg-secondary dark:hover:bg-dark-bg group"
                          >
                            {copied ? (
                              <Check className="w-5 h-5 transform scale-110 transition-transform" />
                            ) : (
                              <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            )}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {apiKey.completeKey ? (
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/5 to-teal-500/5 dark:from-green-400/5 dark:to-teal-400/5 rounded-xl border border-green-200/50 dark:border-green-800/50 animate-slide-up-fade">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                          Important Security Information:
                        </p>
                        <ul className="list-disc ml-4 space-y-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          <li>Never share your complete API key with anyone</li>
                          <li>Store your API key securely and avoid committing it to public repositories</li>
                          <li>If you suspect your key has been compromised, please contact support immediately</li>
                        </ul>
                        <p className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary mt-2">
                          Your API key grants access to your account and resources. Treat it like a password.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/5 to-orange-500/5 dark:from-amber-400/5 dark:to-orange-400/5 rounded-xl border border-amber-200/50 dark:border-amber-800/50 animate-slide-up-fade">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                          To complete your beta API key, you need to:
                        </p>
                        <ol className="list-decimal ml-4 space-y-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          <li>Start the DDC Support Bot on Telegram</li>
                          <li>Use the <code className="px-1.5 py-0.5 rounded bg-light-bg/80 dark:bg-dark-bg/80 font-mono text-xs border border-amber-200/20 dark:border-amber-800/20">
                            /generate_beta</code> command</li>
                          <li>Replace the <code className="px-1.5 py-0.5 rounded bg-light-bg/80 dark:bg-dark-bg/80 font-mono text-xs border border-amber-200/20 dark:border-amber-800/20">
                            xxx</code> portion with the generated suffix</li>
                        </ol>
                        <a
                          href={`${botConfig.telegramBot.baseUrl}/${botConfig.telegramBot.username}${user?.uid ? `?start=${user.uid}` : ''}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors group"
                        >
                          <span>Open Telegram Bot</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              </div>
            </ErrorBoundary>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetaApiKeyManagement;

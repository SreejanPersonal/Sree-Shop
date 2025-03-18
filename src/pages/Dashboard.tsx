
import { useState, useEffect } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CreditCard,
  Database,
  DownloadCloud,
  FileText,
  Key,
  Lock,
  LucideIcon,
  Play,
  RefreshCw,
  Settings,
  Sparkles,
  Star,
  Unlock,
  X,
  Zap
} from 'lucide-react';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usage, setUsage] = useState({
    apiCalls: 0,
    modelsUsed: 0,
    tokensGenerated: 0,
    videosGenerated: 0
  });
  const [activeExpander, setActiveExpander] = useState<string | null>(null);

  // Simulate loading
  useEffect(() => {
    setError(null);
    const timer = setTimeout(() => {
      setApiKey("sk-sree-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      setLoading(false);
    }, 1500);

    const statsTimer = setTimeout(() => {
      setUsage({
        apiCalls: 32,
        modelsUsed: 3,
        tokensGenerated: 12458,
        videosGenerated: 5
      });
      setStatsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
    };
  }, []);

  const copyApiKey = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleExpander = (id: string) => {
    if (activeExpander === id) {
      setActiveExpander(null);
    } else {
      setActiveExpander(id);
    }
  };

  const DashboardStat = ({ 
    title, 
    value, 
    icon: Icon, 
    loading, 
    iconBg,
    description,
    trend
  }: { 
    title: string; 
    value: number | string; 
    icon: LucideIcon;
    loading: boolean;
    iconBg: string;
    description: string;
    trend?: {
      direction: 'up' | 'down' | 'neutral';
      percentage: number;
    };
  }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconBg}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center px-2 py-1 rounded-lg text-xs font-medium ${
            trend.direction === 'up' 
              ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
              : trend.direction === 'down'
                ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400'
          }`}>
            {trend.direction === 'up' ? '↑' : trend.direction === 'down' ? '↓' : '→'} {trend.percentage}%
          </div>
        )}
      </div>
      <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</h3>
      {loading ? (
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      ) : (
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{description}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">API Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your API keys and monitor usage
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-red-800 dark:text-red-300">Error</h3>
              <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* API Key Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-1">Your API Key</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Use this key to authenticate your API requests
            </p>
          </div>
          
          <div className="p-6">
            {loading ? (
              <div className="space-y-4">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-32 animate-pulse"></div>
              </div>
            ) : (
              <>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mb-4 flex items-center justify-between">
                  <div className="truncate">
                    {apiKey}
                  </div>
                  <button
                    onClick={copyApiKey}
                    className={`ml-3 p-2 rounded-lg transition-colors ${
                      copied
                        ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                        : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {copied ? <Check className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm">
                    <RefreshCw className="w-4 h-4" />
                    Regenerate Key
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-sm">
                    <Lock className="w-4 h-4" />
                    Revoke Key
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Usage Statistics */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Usage Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardStat 
              title="API Calls" 
              value={usage.apiCalls} 
              icon={Zap} 
              loading={statsLoading}
              iconBg="bg-blue-600"
              description="this month"
              trend={{
                direction: 'up',
                percentage: 12
              }}
            />
            <DashboardStat 
              title="Models Used" 
              value={usage.modelsUsed} 
              icon={Database} 
              loading={statsLoading}
              iconBg="bg-purple-600"
              description="unique models"
              trend={{
                direction: 'neutral',
                percentage: 0
              }}
            />
            <DashboardStat 
              title="Tokens Generated" 
              value={usage.tokensGenerated.toLocaleString()} 
              icon={FileText} 
              loading={statsLoading}
              iconBg="bg-green-600"
              description="total"
              trend={{
                direction: 'up',
                percentage: 24
              }}
            />
            <DashboardStat 
              title="Videos Generated" 
              value={usage.videosGenerated} 
              icon={Play} 
              loading={statsLoading}
              iconBg="bg-amber-600"
              description="this month"
              trend={{
                direction: 'down',
                percentage: 5
              }}
            />
          </div>
        </section>

        {/* API Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold">API Documentation</h2>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Getting Started</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                To use our API, send requests to the base URL with your API key in the Authorization header.
              </p>
              
              <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>
                  {`curl -X POST \\
  https://api.sree.shop/v1/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${apiKey || 'YOUR_API_KEY'}" \\
  -d '{ "model": "gpt-3.5-turbo", "prompt": "Hello, how are you?", "max_tokens": 50 }'`}
                </pre>
              </div>
            </div>
            
            {/* Expandable sections */}
            <div className="space-y-3">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExpander('auth')}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium">Authentication</span>
                  {activeExpander === 'auth' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {activeExpander === 'auth' && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      All API requests must include your API key in the Authorization header as a Bearer token:
                    </p>
                    <div className="bg-gray-900 text-gray-300 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <code>Authorization: Bearer {apiKey || 'YOUR_API_KEY'}</code>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExpander('endpoints')}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium">Available Endpoints</span>
                  {activeExpander === 'endpoints' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {activeExpander === 'endpoints' && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <ul className="space-y-3">
                      <li className="pb-3 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium mb-1">POST /v1/completions</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Generate completions from text prompts</p>
                      </li>
                      <li className="pb-3 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium mb-1">POST /v1/chat/completions</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Generate conversational responses</p>
                      </li>
                      <li>
                        <h4 className="font-medium mb-1">POST /v1/images/generations</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Generate images from text prompts</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExpander('errors')}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium">Error Handling</span>
                  {activeExpander === 'errors' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {activeExpander === 'errors' && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      The API returns standard HTTP status codes and a JSON response with error details:
                    </p>
                    <div className="bg-gray-900 text-gray-300 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                      <pre>{`{
  "error": {
    "message": "Invalid API key",
    "type": "authentication_error",
    "code": "invalid_api_key"
  }
}`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Always check for error responses and handle them appropriately in your application.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-center pt-3">
              <a 
                href="/docs" 
                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                View full documentation
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Upgrade Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800/30">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <Sparkles className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Upgrade to Pro</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Get unlimited API calls, higher rate limits, and priority support with our Pro plan.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm">Unlimited API calls per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm">Access to all premium models</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm">Priority support via email</span>
                </li>
              </ul>
            </div>
            
            <div className="md:self-center">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-colors shadow-sm"
              >
                <Star className="w-4 h-4" />
                Upgrade Now
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Settings & Preferences */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
              <Settings className="w-5 h-5 text-gray-500" />
              Account Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Manage your account preferences
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
              <h3 className="font-medium mb-4">Notification Preferences</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="email-notifications" className="text-sm">Email Notifications</label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" id="email-notifications" className="sr-only peer" checked />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="usage-alerts" className="text-sm">Usage Limit Alerts</label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" id="usage-alerts" className="sr-only peer" checked />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="security-alerts" className="text-sm">Security Alerts</label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" id="security-alerts" className="sr-only peer" checked />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Account Actions</h3>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors">
                  <DownloadCloud className="w-4 h-4" />
                  Export API Logs
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg transition-colors">
                  <Unlock className="w-4 h-4" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Key, 
  User, 
  Zap, 
  Sparkles,
  RefreshCcw,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  XCircle,
  Clock,
  Activity,
  BarChart2,
  PieChart as PieChartIcon,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ModelUsage {
  cost: string;
  failed_requests: number;
  input_tokens: number;
  output_tokens: number;
  successful_requests: number;
  total_requests: number;
}

interface UsageData {
  api_key: string;
  api_key_created_at: string;
  input_tokens: number;
  output_tokens: number;
  model_usage: {
    [key: string]: ModelUsage;
  };
  success_rate: number;
  successful_requests: number;
  telegram_full_name: string;
  telegram_id: string;
  telegram_username: string;
  total_cost: string;
  total_requests: number;
}

interface ErrorModalProps {
  error: string;
  details?: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ error, details, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4 text-red-500">
        <XCircle className="w-6 h-6" />
        <h3 className="text-xl font-semibold">Error</h3>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">{error}</p>
        {details && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-sm font-mono text-red-600 dark:text-red-400 break-all">
              {details}
            </p>
          </div>
        )}
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

function Dashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [usageData, setUsageData] = useState<UsageData | null>(null);
  const [error, setError] = useState<{ message: string; details?: string } | null>(null);
  const navigate = useNavigate();

  const fetchUsageData = async () => {
    const apiKey = sessionStorage.getItem('apiKey');
    if (!apiKey) {
      navigate('/');
      return;
    }

    try {
      const response = await fetch('https://beta.sree.shop/v1/usage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ api_key: apiKey }),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401 
            ? 'Invalid API key. Please check your credentials.'
            : `Failed to fetch usage data: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setUsageData(data);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError({
        message: errorMessage,
        details: err instanceof Error ? err.stack : undefined
      });
      console.error('Error fetching usage data:', err);
    }
  };

  useEffect(() => {
    fetchUsageData();
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchUsageData();
    setIsRefreshing(false);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
          <h3 className="font-semibold mb-2">{label}</h3>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm">
                  {entry.name}: {entry.value.toLocaleString()} tokens
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  if (!usageData && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-lg opacity-20 animate-pulse"></div>
            <div className="relative w-20 h-20 border-4 border-blue-100 dark:border-blue-900/50 rounded-full">
              <div className="absolute inset-0 border-4 border-blue-500 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary animate-pulse">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg py-8 px-4">
      {error && (
        <ErrorModal
          error={error.message}
          details={error.details}
          onClose={() => setError(null)}
        />
      )}
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent">
                Welcome back, {usageData?.telegram_full_name || 'User'}! 👋
              </h1>
              <p className="text-light-text-tertiary dark:text-dark-text-tertiary flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                className="group relative p-2 rounded-xl bg-white dark:bg-gray-800 border border-light-primary-100 dark:border-dark-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <RefreshCcw className={`w-5 h-5 text-light-primary-500 dark:text-dark-primary-400 transition-all duration-300 ${
                  isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'
                }`} />
              </button>
              <button
                onClick={() => navigate('/pricing')}
                className="relative group px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Upgrade to Pro</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: <ArrowUpRight className="w-3.5 h-3.5" />,
              label: "Input Tokens",
              value: usageData?.input_tokens.toLocaleString() || '0',
              subtext: "Total prompt tokens",
              gradient: "from-blue-500/10 to-indigo-500/10"
            },
            {
              icon: <ArrowDownRight className="w-5 h-5 text-indigo-500" />,
              label: "Output Tokens",
              value: usageData?.output_tokens.toLocaleString() || '0',
              subtext: "Total completion tokens",
              gradient: "from-indigo-500/10 to-purple-500/10"
            },
            {
              icon: <Activity className="w-5 h-5 text-green-500" />,
              label: "Success Rate",
              value: `${usageData?.success_rate.toFixed(1) || '0'}%`,
              subtext: `${usageData?.successful_requests || 0} of ${usageData?.total_requests || 0} requests`,
              gradient: "from-green-500/10 to-emerald-500/10"
            },
            {
              icon: <Zap className="w-5 h-5 text-amber-500" />,
              label: "Rate Limit",
              value: "10 RPM",
              subtext: "Free Tier",
              gradient: "from-amber-500/10 to-orange-500/10"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 border border-light-primary-100 dark:border-dark-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                    {stat.label}
                  </p>
                  <p className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Charts Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-8">
            {/* Model Usage Chart */}
            <div className="relative group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-light-primary-100 dark:border-dark-primary-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <BarChart2 className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-xl font-semibold">Model Usage Distribution</h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">Input</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      <span className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">Output</span>
                    </div>
                  </div>
                </div>

                {/* Chart Container */}
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={Object.entries(usageData?.model_usage || {}).map(([name, data]) => ({
                        name,
                        input_tokens: data.input_tokens,
                        output_tokens: data.output_tokens
                      }))}
                      barSize={40}
                      barGap={0}
                    >
                      <defs>
                        <linearGradient id="inputGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#6366F1" stopOpacity={0.8}/>
                        </linearGradient>
                        <linearGradient id="outputGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#EC4899" stopOpacity={0.8}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="currentColor" 
                        className="text-gray-200 dark:text-gray-700" 
                        opacity={0.1} 
                      />
                      <XAxis 
                        dataKey="name" 
                        stroke="currentColor"
                        className="text-gray-600 dark:text-gray-400"
                        tick={{ fontSize: 12 }}
                        axisLine={{ strokeOpacity: 0.1 }}
                      />
                      <YAxis 
                        stroke="currentColor"
                        className="text-gray-600 dark:text-gray-400"
                        tick={{ fontSize: 12 }}
                        axisLine={{ strokeOpacity: 0.1 }}
                      />
                      <Tooltip 
                        content={<CustomTooltip />}
                        cursor={{ fill: 'transparent' }}
                      />
                      <Bar 
                        dataKey="input_tokens" 
                        fill="url(#inputGradient)"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar 
                        dataKey="output_tokens" 
                        fill="url(#outputGradient)"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Token Distribution */}
            <div className="relative group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-light-primary-100 dark:border-dark-primary-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <PieChartIcon className="w-5 h-5 text-purple-500" />
                  </div>
                  <h2 className="text-xl font-semibold">Token Distribution</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowUpRight className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Input Tokens</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {usageData?.input_tokens.toLocaleString() || '0'}
                    </div>
                    <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                      {((usageData?.input_tokens || 0) / Math.max(1, ((usageData?.input_tokens || 0) + (usageData?.output_tokens || 0))) * 100).toFixed(1)}% of total
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowDownRight className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Output Tokens</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {usageData?.output_tokens.toLocaleString() || '0'}
                    </div>
                    <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                      {((usageData?.output_tokens || 0) / Math.max(1, ((usageData?.input_tokens || 0) + (usageData?.output_tokens || 0))) * 100).toFixed(1)}% of total
                    </div>
                  </div>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        <linearGradient id="pieGradient1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#6366F1" stopOpacity={0.8}/>
                        </linearGradient>
                        <linearGradient id="pieGradient2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#EC4899" stopOpacity={0.8}/>
                        </linearGradient>
                      </defs>
                      <Pie
                        data={[
                          { name: 'Input Tokens', value: usageData?.input_tokens || 0 },
                          { name: 'Output Tokens', value: usageData?.output_tokens || 0 }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Cell fill="url(#pieGradient1)" />
                        <Cell fill="url(#pieGradient2)" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-8">
            {/* User Profile Card */}
            <div className="relative group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-light-primary-100 dark:border-dark-primary-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-premium from-light-primary-500 to-light-accent-500 rounded-xl blur-lg opacity-20"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 flex items-center justify-center text-white shadow-lg">
                      <User className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold truncate">
                      {usageData?.telegram_full_name || 'User'}
                    </h2>
                    <p className="text-light-text-tertiary dark:text-dark-text-tertiary truncate">
                      {usageData?.telegram_username || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* User Details */}
                <div className="space-y-4">
                  {/* API Key */}
                  <div className="group p-3 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <Key className="w-5 h-5 text-light-primary-500 dark:text-dark-primary-500 flex-shrink-0" />
                      <span className="text-sm font-medium">API Key</span>
                    </div>
                    <div className="relative mt-1 group">
                      <div className="flex items-center gap-2">
                        <code className="text-xs sm:text-sm bg-light-bg dark:bg-dark-bg px-2 py-1 rounded w-full overflow-hidden text-ellipsis whitespace-nowrap">
                          {usageData?.api_key || 'N/A'}
                        </code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(usageData?.api_key || '');
                            // Add copy feedback here if needed
                          }}
                          className="flex-shrink-0 p-1.5 rounded-lg bg-light-bg dark:bg-dark-bg hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Telegram ID */}
                  <div className="group p-3 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-light-primary-500 dark:text-dark-primary-500 flex-shrink-0" />
                        <span className="text-sm font-medium">Telegram ID</span>
                      </div>
                      <span className="text-sm font-mono bg-light-bg dark:bg-dark-bg px-2 py-1 rounded">
                        {usageData?.telegram_id || 'N/A'}
                      </span>
                    </div>
                  </div>

                  {/* Member Since */}
                  <div className="group p-3 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-light-primary-500 dark:text-dark-primary-500 flex-shrink-0" />
                        <span className="text-sm font-medium">Member Since</span>
                      </div>
                      <span className="text-sm">
                        {new Date(usageData?.api_key_created_at || '').toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Information */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-xl p-4 sm:p-6 border border-light-primary-100 dark:border-dark-primary-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative flex flex-col sm:flex-row items-start gap-3">
                <Info className="w-5 h-5 text-light-primary-500 dark:text-dark-primary-400 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2">Resource Usage Cost</h3>
                  <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-sm mb-4">
                    Your usage has consumed approximately ${Number(usageData?.total_cost || 0).toFixed(4)} worth of resources.
                    This is provided free of charge, but consider supporting the service if you find it valuable!
                  </p>
                  <a
                    href="https://buymeacoffee.com/devsdocode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-light-primary-500 dark:text-dark-primary-400 hover:text-light-primary-600 dark:hover:text-dark-primary-500 text-sm font-medium group"
                  >
                    Support the Service
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

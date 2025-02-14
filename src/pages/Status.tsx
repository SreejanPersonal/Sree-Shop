import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  Clock, 
  ArrowRight, 
  Construction,
  AlertTriangle,
  Sparkles,
  Rocket,
  Zap,
  Shield
} from 'lucide-react';
import { statusUpdates } from '../data/statusUpdates';

type ApiType = 'stable' | 'beta';

function Status() {
  const [selectedApiType, setSelectedApiType] = useState<ApiType>('stable');

  const filteredUpdates = statusUpdates.filter(update => update.apiType === selectedApiType);

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'negative':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800';
      case 'negative':
        return 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800';
    }
  };

  const getStatusTextColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'text-green-800 dark:text-green-200';
      case 'negative':
        return 'text-red-800 dark:text-red-200';
      default:
        return 'text-blue-800 dark:text-blue-200';
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Real-time Status Updates</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            System Status
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Stay informed about our API's operational status
          </p>

          {/* API Type Selector */}
          <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-gray-800 backdrop-blur-sm">
            <button
              onClick={() => setSelectedApiType('stable')}
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedApiType === 'stable'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {selectedApiType === 'stable' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                </div>
              )}
              <div className="relative flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Stable API</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedApiType('beta')}
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedApiType === 'beta'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {selectedApiType === 'beta' && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                </div>
              )}
              <div className="relative flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Beta API</span>
                <div className="absolute -top-1 -right-1 w-2 h-2">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* API Type Info Banner */}
        <div className="mb-12">
          {selectedApiType === 'beta' ? (
            <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
              <div className="absolute top-0 right-0 p-4">
                <Rocket className="w-16 h-16 text-yellow-500/20 animate-pulse" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-yellow-100 dark:bg-yellow-900/50">
                  <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Beta API Status</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Track the latest updates and performance metrics for our cutting-edge Beta API. 
                    Experience enhanced features and new models before they hit stable.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="absolute top-0 right-0 p-4">
                <Construction className="w-16 h-16 text-blue-500/20 animate-pulse" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50">
                  <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Status Page Under Development</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We're building a comprehensive status page with detailed uptime monitoring and real-time metrics. 
                    For now, you can track important updates here.
                  </p>
                  <a
                    href="https://status.beta.sree.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    View Current Uptime Status
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className={`absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b ${
            selectedApiType === 'beta'
              ? 'from-yellow-200 via-yellow-200 to-transparent dark:from-yellow-800 dark:via-yellow-800'
              : 'from-blue-200 via-blue-200 to-transparent dark:from-blue-800 dark:via-blue-800'
          }`}></div>
          
          <div className="space-y-6">
            {filteredUpdates.map((update, index) => (
              <div
                key={update.id}
                className={`relative ${
                  index === 0 ? 'animate-fadeIn' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br ${
                  selectedApiType === 'beta'
                    ? 'from-yellow-500 to-orange-500'
                    : 'from-blue-500 to-indigo-500'
                }`}></div>
                
                {/* Update Card */}
                <div className="ml-16 relative group">
                  <div className={`relative rounded-xl p-6 border ${getStatusColor(update.type)}`}>
                    {/* Timestamp */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{update.date}</span>
                      {update.time && (
                        <>
                          <span>•</span>
                          <span>{update.time}</span>
                        </>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex items-start gap-3">
                      {getStatusIcon(update.type)}
                      <div>
                        <p className={`font-medium ${getStatusTextColor(update.type)}`}>
                          {update.message}
                        </p>
                        
                        {/* Affected Models */}
                        {update.models && update.models.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {update.models.map(model => (
                              <span
                                key={model}
                                className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
                                  selectedApiType === 'beta'
                                    ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                }`}
                              >
                                <Sparkles className="w-3 h-3" />
                                {model}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;

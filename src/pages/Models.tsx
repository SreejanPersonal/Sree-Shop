import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  Search, 
  X, 
  ChevronDown, 
  Sparkles,
  Zap,
  Shield,
  Info,
  Filter,
  Check,
  Gauge,
  Brain,
  Workflow,
  Rocket,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import freeModels from '../utility/freeModels.json';
import betaModels from '../utility/betaModels.json';
import paidModels from '../utility/paidModels.json';

function getProviderFromModel(model: string) {
  if (model.toLowerCase().includes('deepseek') || model === 'DeepSeekV3') return 'DeepSeek';
  if (model.includes('gpt') || model.includes('openai') || model === 'o3-mini') return 'OpenAI';
  if (model.includes('claude')) return 'Anthropic';
  if (model.includes('gemini') || model.includes('google')) return 'Google';
  if (model.includes('llama') || model.includes('meta')) return 'Meta';
  if (model.includes('mistral')) return 'Mistral AI';
  if (model.includes('qwen')) return 'Qwen';
  if (model.includes('yi')) return '01.AI';
  return 'Other';
}

interface ModelInfoModalProps {
  model: string;
  provider: string;
  isPro: boolean;
  isBeta: boolean;
  onClose: () => void;
}

const ModelInfoModal: React.FC<ModelInfoModalProps> = ({ model, provider, isPro, isBeta, onClose }) => {
  const navigate = useNavigate();

  const handleViewDocs = () => {
    onClose(); // Close the modal first
    navigate('/docs'); // Then navigate to docs
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                isBeta 
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  : isPro 
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
              }`}>
                {isBeta ? <Rocket className="w-5 h-5" /> : isPro ? <Star className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{model.split('/').pop()}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{provider}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-1.5">
                <Gauge className="w-4 h-4 text-blue-500" />
                <h4 className="text-sm font-medium">Rate Limit</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isPro ? 'Unlimited' : isBeta ? '10 RPM' : '3 RPM'}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-1.5">
                <Brain className="w-4 h-4 text-purple-500" />
                <h4 className="text-sm font-medium">Context Window</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isPro ? 'Original' : isBeta ? '32K tokens' : '4K tokens'}
              </p>
            </div>
          </div>

          {/* Full Model Name */}
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center gap-2 mb-1.5">
              <Info className="w-4 h-4 text-blue-500" />
              <h4 className="text-sm font-medium">Full Model Name</h4>
            </div>
            <div className="font-mono text-sm break-all">
              {model}
            </div>
          </div>

          {/* Beta Notice */}
          {isBeta && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/30">
              <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Beta model available for free for a limited time
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-xl">
          <button
            onClick={handleViewDocs}
            className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            View Documentation
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProviderDropdownProps {
  value: string | null;
  onChange: (value: string | null) => void;
  providers: string[];
}

const ProviderDropdown: React.FC<ProviderDropdownProps> = ({ value, onChange, providers }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between gap-2 group"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium">
            {value || 'All Providers'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg backdrop-blur-sm">
          <button
            onClick={() => {
              onChange(null);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {!value && <Check className="w-4 h-4 text-blue-500" />}
            </span>
            All Providers
          </button>
          {providers.map(provider => (
            <button
              key={provider}
              onClick={() => {
                onChange(provider);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                {value === provider && <Check className="w-4 h-4 text-blue-500" />}
              </span>
              {provider}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

function Models() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<{
    name: string;
    provider: string;
    isPro: boolean;
    isBeta: boolean;
  } | null>(null);

  const providers = useMemo(() => 
    Array.from(new Set([
      ...freeModels.map(getProviderFromModel),
      ...betaModels.map(getProviderFromModel),
      ...paidModels.map(getProviderFromModel)
    ])).sort()
  , []);

  const filterModels = (models: string[]) => {
    if (!searchTerm && !selectedProvider) return models;
    
    return models.filter(model => {
      const normalizedModel = model.toLowerCase();
      const normalizedSearch = searchTerm.toLowerCase().trim();
      const searchWords = normalizedSearch.split(/\s+/).filter(word => word.length > 0);
      const matchesSearch = searchWords.length === 0 || 
        searchWords.every(word => normalizedModel.includes(word));
      const matchesProvider = !selectedProvider || 
        getProviderFromModel(model) === selectedProvider;
      return matchesSearch && matchesProvider;
    });
  };

  const filteredFreeModels = useMemo(() => 
    filterModels(freeModels)
  , [searchTerm, selectedProvider]);

  const filteredBetaModels = useMemo(() => 
    filterModels(betaModels)
  , [searchTerm, selectedProvider]);

  const filteredPaidModels = useMemo(() => 
    filterModels(paidModels)
  , [searchTerm, selectedProvider]);

  const noResults = filteredFreeModels.length === 0 && filteredBetaModels.length === 0 && filteredPaidModels.length === 0;

  const ModelCard = ({ model, isPro, isBeta }: { model: string; isPro: boolean; isBeta: boolean }) => {
    const provider = getProviderFromModel(model);
    const modelName = model.split('/').pop() || model;

    const features = [
      {
        name: 'RPM',
        value: isPro ? 'Unlimited' : isBeta ? '10 RPM' : '3 RPM',
        icon: <Gauge className="w-3.5 h-3.5" />
      },
      {
        name: 'Context',
        value: isPro ? 'Original' : isBeta ? '32K' : '4K',
        icon: <Brain className="w-3.5 h-3.5" />
      },
      {
        name: 'Priority',
        value: isPro ? 'High' : isBeta ? 'Medium' : 'Normal',
        icon: <Workflow className="w-3.5 h-3.5" />
      }
    ];

    return (
      <button
        onClick={() => setSelectedModel({ name: model, provider, isPro, isBeta })}
        className={`group relative w-full text-left bg-white dark:bg-gray-800 rounded-lg p-3 border transition-all duration-300 hover:shadow-lg ${
          isBeta 
            ? 'border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600'
            : isPro 
              ? 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600'
              : 'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`p-1.5 rounded-md ${
              isBeta 
                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                : isPro 
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                  : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
            }`}>
              {isBeta ? <Rocket className="w-4 h-4" /> : isPro ? <Star className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-sm truncate" title={modelName}>
                {modelName}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {provider}
              </p>
            </div>
          </div>
          <div className={`px-2 py-1 text-[10px] font-medium rounded-full ${
            isBeta 
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              : isPro 
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
          }`}>
            {isBeta ? 'Beta' : isPro ? 'Pro' : 'Free'}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-1.5 rounded-md bg-gray-50 dark:bg-gray-900/50">
              <div className={`mb-1 ${
                isBeta 
                  ? 'text-yellow-600 dark:text-yellow-400'
                  : isPro 
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-green-600 dark:text-green-400'
              }`}>
                {feature.icon}
              </div>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                {feature.value}
              </span>
            </div>
          ))}
        </div>
      </button>
    );
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Available Models</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Access a wide range of state-of-the-art AI models
          </p>

          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <ProviderDropdown
              value={selectedProvider}
              onChange={setSelectedProvider}
              providers={providers}
            />
          </div>

          {noResults && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                No models found matching your search criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedProvider(null);
                }}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {filteredBetaModels.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Beta Tier Models</h2>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                  {filteredBetaModels.length} models
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full animate-pulse">
                  Free for Limited Time!
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredBetaModels.map((model) => (
                <ModelCard key={model} model={model} isPro={false} isBeta={true} />
              ))}
            </div>
          </div>
        )}

        {filteredFreeModels.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Free Tier Models</h2>
              <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                {filteredFreeModels.length} models
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredFreeModels.map((model) => (
                <ModelCard key={model} model={model} isPro={false} isBeta={false} />
              ))}
            </div>
          </div>
        )}

        {filteredPaidModels.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Pro Tier Models</h2>
              <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                {filteredPaidModels.length} models
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredPaidModels.map((model) => (
                <ModelCard key={model} model={model} isPro={true} isBeta={false} />
              ))}
            </div>
          </div>
        )}

        {/* Model Info Modal */}
        {selectedModel && (
          <ModelInfoModal
            model={selectedModel.name}
            provider={selectedModel.provider}
            isPro={selectedModel.isPro}
            isBeta={selectedModel.isBeta}
            onClose={() => setSelectedModel(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Models;
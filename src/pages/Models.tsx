import React, { useState, useMemo } from 'react';
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
  Rocket
} from 'lucide-react';

// Update model data arrays with new beta models
const freeModels = [
  "claude-3-5-sonnet-20240620",
  "claude-3-5-sonnet",
  "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
  "deepseek-v3",
  "gpt-4o-2024-05-13",
  "Meta-Llama-3.3-70B-Instruct-Turbo",
  "deepseek-r1"
];

const betaModels = [
  "deepseek-r1",
  "gpt-4o",
  "o3-mini",
  "DeepSeek-R1-Distill-Llama-70B",
  "DeepSeekV3"
];

const paidModels = [
  "gpt-3.5-turbo", "gpt-3.5-turbo-202201", "gpt-4o", "gpt-4o-2024-05-13",
  "gpt-4o-real", "deepseek-v3",
  "openai/whisper-large-v3", "openai/whisper-large-v3-turbo", "claude",
  "claude-3-5-sonnet", "claude-3-5-sonnet-20240620", "claude-3-5-sonnet-real",
  "claude-3-haiku-ddg", "claude-sonnet-3.5", "gemini-1.5-flash", "gemini-1.5-pro",
  "gemini-1.5-pro-latest", "gemini-pro", "@cf/google/gemma-2b-it-lora",
  "@cf/google/gemma-7b-it-lora", "@hf/google/gemma-7b-it", "google/gemma-1.1-2b-it",
  "google/gemma-1.1-7b-it", "@cf/meta-llama/llama-2-7b-chat-hf-lora",
  "@cf/meta/llama-2-7b-chat-fp16", "@cf/meta/llama-2-7b-chat-int8",
  "@cf/meta/llama-3-8b-instruct", "@cf/meta/llama-3.1-8b-instruct", "llama",
  "llama-3.1-405b", "llama-3.1-70b", "llama-3.1-70b-ddg", "llama-3.1-8b",
  "meta-llama/Llama-2-7b-chat-hf", "meta-llama/Llama-3.1-70B-Instruct",
  "meta-llama/Llama-3.1-8B-Instruct", "meta-llama/Llama-3.2-11B-Vision-Instruct",
  "meta-llama/Llama-3.2-1B-Instruct", "meta-llama/Llama-3.2-3B-Instruct",
  "meta-llama/Llama-3.2-90B-Vision-Instruct", "meta-llama/Llama-3.3-70B-Instruct",
  "meta-llama/Llama-3.3-70B-Instruct-Turbo", "meta-llama/Llama-Guard-3-8B",
  "meta-llama/Meta-Llama-3-70B-Instruct", "meta-llama/Meta-Llama-3-8B-Instruct",
  "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo", "01-ai/Yi-1.5-34B-Chat",
  "01-ai/Yi-34B-Chat", "@cf/deepseek-ai/deepseek-math-7b-base",
  "@cf/deepseek-ai/deepseek-math-7b-instruct", "@cf/defog/sqlcoder-7b-2",
  "@cf/microsoft/phi-2", "@cf/mistral/mistral-7b-instruct-v0.1",
  "@cf/mistral/mistral-7b-instruct-v0.2-lora", "@cf/openchat/openchat-3.5-0106",
  "@cf/qwen/qwen1.5-0.5b-chat", "@cf/qwen/qwen1.5-1.8b-chat",
  "@cf/qwen/qwen1.5-14b-chat-awq", "@cf/qwen/qwen1.5-7b-chat-awq",
  "@cf/thebloke/discolm-german-7b-v1-awq", "@cf/tinyllama/tinyllama-1.1b-chat-v1.0",
  "@hf/mistralai/mistral-7b-instruct-v0.2", "@hf/nexusflow/starling-lm-7b-beta",
  "@hf/nousresearch/hermes-2-pro-mistral-7b", "@hf/thebloke/deepseek-coder-6.7b-base-awq",
  "@hf/thebloke/deepseek-coder-6.7b-instruct-awq", "@hf/thebloke/llama-2-13b-chat-awq",
  "@hf/thebloke/llamaguard-7b-awq", "@hf/thebloke/mistral-7b-instruct-v0.1-awq",
  "@hf/thebloke/neural-chat-7b-v3-1-awq", "@hf/thebloke/openhermes-2.5-mistral-7b-awq",
  "@hf/thebloke/zephyr-7b-beta-awq", "blackboxai", "blackboxai-pro", "Cipher-20b",
  "codellama/CodeLlama-34b-Instruct-hf", "cognitivecomputations/dolphin-2.6-mixtral-8x7b",
  "cognitivecomputations/dolphin-2.9.1-llama-3-70b", "CohereForAI/c4ai-command-r-plus-08-2024",
  "command-r", "databricks/dbrx-instruct", "dbrx-instruct", "deepseek-ai/DeepSeek-V2.5",
  "deepseek-llm-67b-chat", "distil-whisper/distil-large-v3", "flux", "HelpingAI-15B",
  "HelpingAI2-3b", "HelpingAI2-6B", "HelpingAI2-9B", "HelpingAI2.5-10B",
  "Helpingai2.5-10b-1m", "HelpingAI2.5-2B", "HELVETE", "HELVETE-X",
  "HuggingFaceH4/starchat2-15b-v0.1", "HuggingFaceH4/zephyr-7b-alpha",
  "HuggingFaceH4/zephyr-7b-beta", "Meta-Llama-3.1-405B-Instruct-Turbo",
  "Meta-Llama-3.3-70B-Instruct-Turbo", "microsoft/DialoGPT-medium",
  "microsoft/Phi-3-medium-4k-instruct", "microsoft/Phi-3-mini-4k-instruct",
  "microsoft/Phi-3.5-mini-instruct", "microsoft/WizardLM-2-8x22B", "midijourney",
  "mistral", "Mistral-7B-Instruct-v0.2", "mistral-large",
  "mistralai/Mistral-7B-Instruct-v0.2", "mistralai/Mistral-7B-Instruct-v0.3",
  "mistralai/Mixtral-8x22B-Instruct-v0.1", "mistralai/Mixtral-8x7B-Instruct-v0.1",
  "mixtral-8x7b-ddg", "Nous-Hermes-2-Mixtral-8x7B-DPO",
  "NousResearch/Hermes-3-Llama-3.1-8B", "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
  "nvidia/Llama-3.1-Nemotron-70B-Instruct", "openbmb/MiniCPM-Llama3-V-2_5",
  "openchat/openchat-3.6-8b", "p1", "Priya-3B", "qwen-coder", "Qwen-QwQ-32B-Preview",
  "Qwen/Qwen2-72B-Instruct", "Qwen/Qwen2.5-3B-Instruct", "Qwen/Qwen2.5-72B-Instruct",
  "Qwen/Qwen2.5-Coder-32B-Instruct", "Qwen/QwQ-32B-Preview", "Qwen2.5-72B-Instruct"
];

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
        name: 'Processing',
        value: isPro ? 'Priority' : isBeta ? 'Enhanced' : 'Standard',
        icon: <Workflow className="w-3.5 h-3.5" />
      }
    ];

    return (
      <div className={`relative bg-white dark:bg-gray-800 rounded-lg p-3 border transition-colors ${
        isBeta 
          ? 'border-yellow-200 dark:border-yellow-800'
          : isPro 
            ? 'border-purple-200 dark:border-purple-800'
            : 'border-green-200 dark:border-green-800'
      }`}>
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
              <h3 className="font-medium text-sm truncate" title={model}>
                {model.split('/').pop()}
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
      </div>
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
      </div>
    </div>
  );
}

export default Models;
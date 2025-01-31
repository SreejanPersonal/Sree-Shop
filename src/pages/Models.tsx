import React, { useState, useMemo } from 'react';
import { Star, Check, Search, X, ChevronDown, Zap, Shield } from 'lucide-react';

// Model data remains the same
const freeModels = [
  "claude-3-5-sonnet-20240620",
  "claude-3-5-sonnet",
  "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
  "deepseek-r1",
  "deepseek-v3",
  "gpt-4o",
  "gpt-4o-2024-05-13",
  "Meta-Llama-3.3-70B-Instruct-Turbo"
];

const paidModels = [
  "gpt-3.5-turbo", "gpt-3.5-turbo-202201", "gpt-4o", "gpt-4o-2024-05-13",
  "gpt-4o-mini-ddg", "gpt-4o-real", "deepseek-r1", "deepseek-v3",
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
  if (model.includes('gpt') || model.includes('openai')) return 'OpenAI';
  if (model.includes('claude')) return 'Anthropic';
  if (model.includes('gemini') || model.includes('google')) return 'Google';
  if (model.includes('llama') || model.includes('meta')) return 'Meta';
  if (model.includes('mistral')) return 'Mistral AI';
  if (model.includes('qwen')) return 'Qwen';
  if (model.includes('deepseek')) return 'DeepSeek';
  if (model.includes('yi')) return '01.AI';
  return 'Other';
}

// Custom dropdown component remains the same
const ProviderDropdown = ({ value, onChange, providers }: { 
  value: string | null, 
  onChange: (value: string | null) => void,
  providers: string[]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between gap-2 group"
      >
        <span className="text-sm font-medium">
          {value || 'All Providers'}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg backdrop-blur-sm">
          <button
            onClick={() => {
              onChange(null);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            All Providers
          </button>
          {providers.map(provider => (
            <button
              key={provider}
              onClick={() => {
                onChange(provider);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
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

  const filteredPaidModels = useMemo(() => 
    filterModels(paidModels)
  , [searchTerm, selectedProvider]);

  const noResults = filteredFreeModels.length === 0 && filteredPaidModels.length === 0;

  const ModelCard = ({ model, isPro }: { model: string, isPro: boolean }) => (
    <div className={`group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-${isPro ? 'purple' : 'green'}-500 dark:hover:border-${isPro ? 'purple' : 'green'}-500 transition-all hover:shadow-lg`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"></div>
      <div className="relative h-full p-4 flex flex-col">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-medium text-sm line-clamp-2">{model}</h3>
            {isPro && <Star className="w-4 h-4 flex-shrink-0 text-amber-400" />}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
            Provider: {getProviderFromModel(model)}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-1 text-[10px] rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {isPro ? 'Unlimited RPM' : '3 RPM'}
            </span>
            <span className="px-2 py-1 text-[10px] rounded-full bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              {isPro ? 'Original Context' : '4K Context'}
            </span>
          </div>
          <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded-full ${
            isPro 
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
              : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
          }`}>
            {isPro ? 'Pro' : 'Free'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Available Models</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Access a wide range of state-of-the-art AI models
          </p>

          {/* Search and Filter */}
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

          {/* No Results Message */}
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

        {/* Free Models Section */}
        {filteredFreeModels.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Free Tier Models</h2>
              <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                {filteredFreeModels.length} models
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredFreeModels.map((model) => (
                <ModelCard key={model} model={model} isPro={false} />
              ))}
            </div>
          </div>
        )}

        {/* Pro Models Section */}
        {filteredPaidModels.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Pro Tier Models</h2>
              <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                {filteredPaidModels.length} models
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredPaidModels.map((model) => (
                <ModelCard key={model} model={model} isPro={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Models;
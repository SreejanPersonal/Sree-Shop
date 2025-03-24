import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useMemo } from 'react';
import { Crown, Sparkles } from 'lucide-react';
import freeModels from '../utility/models/freeModels.json';
import betaModels from '../utility/models/betaModels.json';
import paidModels from '../utility/models/paidModels.json';
import ModelInfoModal from '../models/ModelInfoModal';
import ProviderDropdown from '../models/ProviderDropdown';
import ModelCard from '../models/ModelCard';

function isPremiumModel(model: string): boolean {
  // Claude models 3.5 and above
  if (model.includes('claude-3.5-sonnet') || 
      model.includes('claude-3.7') || 
      model.includes('claude-3-7')) return true;
  
  // OpenAI 'o' Series and GPT-4o
  if (model.includes('o3-') || model.includes('gpt-4o')) return true;
  
  // Gemini 2.0 models
  if (model.includes('gemini-1.5')) return true;
  
  // Llama 3.3 models
  if (model.includes('llama-3.3') || model.includes('Llama-3.3')) return true;
  
  // Deepseek R1 models
  if (model.includes('deepseek-r1')) return true;

  return false;
}

function getProviderFromModel(model: string) {
  if (model.toLowerCase().includes('deepseek') || model === 'DeepSeekV3') return 'DeepSeek';
  if (model.includes('gpt') || model.includes('openai') || model === 'o3-mini') return 'OpenAI';
  if (model.includes('claude')) return 'Anthropic';
  if (model.includes('gemini') || model.includes('google')) return 'Google';
  if (model.includes('llama') || model.includes('meta')) return 'Meta';
  if (model.includes('mistral')) return 'Mistral AI';
  if (model.includes('qwen')) return 'Qwen';
  if (model.includes('yi')) return '01.AI';
  if (model.includes('flux')) return 'Flux';
  return 'Other';
}

function Models() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<{
    name: string;
    provider: string;
    isPro: boolean;
    isBeta: boolean;
    isImage?: boolean;
  } | null>(null);

  const providers = useMemo(() => 
    Array.from(new Set([
      ...freeModels.map(getProviderFromModel),
      ...betaModels.map(getProviderFromModel),
      ...paidModels.map(getProviderFromModel)
    ])).sort()
  , []);

  const isImageModel = (model: string) => model.includes("flux-");

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

  const filteredPaidModels = useMemo(() => {
    const filtered = filterModels(paidModels);
    
    // Get premium and standard models
    const premium = filtered.filter(isPremiumModel);
    const standard = filtered.filter(m => !isPremiumModel(m));

    // Sort premium models in specific order
    const sortedPremium = [];
    
    // 1. Claude models (3.5 and above)
    sortedPremium.push(
      ...premium.filter(m => m.includes('claude-3.5-sonnet')),
      ...premium.filter(m => m.includes('claude-3.7') || m.includes('claude-3-7'))
    );
    
    // 2. OpenAI models
    sortedPremium.push(
      ...premium.filter(m => m.includes('o3-') || m.includes('gpt-4o'))
    );
    
    // 3. Gemini models
    sortedPremium.push(
      ...premium.filter(m => m.includes('gemini-1.5'))
    );
    
    // 4. Llama models
    sortedPremium.push(
      ...premium.filter(m => m.includes('llama-3.3') || m.includes('Llama-3.3'))
    );
    
    // 5. Deepseek R1 models
    sortedPremium.push(
      ...premium.filter(m => m.includes('deepseek-r1'))
    );

    // Remove duplicates
    const uniquePremium = Array.from(new Set(sortedPremium));

    return {
      premium: uniquePremium,
      standard: standard
    };
  }, [searchTerm, selectedProvider]);

  const betaImageModels = useMemo(() => 
    filteredBetaModels.filter(model => isImageModel(model))
  , [filteredBetaModels]);

  const betaTextModels = useMemo(() => 
    filteredBetaModels.filter(model => !isImageModel(model))
  , [filteredBetaModels]);

  const noResults = filteredFreeModels.length === 0 && 
    filteredBetaModels.length === 0 && 
    filteredPaidModels.premium.length === 0 && 
    filteredPaidModels.standard.length === 0;

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Beta Tier Section */}
        {filteredBetaModels.length > 0 && (
          <div className="mb-16 relative">
            <div className="pt-6 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-yellow-800 dark:text-yellow-400">Beta Tier</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                  {filteredBetaModels.length} models
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                  Free for Limited Time!
                </span>
              </div>
            </div>

            {betaTextModels.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-400 mb-4">
                  Text Generation Models ({betaTextModels.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {betaTextModels.map((model: string) => (
                    <ModelCard 
                      key={model} 
                      model={model} 
                      isPro={false} 
                      isBeta={true} 
                      provider={getProviderFromModel(model)}
                      onClick={() => setSelectedModel({
                        name: model,
                        provider: getProviderFromModel(model),
                        isPro: false,
                        isBeta: true
                      })}
                    />
                  ))}
                </div>
              </div>
            )}

            {betaImageModels.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
                  Image Generation Models ({betaImageModels.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {betaImageModels.map((model: string) => (
                    <ModelCard 
                      key={model} 
                      model={model} 
                      isPro={false} 
                      isBeta={true} 
                      provider={getProviderFromModel(model)}
                      onClick={() => setSelectedModel({
                        name: model,
                        provider: getProviderFromModel(model),
                        isPro: false,
                        isBeta: true,
                        isImage: true
                      })}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Free Tier Section */}
        {filteredFreeModels.length > 0 && (
          <div className="mb-16 relative">
            <div className="pt-6 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-400">Free Tier</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                  {filteredFreeModels.length} models
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {filteredFreeModels.map((model: string) => (
                <ModelCard 
                  key={model} 
                  model={model} 
                  isPro={false} 
                  isBeta={false} 
                  provider={getProviderFromModel(model)}
                  onClick={() => setSelectedModel({
                    name: model,
                    provider: getProviderFromModel(model),
                    isPro: false,
                    isBeta: false
                  })}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pro Tier Section */}
        {(filteredPaidModels.premium.length > 0 || filteredPaidModels.standard.length > 0) && (
          <div className="relative mb-16">
            <div className="pt-6 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400">Pro Tier</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Access our comprehensive collection of advanced language models
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                  {filteredPaidModels.premium.length + filteredPaidModels.standard.length} models
                </span>
                {filteredPaidModels.premium.length > 0 && (
                  <span className="px-3 py-1 text-sm font-medium bg-gradient-premium text-white rounded-full shadow-premium-sm">
                    {filteredPaidModels.premium.length} Premium
                  </span>
                )}
              </div>
            </div>

            {/* Premium Models */}
            {filteredPaidModels.premium.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-flex items-center gap-2">
                  <Crown className="w-6 h-6" />
                  State of the Art Models
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {filteredPaidModels.premium.map((model: string) => (
                    <ModelCard 
                      key={model} 
                      model={model} 
                      isPro={true} 
                      isBeta={false}
                      isPremium={true}
                      provider={getProviderFromModel(model)}
                      onClick={() => setSelectedModel({
                        name: model,
                        provider: getProviderFromModel(model),
                        isPro: true,
                        isBeta: false
                      })}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Standard Pro Models */}
            {filteredPaidModels.standard.length > 0 && (
              <div>
                {filteredPaidModels.premium.length > 0 && (
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-400">
                    Additional Pro Models
                  </h3>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {filteredPaidModels.standard.map((model: string) => (
                    <ModelCard 
                      key={model} 
                      model={model} 
                      isPro={true} 
                      isBeta={false}
                      provider={getProviderFromModel(model)}
                      onClick={() => setSelectedModel({
                        name: model,
                        provider: getProviderFromModel(model),
                        isPro: true,
                        isBeta: false
                      })}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}


        {/* Modal */}
        {selectedModel && (
          <ModelInfoModal
            model={selectedModel.name}
            provider={selectedModel.provider}
            isPro={selectedModel.isPro}
            isBeta={selectedModel.isBeta}
            isImage={selectedModel.isImage}
            onClose={() => setSelectedModel(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Models;

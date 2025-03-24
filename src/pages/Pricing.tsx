import React, { useState } from 'react';
import { Check, ArrowRight, ChevronDown, Info, Rocket, Shield, Sparkles, Crown, AlertTriangle, ChevronUp } from 'lucide-react';
import ApiKeyModal from '../components/ApiKeyModal';
import ContactModal from '../components/ContactModal';
import BetaAccessModal from '../components/BetaAccessModal';

function Pricing() {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeApiSection, setActiveApiSection] = useState<'stable' | 'beta'>('stable');

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start for free, upgrade when you need to
          </p>
          
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium">
              Get OpenAI-level features at <span className="text-blue-600 dark:text-blue-400">90% lower cost</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {/* Free Tier Card */}
          <div className="relative group rounded-2xl h-full hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 opacity-[0.08] dark:opacity-[0.16] rounded-2xl"></div>
            
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 h-full flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 text-white mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 dark:text-gray-400">/forever</span>
                </div>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  Perfect for personal projects
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Get started with unlimited access
                </p>
                
                {/* Free tier limitations warning */}
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-700 dark:text-amber-400">
                      <p className="font-medium mb-1">Important limitations:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Services may be terminated or modified at any time</li>
                        <li>Lower stability during high traffic periods</li>
                        <li>API parameters and limits subject to change</li>
                        <li>No uptime guarantees or SLAs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsible API Sections */}
              <div className="mb-6 space-y-4">
                {/* Stable API Section */}
                <div>
                  <button
                    onClick={() => setActiveApiSection('stable')}
                    className="w-full flex items-center justify-between gap-2 mb-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h4 className="font-medium">Stable API</h4>
                    </div>
                    {activeApiSection === 'stable' ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeApiSection === 'stable' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <ul className="space-y-4 mb-6 pl-2 border-l-2 border-blue-200 dark:border-blue-800">
                      {["3 requests per minute", "4K tokens per response", "4K context window", "100+ AI models access"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="p-0.5 rounded-full bg-gradient-to-br from-gray-500 to-gray-600">
                            <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
                              <Check className="w-4 h-4 text-gray-600" />
                            </div>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Beta API Section */}
                <div>
                  <button
                    onClick={() => setActiveApiSection('beta')}
                    className="w-full flex items-center justify-between gap-2 mb-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <h4 className="font-medium">Beta API</h4>
                      <div className="px-2 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full">
                        New
                      </div>
                    </div>
                    {activeApiSection === 'beta' ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeApiSection === 'beta' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <ul className="space-y-4 mb-6 pl-2 border-l-2 border-amber-200 dark:border-amber-800">
                      {[
                        "10 requests per minute",
                        "8K tokens per response",
                        "32K context window",
                        "Latest cutting-edge models",
                        "Early access to new features",
                        "Dashboard access"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="p-0.5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
                            <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
                              <Check className="w-4 h-4 text-amber-600" />
                            </div>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <button
                  onClick={() => setIsApiKeyModalOpen(true)}
                  className="w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-medium"
                >
                  Get Stable API
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium"
                >
                  Get Beta Access
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Pro Tier Card */}
          <div className="relative group rounded-2xl h-full hover:scale-105 hover:shadow-xl transition-all duration-300">
            {/* Premium background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-amber-500/20 dark:from-purple-600/30 dark:to-amber-500/30 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-amber-500 opacity-[0.08] dark:opacity-[0.16] rounded-2xl"></div>
            
            {/* Subtle border glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/30 to-amber-500/30 rounded-2xl blur-sm"></div>
            
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-purple-200 dark:border-purple-700 h-full flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-amber-500 text-white text-sm font-medium rounded-full shadow-lg">
                Enterprise Ready
              </div>

              {/* Limited time offer badge */}
              <div className="absolute -right-3 top-6 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-l-full shadow-lg">
                Limited Time Offer
              </div>

              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-amber-500 text-white mb-4 shadow-lg">
                  <Crown className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">Pro</h3>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">☕️</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/per month</span>
                  <span className="ml-2 line-through text-gray-400 text-lg">$200</span>
                </div>
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                  Save 90% vs OpenAI ($200/mo)
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Enterprise-grade reliability & support
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-4 flex items-center">
                  <span className="w-5 h-5 mr-2 text-purple-500">⚡</span>
                  <span className="text-lg">Premium Features</span>
                </h4>
                <ul className="space-y-4 mb-6">
                  {[
                    "Unlimited requests under fair use",
                    "Original model capabilities",
                    "100+ premium AI models",
                    "Full streaming support",
                    "Priority support",
                    "OpenAI-compatible API",
                    "Dedicated technical account manager",
                    "Custom API integration support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-gradient-to-br from-purple-600 to-amber-500">
                        <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
                          <Check className="w-4 h-4 text-purple-600" />
                        </div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-4 px-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl mb-8">
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Perfect for developers who need reliable API access with premium features and support.
                </p>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 mt-auto bg-gradient-to-r from-purple-600 to-amber-500 text-white hover:from-purple-700 hover:to-amber-600 transition-all duration-300 font-medium"
              >
                Upgrade to Pro
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What's included in the Free tier?",
                answer: "The Free tier includes unlimited API access with a 3 RPM rate limit, 4K context window, and access to 100+ AI models. Perfect for personal projects and testing."
              },
              {
                question: "How much does the Pro tier cost?",
                answer: "Our Pro tier costs just the price of a coffee! This is incredibly cost-effective compared to OpenAI's $200/month plan, saving you up to 90% while providing access to all premium features."
              },
              {
                question: "Can I upgrade or downgrade at any time?",
                answer: "Yes! You can switch between tiers at any time. Your new tier benefits will be available immediately after upgrading."
              },
              {
                question: "Do you offer refunds?",
                answer: "No, we do not offer refunds. However, you can try our Free tier indefinitely before upgrading to ensure our service meets your needs."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency payments for maximum flexibility."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <BetaAccessModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </div>
  );
}

export default Pricing;

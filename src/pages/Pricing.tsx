import React, { useState } from 'react';
import { Check, ArrowRight, AlertCircle, Linkedin, Twitter, Instagram, ChevronDown, Zap, Shield, Sparkles, Coffee, Building2, Info } from 'lucide-react';
import ApiKeyModal from '../components/ApiKeyModal';

interface FAQItem {
  question: string;
  answer: string;
}

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-flex items-center group">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 text-sm z-50">
          <div className="relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45"></div>
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

const faqs: FAQItem[] = [
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
];

function Pricing() {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const tiers = [
    {
      name: "Free",
      icon: <Sparkles className="w-6 h-6" />,
      price: "$0",
      period: "forever",
      highlight: "Perfect for personal projects",
      description: "Get started with unlimited access",
      features: [
        {
          text: "3 requests per minute",
          tooltip: "Rate limit of 3 requests per minute, may reduce during high traffic"
        },
        {
          text: "4K tokens per response",
          tooltip: "Maximum of 4,000 tokens per API response"
        },
        {
          text: "4K context window",
          tooltip: "Process up to 4,000 tokens of context in each request"
        },
        {
          text: "100+ AI models access",
          tooltip: "Access to a wide range of AI models including GPT-4, Claude, and more"
        },
        {
          text: "OpenAI-compatible API",
          tooltip: "Drop-in replacement for OpenAI's API - just change the base URL"
        },
        {
          text: "Community support",
          tooltip: "Get help from our active community on Telegram"
        }
      ],
      cta: "Get Started",
      highlighted: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      icon: <Coffee className="w-6 h-6" />,
      price: "☕️",
      period: "per month",
      highlight: "Save 90% vs OpenAI ($200/mo)",
      description: "What OpenAI charges $200/month for",
      features: [
        {
          text: "Unlimited requests under fair use",
          tooltip: "No hard request limits - use as much as you need within fair usage policy"
        },
        {
          text: "Original model capabilities",
          tooltip: "Access models with their full context window and capabilities"
        },
        {
          text: "100+ premium AI models",
          tooltip: "Full access to all models including latest versions and premium variants"
        },
        {
          text: "Full streaming support",
          tooltip: "Get real-time streaming responses for interactive applications"
        },
        {
          text: "Priority support",
          tooltip: "Get priority assistance from our dedicated support team"
        },
        {
          text: "OpenAI-compatible API",
          tooltip: "Seamlessly replace OpenAI's API with our more affordable solution"
        }
      ],
      cta: "Contact Us",
      highlighted: true,
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  const ContactInfo = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="space-y-4 mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Get in touch through any of these platforms:
          </p>
          <div className="space-y-3">
            <a href="https://linkedin.com/in/developer-sreejan" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/Anand_Sreejan" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Twitter className="w-5 h-5 text-blue-400" />
              <span>Twitter</span>
            </a>
            <a href="https://t.me/devsdocode" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
        <button
          onClick={() => setShowContactInfo(false)}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start for free, upgrade when you need to
          </p>
          
          {/* OpenAI Comparison Banner */}
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium">
              Get OpenAI-level features at <span className="text-blue-600 dark:text-blue-400">90% lower cost</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl ${
                tier.highlighted
                  ? 'scale-105 shadow-2xl'
                  : 'hover:scale-105 hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-[0.08] dark:opacity-[0.16] rounded-2xl`} />
              
              {/* Card Content */}
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${tier.gradient} text-white mb-4`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">/{tier.period}</span>
                  </div>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {tier.highlight}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`p-0.5 rounded-full bg-gradient-to-br ${tier.gradient}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
                          <Check className={`w-4 h-4 ${
                            tier.highlighted ? 'text-blue-600' : 'text-gray-600'
                          }`} />
                        </div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature.text}
                        <Tooltip content={feature.tooltip}>
                          <Info className="w-4 h-4 ml-1 inline-block text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                        </Tooltip>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    if (tier.name === "Free") {
                      setIsApiKeyModalOpen(true);
                    } else {
                      setShowContactInfo(true);
                    }
                  }}
                  className={`w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-all duration-300 font-medium`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* Modals */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />
      {showContactInfo && <ContactInfo />}
    </div>
  );
}

export default Pricing;
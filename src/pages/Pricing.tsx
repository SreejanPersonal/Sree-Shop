import React, { useState } from 'react';
import { Check, ArrowRight, AlertCircle, Linkedin, Twitter, Instagram, ChevronDown, Zap, Shield, Sparkles, Coffee, Building2, Info } from 'lucide-react';
import ApiKeyModal from '../components/ApiKeyModal';
import ContactModal from '../components/ContactModal';
import BetaAccessModal from '../components/BetaAccessModal';

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
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
                      setIsContactModalOpen(true);
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
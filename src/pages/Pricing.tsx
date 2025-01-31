import React, { useState } from 'react';
import { Check, ArrowRight, AlertCircle, Linkedin, Twitter, Instagram, ChevronDown, Zap, Shield, Sparkles, Coffee, Building2 } from 'lucide-react';
import ApiKeyModal from '../components/ApiKeyModal';

interface FAQItem {
  question: string;
  answer: string;
}

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
        "3 requests per minute",
        "4K tokens per response",
        "4K context window",
        "100+ AI models access",
        "OpenAI-compatible API",
        "Community support"
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
        "Unlimited requests",
        "No token limits",
        "100+ AI models access",
        "Full streaming support",
        "Priority support",
        "OpenAI-compatible API"
      ],
      cta: "Contact Us",
      highlighted: true,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "Business",
      icon: <Building2 className="w-6 h-6" />,
      price: "Custom",
      period: "based on usage",
      highlight: "Enterprise-grade reliability",
      description: "Tailored solutions for large-scale needs",
      features: [
        "Everything in Pro",
        "90% cost savings vs direct API",
        "Custom rate limits",
        "Dedicated support",
        "SLA guarantee",
        "Custom features"
      ],
      cta: "Contact Sales",
      highlighted: false,
      gradient: "from-purple-600 to-pink-600"
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
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
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
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
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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
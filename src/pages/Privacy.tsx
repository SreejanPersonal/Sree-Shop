import React, { useState } from 'react';
import { Shield, Lock, Eye, FileText, Server, Users, HelpCircle, ChevronDown, Github, Youtube, Linkedin, Instagram } from 'lucide-react';

// Define types for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

function Privacy() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "Will Sree.shop stay?",
      answer: "Probably. We do not plan to quit anytime soon."
    },
    {
      question: "How do you afford this?",
      answer: "We don't. We are losing money with this."
    },
    {
      question: "How is this free?",
      answer: "We hate paid-only stuff."
    },
    {
      question: "What if I surpass the token limit?",
      answer: "You won't be blocked immediately, we'll warn you about your usage."
    },
    {
      question: "Why doesn't the playground work?",
      answer: "If the bot is offline, it can't work."
    },
    {
      question: "How many r in strawberry?",
      answer: "No idea, ask o1 or deepseek."
    },
    {
      question: "Do you sell my data to shadowy organizations?",
      answer: "No, we can barely organize our own code repositories."
    },
    {
      question: "Can I trust you with my deepest secrets?",
      answer: "We recommend therapy for that, but your API requests are safe with us."
    },
    {
      question: "What happens if the internet breaks?",
      answer: "We'll finally go outside, we guess."
    }
  ];
  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-lg">
            <Shield className="w-4 h-4" />
            <span>Privacy Matters</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 dark:from-blue-300 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
              Your Privacy is Our Priority
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are committed to protecting your personal information and being transparent about our data practices.
          </p>
        </div>

        {/* Main content with card animations */}
        <div className="space-y-12">
          {/* Data Collection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-200 bg-clip-text text-transparent">
                  Data Collection
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  We collect minimal data necessary to provide and improve our services. This includes:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                      API Usage
                    </h3>
                    <p className="text-sm">
                      Information about API requests and token usage to ensure service quality.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                      Account Information
                    </h3>
                    <p className="text-sm">
                      Basic details needed to create and manage your account if you choose to register.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                      Communication Data
                    </h3>
                    <p className="text-sm">
                      Records of your interactions with our support team to provide better assistance.
                    </p>
                  </div>
                </div>
                
                <p className="mt-4">
                  We do not collect any sensitive personal information without your explicit consent.
                </p>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-300 dark:to-purple-200 bg-clip-text text-transparent">
                  Data Usage
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  The data we collect is used for the following purposes:
                </p>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 z-10"></div>
                  
                  <div className="space-y-4 relative z-20 pl-10">
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Providing and improving our services</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Personalizing your experience</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Analyzing usage patterns</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Communicating with you</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 mt-6 border-l-4 border-purple-500">
                  <p className="text-purple-800 dark:text-purple-300 font-medium">
                    We do not sell or share your personal information with third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party APIs */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                  <Server className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-200 bg-clip-text text-transparent">
                  Third-Party APIs
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  We utilize APIs from third-party providers to deliver our services. Here's the lowdown:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2">
                      OpenAI
                    </h3>
                    <p className="text-sm">
                      For language model magic. We send your prompts to OpenAI's APIs to generate responses.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                      Anthropic
                    </h3>
                    <p className="text-sm">
                      Another language model maestro. We might use Anthropic's APIs as well for diverse and robust responses.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2">
                      Google
                    </h3>
                    <p className="text-sm">
                      Because who doesn't love Google? We may use Google APIs for various backend functionalities.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  Please review the privacy policies of these third-party providers to understand their data practices. We chose them because they are reputable, but hey, we don't control everything!
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-300 dark:to-blue-200 bg-clip-text text-transparent">
                  Your Rights
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  You have rights regarding your personal data, even though we barely collect any.
                </p>

                <div className="space-y-4 relative z-20 pl-10">
                  <div className="relative">
                    <p className="font-medium">Access: You can ask us what little data we have on you. We'll probably be surprised too.</p>
                  </div>

                  <div className="relative">
                    <p className="font-medium">Correction: If something's inaccurate, let us know. Though, again, what data?</p>
                  </div>

                  <div className="relative">
                    <p className="font-medium">Deletion: Want us to delete your data? Sure, if we can find it.</p>
                  </div>
                </div>

                <p className="mt-4">
                  To exercise these rights, contact us. We promise to act on it, or at least look into it, maybe.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Cookies & Tracking
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  Do we use cookies? Maybe. Do we track you? Only to improve your experience... or because we got lost.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>Essential Cookies:</b> For basic site functions. Like keeping the lights on.
                  </li>
                  <li>
                    <b>Analytics Cookies:</b> To see how you use the site. Mostly for our curiosity.
                  </li>
                  <li>
                    <b>Advertising Cookies:</b> Nope. We hate ads as much as you do.
                  </li>
                </ul>

                <p className="mt-4">
                  You can control cookies in your browser settings. If you turn them all off, the site might... still work? Give it a try!
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-5 blur-xl"></div>
            <div className="absolute inset-0.5 bg-white/90 dark:bg-gray-800/90 rounded-xl backdrop-blur-sm z-10"></div>
            
            <div className="relative z-20">
              {/* Section Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4 shadow-lg">
                  <HelpCircle className="w-4 h-4" />
                  <span>Get Answers</span>
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 dark:from-indigo-300 dark:via-purple-300 dark:to-blue-200 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Everything you wanted to know but were afraid to ask. The funny version.
                </p>
              </div>
              
              {/* FAQ Cards - Single Column */}
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
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

          {/* Contact Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Us (Seriously, Though)
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  For real questions about our privacy practices, please reach out to us via our social media channels:
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://t.me/devsdocode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-tertiary hover:text-[#229ED9] dark:text-dark-text-tertiary dark:hover:text-[#229ED9] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </a>
                  <a
                    href="https://instagram.com/sree.shades_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-tertiary hover:text-pink-600 dark:text-dark-text-tertiary dark:hover:text-pink-400 transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://github.com/SreejanPersonal/ai4free-wrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-tertiary hover:text-light-text dark:text-dark-text-tertiary dark:hover:text-dark-text transition-colors flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://youtube.com/@devsdocode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-tertiary hover:text-red-600 dark:text-dark-text-tertiary dark:hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </a>
                  <a
                    href="https://linkedin.com/in/developer-sreejan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text-tertiary hover:text-blue-600 dark:text-dark-text-tertiary dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
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

export default Privacy;

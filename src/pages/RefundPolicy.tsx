import React from 'react';
import { CreditCard, RefreshCcw, Clock, AlertCircle, CheckCircle, HelpCircle, Github, Youtube, Linkedin, Instagram, Server } from 'lucide-react';

function RefundPolicy() {
  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 shadow-lg">
            <CreditCard className="w-4 h-4" />
            <span>Customer Protection</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-300 dark:via-indigo-200 dark:to-blue-200 bg-clip-text text-transparent">
              Refund Policy
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to fair and transparent refund practices to ensure your complete satisfaction with our services.
          </p>
        </div>

        {/* Main content with card animations */}
        <div className="space-y-12">
          {/* Eligibility Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-200 bg-clip-text text-transparent">
Refund Eligibility Section
                </h2>
              </div>
              
              <div className="space-y-8 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed text-lg">
                  At Sree.shop, we maintain a transparent refund policy to ensure your satisfaction and service reliability.
                </p>

                {/* Service Downtime Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">Monthly Downtime</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        <p>Total 6 days downtime in 30 days</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        <p>Continuous 3 days downtime</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">Model Availability</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                        <p>50% of models down for more than 5 days</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                        <p>Top/state-of-art models down for more than 7 days</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* API Compatibility Section */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                      <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">API Compatibility</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-indigo-100 dark:border-indigo-900/50">
                      <p className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">❌ Non-Refundable Cases:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>General tool incompatibility issues</li>
                        <li>Individual service OpenAI compatibility issues</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-indigo-100 dark:border-indigo-900/50">
                      <p className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">✅ Refundable Cases:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Proven non-OpenAI API compatibility</li>
                        <li>Demonstrated OpenAI API incompatibility issues</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg p-4">
                      <p className="text-sm">
                        <strong className="text-indigo-700 dark:text-indigo-300">Note:</strong> Users must provide clear evidence of API incompatibility. Claims will be thoroughly verified before any refund approval.
                      </p>
                    </div>
                  </div>
                </div>

                {/* General Policy Note */}
                <div className="bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl p-6">
                  <p className="text-sm leading-relaxed">
                    This refund policy is designed to balance user protection with service sustainability. All refund requests are carefully reviewed on a case-by-case basis. We strive to maintain 99.99% uptime and will communicate proactively about any service disruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-200 bg-clip-text text-transparent">
                  Refund Process
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  To request a refund, please follow these steps:
                </p>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 z-10"></div>
                  
                  <div className="space-y-8 relative z-20">
                    <div className="flex gap-6 group">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          1
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-5 flex-1">
                        <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">
                          Contact Support
                        </h3>
                        <p className="text-sm">
                          To request a refund, please reach out to us through our preferred social media channels for a faster response:
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
                    
                    <div className="flex gap-6 group">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                          2
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-5 flex-1">
                        <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">
                          Review Process
                        </h3>
                        <p className="text-sm">
                          Our team will review your request within 2 business days and may contact you for additional information.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6 group">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                          3
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-5 flex-1">
                        <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">
                          Refund Processing
                        </h3>
                        <p className="text-sm">
                          If approved, refunds will be processed to the original payment method within 5-7 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-200 bg-clip-text text-transparent">
                  Need Help?
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  If you have any questions or need assistance regarding our refund policy, please reach out to us via our social media channels. We are most responsive on Telegram and Instagram:
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

export default RefundPolicy;

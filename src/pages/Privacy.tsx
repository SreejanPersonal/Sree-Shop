import React from 'react';
import { Lock, Shield, Eye, Database, AlertCircle } from 'lucide-react';

function Privacy() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            <span>Last updated: March 15, 2024</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your privacy is important to us. Here's how we handle your data.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Information Collection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>We collect and process the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Telegram username and ID (for API key generation)</li>
                <li>API usage statistics and logs</li>
                <li>Error reports and performance data</li>
                <li>Payment information (for Pro users, processed securely by our payment provider)</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm">
                  We never store or process the content of your API requests. All data is transmitted securely and not retained beyond the necessary processing time.
                </p>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Your Data</h2>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Service Provision",
                    description: "To provide and maintain our API service"
                  },
                  {
                    title: "Authentication",
                    description: "To verify your identity and manage access"
                  },
                  {
                    title: "Communication",
                    description: "To send service updates and support responses"
                  },
                  {
                    title: "Improvements",
                    description: "To analyze usage patterns and improve our service"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Data Protection</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "End-to-end encryption for all API requests",
                  "Secure API key storage and transmission",
                  "Regular security audits and updates",
                  "Limited employee access to user data"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about our privacy practices or would like to exercise your data rights, please contact us:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/devsdocode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#229ED9] text-white hover:bg-[#229ED9]/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram Support
              </a>
              <a
                href="mailto:privacy@sree.shop"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Privacy Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
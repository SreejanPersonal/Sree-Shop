import React from 'react';
import { Shield, AlertCircle, Check } from 'lucide-react';

function Terms() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Last updated: March 15, 2024</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Please read these terms carefully before using our service
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Agreement Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">1. Agreement to Terms</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                By accessing or using Sree.shop's API services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm">
                  Our service is provided "as is" and "as available" without any warranty of any kind.
                </p>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">2. Usage Guidelines</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Rate Limits</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Free tier users are limited to 3 requests per minute. Pro users enjoy unlimited requests subject to fair usage.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">API Key Usage</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your API key is personal and should not be shared. You are responsible for all activity under your key.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Content Guidelines</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Users must not use the API for illegal, harmful, or abusive purposes. We reserve the right to suspend access for violations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Modifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">3. Service Modifications</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                We reserve the right to modify or discontinue our service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  While we strive for 100% uptime, we do not guarantee uninterrupted service. Please implement appropriate error handling in your applications.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">4. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have any questions about these Terms, please contact us:
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
                href="mailto:support@sree.shop"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
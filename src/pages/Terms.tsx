
import { Shield, AlertCircle, Check, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

function Terms() {
  useEffect(() => {
    // Handle hash navigation on component mount and hash changes
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        // Add a small delay to ensure the element is mounted
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Add offset for fixed headers if needed
            const offset = 80; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Scroll on initial load if hash exists
    scrollToSection();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToSection);

    // Listen for router navigation completion if using React Router
    const handleRouteChange = () => {
      if (window.location.hash) {
        scrollToSection();
      }
    };
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

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

          {/* Premium Services */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">4. Premium Services</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Our Pro tier offers enhanced features including unlimited requests (subject to fair usage), priority support, and access to additional models. Subscription fees are non-refundable except where required by law.
              </p>
              <div className="bg-soft-purple dark:bg-purple-900/30 rounded-xl p-4">
                <p className="text-sm text-purple-800 dark:text-purple-400">
                  Payments are processed securely. Your subscription will automatically renew unless canceled before the renewal date.
                </p>
              </div>
            </div>
          </div>

          {/* Beta Access */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">5. Beta Access</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Beta API access provides early access to new models and features. Beta services are provided for testing purposes only and may contain bugs or errors. We welcome feedback to improve our services.
              </p>
              <div className="bg-soft-blue dark:bg-blue-900/30 rounded-xl p-4">
                <p className="text-sm text-blue-800 dark:text-blue-400">
                  Beta features may be discontinued or significantly changed without notice. Do not use Beta API for production applications.
                </p>
              </div>
            </div>
          </div>

          {/* API Service Availability */}
          <div id="api-availability" className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">6. API Service Availability and Reliability</h2>
              <button
                onClick={() => {
                  // Construct full URL with current location (including port if on localhost)
                  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}#api-availability`;
                  
                  // Update browser URL
                  window.history.pushState({}, '', `#api-availability`);
                  
                  // Scroll to section
                  const element = document.querySelector('#api-availability');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }

                  // Copy to clipboard
                  navigator.clipboard.writeText(url).then(() => {
                    const button = document.querySelector('#copy-link-btn');
                    if (button) {
                      const originalContent = button.innerHTML;
                      button.innerHTML = '<span class="text-green-500">Copied!</span>';
                      setTimeout(() => {
                        button.innerHTML = originalContent;
                      }, 2000);
                    }
                  });
                }}
                id="copy-link-btn"
                className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Copy link
              </button>
            </div>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Beta and Free Stable API Services</h3>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <p className="text-amber-800 dark:text-amber-400">
                      Both Beta and Free Stable API services are provided on an "as available" basis without any guarantee of continuous availability or stability.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Service Status</h4>
                      <p>
                        Users can monitor service availability through our status page at{' '}
                        <a href="https://sree.shop/status" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                          sree.shop/status <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Service Modifications</h3>
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 space-y-4">
                  <p>
                    Sree (devsdocode) reserves the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify, suspend, or terminate any API service at any time without prior notice</li>
                    <li>Change available models in both Free Stable and Beta APIs</li>
                    <li>Modify API parameters, arguments, and configurations</li>
                    <li>Adjust or fine-tune API behavior and responses</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    We recommend implementing robust error handling and fallback mechanisms in your applications to handle potential service changes or interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">7. Contact Us</h2>
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
                href="https://discord.gg/4gGcqsWWde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5865F2] text-white hover:bg-[#5865F2]/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                Discord Support <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;

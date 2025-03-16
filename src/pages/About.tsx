import { FC } from 'react';
import { Shield, Phone, Mail, HelpCircle } from 'lucide-react';

const About: FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're on a mission to make AI accessible to everyone
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              To democratize access to cutting-edge AI technology, empowering developers and businesses to innovate and create impactful solutions.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              To be the leading AI API provider, known for our reliability, affordability, and commitment to ethical AI practices.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-semibold">Contact Us</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Have questions or need assistance? Reach out to our support team.
            </p>
            <div className="text-sm">
              <a href="mailto:support@example.com" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

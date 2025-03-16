import { Shield, Lock, Eye, FileText, Server, Users } from 'lucide-react';

function Privacy() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Privacy Matters</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Your Privacy is Our Priority
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We are committed to protecting your personal information and being transparent about our data practices.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Data Collection */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-blue-500" />
              Data Collection
            </h2>
            <p>
              We collect minimal data necessary to provide and improve our services. This includes:
            </p>
            <ul className="list-disc pl-6">
              <li>API usage data (requests, tokens)</li>
              <li>Account information (if you create an account)</li>
              <li>Communication data (if you contact us)</li>
            </ul>
            <p>
              We do not collect any sensitive personal information without your explicit consent.
            </p>
          </div>

          {/* Data Usage */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-indigo-500" />
              Data Usage
            </h2>
            <p>
              The data we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6">
              <li>Providing and improving our services</li>
              <li>Personalizing your experience</li>
              <li>Analyzing usage patterns</li>
              <li>Communicating with you</li>
            </ul>
            <p>
              We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-purple-500" />
              Data Security
            </h2>
            <p>
              We take data security seriously and implement appropriate measures to protect your information from unauthorized access, use, or disclosure. These measures include:
            </p>
            <ul className="list-disc pl-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits</li>
              <li>Access controls</li>
            </ul>
            <p>
              However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </div>

          {/* Data Retention */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-pink-500" />
              Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              When we no longer need your personal information, we securely delete or anonymize it.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-amber-500" />
              Your Rights
            </h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6">
              <li>Access: You can request access to your personal information.</li>
              <li>Correction: You can request that we correct inaccurate or incomplete personal information.</li>
              <li>Deletion: You can request that we delete your personal information.</li>
              <li>Objection: You can object to the processing of your personal information.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about our privacy policy, please contact us at:
            </p>
            <p>
              Email: support@example.com
            </p>
            <p>
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

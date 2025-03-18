
import { CreditCard, Award, Users, Shield, MapPin } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Sree.shop</h1>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Providing unlimited AI power for everyone, making advanced AI technologies accessible and affordable.
          </p>
        </div>

        <div className="space-y-16">
          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-light-primary-500 dark:text-dark-primary-400" />
              Our Mission
            </h2>
            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
              <p className="mb-4">
                At Sree.shop, our mission is to democratize access to AI technology. We believe powerful AI should not be limited to those who can afford premium prices but should be accessible to everyone, from individual developers to startups and small businesses.
              </p>
              <p>
                We're committed to offering free and affordable access to state-of-the-art AI models, enabling more people to leverage these powerful tools for innovation, education, and creative exploration.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-light-primary-500 dark:text-dark-primary-400" />
              Our Story
            </h2>
            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
              <p className="mb-4">
                Sree.shop began as a personal project by Sreejan, a developer who was frustrated by the high costs and limitations of existing AI services. What started as a simple wrapper API quickly evolved into a comprehensive platform providing affordable access to a wide range of AI models.
              </p>
              <p className="mb-4">
                The project gained traction in developer communities, and a passionate team formed around the vision of making AI accessible to everyone, regardless of their budget or resources.
              </p>
              <p>
                Today, we're proud to serve a growing community of users who are building innovative applications, exploring creative ideas, and learning about AI - all without breaking the bank.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="text-light-primary-500 dark:text-dark-primary-400" />
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p>
                  We're committed to making powerful AI accessible to everyone, regardless of their financial resources or technical expertise.
                </p>
              </div>
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p>
                  We believe in clear, honest communication about our services, pricing, and limitations. No hidden fees, no surprises.
                </p>
              </div>
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>
                  We continuously explore new models, capabilities, and features to provide our users with the best AI experience possible.
                </p>
              </div>
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p>
                  We foster a supportive community of users who share knowledge, provide feedback, and help each other succeed.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-light-primary-500 dark:text-dark-primary-400" />
              Get in Touch
            </h2>
            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
              <p className="mb-4">
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, you can reach us through our community channels:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Telegram: <a href="https://t.me/devsdocode" target="_blank" rel="noopener noreferrer" className="text-light-primary-600 dark:text-dark-primary-400 hover:underline">@devsdocode</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>GitHub: <a href="https://github.com/SreejanPersonal/ai4free-wrapper" target="_blank" rel="noopener noreferrer" className="text-light-primary-600 dark:text-dark-primary-400 hover:underline">SreejanPersonal/ai4free-wrapper</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Instagram: <a href="https://instagram.com/sree.shades_" target="_blank" rel="noopener noreferrer" className="text-light-primary-600 dark:text-dark-primary-400 hover:underline">@sree.shades_</a></span>
                </li>
              </ul>
              <p>
                We value your input and strive to respond to all inquiries as quickly as possible.
              </p>
            </div>
          </section>

          {/* Support Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="text-light-primary-500 dark:text-dark-primary-400" />
              Support Us
            </h2>
            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-sm">
              <p className="mb-4">
                If you find our service valuable, there are several ways you can support us:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Upgrade to a Pro plan for additional features and higher limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Buy us a coffee: <a href="https://buymeacoffee.com/devsdocode" target="_blank" rel="noopener noreferrer" className="text-light-primary-600 dark:text-dark-primary-400 hover:underline">buymeacoffee.com/devsdocode</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Spread the word about our service on social media and in your network</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-light-primary-100 dark:bg-dark-primary-800 mt-0.5">
                    <svg className="w-3 h-3 text-light-primary-600 dark:text-dark-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Contribute to our open-source projects on GitHub</span>
                </li>
              </ul>
              <p>
                Your support helps us maintain and improve our services, ensuring we can continue to provide affordable AI access to everyone.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;

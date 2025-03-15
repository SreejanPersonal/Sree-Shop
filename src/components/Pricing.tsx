
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$29',
    period: 'per month',
    description: 'Perfect for individuals and small projects',
    features: [
      '100K tokens per month',
      'GPT-3.5 Turbo access',
      'Basic rate limits',
      'Community support',
      'Standard API access',
    ],
    isPopular: false,
    buttonText: 'Get Started',
  },
  {
    title: 'Professional',
    price: '$99',
    period: 'per month',
    description: 'Ideal for businesses and growing applications',
    features: [
      '500K tokens per month',
      'GPT-4o access',
      'Higher rate limits',
      'Priority support',
      'Advanced analytics',
      'Multiple API keys',
    ],
    isPopular: true,
    buttonText: 'Get Started',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large-scale and mission-critical applications',
    features: [
      'Unlimited tokens',
      'All models access',
      'Highest rate limits',
      'Dedicated support',
      'Custom integration',
      'SLA guarantees',
      'Compliance assistance',
    ],
    isPopular: false,
    buttonText: 'Contact Sales',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-2">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground">
            Flexible pricing options that grow with your needs. Pay only for what you use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard key={index} className="h-full">
              <div 
                className={`pricing-card h-full flex flex-col ${
                  plan.isPopular ? 'pricing-card-popular border-primary shadow-md' : ''
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-5 right-5 z-10 py-1 px-3 bg-primary text-xs font-semibold text-white rounded-full">
                    Popular
                  </span>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a 
                    href="#contact" 
                    className={`w-full btn ${
                      plan.isPopular ? 'btn-primary' : 'btn-outline'
                    } justify-center`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            All plans include access to our API documentation, SDKs, and developer tools. 
            Need a custom solution? <a href="#contact" className="link">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

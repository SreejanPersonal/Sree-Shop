
import React from 'react';
import { 
  MessageSquare, 
  Image, 
  FileAudio, 
  Zap, 
  Lock, 
  BarChart 
} from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Chat Completions',
    description: 'Access the latest GPT-4o models for natural language understanding and generation.'
  },
  {
    icon: <Image className="h-8 w-8 text-primary" />,
    title: 'Vision Models',
    description: 'Analyze and understand images with multimodal AI capabilities.'
  },
  {
    icon: <FileAudio className="h-8 w-8 text-primary" />,
    title: 'Text-to-Speech',
    description: 'Convert text into natural, human-like speech with multiple voices.'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'High Performance',
    description: 'Low-latency responses with high throughput for demanding applications.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Secure Access',
    description: 'Enterprise-grade security with dedicated API keys and usage monitoring.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Usage Analytics',
    description: 'Track your API usage with detailed analytics and cost management tools.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-2">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Capabilities</h2>
          <p className="text-lg text-muted-foreground">
            Unlock the full potential of OpenAI's technology with our comprehensive API access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} className="h-full">
              <div className="feature-card h-full flex flex-col">
                <div className="mb-4 p-2 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#pricing" className="btn btn-primary btn-lg">
            Start Building with AI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

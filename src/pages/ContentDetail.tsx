import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Database, Bot, Globe } from 'lucide-react';

interface ContentDetails {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
  heroImage: string;
  content: React.ReactNode;
  color: string;
}

const ContentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<ContentDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate loading content based on ID
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      // Sample content data
      const contentData: Record<string, ContentDetails> = {
        'api-services': {
          id: 'api-services',
          title: 'Comprehensive API Services for Developers',
          subtitle: 'Explore our collection of powerful APIs for seamless integration into your projects',
          category: 'API',
          date: 'March 15, 2025',
          readTime: '8 min read',
          author: 'Sreejan',
          authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sreejan',
          heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
          color: 'from-blue-500 to-indigo-600',
          content: (
            <>
              <p className="mb-6 text-lg">
                In today's interconnected digital landscape, APIs (Application Programming Interfaces) serve as the fundamental building blocks that enable seamless communication between different software systems. As a developer passionate about creating tools that empower others, I've developed several APIs that address common challenges in web development, data processing, and AI integration.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-blue-600 dark:text-blue-400">The AI Integration API</h2>
              <p className="mb-6">
                My flagship API offering provides a unified interface to access multiple AI models through a single endpoint. Instead of managing different API keys, authentication methods, and response formats for each AI provider, developers can use this API to access GPT-4, Claude, Gemini, and other leading models.
              </p>
              
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold mb-3">Sample API Request</h3>
                <pre className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary p-4 rounded-lg overflow-x-auto text-sm">
{`fetch('https://api.sree.shop/v1/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Explain APIs in simple terms.' }
    ]
  })
})`}
                </pre>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-blue-600 dark:text-blue-400">Data Processing API</h2>
              <p className="mb-6">
                Working with large datasets can be challenging, especially when you need to perform complex transformations or extract specific insights. My Data Processing API simplifies these tasks with endpoints for data transformation, analysis, and visualization.
              </p>
            </>
          )
        },
        'jarvis-ai': {
          id: 'jarvis-ai',
          title: 'Meet Jarvis: My Advanced AI Assistant',
          subtitle: 'How I built a personal AI assistant to automate tasks and enhance productivity',
          category: 'AI',
          date: 'March 10, 2025',
          readTime: '10 min read',
          author: 'Sreejan',
          authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sreejan',
          heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
          color: 'from-emerald-500 to-teal-600',
          content: (
            <>
              <p className="mb-6">
                Inspired by Tony Stark's AI companion in the Iron Man films, I set out to create my own version of Jarvis—a personal AI assistant designed to automate repetitive tasks, answer questions, and help manage my digital life.
              </p>
              <h2 className="text-2xl font-bold mb-4 mt-8 text-emerald-600 dark:text-emerald-400">The Architecture Behind Jarvis</h2>
              <p className="mb-6">
                Jarvis is built on a modular architecture that combines several key components including natural language understanding, custom-trained models, and a voice interface.
              </p>
            </>
          )
        },
        'web-projects': {
          id: 'web-projects',
          title: 'Web Development Portfolio: Modern Frameworks & Design',
          subtitle: 'A showcase of my latest web projects using React, Next.js, and cutting-edge design principles',
          category: 'Web',
          date: 'March 5, 2025',
          readTime: '7 min read',
          author: 'Sreejan',
          authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sreejan',
          heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
          color: 'from-purple-500 to-pink-600',
          content: (
            <>
              <p className="mb-6">
                Web development continues to evolve at a rapid pace, with new frameworks, libraries, and design paradigms emerging regularly.
              </p>
              <h2 className="text-2xl font-bold mb-4 mt-8 text-purple-600 dark:text-purple-400">E-commerce Platform with Next.js</h2>
              <p className="mb-6">
                One of my most comprehensive projects has been building a full-featured e-commerce platform using Next.js and modern design principles.
              </p>
            </>
          )
        }
      };

      if (id && id in contentData) {
        setContent(contentData[id]);
      }
      
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-lg opacity-20 animate-pulse"></div>
            <div className="relative w-20 h-20 border-4 border-blue-100 dark:border-blue-900/50 rounded-full">
              <div className="absolute inset-0 border-4 border-blue-500 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary animate-pulse">
            Loading content...
          </p>
        </div>
      </div>
    );
  }

  // Content not found
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg">
        <div className="text-center max-w-md px-4">
          <h2 className="text-2xl font-bold mb-4">Content Not Found</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
            The content you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/content" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Content Hub
          </Link>
        </div>
      </div>
    );
  }

  // Main content view
  return (
    <div className="min-h-screen bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg">
      {/* Hero Section */}
      <div 
        className="relative h-80 md:h-96 lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${content.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-4xl mx-auto w-full">
            <Link 
              to="/content" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Content Hub
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${content.color} text-white`}>
                {content.category}
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {content.date}
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {content.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {content.title}
            </h1>
            
            <p className="text-lg text-white/80 mb-6">
              {content.subtitle}
            </p>
            
            <div className="flex items-center gap-3">
              <img 
                src={content.authorImage} 
                alt={content.author} 
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <span className="text-white font-medium">
                {content.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-light-bg dark:bg-dark-bg rounded-2xl shadow-xl p-6 md:p-10 mb-10">
          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content.content}
          </div>
          
          {/* Interaction Footer */}
          <div className="mt-12 pt-6 border-t border-light-primary-100 dark:border-dark-primary-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/content" 
                className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Content Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;

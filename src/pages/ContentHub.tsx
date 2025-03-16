import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Cpu, 
  Bot, 
  Globe, 
  Database, 
  ArrowRight, 
  Youtube, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Cloud,
  Lock,
  Smartphone,
  BarChart,
  Camera,
  Server,
  Zap
} from 'lucide-react';

// Interface for content card data
interface ContentCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  date: string;
  category: string;
}

const ContentHub = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<Record<string, boolean>>({});
  const [showAllTags, setShowAllTags] = useState(false);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const MAX_VISIBLE_TAGS = 6;

  // Sample content cards data
  const contentCards: ContentCard[] = [
    {
      id: 'api-services',
      title: 'API Services',
      description: 'Explore our collection of powerful APIs for developers, including AI integration, data processing, and more.',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      date: 'March 15, 2025',
      category: 'API'
    },
    {
      id: 'jarvis-ai',
      title: 'Jarvis AI Assistant',
      description: 'Meet Jarvis, my advanced AI assistant that helps automate tasks, answer questions, and make your life easier.',
      icon: <Bot className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      date: 'March 10, 2025',
      category: 'AI'
    },
    {
      id: 'web-projects',
      title: 'Web Development Projects',
      description: 'A showcase of my latest web development projects, featuring modern frameworks and cutting-edge design.',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      date: 'March 5, 2025',
      category: 'Web'
    },
    {
      id: 'python-tools',
      title: 'Python Tools & Scripts',
      description: 'Useful Python tools and scripts to automate workflows, process data, and solve common programming challenges.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      date: 'February 28, 2025',
      category: 'Python'
    },
    {
      id: 'ml-experiments',
      title: 'Machine Learning Experiments',
      description: 'Exploring the frontiers of machine learning with experiments, models, and practical applications.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-red-500 to-rose-600',
      date: 'February 20, 2025',
      category: 'ML'
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture',
      description: 'Best practices and implementations for scalable cloud infrastructure using AWS, Azure, and GCP.',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-sky-500 to-blue-600',
      date: 'February 15, 2025',
      category: 'Cloud'
    },
    {
      id: 'cybersecurity-tips',
      title: 'Cybersecurity Tips',
      description: 'Essential security practices, tools, and techniques to protect your applications and data from threats.',
      icon: <Lock className="w-6 h-6" />,
      color: 'from-slate-500 to-slate-700',
      date: 'February 10, 2025',
      category: 'Security'
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Tutorials and insights on building cross-platform mobile applications with React Native and Flutter.',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      date: 'February 5, 2025',
      category: 'Mobile'
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization',
      description: 'Creating compelling and interactive data visualizations using D3.js, Chart.js, and other libraries.',
      icon: <BarChart className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      date: 'January 30, 2025',
      category: 'DataViz'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Exploring image recognition, object detection, and other computer vision applications with Python.',
      icon: <Camera className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-600',
      date: 'January 25, 2025',
      category: 'CV'
    },
    {
      id: 'serverless-functions',
      title: 'Serverless Functions',
      description: 'Building scalable and cost-effective applications using serverless architecture and FaaS.',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      date: 'January 20, 2025',
      category: 'Serverless'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Techniques and strategies to optimize web applications for speed, efficiency, and better user experience.',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-400 to-amber-600',
      date: 'January 15, 2025',
      category: 'Performance'
    }
  ];

  const categories = Array.from(new Set(contentCards.map(card => card.category)));

  // Filter content cards based on active filter
  const filteredCards = activeFilter 
    ? contentCards.filter(card => card.category === activeFilter)
    : contentCards;

  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-id');
          if (id) {
            setIsIntersecting(prev => ({
              ...prev,
              [id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all card elements
    Object.entries(cardRefs.current).forEach(([id, ref]) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredCards]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Youtube className="w-4 h-4" />
              <span>Content Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Explore My Digital Universe
            </h1>
            
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-8">
              Dive into my collection of projects, tutorials, and experiments across APIs, AI, web development, and more.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12 relative will-change-transform">
            <div 
              className={`transition-transform transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden will-change-transform will-change-opacity ${
                showAllTags ? 'max-h-96 opacity-100 transform-gpu translate-y-0' : 'max-h-12 opacity-100 transform-gpu translate-y-0'
              }`}
              style={{ 
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="flex flex-wrap justify-center gap-3 mb-3 transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <button
                  onClick={() => setActiveFilter(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === null
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                      : 'bg-white/80 dark:bg-dark-bg-tertiary/80 backdrop-blur-sm border border-light-primary-100 dark:border-dark-primary-800 text-light-text-secondary dark:text-dark-text-secondary hover:shadow-lg hover:scale-105'
                  }`}
                >
                  All
                </button>
                
                {categories.slice(0, MAX_VISIBLE_TAGS).map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                        : 'bg-white/80 dark:bg-dark-bg-tertiary/80 backdrop-blur-sm border border-light-primary-100 dark:border-dark-primary-800 text-light-text-secondary dark:text-dark-text-secondary hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {categories.length > MAX_VISIBLE_TAGS && (
                <div 
                  className="flex flex-wrap justify-center gap-3 transform-gpu transition-transform transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top will-change-transform will-change-opacity"
                  style={{ 
                    opacity: showAllTags ? '1' : '0',
                    transform: showAllTags ? 'translateY(0)' : 'translateY(-10px)'
                  }}
                >
                  {categories.slice(MAX_VISIBLE_TAGS).map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                          : 'bg-white/80 dark:bg-dark-bg-tertiary/80 backdrop-blur-sm border border-light-primary-100 dark:border-dark-primary-800 text-light-text-secondary dark:text-dark-text-secondary hover:shadow-lg hover:scale-105'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {categories.length > MAX_VISIBLE_TAGS && (
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg flex items-center justify-center hover:shadow-blue-500/30 hover:scale-110 active:scale-95 transform-gpu transition-transform transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="relative w-5 h-5 transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform" 
                    style={{
                      transform: showAllTags ? 'rotateX(180deg)' : 'rotateX(0deg)'
                    }}
                  >
                    <ChevronDown className={`w-5 h-5 absolute top-0 left-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${showAllTags ? 'opacity-0' : 'opacity-100'}`} />
                    <ChevronUp className={`w-5 h-5 absolute top-0 left-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${showAllTags ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'rotateX(180deg)' }} />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Cards Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((card, index) => (
              <div 
                key={card.id}
                ref={el => cardRefs.current[card.id] = el}
                data-id={card.id}
                className={`group relative transform transition-all duration-700 ${
                  isIntersecting[card.id] 
                    ? 'translate-y-0 opacity-100 rotate-0' 
                    : 'translate-y-12 opacity-0 rotate-2'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link to={`/content/${card.id}`} className="block h-full perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-bg-tertiary to-light-bg-quaternary dark:from-dark-bg-tertiary dark:to-dark-bg-quaternary rounded-2xl transform transition-all duration-500 group-hover:scale-[0.98]"></div>
                  
                  {/* Card glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-sm transition-all duration-500 group-hover:blur-md animate-pulse`}></div>
                  
                  {/* Card content */}
                  <div className="relative h-full p-6 rounded-2xl border border-light-primary-100 dark:border-dark-primary-800 bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm flex flex-col transform transition-all duration-500 group-hover:translate-z-10 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:scale-[1.02] preserve-3d">
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${card.color} text-white shadow-sm`}>
                        {card.category}
                      </span>
                      <span className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary flex items-center">
                        {card.date}
                      </span>
                    </div>
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {card.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 flex-grow">
                      {card.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentHub;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug, urlFor, formatDate } from '../utility/sanity';

interface ContentDetails {
  _id: string;
  title: string;
  subtitle: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    image: any;
  };
  mainImage: any;
  body: string;
  iconColor: string;
}

const ContentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<ContentDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch content from Sanity based on slug
  useEffect(() => {
    async function fetchContent() {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const post = await getPostBySlug(id);
        
        if (post) {
          setContent(post);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching content:', error);
        setIsLoading(false);
      }
    }
    
    fetchContent();
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
        style={{ backgroundImage: `url(${content.mainImage ? urlFor(content.mainImage).url() : ''})` }}
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
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${content.iconColor} text-white`}>
                {content.category}
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(content.publishedAt)}
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
                src={content.author?.image ? urlFor(content.author.image).width(40).height(40).url() : 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'} 
                alt={content.author?.name || 'Author'} 
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <span className="text-white font-medium">
                {content.author?.name || 'Anonymous'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-light-bg dark:bg-dark-bg rounded-2xl shadow-xl p-6 md:p-10 mb-10">
          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-light-text dark:prose-headings:text-dark-text prose-p:text-light-text-secondary dark:prose-p:text-dark-text-secondary prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md">
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus as any}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md my-4"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={`${className} px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-800`} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({node, ...props}) => <h1 className="text-3xl mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl mt-5 mb-2" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300" {...props} />
                ),
                img: ({node, ...props}) => (
                  <img className="my-6 mx-auto" {...props} />
                ),
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700" {...props} />
                  </div>
                ),
                th: ({node, ...props}) => (
                  <th className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props} />
                ),
                td: ({node, ...props}) => (
                  <td className="px-4 py-3 whitespace-nowrap text-sm" {...props} />
                ),
              }}
            >
              {content.body || ''}
            </ReactMarkdown>
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

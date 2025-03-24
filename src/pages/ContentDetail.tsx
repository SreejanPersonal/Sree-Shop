import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug, formatDate, calculateReadTime } from '../utility/contentLoader';
import ReadingProgress from '../components/ReadingProgress';
import TableOfContents from '../components/TableOfContents';
import LikeButton from '../components/LikeButton';
import SaveButton from '../components/SaveButton';
import ShareButton from '../components/ShareButton';
import '../styles/postDetail.css';

interface ContentDetails {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    image: string;
  };
  mainImage?: string;
  body: string;
  iconColor: string;
}

const ContentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<ContentDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [estimatedReadTime, setEstimatedReadTime] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount and calculate read time
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Calculate estimated read time based on content length
    if (content?.body) {
      setEstimatedReadTime(calculateReadTime(content.body));
    }
  }, [content]);

  // Fetch content based on slug
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
        console.error('Error loading content:', error);
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
    <div className="min-h-screen bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg" ref={articleRef}>
      {/* Reading Progress Bar */}
      {content && <ReadingProgress target={articleRef} />}
      
      {/* Hero Section */}
      <div 
        className="relative h-80 md:h-96 lg:h-[500px] bg-cover bg-center"
        style={{ 
          backgroundImage: content.mainImage ? `url(${content.mainImage})` : undefined,
          backgroundColor: !content.mainImage ? '#1a1a1a' : undefined
        }}
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
                {content.readTime || estimatedReadTime}
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
                src={content.author?.image || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar with Table of Contents - Desktop */}
          <div className="hidden lg:block lg:col-span-3">
            {content && <TableOfContents contentRef={contentRef} slug={id} />}
          </div>
          
          {/* Article Content */}
          <div className="lg:col-span-9">
            <div className="bg-light-bg dark:bg-dark-bg rounded-2xl shadow-xl p-6 md:p-10 mb-10">
              {/* Estimated Reading Time */}
              {estimatedReadTime && (
                <div className="mb-6 flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{estimatedReadTime}</span>
                </div>
              )}
              
              {/* Content */}
              <div 
                ref={contentRef} 
                className="post-content prose prose-lg dark:prose-invert max-w-none"
              >
                <ReactMarkdown
                  components={{
                    code({node, inline, className, children, ...props}: any) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <div className="code-block-wrapper relative">
                          <div className="code-language absolute top-0 right-0 bg-gray-700 text-xs text-white px-2 py-1 rounded-bl-md rounded-tr-md">
                            {match[1]}
                          </div>
                          <SyntaxHighlighter
                            style={vscDarkPlus as any}
                            language={match[1]}
                            PreTag="div"
                            className="rounded-md my-4 !pt-8"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <code className={`${className} px-1 py-0.5 rounded`} {...props}>
                          {children}
                        </code>
                      );
                    },
                    a({node, href, children, ...props}: any) {
                      const isExternal = href?.startsWith('http');
                      return (
                        <a 
                          href={href} 
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          {...props}
                        >
                          {children}
                        </a>
                      );
                    },
                    img({node, ...props}: any) {
                      return (
                        <figure className="my-8">
                          <img className="w-full rounded-lg shadow-lg" {...props} />
                          {props.alt && <figcaption className="text-center text-sm mt-2 text-light-text-secondary dark:text-dark-text-secondary">{props.alt}</figcaption>}
                        </figure>
                      );
                    },
                    blockquote({node, children, ...props}: any) {
                      return (
                        <blockquote {...props}>
                          {children}
                        </blockquote>
                      );
                    },
                  }}
                >
                  {content?.body || ''}
                </ReactMarkdown>
              </div>
              
              {/* Interaction Footer */}
              <div className="mt-12 pt-6 border-t border-light-primary-100 dark:border-dark-primary-800">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Link 
                    to="/content" 
                    className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Content Hub
                  </Link>
                  
                  <div className="flex items-center gap-4">
                    <LikeButton />
                    <SaveButton />
                    <ShareButton title={content.title} slug={id || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;

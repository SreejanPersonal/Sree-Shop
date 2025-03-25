import React, { useEffect, useState } from 'react';
import { Link, Check } from 'lucide-react';
import useHashNavigation from '../hooks/useHashNavigation';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
  slug?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef, slug }) => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Use the hash navigation hook with a callback to set the active ID
  const { navigateToHash } = useHashNavigation({
    offset: 100,
    onHashChange: (hash) => {
      if (hash) {
        setActiveId(hash);
      }
    }
  });

  useEffect(() => {
    if (!contentRef.current) return;

    // Get all headings from the content
    const elements = contentRef.current.querySelectorAll('h1, h2, h3, h4');
    const items: TocItem[] = Array.from(elements).map((element) => {
      // Ensure all headings have IDs for scrolling
      if (!element.id) {
        const id = element.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '';
        element.id = id;
      }
      
      return {
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName.substring(1), 10),
      };
    });

    setHeadings(items);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            // Update URL hash without scrolling
            const url = new URL(window.location.href);
            url.hash = entry.target.id;
            window.history.replaceState({}, '', url.toString());
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [contentRef]);

  const scrollToHeading = (id: string) => {
    // Use the navigateToHash function from our hook
    navigateToHash(id);
  };

  const copyLinkToHeading = (id: string) => {
    const baseUrl = window.location.origin;
    const path = window.location.pathname;
    const url = `${baseUrl}${path}#${id}`;
    
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  if (headings.length === 0) return null;

  return (
    <div className="table-of-contents">
      <h4>Table of Contents</h4>
      <ul className="toc-list">
        {headings.map((heading) => (
          <li key={heading.id} className="group">
            <div className="flex items-center">
              <a
                href={`#${heading.id}`}
                className={`toc-h${heading.level} ${activeId === heading.id ? 'active' : ''} flex-grow`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeading(heading.id);
                }}
              >
                {heading.text}
              </a>
              <button
                onClick={() => copyLinkToHeading(heading.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-text dark:hover:text-dark-text"
                aria-label={`Copy link to ${heading.text} section`}
              >
                {copiedId === heading.id ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Link className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;

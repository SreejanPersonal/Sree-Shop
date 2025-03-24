import React, { useEffect, useState } from 'react';

interface ReadingProgressProps {
  target: React.RefObject<HTMLElement>;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      if (!target.current) {
        return;
      }

      const element = target.current;
      const totalHeight = element.clientHeight - window.innerHeight;
      const windowScrollTop = window.scrollY;

      if (windowScrollTop === 0) {
        return setReadingProgress(0);
      }

      if (windowScrollTop > totalHeight) {
        return setReadingProgress(100);
      }

      setReadingProgress((windowScrollTop / totalHeight) * 100);
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [target]);

  return (
    <div className="reading-progress-container">
      <div 
        className="reading-progress-bar" 
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;

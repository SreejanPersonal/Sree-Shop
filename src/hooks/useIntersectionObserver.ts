import { useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  target: RefObject<HTMLElement>;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Hook that triggers a callback when an element comes into view
 */
export function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    const element = target.current;

    if (!element) {
      return;
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [target, onIntersect, rootMargin, threshold]);
}

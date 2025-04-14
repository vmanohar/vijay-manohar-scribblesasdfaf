
import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  root = null,
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref?.current;
    
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
}

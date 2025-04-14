
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-4 right-4 z-50 bg-background p-2 rounded-full shadow-lg border transition-all',
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible',
        theme === 'dark' 
          ? 'border-highlight-dark/50 hover:border-highlight-dark' 
          : 'border-highlight-light/70 hover:border-highlight-light'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className={cn(
        "w-5 h-5 transition-colors duration-300",
        theme === 'dark' 
          ? 'hover:text-highlight-dark' 
          : 'hover:text-highlight-light'
      )} />
    </button>
  );
};

export default ScrollToTop;

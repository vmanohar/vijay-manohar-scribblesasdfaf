
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
        'scroll-to-top',
        isVisible ? 'visible' : '',
        theme === 'dark' ? 'border-[#FFD580]/50 hover:border-[#FFD580]' : ''
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className={cn(
        "w-5 h-5 transition-colors duration-300",
        theme === 'dark' ? 'hover:text-[#FFD580]' : 'hover:text-accent'
      )} />
    </button>
  );
};

export default ScrollToTop;

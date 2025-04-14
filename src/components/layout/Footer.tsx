
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground border-t relative">
      <div className="container-width">
        <p>
          © {currentYear} Vijay Manohar • Caffeinated into existence at <a 
            href="https://www.palominocoffee.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
              "transition-colors duration-300",
              theme === 'dark' 
                ? 'hover:text-highlight-dark' 
                : 'hover:text-highlight-light'
            )}
          >
            Palomino Cafe
          </a> in Austin, TX
        </p>
      </div>
    </footer>
  );
};

export default Footer;

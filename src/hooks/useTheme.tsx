
import { useState, useEffect, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    // Add the base transition class to handle theme changes
    document.documentElement.classList.add('theme-transition');
  }, []);

  const toggleTheme = () => {
    // Start transition
    setIsTransitioning(true);
    
    // Apply transition class to all elements
    document.documentElement.classList.add('theme-transitioning');
    
    // Toggle theme immediately to reduce latency
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    // Remove transition class after a shorter animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 200); // Reduced from 500ms to 200ms
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

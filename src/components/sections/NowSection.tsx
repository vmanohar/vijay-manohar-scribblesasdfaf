
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { BookOpen, Brain, Coffee } from 'lucide-react';

const NowSection = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="now" className="py-16">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>} 
          className={`text-2xl md:text-3xl font-serif mb-8 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Now
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Reading */}
          <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
            <div className="flex items-center mb-3">
              <BookOpen className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium">Reading</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              "Four Thousand Weeks" by Oliver Burkeman — on the finite nature of human time.
            </p>
          </div>
          
          {/* Thinking About */}
          <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
            <div className="flex items-center mb-3">
              <Brain className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium">Thinking About</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              How information abundance creates attention scarcity, and what that means for how we build products.
            </p>
          </div>
          
          {/* Learning */}
          <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
            <div className="flex items-center mb-3">
              <Coffee className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium">Learning</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The fundamentals of single-origin coffee preparation and the differences between processing methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;

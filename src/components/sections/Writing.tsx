
import React from 'react';
import { ExternalLink, Quote } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';

interface WritingItemProps {
  title: string;
  link: string;
  date: string;
  platform: string;
}

const WritingItem = ({ title, link, date, platform }: WritingItemProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`mb-6 pb-6 border-b last:border-0 transition-all duration-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/4 mb-2 md:mb-0">
          <span className="text-sm text-muted-foreground">{date}</span>
          <p className="text-xs mt-1">{platform}</p>
        </div>
        <div className="md:w-3/4">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors duration-300 flex items-center">
              {title}
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

const QuotesSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mt-10 transition-all duration-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <Link 
        to="/quotes" 
        className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-secondary/50 transition-all duration-300"
      >
        <div className="p-2 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors duration-300">
          <Quote className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium group-hover:text-accent transition-colors duration-300">Quotes I Return To</h3>
          <p className="text-sm text-muted-foreground">A collection of words that have stayed with me over the years</p>
        </div>
        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </div>
  );
};

const Writing = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="writing" className="py-16">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>} 
          className={`text-2xl md:text-3xl font-sohne mb-8 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Writing
        </h2>
        
        <div className="mt-6">
          <WritingItem 
            title="Sprints and fun challenges rather than goals" 
            link="https://vijaymanohar.substack.com/p/sprints-and-fun-challenges-rather" 
            date="May 2023"
            platform="Substack"
          />
          <WritingItem 
            title="Questions I'm asking myself at this moment" 
            link="https://vijaymanohar.substack.com/p/questions-im-asking-myself-at-this-90b" 
            date="May 2023"
            platform="Substack"
          />
        </div>
        
        <QuotesSection />
      </div>
    </section>
  );
};

export default Writing;

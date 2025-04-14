
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  link?: string;
  linkedText?: string;
}

const TimelineItem = ({ year, title, description, link, linkedText }: TimelineItemProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  const titleContent = link && linkedText ? (
    <h3 className="text-xl font-medium mb-2">
      {title.split(linkedText).map((part, index, array) => {
        // If this is the last part and there's no linked text left to add
        if (index === array.length - 1) {
          return <span key={index}>{part}</span>;
        }
        // Return the part followed by the linked text
        return (
          <React.Fragment key={index}>
            {part}
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors duration-300"
            >
              {linkedText}
            </a>
          </React.Fragment>
        );
      })}
    </h3>
  ) : (
    <h3 className="text-xl font-medium mb-2">{title}</h3>
  );

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`mb-6 transition-all duration-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-2 md:mb-0">
          <span className="text-sm font-medium text-primary">{year}</span>
        </div>
        <div className="md:w-3/4">
          {titleContent}
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" className="py-16">
      <div className="w-full max-w-3xl mx-auto">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>}
          className={`text-2xl md:text-3xl font-sohne mb-8 transition-opacity duration-500 px-4 py-2 rounded-lg hover:bg-accent hover:text-white inline-block ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          About Me
        </h2>
        
        <div className="space-y-4 text-lg">
          <p className={`transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hey, I'm Vijay. I work at Light Labs. I now call Austin, Texas home after a few years living nomadically.
          </p>
          <p className={`transition-all duration-500 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm big on clean inputs—what I eat, how I spend my time, and the information I take in. That mindset shapes what I do: I'm drawn to projects that make everyday life better, especially transparent, well-tested food brands.
          </p>
          <p className={`transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Outside of work, you'll usually find me experimenting in the kitchen. I train for HYROX, play tennis and padel, lift, and occasionally take on multi-day hikes. I'm also interested in meditation and mindfulness.
          </p>
        </div>
        
        <h3 className={`text-xl font-sohne mb-6 mt-10 px-3 py-1 rounded-lg hover:bg-accent hover:text-white inline-block transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Timeline
        </h3>
        
        <div className="mt-6">
          <TimelineItem 
            year="2024 - Present" 
            title="Light Labs, Co-founder" 
            description="Building a healthier food system through lab testing."
            link="https://www.lightlabs.com"
            linkedText="Light Labs"
          />
          <TimelineItem 
            year="2023 - 2024" 
            title="Sabbatical" 
            description="Chilled a lot, moved to Austin, became a decent chef, and a lot of experimenting on what was next (along with a healthy dose of existential dread)."
          />
          <TimelineItem 
            year="2018 - 2023" 
            title="Samsara, Growth and GTM" 
            description="The best education I could have asked for, along for the ride from startup to IPO ($IOT). Lived all over LATAM and Europe."
            link="https://www.samsara.com"
            linkedText="Samsara"
          />
          <TimelineItem 
            year="2013 - 2017" 
            title="University of Texas at Austin" 
            description="Electrical and Computer Engineering, B.S. Made lifelong friends, studied a lot, realized I didn't want to be an engineer."
          />
        </div>
        
        <div className={`mt-10 transition-all duration-500 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-sohne mb-4">Interests & Values</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "Transparent food systems – incentive alignment within our food system and consumers",
              "Meditation & mindfulness – daily practice, mental clarity, and awareness in how I show up",
              "Rooted living – ancestral habits, shared spaces, and deeper connection to people and place",
              "Self-experimentation (n=1) – testing habits, routines, and tools to see what actually works",
              "Physical challenges – HYROX, bodybuilding, and multi-day hikes",
              "Alternative education – building models that teach real skills, curiosity, and self-awareness"
            ].map((interest, index) => (
              <li key={index} className="flex items-start">
                <span className="text-muted-foreground mr-2 text-lg">•</span>
                <span className="text-base">{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

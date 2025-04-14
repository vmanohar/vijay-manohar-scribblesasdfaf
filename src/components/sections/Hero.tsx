
import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';
import { Strava } from '../ui/CustomIcons';

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-300 social-link"
      aria-label={label}
    >
      <div className="p-2 rounded-full bg-secondary/30 hover:bg-primary/10 transition-colors duration-300">
        {icon}
      </div>
    </a>
  );
};

const Hero = () => {
  return (
    <section id="top" className="min-h-[80vh] flex flex-col justify-center items-center pt-10">
      <div className="container-width flex flex-col items-center text-center">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden mb-6 animate-fade-in border-2 border-accent shadow-lg">
          <img 
            src="/lovable-uploads/c7988759-4b7b-425b-9aa2-1262b7455fa6.png" 
            alt="Vijay Manohar" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-sohne font-semibold mb-3 animate-fade-in tracking-wide">
          Vijay Manohar
        </h1>
        
        <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md animate-fade-in">
          Co-founder at <a href="https://www.lightlabs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Light Labs</a>. Into movement, mindfulness, and figuring out better ways to consume, create, learn, and live.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-4 mb-6 animate-fade-in">
          <SocialLink 
            href="mailto:vijaymanohar4@gmail.com" 
            icon={<Mail className="w-5 h-5" />} 
            label="Email"
          />
          <SocialLink 
            href="https://github.com/vmanohar" 
            icon={<Github className="w-5 h-5" />} 
            label="GitHub"
          />
          <SocialLink 
            href="https://linkedin.com/in/vijay-manohar-12820569" 
            icon={<Linkedin className="w-5 h-5" />} 
            label="LinkedIn"
          />
          <SocialLink 
            href="https://x.com/vijaymanohar4" 
            icon={<Twitter className="w-5 h-5" />} 
            label="Twitter"
          />
          <SocialLink 
            href="https://strava.app.link/fTlg32ZwxSb" 
            icon={<Strava className="w-5 h-5" />} 
            label="Strava"
          />
        </div>
        
        <div className="flex space-x-4 mt-6">
          <a 
            href="#about" 
            className="action-button flex items-center justify-center"
          >
            <ArrowDown className="w-3 h-3 mr-2" />
            About me
          </a>
          
          <a 
            href="#writing" 
            className="action-button flex items-center justify-center"
          >
            <BookOpen className="w-3 h-3 mr-2" />
            My writing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

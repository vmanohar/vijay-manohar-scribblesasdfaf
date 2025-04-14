
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground border-t relative">
      <div className="container-width">
        <p>
          © {currentYear} Vijay Manohar • Caffeinated into existence at <a href="https://www.palominocoffee.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Palomino Cafe</a> in Austin, TX
        </p>
      </div>
    </footer>
  );
};

export default Footer;

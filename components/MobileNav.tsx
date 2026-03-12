import React from 'react';
import { Home, User, Briefcase, Mail, FileText } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-50 lg:hidden">
      <div className="flex justify-around items-center py-3 px-2">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors p-2"
          aria-label="Home"
        >
          <Home size={20} />
          <span className="text-[10px] font-mono">Home</span>
        </button>
        
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors p-2"
          aria-label="About"
        >
          <User size={20} />
          <span className="text-[10px] font-mono">About</span>
        </button>
        
        <button
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors p-2"
          aria-label="Projects"
        >
          <Briefcase size={20} />
          <span className="text-[10px] font-mono">Projects</span>
        </button>
        
        <button
          onClick={() => scrollToSection('blog')}
          className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors p-2"
          aria-label="Blog"
        >
          <FileText size={20} />
          <span className="text-[10px] font-mono">Blog</span>
        </button>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors p-2"
          aria-label="Contact"
        >
          <Mail size={20} />
          <span className="text-[10px] font-mono">Contact</span>
        </button>
      </div>
    </nav>
  );
};

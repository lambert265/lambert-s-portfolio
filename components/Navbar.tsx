import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { number: '01', label: 'About', href: '#about' },
  { number: '02', label: 'Skills', href: '#skills' },
  { number: '03', label: 'Toolkit', href: '#toolkit' },
  { number: '04', label: 'Projects', href: '#projects' },
  { number: '05', label: 'Reviews', href: '#testimonials' },
  { number: '06', label: 'Blog', href: '#blog' },
  { number: '07', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 border-b border-border py-4 shadow-lg shadow-black/50 lg:backdrop-blur-md' 
          : 'bg-transparent py-6 lg:backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="text-xl font-mono font-bold tracking-tighter text-white z-50 hover:text-accent transition-colors flex items-center gap-2"
          aria-label="Portfolio Home"
        >
          <span className="text-accent" aria-hidden="true">&gt;_</span> 
          <span aria-hidden="true">portfolio</span>
          <span className="animate-pulse text-accent text-xs align-top" aria-hidden="true">▮</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="group flex items-center gap-1 text-sm font-mono text-secondary hover:text-white transition-colors"
            >
              <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 transform duration-300 text-[10px]" aria-hidden="true">
                {item.number} //
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Spacer */}
        <div className="lg:hidden w-10 h-10"></div>
      </div>
    </motion.nav>
  );
};
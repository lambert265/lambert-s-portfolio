import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export const MobileNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Only detect scroll position if on home page
      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'projects', 'blog', 'contact'];
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else if (location.pathname.startsWith('/blog')) {
        // If on blog page, set blog as active
        setActiveSection('blog');
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'blog', icon: FileText, label: 'Blog' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-0 right-0 z-50 lg:hidden flex justify-center px-2"
    >
      <div className="bg-background/95 border-2 border-accent/40 rounded-full px-3 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,243,255,0.2)] backdrop-blur-lg max-w-[90vw]">
        <div className="flex items-center justify-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative flex flex-col items-center justify-center min-w-[48px] touch-manipulation"
                whileTap={{ scale: 0.9 }}
                aria-label={item.label}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="flex flex-col items-center gap-1"
                >
                  <Icon 
                    size={18} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-secondary'
                    }`}
                  />
                  <span 
                    className={`text-[8px] font-mono transition-colors duration-300 whitespace-nowrap ${
                      isActive ? 'text-accent font-bold' : 'text-secondary/80'
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
                
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="absolute -bottom-1 w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_rgba(0,243,255,0.9)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-6 hidden lg:flex flex-col items-center gap-4 text-secondary z-40 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <a href="https://github.com/Lambert265" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" aria-label="GitHub Profile" title="GitHub Profile">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/lambert456/" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn Profile" title="LinkedIn Profile">
        <Linkedin size={20} />
      </a>
      <a href="https://twitter.com/yk_lambert" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" aria-label="X (Twitter) Profile" title="X (Twitter) Profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
      </a>
      <a href="https://www.instagram.com/_yk_lambert" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" aria-label="Instagram Profile" title="Instagram Profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="https://www.tiktok.com/@yk_lambert" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" aria-label="TikTok Profile" title="TikTok Profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
      </a>
      <a href="mailto:igweajurijosph@gmail.com" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" aria-label="Send Email" title="Send Email">
        <Mail size={20} />
      </a>
      <div className="w-[1px] h-24 bg-secondary mt-2"></div>
    </div>
  );
};
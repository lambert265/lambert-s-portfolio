import React from 'react';

export const FloatingEmail: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-6 hidden lg:flex flex-col items-center gap-4 text-secondary z-40 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <span 
        className="font-mono text-sm text-accent tracking-widest writing-vertical-rl"
        style={{ writingMode: 'vertical-rl' }}
      >
        SYSTEM_INITIALIZED
      </span>
      <div className="w-[1px] h-24 bg-secondary mt-2"></div>
    </div>
  );
};
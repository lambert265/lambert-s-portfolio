import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [desktopStep, setDesktopStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setDesktopStep(1), 500),
      setTimeout(() => setDesktopStep(2), 1200),
      setTimeout(() => setDesktopStep(3), 2000),
      setTimeout(() => setDesktopStep(4), 2800),
      setTimeout(() => onComplete(), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030008] overflow-hidden"
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      {/* ================= FULL BOOT SEQUENCE (ALL DEVICES) ================= */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl relative px-4">
        
        {/* Central Core Animation */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-12 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div 
                className="absolute inset-0 border border-accent/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            />
            <motion.div 
                className="absolute inset-2 border border-dashed border-accent/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            />
            
            {/* Inner Core */}
            <motion.div 
                className="w-24 h-24 md:w-32 md:h-32 bg-accent/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30 box-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
            >
                <div className="text-2xl md:text-4xl font-bold text-white tracking-tighter flex">
                    <span className="text-accent">&gt;</span>_
                </div>
            </motion.div>

            {/* Orbiting Particles */}
            <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#39ff14]"></div>
            </div>
        </div>

        {/* System Status Text */}
        <div className="font-mono text-xs md:text-sm h-32 w-full max-w-md">
            <AnimatePresence mode="wait">
                {desktopStep >= 0 && (
                    <motion.div 
                        key="step0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between text-secondary/60 border-b border-white/5 pb-2 mb-2"
                    >
                        <span>SYSTEM_KERNEL</span>
                        <span className="text-accent">v4.2.0</span>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="space-y-2">
                {desktopStep >= 1 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-secondary"
                    >
                        <span className="text-accent">✔</span>
                        <span>Loading core modules...</span>
                        <motion.span 
                            className="ml-auto text-xs text-secondary/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            [OK]
                        </motion.span>
                    </motion.div>
                )}
                {desktopStep >= 2 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-secondary"
                    >
                        <span className="text-accent">✔</span>
                        <span>Initializing graphics engine...</span>
                        <motion.span 
                            className="ml-auto text-xs text-secondary/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            [OK]
                        </motion.span>
                    </motion.div>
                )}
                {desktopStep >= 3 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-secondary"
                    >
                        <span className="text-accent">✔</span>
                        <span>Establishing secure connection...</span>
                        <motion.span 
                            className="ml-auto text-xs text-secondary/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            [OK]
                        </motion.span>
                    </motion.div>
                )}
                 {desktopStep >= 4 && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 text-center text-accent font-bold tracking-widest border border-accent/20 py-2 bg-accent/5"
                    >
                        SYSTEM READY
                    </motion.div>
                )}
            </div>
        </div>

        {/* Background Grid (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-[-1]">
             <div className="absolute bottom-0 left-0 right-0 h-full bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        </div>
      </div>
    </motion.div>
  );
};
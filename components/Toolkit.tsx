import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  GitBranch, 
  Box, 
  Cpu, 
  Terminal, 
  Wind,
  Globe
} from 'lucide-react';
import { Tool } from '../types';

const tools: Tool[] = [
  { name: 'React', category: 'Frontend Library for building dynamic, responsive interfaces', icon: Code2 },
  { name: 'TypeScript', category: 'Strongly-typed language for scalable, maintainable code', icon: Terminal },
  { name: 'Tailwind CSS', category: 'Utility-first styling for modern, responsive designs', icon: Wind },
  { name: 'FastAPI', category: 'Python framework for building performant APIs', icon: Cpu },
  { name: 'Next.js', category: 'Modern framework for React-based web applications', icon: Globe },
  { name: 'Git & GitHub', category: 'Version control and collaborative development', icon: GitBranch },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Toolkit: React.FC = () => {
  return (
    <section id="toolkit" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-accent">Toolkit</span>
        </h2>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {tools.map((tool) => (
          <motion.div 
            key={tool.name}
            variants={item}
            className="group relative p-6 bg-white/5 lg:backdrop-blur-md border border-white/10 rounded-xl hover:border-accent/50 hover:bg-white/10 transition-all duration-300 overflow-hidden shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {/* 3D Depth Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-25px)' }} />
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-15px)' }} />
            
            {/* Subtle Gradient Background Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col items-start h-full" style={{ transform: 'translateZ(30px)' }}>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg mb-4 text-white group-hover:text-accent transition-colors border border-white/10 shadow-lg" style={{ transform: 'translateZ(40px)' }}>
                <tool.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 tracking-tight" style={{ transform: 'translateZ(30px)' }}>
                {tool.name}
              </h3>
              
              <p className="text-sm font-mono text-secondary group-hover:text-white/80 transition-colors" style={{ transform: 'translateZ(20px)' }}>
                {tool.category}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
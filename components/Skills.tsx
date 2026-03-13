import React from 'react';
import { Reveal } from './ui/Reveal';
import { Monitor, PenTool, Search, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Web3 & Frontend Development',
    description: 'Building modern, high-performance, and accessible digital experiences, from responsive interfaces to decentralized applications.',
    icon: Code2,
    skills: [
      'React, Next.js & TypeScript Development',
      'Web3 Integration & Smart Contract Interaction (Ethereum, Solidity)',
      'Responsive UI/UX Design & Implementation',
      'Performance Optimization & Code Efficiency',
      'Accessibility Compliance (WCAG Standards)',
      'Modern CSS & Animations (Tailwind CSS, Framer Motion)'
    ]
  },
  {
    title: 'Technical Writing & Developer Content',
    description: 'Translating complex Web3 and engineering concepts into clear, engaging, and educational content.',
    icon: PenTool,
    skills: [
      'Deep-Dive Technical Tutorials & How-To Guides',
      'API Documentation & Developer Guides',
      'Case Studies, White Papers & Research Summaries',
      'Developer Advocacy Content & Community Education',
      'Editing, Proofreading & Structured Documentation'
    ]
  },
  {
    title: 'SEO & Content Strategy',
    description: 'Enhancing content visibility and organic reach for technical blogs, developer resources, and web products.',
    icon: Search,
    skills: [
      'Keyword Research & Strategy',
      'On-Page & Off-Page SEO Optimization',
      'Content Audit & Performance Analysis',
      'Google Analytics & Search Console Insights',
      'Competitor Analysis & Benchmarking'
    ]
  }
];

export const Skills: React.FC = () => {
  // Animation variants for the icon
  const iconVariants = {
    rest: { 
      scale: 1, 
      color: "#00f3ff", 
      boxShadow: "0 0 0px rgba(0, 243, 255, 0)",
    },
    hover: { 
      scale: [1, 1.15, 1],
      color: "#ffffff",
      boxShadow: [
        "0 0 0px rgba(0, 243, 255, 0)", 
        "0 0 15px rgba(0, 243, 255, 0.6)", 
        "0 0 0px rgba(0, 243, 255, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-accent">Capabilities</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.1} width="100%">
            <motion.div 
              className="group relative h-full bg-white/5 lg:backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-accent/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              whileHover={{
                rotateX: 8,
                rotateY: 8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* 3D Depth Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-30px)' }} />
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-20px)' }} />
              
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon with Animation */}
              <motion.div 
                variants={iconVariants}
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 relative z-10 shadow-xl"
                style={{ transform: 'translateZ(50px)' }}
              >
                <category.icon size={24} />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors" style={{ transform: 'translateZ(40px)' }}>
                {category.title}
              </h3>
              
              <p className="text-secondary text-sm mb-6 leading-relaxed" style={{ transform: 'translateZ(30px)' }}>
                {category.description}
              </p>

              {/* Skill List Styled as Terminal Output */}
              <ul className="space-y-2 font-mono text-xs md:text-sm text-secondary/80" style={{ transform: 'translateZ(20px)' }}>
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">{'>'}</span>
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
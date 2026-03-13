import React from 'react';
import { Reveal } from './ui/Reveal';
import { BookOpen, Code, Zap, TrendingUp } from 'lucide-react';

const learningItems = [
  {
    icon: Code,
    title: 'AI Integration',
    description: 'Exploring how to integrate AI tools like ChatGPT and Claude into web applications for smarter user experiences.',
    progress: 70,
    status: 'In Progress'
  },
  {
    icon: Zap,
    title: 'Advanced TypeScript',
    description: 'Diving deep into TypeScript generics, utility types, and advanced patterns for better type safety.',
    progress: 55,
    status: 'In Progress'
  },
  {
    icon: TrendingUp,
    title: 'System Design',
    description: 'Learning how to architect scalable applications and make better architectural decisions.',
    progress: 40,
    status: 'In Progress'
  },
  {
    icon: BookOpen,
    title: 'Technical Writing',
    description: 'Improving my ability to explain complex technical concepts in simple, accessible language.',
    progress: 65,
    status: 'In Progress'
  }
];

export const WhatImLearning: React.FC = () => {
  return (
    <section id="learning" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What I'm <span className="text-accent">Learning</span>
        </h2>
      </div>
      
      <Reveal width="100%">
        <p className="text-secondary text-lg mb-12 max-w-2xl">
          I believe in continuous learning. Here's what I'm currently exploring and improving on.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {learningItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors border border-white/10">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-secondary">Progress</span>
                    <span className="text-xs font-mono text-accent">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { Reveal } from './ui/Reveal';
import { Github, ExternalLink, Lightbulb, Wrench } from 'lucide-react';

const sideProjects = [
  {
    title: 'Portfolio Experiments',
    description: 'Testing new animation libraries, design patterns, and UI concepts. A playground for trying things before they go into production.',
    status: 'Ongoing',
    tech: ['React', 'Framer Motion', 'Three.js'],
    icon: Lightbulb,
    github: null,
    live: null
  },
  {
    title: 'Dev Tools Collection',
    description: 'Building small utilities and tools that make my development workflow faster. Color palette generators, code snippet managers, etc.',
    status: 'In Progress',
    tech: ['TypeScript', 'Node.js', 'CLI'],
    icon: Wrench,
    github: null,
    live: null
  },
  {
    title: 'Learning Blog',
    description: 'Documenting what I learn as I learn it. Writing helps me understand concepts better and helps others who are on the same journey.',
    status: 'Active',
    tech: ['Next.js', 'MDX', 'Tailwind'],
    icon: Lightbulb,
    github: null,
    live: null
  }
];

export const SideProjects: React.FC = () => {
  return (
    <section id="side-projects" className="py-24 px-6 max-w-7xl mx-auto bg-surface/30">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Side Projects & <span className="text-accent">Experiments</span>
        </h2>
      </div>
      
      <Reveal width="100%">
        <p className="text-secondary text-lg mb-12 max-w-2xl">
          Not everything makes it to production, but everything teaches me something. Here are some things I'm tinkering with.
        </p>
      </Reveal>

      <div className="space-y-6">
        {sideProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="bg-white/5 lg:backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0 border border-white/10">
                    <Icon className="text-accent" size={32} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded w-fit">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs font-mono text-secondary border border-border px-3 py-1 rounded hover:border-accent/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </a>
                      )}
                      {!project.github && !project.live && (
                        <span className="text-xs font-mono text-secondary/50 italic">
                          Work in progress...
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Fun Note */}
      <Reveal width="100%">
        <div className="mt-12 text-center">
          <p className="text-secondary/60 text-sm font-mono italic">
            "The best way to learn is to build. Even if it breaks." 🚀
          </p>
        </div>
      </Reveal>
    </section>
  );
};

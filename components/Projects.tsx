import React, { useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Terminal, Eye } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectModal } from './ui/ProjectModal';
// import project1 from '../assets/image/project1.jpg';
// import project2 from '../assets/image/project2.jpg';
// import project3 from '../assets/image/project3.jpg';
// import project1 from '../assets/image/project1.jpg';

const projects: Project[] = [
  {
    id: '1',
    title: 'Mimea Brand Website',
    description: 'A modern, visually striking website built to showcase the Mimea brand. Designed with pixel-perfect UI, responsive layouts, and intuitive user experience, the site highlights products, services, and brand identity while ensuring fast performance and accessibility across devices.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/lambert265/mimea',
    link: '',
    image: '/images/project1.jpg',
  },
  {
    id: '2',
    title: 'Bahdel Construction Website',
    description: 'A professional website for Bahdel Construction, designed to showcase projects, services, and company expertise. Features interactive project galleries, responsive layouts, and accessible design, giving visitors a seamless experience across devices.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/lambert265/bahdel',
    link: 'https://bahdel.vercel.app',
    image: '/images/project2.jpeg',
  },
  {
    id: '3',
    title: 'Tradesphere.ng',
    description: 'A modern stock trading platform designed to make investing and portfolio management simple and intuitive. Features real-time stock tracking, interactive dashboards, transaction history, and responsive design, optimized for performance, accessibility, and seamless user experience.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Work in Progress'],
    github: '',
    link: '',
    image: '/images/project3.jpg',
  },
  {
    id: '4',
    title: 'Fintech Dashboard Design',
    description: 'A high-fidelity fintech interface designed entirely in Figma, showcasing intuitive dashboards, interactive components, and seamless user flows. Focused on visual hierarchy, accessibility, and modern micro-interactions, this project demonstrates how complex financial data can be presented clearly and elegantly. Animations and transitions were prototyped with Framer Motion to enhance interactivity.',
    tags: ['Figma', 'Framer Motion', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
    github: '',
    link: 'https://www.figma.com/make/XJPNSkVwyNN6HnF1s1x8ej/Complete-Fintech-Website-PRD?fullscreen=1&t=NRR9M1S2AzL1d19H-1',
    image: '/images/project4.png',
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-accent">Projects</span>
        </h2>
      </div>
      
      {/* Projects List */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id} 
              className="flex flex-col gap-4 h-full group"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image Side */}
              <div 
                className="w-full relative overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent aspect-video bg-white/5 backdrop-blur-md shadow-lg"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                style={{ transform: 'translateZ(30px)' }}
              >
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                 
                 {/* Image with Zoom Effect */}
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out shadow-lg"
                 />

                 {/* Click Hint Overlay */}
                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-[2px]">
                    {project.link && project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-mono text-sm border border-accent px-4 py-2 rounded uppercase tracking-widest flex items-center gap-2 bg-black/50 hover:bg-accent hover:text-black transition-colors"
                      >
                        <Eye size={16} />
                        View Project
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-accent font-mono text-sm border border-accent px-4 py-2 rounded uppercase tracking-widest flex items-center gap-2 bg-black/50 hover:bg-accent hover:text-black transition-colors"
                      >
                        <Eye size={16} />
                        View Project
                      </button>
                    )}
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full flex flex-col flex-grow" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex justify-between items-start mb-2">
                    <Reveal key={`${project.id}-title`}>
                       <h3 className="text-xl font-bold text-white">
                         <button
                            onClick={() => setSelectedProject(project)}
                            className="hover:text-accent transition-colors text-left focus:outline-none focus:text-accent"
                         >
                          {project.title}
                         </button>
                      </h3>
                    </Reveal>
                    
                    <div className="flex gap-3 text-white">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="View Source Code on GitHub">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Visit Live Project">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                </div>
                
                <div 
                  className="bg-surfaceHighlight p-4 rounded shadow-md text-secondary text-sm leading-relaxed mb-4 border border-border cursor-pointer hover:border-accent/30 transition-colors flex-grow"
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Description for ${project.title}, click to view details`}
                >
                  {project.description}
                </div>

                <ul className="flex flex-wrap gap-2 mt-auto text-xs font-mono text-secondary">
                  {project.tags.map(tag => (
                    <li 
                      key={tag}
                      className="px-2 py-1 rounded bg-white/5"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
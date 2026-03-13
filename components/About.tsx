import React from 'react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 px-6 max-w-7xl mx-auto"
      aria-label="About Me"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-accent">Me</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-secondary text-lg leading-relaxed">
          <Reveal>
            <p>
              Hello! my name is Lambert, I design and build thoughtful experiences for the web.
            </p>
          </Reveal>
          
          <Reveal>
            <p>
              As a computer science student, web developer, and technical writer, I focus on creating modern, high-performance interfaces that balance clean architecture with intuitive user experience. I enjoy turning complex ideas into structured systems and elegant, user-friendly products whether that's building a decentralized Web3 application or translating complex technical concepts into clear, readable documentation.
            </p>
          </Reveal>
          
          <Reveal>
            <p>
              I've spent time exploring both the technical and creative sides of web development, which has taught me how to craft solutions that are not only functional but also visually engaging. I care deeply about how things work under the hood as much as how they feel in the user's hands from optimized code and smart contract integration to responsive layouts and accessible interfaces.
            </p>
          </Reveal>
          
          <Reveal>
            <p>
              My work sits at the intersection of engineering, design, and communication where performance, usability, and visual precision meet clarity and storytelling. I thrive in environments where speed and clarity matter, whether that's building a Web3 interface from scratch, refining a UI to improve user flow, or writing technical guides that make complex concepts approachable.
            </p>
          </Reveal>
          
          <Reveal>
            <p>
              I'm passionate about pushing the boundaries of what's possible on the web, experimenting with modern technologies, decentralized platforms, smooth interactions, and pixel-perfect designs. My goal is always the same: to create digital experiences that are functional, elegant, and enjoyable, while also making technology understandable for everyone who interacts with it.
            </p>
          </Reveal>
          
          <Reveal>
            <p>
              I am passionate about cutting-edge pixel-perfect, beautiful interfaces and intuitively implemented UX.
            </p>
          </Reveal>
        </div>

        <div className="relative group mx-auto md:mx-0 max-w-xs">
          <Reveal width="100%">
             <div className="relative" role="img" aria-label="Portrait of Lambert">
                <div 
                  className="absolute inset-0 border-2 border-accent translate-x-4 translate-y-4 rounded transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
                  aria-hidden="true"
                ></div>
                <div className="relative bg-surfaceHighlight rounded overflow-hidden transition-all duration-500">
                  <img 
                    src="/images/aboutme.jpg" 
                    alt="Lambert, Developer Portrait" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div 
                    className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors"
                    aria-hidden="true"
                  ></div>
                </div>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

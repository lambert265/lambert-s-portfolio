import React from 'react';
import { Reveal } from './ui/Reveal';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Chibuey Sydney',
    role: 'Full Stack Developer',
    company: 'Fellow Developer',
    content: "Working alongside Lambert has been inspiring. His approach to problem-solving is methodical yet creative. He doesn't just write code he thinks through the entire user experience. His attention to detail and willingness to help others makes him a valuable team player.",
    image: ''
  },
  {
    id: 't2',
    name: 'Igwe Hellen Joseph',
    role: 'Project Manager',
    company: 'Bahdel Construction',
    content: "Lambert delivered exactly what we needed for our company website. He took time to understand our business, asked the right questions, and built a platform that truly represents our brand. The site is professional, fast, and our clients love it. Highly recommend working with him.",
    image: ''
  },
  {
    id: 't3',
    name: 'Gwegweson Nyimente Robert',
    role: 'Computer Science Student',
    company: 'Rivers State University',
    content: "Lambert is one of those people who genuinely enjoys building things. He's always experimenting with new ideas and sharing what he learns. His projects are clean, functional, and well thought out. It's been great learning alongside him.",
    image: ''
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-accent">Testimonials</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.15}>
            <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 h-full flex flex-col group hover:border-accent/40 hover:bg-white/10 transition-all duration-300 rounded-xl shadow-lg"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale3d(1.02, 1.02, 1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              }}
            >
               {/* 3D Depth Layer */}
               <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-20px)' }} />
               
               {/* Cyber Decoration Header */}
               <div className="flex justify-between items-center mb-6 border-b border-border pb-3">
                  <div className="flex gap-1">
                     {[...Array(5)].map((_, starI) => (
                        <Star key={starI} size={12} className="fill-accent text-accent" />
                     ))}
                  </div>
                  <div className="text-[10px] font-mono text-accent/50 tracking-widest">
                     LOG_ENTRY_0{i+1}
                  </div>
               </div>

               <div className="relative flex-grow">
                  <Quote className="absolute -top-2 -left-2 text-accent/10 transform -scale-x-100" size={48} />
                  <p className="text-secondary relative z-10 italic leading-relaxed text-sm md:text-base">
                     "{t.content}"
                  </p>
               </div>

               <div className="mt-8 flex items-center gap-4">
                  <div className="relative">
                     <div className="w-10 h-10 rounded-sm overflow-hidden border border-accent/30 bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold text-lg">{t.name.charAt(0)}</span>
                     </div>
                     <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  </div>
                  <div>
                     <div className="text-white font-bold text-sm">{t.name}</div>
                     <div className="text-accent text-xs font-mono">{t.role} @ {t.company}</div>
                  </div>
               </div>
               
               {/* Background Scanline */}
               <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
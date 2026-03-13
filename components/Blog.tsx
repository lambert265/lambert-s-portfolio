import React from 'react';
import { Reveal } from './ui/Reveal';
import { Calendar, Clock, ArrowRight, Hash } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Moment I Realized Coding Is Just Problem Solving',
    excerpt: 'It hit me during a late-night debugging session. I wasn\'t writing code—I was solving puzzles. Here\'s how that mindset shift changed everything.',
    date: '2025-01-15',
    readTime: '5 min read',
    image: '/images/blog1.webp',
    link: '/blog/coding-is-problem-solving',
    tags: ['Learning', 'Mindset']
  },
  {
    id: '2',
    title: 'What Building Projects Taught Me That Tutorials Didn\'t',
    excerpt: 'Tutorials teach syntax. Projects teach you how to think. Here\'s what I learned when I stopped following guides and started building.',
    date: '2025-01-10',
    readTime: '6 min read',
    image: '/images/blog2.webp',
    link: '/blog/projects-vs-tutorials',
    tags: ['Learning', 'Projects']
  },
  {
    id: '3',
    title: 'Why Most Developer Portfolios Are Boring',
    excerpt: 'Your portfolio shouldn\'t look like everyone else\'s. Here\'s how to make yours stand out without being gimmicky.',
    date: '2025-01-05',
    readTime: '7 min read',
    image: '/images/blog3.webp',
    link: '/blog/boring-portfolios',
    tags: ['Design', 'Career']
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Latest <span className="text-accent">Articles</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <Reveal key={post.id} delay={index * 0.1} width="100%">
            <Link
              to={post.link}
              className="group block bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 hover:bg-white/10 transition-all duration-300 flex flex-col h-full relative shadow-lg"
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
              {/* 3D Depth Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-20px)' }} />
              
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur border border-accent/30 px-3 py-1 rounded text-xs font-mono text-accent flex items-center gap-2">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow" style={{ transform: 'translateZ(20px)' }}>
                {/* Tags */}
                <div className="flex gap-3 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-secondary flex items-center gap-1 border border-white/10 px-2 py-0.5 rounded">
                      <Hash size={10} className="text-accent" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <span className="flex items-center gap-2 text-xs font-mono text-secondary/70">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  
                  <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-accent transition-colors">
                    Read Article
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* View All Button */}
      <Reveal width="100%">
        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent font-mono hover:bg-accent/10 transition-colors rounded group"
          >
            View All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

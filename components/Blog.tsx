import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Calendar, Clock, ArrowRight, Hash } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Will AI Replace Programmers?',
    excerpt: 'Developers can now use tools like GitHub Copilot, ChatGPT, and Amazon CodeWhisperer to write functional software at an incredibly fast pace.',
    date: '2025-06-30',
    readTime: '3 min read',
    image: '/images/blog1.webp',
    link: '/blog/will-ai-replace-programmers',
    tags: ['Ai']
  },
  {
    id: '2',
    title: '7 VSCode Hacks Every Developer Should Know',
    excerpt: 'While many developers use VS Code for the basics, there are hidden gems and workflow tricks that can help you streamline your workflow ',
    date: '2025-05-05',
    readTime: '8 min read',
    image: '/images/blog2.webp',
    link: '/blog/vscode-hacks',
    tags: ['VS Code', 'Productivity']
  },
  {
    id: '3',
    title: 'ChatGPT Isn\'t Just Smart — It\'s a Cheat Code ',
    excerpt: 'Let\'s be real — most people are using ChatGPT like a fancier Google search bar. Ask a question, get an answer, copy-paste, and move on.',
    date: '2025-05-19',
    readTime: '6 min read',
    image: '/images/blog3.webp',
    link: '/blog/chatgpt-cheat-code',
    tags: ['ChatGPT', 'AI']
  },
  {
    id: '4',
    title: 'Web3 for Developers: Beyond the Hype',
    excerpt: 'Web3 isn\'t just about crypto and NFTs. It\'s a fundamental shift in how we build applications—decentralized, user-owned, and trustless.',
    date: '2025-07-15',
    readTime: '10 min read',
    image: '/images/blog4.webp',
    link: '/blog/web3-for-developers',
    tags: ['Web3', 'Blockchain']
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading number="06" title="Latest Articles" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Reveal key={post.id} delay={index * 0.1} width="100%">
            <Link
              to={post.link}
              className="group block bg-surface border border-border rounded overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col h-full relative"
            >
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
              <div className="p-6 flex flex-col flex-grow">
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

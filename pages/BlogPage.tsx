import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    slug: 'coding-is-problem-solving',
    title: 'The Moment I Realized Coding Is Just Problem Solving',
    excerpt: 'It hit me during a late-night debugging session. I wasn\'t writing code—I was solving puzzles. Here\'s how that mindset shift changed everything.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Learning'
  },
  {
    slug: 'projects-vs-tutorials',
    title: 'What Building Projects Taught Me That Tutorials Didn\'t',
    excerpt: 'Tutorials teach syntax. Projects teach you how to think. Here\'s what I learned when I stopped following guides and started building.',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Learning'
  },
  {
    slug: 'boring-portfolios',
    title: 'Why Most Developer Portfolios Are Boring',
    excerpt: 'Your portfolio shouldn\'t look like everyone else\'s. Here\'s how to make yours stand out without being gimmicky.',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Design'
  },
  {
    slug: 'expensive-design-details',
    title: 'Small Design Details That Make a Website Feel Expensive',
    excerpt: 'It\'s not about flashy animations. It\'s about the micro-interactions, spacing, and polish that most people miss.',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Design'
  },
  {
    slug: 'first-deployment',
    title: 'My First Time Deploying a Website (And Almost Breaking Everything)',
    excerpt: 'From localhost to production. Here\'s everything that went wrong and what I learned from nearly taking down my first live site.',
    date: '2024-12-20',
    readTime: '6 min read',
    category: 'Learning'
  },
  {
    slug: 'confusing-error-message',
    title: 'The Most Confusing Error Message I Ever Faced',
    excerpt: 'Three hours of debugging, five Stack Overflow tabs, and one embarrassingly simple solution. This error taught me more than any tutorial.',
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Learning'
  },
  {
    slug: 'build-before-finishing-tutorials',
    title: 'Why Every Developer Should Build Projects Before Finishing Tutorials',
    excerpt: 'Tutorial hell is real. Here\'s why I stopped watching courses and started building—and why you should too.',
    date: '2024-12-10',
    readTime: '7 min read',
    category: 'Career'
  },
  {
    slug: 'things-beginners-obsess-over',
    title: 'Things Beginner Developers Obsess Over That Don\'t Matter',
    excerpt: 'Perfect code, the "best" framework, vim vs vscode. Here\'s what actually matters when you\'re starting out.',
    date: '2024-12-05',
    readTime: '6 min read',
    category: 'Career'
  },
  {
    slug: 'coding-skills-that-pay',
    title: 'Coding Skills That Actually Pay in the Real World',
    excerpt: 'Forget algorithm challenges. These are the skills that got me hired and keep me valuable.',
    date: '2024-11-28',
    readTime: '8 min read',
    category: 'Career'
  },
  {
    slug: 'biggest-lie-in-tutorials',
    title: 'The Biggest Lie in "Learn to Code" Tutorials',
    excerpt: 'They make it look easy. They skip the hard parts. Here\'s what they don\'t tell you about learning to code.',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Learning'
  },
  {
    slug: 'good-vs-great-developers',
    title: 'The Skill That Separates Good Developers From Great Ones',
    excerpt: 'It\'s not about knowing more languages or frameworks. It\'s about this one thing that changes everything.',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Career'
  },
  {
    slug: 'why-websites-look-the-same',
    title: 'Why Most Websites Look the Same',
    excerpt: 'Bootstrap, templates, and playing it safe. Here\'s why the web feels boring and how to break the pattern.',
    date: '2024-11-10',
    readTime: '6 min read',
    category: 'Design'
  },
  {
    slug: 'what-makes-premium',
    title: 'What Makes a Website Feel "Premium"',
    excerpt: 'It\'s not just about looking expensive. It\'s about feeling intentional. Here\'s the difference.',
    date: '2024-11-05',
    readTime: '8 min read',
    category: 'Design'
  },
  {
    slug: 'why-developers-should-care-about-ui',
    title: 'Why Developers Should Care About UI',
    excerpt: 'You can write perfect code, but if it looks bad, no one will use it. Here\'s why design matters for developers.',
    date: '2024-10-28',
    readTime: '6 min read',
    category: 'Design'
  },
  {
    slug: 'animations-make-or-break',
    title: 'Why Animations Can Make or Break a Website',
    excerpt: 'Too much and it\'s annoying. Too little and it feels dead. Here\'s how to get animations right.',
    date: '2024-10-20',
    readTime: '7 min read',
    category: 'Design'
  }
];

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary py-24 px-6" style={{ cursor: 'none' }}>
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span className="font-mono">Back to Home</span>
        </Link>

        {/* Header */}
        <Reveal width="100%">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog & <span className="text-accent">Insights</span>
            </h1>
            <p className="text-secondary text-lg max-w-2xl">
              Thoughts on web development, design, learning, and everything in between. 
              I write about what I learn and what I think matters.
            </p>
          </div>
        </Reveal>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Reveal key={article.slug} width="100%">
              <Link 
                to={`/blog/${article.slug}`}
                className="block bg-surfaceHighlight border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group h-full"
              >
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full mb-4">
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-secondary mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-secondary/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read Article */}
                <div className="flex items-center gap-2 text-accent font-mono text-sm group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight size={16} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

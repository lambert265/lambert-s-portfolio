import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const articles = Object.entries(blogArticles).map(([slug, article]) => ({
    slug,
    ...article
  }));

  return (
    <div className="min-h-screen bg-background text-primary py-24 px-6">
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
              Thoughts on web development, AI, productivity, and everything in between. 
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
                className="block bg-surfaceHighlight border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 group h-full"
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

                {/* Read More */}
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

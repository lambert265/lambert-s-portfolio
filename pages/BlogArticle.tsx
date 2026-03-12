import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogArticleProps {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
}

export const BlogArticle: React.FC<BlogArticleProps> = ({
  title,
  date,
  readTime,
  image,
  tags,
  content
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-mono text-sm">Back to Portfolio</span>
          </button>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: title,
                  url: window.location.href
                });
              }
            }}
            className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
          >
            <Share2 size={18} />
            <span className="font-mono text-sm hidden md:inline">Share</span>
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-xs font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {/* Date & Read Time */}
        <div className="flex items-center gap-6 text-secondary text-sm font-mono mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {date}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {readTime}
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-secondary leading-relaxed">
            {content.introduction}
          </p>
        </div>

        {/* Sections */}
        {content.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {section.heading}
            </h2>
            <div className="text-secondary leading-relaxed space-y-4">
              {section.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Conclusion */}
        <section className="mb-12 p-6 bg-surface border border-border rounded">
          <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
          <p className="text-secondary leading-relaxed">
            {content.conclusion}
          </p>
        </section>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-bold text-xl">
              L
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Lambert</h3>
              <p className="text-secondary text-sm">Web3 & Frontend Developer | Technical Writer</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 mb-24 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 transition-colors rounded font-mono"
          >
            <ArrowLeft size={18} />
            Back to All Articles
          </button>
        </div>
      </article>
    </div>
  );
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { MobileNav } from '../components/MobileNav';

const articlesData: Record<string, any> = {
  'coding-is-problem-solving': {
    title: 'The Moment I Realized Coding Is Just Problem Solving',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Learning',
    image: '/images/blog1.webp',
    content: `When I first started learning to code it felt like learning a completely new language filled with strange rules and symbols. Everything seemed complicated and intimidating.

At some point during a small project something clicked. I realized that coding was not really about the language itself. It was about solving problems.

Instead of trying to memorize every command I began focusing on the logic behind the task. What problem am I trying to solve? What steps would a computer need to follow to reach that solution?

Once I started thinking this way programming became much clearer. Code was simply the tool I used to describe a solution.

That shift in perspective made learning far more enjoyable.`
  },
  'projects-vs-tutorials': {
    title: 'What Building Projects Taught Me That Tutorials Did Not',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Learning',
    image: '/images/blog2.webp',
    content: `Tutorials are a helpful starting point. They introduce new concepts and show how tools work together. However they rarely capture the challenges that appear in real projects.

When you build something on your own you quickly encounter problems that tutorials never mention. Layouts break unexpectedly, APIs behave differently than expected, and small bugs appear in surprising places.

At first this can feel frustrating but it is also where the most meaningful learning happens. Projects force you to research solutions, read documentation, and experiment with new ideas. They also teach patience and resilience.

Over time you begin to realize that building projects is not just practice. It is the process that transforms knowledge into real skill.`
  },
  'boring-portfolios': {
    title: 'Why Most Developer Portfolios Are Boring',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Design',
    image: '/images/blog3.webp',
    content: `Developer portfolios are supposed to showcase creativity and technical ability, yet many of them feel very similar. Often they include a few project screenshots, a list of technologies, and a short biography. While this provides basic information, it rarely tells a story about the developer behind the work.

What makes a portfolio interesting is the thinking process behind the projects. Instead of simply showing what was built, great portfolios explain why it was built and what challenges appeared during development.

Another factor is personality. A portfolio is an opportunity to express your perspective as a developer. Sharing your ideas, lessons, and experiences makes the site feel more human.

When a portfolio feels personal and thoughtful it leaves a stronger impression. It becomes more than a list of projects. It becomes a reflection of how you think and create.`
  },
  'expensive-design-details': {
    title: 'Small Design Details That Make a Website Feel Expensive',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Design',
    image: '/images/blog4.webp',
    content: `The difference between an average website and a premium one often comes down to small details.

Spacing is one of the most powerful elements in design. When elements are placed too close together the interface feels crowded and chaotic. When spacing is carefully balanced the layout feels calm and organized.

Typography also plays a huge role. Choosing the right font size and line spacing makes content easier to read and gives the design a more refined appearance.

Micro interactions add another layer of quality. When buttons gently react to hover or when subtle transitions guide the user from one section to another, the experience feels smooth and responsive.

Alignment is another detail that separates professional designs from amateur ones. When elements line up perfectly across the page everything looks cleaner and more structured.

These small improvements may seem insignificant on their own but together they create a much stronger impression. Design is often about refining the little things until the entire experience feels cohesive.`
  },
  'first-deployment': {
    title: 'My First Time Deploying a Website And Almost Breaking Everything',
    date: '2024-12-20',
    readTime: '6 min read',
    category: 'Learning',
    image: '/images/blog1.webp',
    content: `Building a website locally can feel comfortable because everything runs inside your own environment. The first time you try deploying a project to the internet is a completely different experience.

I remember expecting the process to be simple. I followed the instructions, uploaded the files, and waited for the site to appear. Instead I was greeted with errors that made little sense at the time. Some files were missing, environment variables were incorrect, and certain features behaved differently online than they did on my computer.

It took multiple attempts to figure out what went wrong. Although the process was stressful it was also incredibly satisfying when the site finally went live. Seeing a project running on the internet for the first time is a milestone every developer remembers.`
  },
  'confusing-error-message': {
    title: 'The Most Confusing Error Message I Ever Faced',
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Learning',
    image: '/images/blog2.webp',
    content: `Every developer eventually encounters an error message that feels impossible to understand. One moment everything works and the next moment the entire application breaks with a message that seems completely unrelated to the actual problem.

I once spent hours investigating an issue that turned out to be caused by a very small mistake. The experience taught me an important lesson. Error messages are not enemies. They are clues.

Sometimes the message itself is unclear, but it still points toward the area where something went wrong. Learning how to read errors carefully and investigate their causes is a skill that improves with experience. Over time you begin to see debugging not as frustration but as a puzzle waiting to be solved.`
  },
  'build-before-finishing-tutorials': {
    title: 'Why Every Developer Should Build Projects Before Finishing Tutorials',
    date: '2024-12-10',
    readTime: '7 min read',
    category: 'Career',
    image: '/images/blog3.webp',
    content: `It is easy to fall into the habit of watching tutorial after tutorial without ever building something independently. While tutorials can be educational, they sometimes create a false sense of progress. Following instructions step by step feels productive, but it does not always require deep thinking.

When you start building your own projects everything changes. You must decide how features should work, how data should flow, and how different parts of the system connect. This process forces you to think critically and search for solutions on your own.

Starting projects early accelerates learning because it turns theory into experience. The sooner you begin creating your own ideas, the faster you develop real confidence as a developer.`
  },
  'things-beginners-obsess-over': {
    title: 'Things Beginner Developers Obsess Over That Do Not Matter',
    date: '2024-12-05',
    readTime: '6 min read',
    category: 'Career',
    image: '/images/blog4.webp',
    content: `When someone first starts learning to code it is easy to become overwhelmed by the amount of technology available. Many beginners spend hours debating which programming language is the best or which framework they should learn first. They worry about choosing the perfect tool before they have even built their first real project.

In reality most successful developers did not start with the perfect stack. They started by building things. Another common obsession is writing perfect code from the beginning. Beginners often feel pressured to follow every best practice immediately.

While clean code is important, the early stages of learning are about experimentation. Making mistakes and fixing them is part of the process. Progress in programming comes from building projects and solving real problems. The sooner beginners shift their focus from theory to practice, the faster their skills improve.`
  },
  'coding-skills-that-pay': {
    title: 'Coding Skills That Actually Pay in the Real World',
    date: '2024-11-28',
    readTime: '8 min read',
    category: 'Career',
    image: '/images/blog1.webp',
    content: `The skills that matter most in real development environments are not always the ones beginners expect. Knowing a programming language is useful, but companies often value problem solving ability even more. Developers are constantly faced with challenges that require logical thinking and creativity.

Communication is another essential skill. Developers rarely work alone. They collaborate with designers, product managers, and other engineers. Being able to explain technical ideas clearly is extremely valuable.

Debugging is also a crucial ability. Every system eventually encounters issues. Developers who can investigate problems calmly and identify the root cause are highly respected. Adaptability is another important trait. Technology evolves quickly, and developers who learn new tools easily remain competitive.

In the end the most valuable developers are not just coders. They are problem solvers who can build solutions that people actually use.`
  },
  'biggest-lie-in-tutorials': {
    title: 'The Biggest Lie in Learn to Code Tutorials',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Learning',
    image: '/images/blog2.webp',
    content: `Tutorials make programming look easy. The instructor types code, everything works perfectly, and the final result appears within minutes. Real development rarely looks like that.

In real projects things break constantly. Libraries behave differently than expected. Documentation can be confusing. Small mistakes can cause large problems. Tutorials are valuable because they introduce concepts, but they often hide the messy reality of development.

The truth is that programming involves a lot of trial and error. Developers spend a large portion of their time debugging issues and experimenting with different approaches. Understanding this early can save beginners a lot of frustration. Struggling with problems does not mean you are failing. It means you are doing the real work of learning how to build software.`
  },
  'good-vs-great-developers': {
    title: 'The Skill That Separates Good Developers From Great Ones',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Career',
    image: '/images/blog3.webp',
    content: `Technical knowledge is important in programming, but it is not the only factor that determines success. One skill that often separates good developers from great ones is persistence.

Great developers do not panic when they encounter difficult problems. Instead they approach challenges with curiosity. They investigate issues, test different solutions, and continue learning until they understand what went wrong.

Another defining trait is continuous learning. The best developers remain curious even after years of experience. They explore new technologies, read about different approaches, and constantly refine their skills. Programming rewards patience and determination. Over time these qualities build deep expertise that goes far beyond memorizing syntax.`
  },
  'why-websites-look-the-same': {
    title: 'Why Most Websites Look the Same',
    date: '2024-11-10',
    readTime: '6 min read',
    category: 'Design',
    image: '/images/blog4.webp',
    content: `If you spend enough time browsing the internet, you start noticing a pattern. Many websites feel strangely familiar. A large headline at the top, a call to action button, a section with cards, maybe some testimonials, then a footer. After a while it begins to feel like the entire internet is built from the same blueprint.

There is actually a good reason for this. Web design has evolved around patterns that users already understand. When someone lands on a website they expect certain things. They expect the logo to be in the top corner. They expect navigation at the top. They expect a clear button that tells them what to do next. Designers follow these patterns because they reduce confusion.

Frameworks and templates also play a big role. Modern tools make it easy to build websites quickly using pre built components. While this speeds up development, it also means many websites share the same visual structure. Another reason is influence. When a large company launches a successful design, other companies start copying it. Over time those designs become industry standards.

The problem is not the pattern itself. Familiarity can actually improve usability. The real issue is when developers stop thinking creatively. A website should reflect the personality of the brand behind it. It should communicate something unique. Great websites still follow usability principles but they add character. This could come from typography, color, storytelling, motion, or layout choices that feel intentional.

In the end the goal is not just to build a website that works. The goal is to build a website that feels memorable.`
  },
  'what-makes-premium': {
    title: 'What Makes a Website Feel Premium',
    date: '2024-11-05',
    readTime: '8 min read',
    category: 'Design',
    image: '/images/blog1.webp',
    content: `Sometimes you open a website and instantly feel that it was crafted with care. The experience feels smooth, clean, and professional. Even if you cannot immediately explain why, you can sense that the website feels premium.

One of the biggest factors is attention to detail. Premium websites usually have excellent spacing. Elements are not crowded together and each section has room to breathe. This creates a sense of balance that makes the interface easier to understand.

Typography is another major factor. The way text is styled can dramatically change how a website feels. Clean fonts, proper line spacing, and clear hierarchy make reading effortless. Performance also contributes to a premium experience. Pages load quickly and interactions respond instantly. When users click something and the response feels smooth and immediate, the entire site feels more polished.

Consistency is also important. Buttons behave the same way throughout the site. Colors are used intentionally. Layout patterns repeat in predictable ways. Interestingly premium websites often feel simpler than average ones. Instead of overwhelming users with too many elements, they focus on clarity and purpose.

The secret behind a premium website is not expensive graphics or complicated features. It is thoughtful design combined with careful execution.`
  },
  'why-developers-should-care-about-ui': {
    title: 'Why Developers Should Care About UI',
    date: '2024-10-28',
    readTime: '6 min read',
    category: 'Design',
    image: '/images/blog2.webp',
    content: `Many developers begin their journey focused entirely on functionality. They want their code to work correctly and once the feature works they move on. But users never see the code. What they experience is the interface.

If the UI is confusing or difficult to navigate, users may assume the entire product is poorly built even if the underlying system is powerful. First impressions online happen extremely quickly. Understanding UI does not mean every developer must become a designer. However it does mean being aware of how people interact with your product.

Simple improvements can dramatically change the user experience. Clear navigation, readable text, balanced spacing, and responsive layouts make a website much easier to use. Developers who understand both the technical and visual sides of a product often build better solutions. They think not only about how something works but also about how it feels.

In many cases the difference between a good product and a great one is the experience users have while interacting with it.`
  },
  'animations-make-or-break': {
    title: 'Why Animations Can Make or Break a Website',
    date: '2024-10-20',
    readTime: '7 min read',
    category: 'Design',
    image: '/images/blog3.webp',
    content: `Animation has become a powerful tool in modern web design. When used properly it can guide the user, communicate relationships between elements, and make the interface feel more alive.

A simple animation can draw attention to an important action or show how content flows between sections. For example a smooth transition between pages helps users understand that they are still within the same environment. However animation can also cause problems when it is overused. Excessive motion can slow down a website or distract users from the content they actually care about.

The key is intention. Every animation should have a purpose. It should either provide feedback, guide attention, or improve clarity. When animations feel smooth and natural they enhance the user experience. When they are chaotic or unnecessary they create frustration. The best animations are often the ones users barely notice because they simply make the interface feel intuitive.`
  }
};

export const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-primary flex items-center justify-center">
        <Navbar />
        <MobileNav />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-accent hover:text-accent/80">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <MobileNav />
      
      <article className="py-24 px-6 max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span className="font-mono">Back to Blog</span>
        </Link>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full mb-4">
            {article.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-secondary/60 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph: string, index: number) => (
            <p key={index} className="text-secondary text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-mono hover:bg-accent/10 transition-colors rounded"
          >
            <ArrowLeft size={16} />
            Read More Articles
          </Link>
        </div>
      </article>
    </div>
  );
};

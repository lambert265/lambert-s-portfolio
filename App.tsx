import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Toolkit } from './components/Toolkit';
import { WhatImLearning } from './components/WhatImLearning';
import { Projects } from './components/Projects';
import { SideProjects } from './components/SideProjects';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { FloatingSocials } from './components/FloatingSocials';
import { FloatingEmail } from './components/FloatingEmail';
import { MobileNav } from './components/MobileNav';
import { TechBackground } from './components/ui/TechBackground';
import { BootSequence } from './components/ui/BootSequence';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { BlogPage } from './pages/BlogPage';
import { AnimatePresence, motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <FloatingEmail />
      <MobileNav />
      
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <Toolkit />
        <WhatImLearning />
        <Projects />
        <SideProjects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <BootSequence onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          className="bg-background min-h-screen text-primary overflow-x-hidden selection:bg-accent/30 selection:text-white relative pb-20 lg:pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TechBackground />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={
              <>
                <Navbar />
                <MobileNav />
                <BlogPage />
              </>
            } />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
          </Routes>
        </motion.div>
      )}
    </Router>
  );
};

export default App;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide back-to-top button
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // Use IntersectionObserver to highlight navbar accurately as user scrolls
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'menu', 'offers', 'gallery', 'reviews', 'contact'];
    
    // Set up threshold offsets corresponding to fine-dining sections
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // focused in the center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative font-sans text-stone-200 antialiased overflow-x-hidden min-h-screen bg-[#040a12]">
      
      {/* Aurora Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute top-1/4 -right-48 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#8A2BE2]/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute -bottom-48 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[130px]"></div>
      </div>
      
      {/* Dynamic luxury loading screen */}
      <AnimatePresence>
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Global Frosted Luxury Header */}
          <Navbar activeSection={activeSection} />

          {/* Individual section blocks */}
          <main>
            <Hero />
            <About />
            <Menu />
            <Offers />
            <Gallery />
            <Testimonials />
            <ReservationForm />
            <Contact />
          </main>

          {/* Elegantly styled Footer */}
          <Footer />

          {/* Scroll-to-top floating clicker */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-40 flex h-10 w-10 items-center justify-center border border-gold-500/35 bg-zinc-950/90 text-gold-300 shadow-2xl backdrop-blur-md hover:border-gold-400 hover:text-white transition-all active:scale-90 focus:outline-none"
                title="Scroll back to top"
                id="back-to-top-btn"
              >
                <ChevronUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}

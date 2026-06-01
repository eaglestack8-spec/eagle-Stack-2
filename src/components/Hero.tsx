/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600',
      title: 'Sophisticated Gastronomy',
      accent: 'Crafted with Passion',
    },
    {
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600',
      title: 'Exquisite Fine Wine',
      accent: 'Sommelier Recommended',
    },
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600',
      title: 'Intimate Candlelit Ambiance',
      accent: 'An Ode to Luxury',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Immersive Background Images Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.65, scale: 1.02 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Ambient Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0d0c0a]/45"></div>
        
        {/* Fine luxury linen grid pattern */}
        <div className="linen-overlay absolute inset-0"></div>
      </div>

      {/* Hero Content Panel */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
        
        {/* Signature Monogram Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center space-x-2 border border-gold-500/35 bg-black/60 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles size={11} className="text-gold-400 animate-pulse" />
          <span className="font-cinzel text-[9px] font-bold tracking-[0.25em] text-gold-200 uppercase">
            A Michelin Guide Recommendation
          </span>
          <Sparkles size={11} className="text-gold-400 animate-pulse" />
        </motion.div>

        {/* Headline and Narrative */}
        <div className="relative mb-8">
          <motion.p
            key={`accent-${currentSlide}`}
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 0.9, letterSpacing: '0.3em' }}
            transition={{ duration: 0.8 }}
            className="font-serif text-sm italic tracking-[0.25em] text-gold-300"
          >
            {slides[currentSlide].accent}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-cinzel text-5xl font-bold tracking-[0.05em] text-stone-100 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Where Art Meets <br />
            <span className="text-gold-gradient font-extrabold">Royal Flavor</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '160px' }}
            transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
            className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          ></motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto max-w-2xl font-sans text-sm font-light leading-relaxed tracking-wide text-stone-300 md:text-base"
        >
          Embark on an epicurean journey of fine dining, where Kashmiri spices unite
          with French culinary craft. Set inside a luxurious, intimate candlelit vault.
        </motion.p>

        {/* Dynamic CTA Triggers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
        >
          <button
            onClick={() => scrollToSection('menu')}
            className="group relative w-full overflow-hidden bg-gold-500 px-8 py-4 font-cinzel text-xs font-bold tracking-widest text-stone-950 uppercase transition-all duration-500 hover:bg-gold-400 sm:w-auto"
            id="hero-view-menu-btn"
          >
            <span className="relative">Explore Tasting Menu</span>
          </button>

          <button
            onClick={() => scrollToSection('reservation')}
            className="group w-full border border-gold-500/40 bg-black/40 px-8 py-4 font-cinzel text-xs font-bold tracking-widest text-gold-300 uppercase transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10 sm:w-auto"
            id="hero-reserve-btn"
          >
            Settle Your Table
          </button>
        </motion.div>
      </div>

      {/* High-end quick info bar bottom */}
      <div className="absolute bottom-12 left-0 z-10 hidden w-full justify-between px-12 text-stone-500 font-mono text-[10px] uppercase tracking-widest md:flex">
        <div className="flex items-center space-x-2">
          <MapPin size={11} className="text-gold-500" />
          <span>742 Obsidian Ave, Beverly Hills</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={11} className="text-gold-500" />
          <span>Open Daily: 5:00 PM – 11:30 PM</span>
        </div>
      </div>

      {/* Decorative arrow bounce down */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="text-stone-500 hover:text-gold-400 transition-colors animate-bounce focus:outline-none"
          title="Scroll Down"
          id="hero-scroll-trigger"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}

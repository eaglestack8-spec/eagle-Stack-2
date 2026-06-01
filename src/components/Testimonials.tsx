/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="relative bg-transparent py-24 lg:py-32">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-gold-950/25 blur-[120px]"></div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Epicurean Expressions</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            Guest Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs font-light text-stone-400">
            Hear from our prestigious patrons, travel writers, and elite gastronomy columnists.
          </p>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative border border-gold-500/10 bg-zinc-950/50 p-8 sm:p-14 backdrop-blur-md shadow-2xl" id="testimonial-carousel">
          
          {/* Quote Mark background */}
          <div className="absolute top-6 left-6 text-gold-500/10 pointer-events-none">
            <Quote size={80} className="fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              {/* Star scale */}
              <div className="flex items-center space-x-1" id="star-rating">
                {Array.from({ length: reviews[activeIndex].rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold-500 text-gold-500 shadow-md" />
                ))}
              </div>

              {/* Patron Comment */}
              <p className="font-serif text-lg md:text-xl italic font-light text-stone-200 leading-relaxed max-w-3xl">
                "{reviews[activeIndex].comment}"
              </p>

              {/* Divider */}
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

              {/* Patron Identity info */}
              <div className="flex flex-col items-center space-y-2">
                <div className="h-12 w-12 rounded-full border border-gold-500/25 overflow-hidden">
                  <img
                    src={reviews[activeIndex].avatar}
                    alt={reviews[activeIndex].name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="block font-cinzel text-xs font-bold tracking-widest text-stone-100 uppercase">
                    {reviews[activeIndex].name}
                  </span>
                  <span className="block font-mono text-[9px] text-gold-400 tracking-wider">
                    {reviews[activeIndex].role} &middot; {reviews[activeIndex].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Left Navigation Toggle */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gold-500/10 bg-black/60 text-stone-400 hover:text-gold-400 hover:border-gold-500 transition-all focus:outline-none"
            id="prev-testimonial-btn"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carousel Right Navigation Toggle */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gold-500/10 bg-black/60 text-stone-400 hover:text-gold-400 hover:border-gold-500 transition-all focus:outline-none"
            id="next-testimonial-btn"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Carousel Pagination dots */}
        <div className="mt-8 flex justify-center space-x-2.5" id="carousel-dots">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 transition-all rounded-full ${
                activeIndex === idx
                  ? 'w-6 bg-gold-400'
                  : 'w-2 bg-stone-700 hover:bg-gold-500/40'
              }`}
              title={`Move to index ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

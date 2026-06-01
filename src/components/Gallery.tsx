/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { galleryImages } from '../data';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dishes' | 'ambiance' | 'chef'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { name: 'All Visuals', value: 'all' },
    { name: 'Sovereign Plates', value: 'dishes' },
    { name: 'Intimate Ambiance', value: 'ambiance' },
    { name: 'The Artisans', value: 'chef' },
  ];

  // Filtering list
  const filteredImages = galleryImages.filter(img => activeFilter === 'all' || img.category === activeFilter);

  const handleOpenLightbox = (id: string) => {
    const idx = galleryImages.findIndex(img => img.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="relative bg-transparent py-24 lg:py-32">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-gold-950/15 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Atmosphere & Ephemera</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            The Visual Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs font-light text-stone-400">
            A quiet gaze into the curated interior, plating precision, and passionate craft behind our fine-dining sanctuary.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2" id="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
              className={`px-5 py-2 font-cinzel text-[10px] font-bold tracking-[0.1em] uppercase transition-all duration-300 border ${
                activeFilter === filter.value
                  ? 'border-gold-500 bg-gold-500/10 text-gold-200'
                  : 'border-white/5 bg-transparent text-stone-300 hover:border-gold-500/30'
              }`}
              id={`filter-btn-${filter.value}`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <motion.div
          layout
          className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
          id="gallery-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                onClick={() => handleOpenLightbox(img.id)}
                className="gilded-frame mb-6 break-inside-avoid overflow-hidden bg-zinc-950 group cursor-pointer relative"
                id={`gallery-item-${img.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass Card Caption on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                    <motion.div
                      className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <span className="font-mono text-[8px] tracking-widest text-gold-400 uppercase">
                        CATEGORY: {img.category}
                      </span>
                      <p className="font-serif text-xs italic text-stone-100">
                        "{img.caption}"
                      </p>
                      <div className="flex items-center space-x-1 text-[9px] font-mono text-gold-300">
                        <ZoomIn size={10} />
                        <span className="tracking-widest uppercase">Inspect Picture</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox full-size Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            id="gallery-lightbox"
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2.5 bg-zinc-900 border border-gold-500/20 text-stone-300 hover:text-gold-400 transition-colors"
              id="close-lightbox-btn"
            >
              <X size={20} />
            </button>

            {/* Left Trigger Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 bg-zinc-900/80 border border-gold-500/10 text-stone-300 hover:text-gold-400 hover:border-gold-500 transition-all"
              id="prev-lightbox-btn"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image display */}
            <div className="max-w-4xl max-h-[75vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[lightboxIndex].url}
                alt={galleryImages[lightboxIndex].caption}
                className="max-w-full max-h-[75vh] object-contain border border-gold-500/15 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox footer text info */}
            <div className="mt-6 text-center max-w-xl px-4" onClick={(e) => e.stopPropagation()}>
              <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest">
                DISPLAY PIECE {lightboxIndex + 1} OF {galleryImages.length} ({galleryImages[lightboxIndex].category})
              </span>
              <p className="mt-2 font-serif text-sm italic text-stone-100">
                "{galleryImages[lightboxIndex].caption}"
              </p>
            </div>

            {/* Right Trigger Navigation */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-zinc-900/80 border border-gold-500/10 text-stone-300 hover:text-gold-400 hover:border-gold-500 transition-all"
              id="next-lightbox-btn"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Eye, Sparkles, Filter, X, Flame } from 'lucide-react';
import { menuItems } from '../data';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'drinks'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { name: 'Full Menu', value: 'all' },
    { name: 'Amuse-Bouche & Starters', value: 'starters' },
    { name: 'Gastronomy Mains', value: 'mains' },
    { name: 'Artisanal Desserts', value: 'desserts' },
    { name: 'Sovereign Spirits', value: 'drinks' },
  ];

  // Filter items matching activeCategory and searchQuery
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="relative bg-transparent py-24 lg:py-32">
      {/* Dynamic background accents */}
      <div className="absolute top-1/3 left-10 -z-10 h-96 w-96 rounded-full bg-gold-950/10 blur-[150px]"></div>
      <div className="absolute bottom-1/3 right-10 -z-10 h-96 w-96 rounded-full bg-amber-950/10 blur-[150px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Epicurean Selections</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            Our Seasonal Menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs font-light text-stone-400">
            Click on any signature experience below to appreciate the ingredients, preparation, and sommelier suggestions.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" id="menu-search-filters">
          
          {/* Category Toggle Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-4 py-2.5 font-cinzel text-[10px] font-bold tracking-[0.1em] uppercase transition-all duration-300 border ${
                  activeCategory === cat.value
                    ? 'border-gold-500 bg-gold-500/10 text-gold-200'
                    : 'border-white/5 bg-white/5 text-stone-300 hover:border-gold-500/30'
                }`}
                id={`cat-btn-${cat.value}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Elegant Search Input */}
          <div className="relative w-full max-w-xs sm:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-500">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search dishes, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 py-2.5 pl-9 pr-4 font-cinzel text-[11px] tracking-wider text-stone-200 placeholder-stone-550 focus:border-gold-500/40 focus:bg-stone-900/60 focus:outline-none transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-500 hover:text-gold-400"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          id="menu-grid-items"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="bg-glass-card bg-glass-card-hover group flex flex-col justify-between overflow-hidden"
                id={`menu-item-${item.id}`}
              >
                {/* Food Image and Hover Icons */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Linen grid on image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  
                  {/* Category ribbon & Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-black/80 px-2 py-0.5 border border-gold-500/20 font-mono text-[8px] uppercase tracking-widest text-gold-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-black/80 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-stone-950 transition-colors duration-300"
                    title="View details"
                    id={`view-btn-${item.id}`}
                  >
                    <Eye size={12} />
                  </button>
                </div>

                {/* Card description text */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-cinzel text-sm font-bold tracking-wider text-stone-100 group-hover:text-gold-250 transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-sans text-sm font-bold text-gold-400 ml-2">
                        ${item.price}
                      </span>
                    </div>
                    <p className="font-sans text-[12px] font-light leading-relaxed text-stone-400 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footnote Calories info */}
                  {item.calories && (
                    <div className="mt-4 pt-3 border-t border-gold-500/10 flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-widest text-stone-500 uppercase">
                        EPICUREAN STANDARDS
                      </span>
                      <span className="font-mono text-[8px] tracking-widest text-gold-400/80">
                        {item.calories} CAL
                      </span>
                    </div>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result feedback */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center text-stone-400"
          >
            <p className="font-cinzel text-sm tracking-widest text-gold-400">No divine creations found Matching your search.</p>
            <p className="mt-2 text-xs font-light">Please try adjusting your category or enter a different search phrase.</p>
          </motion.div>
        )}

      </div>

      {/* Culinary Detail Interactive Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#12100d] border border-gold-500/30 w-full max-w-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              id="menu-detail-modal"
            >
              {/* Corner Accents */}
              <span className="absolute top-2 left-2 border-t border-l border-gold-500/45 h-3 w-3"></span>
              <span className="absolute top-2 right-2 border-t border-r border-gold-500/45 h-3 w-3"></span>
              <span className="absolute bottom-2 left-2 border-b border-l border-gold-500/45 h-3 w-3"></span>
              <span className="absolute bottom-2 right-2 border-b border-r border-gold-500/45 h-3 w-3"></span>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 border border-gold-500/20 text-stone-300 hover:text-gold-400 transition-colors"
                id="close-modal-btn"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-[10px] italic tracking-widest text-gold-400 uppercase">
                      {selectedItem.category} SELECTION
                    </span>
                    <h3 className="mt-1 font-cinzel text-xl font-bold tracking-wide text-stone-100">
                      {selectedItem.name}
                    </h3>
                    <div className="mt-2 h-[1px] w-12 bg-gold-500"></div>

                    <p className="mt-4 font-sans text-xs font-light leading-relaxed text-stone-300">
                      {selectedItem.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {selectedItem.tags.map((tag) => (
                        <span key={tag} className="bg-gold-500/5 px-2 py-0.5 border border-gold-500/10 font-mono text-[8px] uppercase tracking-widest text-gold-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gold-500/10 flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-[8px] text-stone-500 uppercase tracking-widest">Pricing</span>
                      <span className="font-sans text-xl font-bold text-gold-200">${selectedItem.price}</span>
                    </div>

                    <div className="text-right">
                      <span className="block font-mono text-[8px] text-stone-500 uppercase tracking-widest">Energetic Value</span>
                      <span className="font-mono text-xs text-stone-300">{selectedItem.calories || 320} Calories</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, UserCheck, Flame, ShieldAlert } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '3', label: 'Michelin Stars', icon: Award },
    { value: '18+', label: 'Years of Artistry', icon: UserCheck },
    { value: '100%', label: 'Saffron Purity', icon: Flame },
  ];

  return (
    <section
      id="about"
      className="relative bg-transparent py-24 lg:py-32"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-gold-950/20 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-amber-950/15 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Our Heritage & Craft</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            The Chronicle of Taste
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            id="about-narrative"
          >
            <h3 className="font-cinzel text-xl font-bold tracking-wider text-gold-200">
              Where Kashmiri Heavens Meet Haute French Gastronomy
            </h3>
            
            <p className="font-sans text-sm font-light leading-relaxed text-stone-300">
              Founded in 2012 inside an ancient brickwork cellar, Royal Spice was born out of 
              a desire to revolutionize modern dining. We merge the aromatic, mystical spices 
              of the Kashmiri highlands with the precise, foundational culinary frameworks of Paris.
            </p>

            <p className="font-sans text-sm font-light leading-relaxed text-stone-300">
              Each dish is conceptualized as an artistic canvas. Our spices are sourced 
              personally by our chefs directly from boutique growers in Srinagar, India, ensuring 
              undiluted essence that elevates our premium dry-aged steaks, fresh sea harvests, 
              and gold-gilded dessert wonders.
            </p>

            {/* Chef Spotlight Row */}
            <div className="flex border-l-2 border-gold-500/40 bg-white/5 p-5 backdrop-blur-sm space-x-4 items-start">
              <div className="font-serif text-gold-400 text-4xl font-black italic select-none">“</div>
              <div>
                <p className="font-sans text-[13px] italic font-light text-stone-250 leading-relaxed">
                  "Food is our love letter to the senses. We don’t seek to feed; we aim to create 
                  lasting, core dining recollections that simmer beautifully in your soul forever."
                </p>
                <div className="mt-3">
                  <span className="block font-cinzel text-xs font-bold tracking-widest text-stone-100 uppercase">
                    CHEF MARCUS VANCE
                  </span>
                  <span className="block font-mono text-[9px] text-gold-400 tracking-wider">
                    Executive Chef de Cuisine
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Gilded Images Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] w-full"
            id="about-visuals"
          >
            {/* Primary Main Image (Tall Frame) */}
            <div className="gilded-frame absolute left-0 top-0 h-[380px] w-[280px] overflow-hidden shadow-2xl shadow-black/60">
              <img
                src="https://images.unsplash.com/photo-1559742811-82410b451b9b?auto=format&fit=crop&q=80&w=600"
                alt="Chef Marcus Vance crafting fine starters"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Subposed Overlaid Accent Image */}
            <div className="gilded-frame absolute right-4 bottom-4 h-[240px] w-[220px] overflow-hidden shadow-2xl shadow-black/80 z-10 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1532636875304-0c8fe119cb9e?auto=format&fit=crop&q=80&w=600"
                alt="Plating fine culinary masterpiece"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Decorative Gold Elements */}
            <div className="absolute top-1/2 left-2/3 h-14 w-14 -translate-y-1/2 border-t-2 border-r-2 border-gold-500/20"></div>
            <div className="absolute top-[80%] right-[30%] -z-10 font-decorative text-8xl text-stone-900/40 select-none">
              RS
            </div>
          </motion.div>
        </div>

        {/* Statistics Block */}
        <div className="mt-24 grid grid-cols-1 gap-8 border-t border-b border-gold-500/10 py-12 sm:grid-cols-3">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center space-y-2"
                id={`stat-${idx}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-950/20 border border-gold-500/20 text-gold-400">
                  <IconComponent size={20} />
                </div>
                <span className="font-cinzel text-3xl font-bold tracking-wider text-gold-300">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

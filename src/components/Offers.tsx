/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Ticket, Copy, Check, Clock, Sparkles } from 'lucide-react';
import { specialOffers } from '../data';

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="offers" className="relative bg-transparent py-24 lg:py-32">
      {/* Background patterns */}
      <div className="linen-overlay absolute inset-0 opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-gold-950/15 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Exclusive Privileges</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            Special Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs font-light text-stone-400">
            Apply these code combinations during your digital reservation to enjoy exclusive sommelier and tasting benefits.
          </p>
        </div>

        {/* Promo Offers Cards Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {specialOffers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative flex flex-col md:flex-row overflow-hidden border border-gold-500/15 bg-zinc-950/60 backdrop-blur-md shadow-2xl group"
              id={`offer-card-${offer.id}`}
            >
              {/* Offer Badge Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-violet-600 via-cyan-500 to-gold-500 px-3 py-1 font-cinzel text-[8px] font-black tracking-widest text-white uppercase">
                {offer.badge}
              </div>

              {/* Offer Left Imagery */}
              <div className="h-56 w-full md:h-auto md:w-1/2 overflow-hidden relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 to-transparent hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 to-transparent md:hidden"></div>
              </div>

              {/* Offer Right Content description */}
              <div className="p-8 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gold-400">
                    <Clock size={12} className="animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400">
                      {offer.expiryTime}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-md font-bold text-stone-100 group-hover:text-gold-200 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="font-serif text-[11px] italic text-gold-300">
                    {offer.subtitle}
                  </p>
                  <p className="font-sans text-[11px] font-light leading-relaxed text-stone-400">
                    {offer.description}
                  </p>
                </div>

                {/* Benefits / Copy code section */}
                <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between">
                  <div>
                    <span className="block font-mono text-[8.5px] text-stone-500 uppercase tracking-widest">BENEFIT</span>
                    <span className="font-cinzel text-sm font-black text-gold-300">{offer.discount}</span>
                  </div>

                  {/* Copy Button */}
                  <div className="text-right">
                    <span className="block font-mono text-[8.5px] text-stone-500 uppercase tracking-widest mb-1.5 text-right">COUPON CODE</span>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className="inline-flex items-center space-x-1.5 border border-gold-500/35 px-4 py-2 font-mono text-[10px] tracking-wider text-gold-100 bg-black/45 hover:border-gold-400 hover:text-white transition-all focus:outline-none"
                      id={`copy-btn-${offer.id}`}
                    >
                      <span>{offer.code}</span>
                      {copiedCode === offer.code ? (
                        <Check size={11} className="text-green-400" />
                      ) : (
                        <Copy size={11} className="text-gold-400" />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

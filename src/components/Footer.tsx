/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Twitter, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4500);
  };

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
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
    <footer className="relative bg-[#050505] border-t border-gold-500/10 py-16" id="app-footer">
      <div className="linen-overlay absolute inset-0 opacity-5 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand logo, Newsletter & Links Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">
          
          {/* Brand Col: Left (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <button
              onClick={() => handleScrollTo('home')}
              className="flex items-center space-x-3 text-left focus:outline-none"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-gold-500/40 bg-[#040a12] overflow-hidden rounded-md p-0.5">
                <img 
                  src="https://i.ibb.co/tpP123PR/Chat-GPT-Image-Jun-1-2026-09-22-41-AM.png" 
                  alt="Royal Spice" 
                  className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block font-cinzel text-xl font-bold tracking-widest text-[#f5f2eb]">
                  ROYAL SPICE
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-gold-400 uppercase">
                  EPICUREAN FINE DINING SANCTUARY
                </span>
              </div>
            </button>

            <p className="font-sans text-[12px] font-light leading-relaxed text-stone-400 max-w-md">
              A Michelin-rated fine culinary space devoted to Indian Kashmiri heritage 
              uniquely structured via classical French molecular frameworks. 
              Our cellars boast over 300 curated vintage specimens.
            </p>

            {/* Newsletter Dispatch Input */}
            <div className="space-y-3 max-w-sm">
              <span className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest font-bold">
                Subscribe to Epicurean Chronicles
              </span>

              <form onSubmit={handleSubscribe} className="flex border border-gold-500/20 bg-black/40">
                <input
                  type="email"
                  required
                  placeholder="patron@lifestyle.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-2.5 font-sans text-xs text-stone-300 focus:outline-none placeholder-stone-600"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-stone-950 px-5 flex items-center justify-center transition-colors focus:outline-none active:scale-95"
                  title="Subscribe Newsletter"
                  id="newsletter-subscribe-btn"
                >
                  {isSubscribed ? <Check size={14} /> : <Send size={14} />}
                </button>
              </form>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-[9px] text-emerald-400/80 tracking-widest uppercase animate-pulse"
                  >
                    Successfully Registered under coordinates list list &middot; Thank you.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick nav directories (R: 4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-cinzel text-xs font-bold tracking-widest text-gold-200 uppercase mb-4">
                Establishments
              </h4>
              <ul className="space-y-2.5 font-sans text-xs font-light text-stone-400">
                <li>
                  <button onClick={() => handleScrollTo('home')} className="hover:text-gold-300 transition-colors">
                    The Main Sanctuary
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('about')} className="hover:text-gold-300 transition-colors">
                    Chef's Biography
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('menu')} className="hover:text-gold-300 transition-colors">
                    Tasting Menu
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('gallery')} className="hover:text-gold-300 transition-colors">
                    Ambiance Room
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-cinzel text-xs font-bold tracking-widest text-gold-200 uppercase mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 font-sans text-xs font-light text-stone-400">
                <li>
                  <button onClick={() => handleScrollTo('reservation')} className="hover:text-gold-300 transition-colors">
                    Seating Ledger
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('contact')} className="hover:text-gold-300 transition-colors">
                    Beverly Coordinates
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('offers')} className="hover:text-gold-300 transition-colors">
                    Privilege Offers
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('reviews')} className="hover:text-gold-300 transition-colors">
                    Patron Reviews
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact coordinates quick-ref: Far Right (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-gold-200 uppercase">
              Immediate Concierge
            </h4>
            <div className="space-y-3 font-mono text-[10.5px] text-stone-400">
              <p className="leading-relaxed">
                742 Obsidian Ave,<br />
                Beverly Hills, CA 90210
              </p>
              <p>T +1 (323) 555-0192</p>
              <p>E concierge@royalspice.com</p>
            </div>

            {/* Glowing Brand Accent Medias */}
            <div className="flex space-x-3 pt-2">
              {[
                { label: 'Instagram', icon: Instagram, href: '#' },
                { label: 'Facebook', icon: Facebook, href: '#' },
                { label: 'Twitter', icon: Twitter, href: '#' },
              ].map((m) => {
                const ScreenIcon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    className="flex h-8 w-8 items-center justify-center rounded-none border border-gold-500/10 hover:border-gold-400 hover:text-white text-gold-400/80 transition-all bg-black/60"
                    title={m.label}
                    onClick={(e) => e.preventDefault()}
                  >
                    <ScreenIcon size={13} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Lower Border / Copyright Notice */}
        <div className="pt-8 mt-12 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-stone-500 uppercase tracking-widest">
          <p>© {currentYear} Royal Spice Luxury Group LLC. All privileges reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors" onClick={(e) => e.preventDefault()}>Tasting terms</a>
            <a href="#" className="hover:text-gold-400 transition-colors" onClick={(e) => e.preventDefault()}>Consumer Safety Regulations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

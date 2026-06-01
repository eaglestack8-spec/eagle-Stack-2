/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Special Offers', id: 'offers' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking header
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
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/95 shadow-lg shadow-black/40 border-b border-gold-500/15 py-4 backdrop-blur-md'
            : 'bg-transparent py-6 border-b border-white/5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Header Brand */}
          <button
            onClick={() => handleScrollTo('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
            id="brand-logo"
          >
            <div className="relative flex h-11 w-11 items-center justify-center border border-gold-500/40 bg-[#040a12] transition-colors group-hover:border-gold-400 overflow-hidden rounded-md p-0.5">
              <img 
                src="https://i.ibb.co/tpP123PR/Chat-GPT-Image-Jun-1-2026-09-22-41-AM.png" 
                alt="Royal Spice" 
                className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -top-[1px] -left-[1px] h-[4px] w-[4px] bg-gold-500"></span>
              <span className="absolute -bottom-[1px] -right-[1px] h-[4px] w-[4px] bg-gold-400"></span>
            </div>
            <div>
              <span className="block font-cinzel text-lg font-bold tracking-widest text-gold-100 group-hover:text-gold-200 transition-colors">
                ROYAL SPICE
              </span>
              <span className="block text-[8px] font-medium tracking-[0.3em] text-gold-400 uppercase">
                EPICUREAN SANCTUARY
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`relative font-cinzel text-xs font-semibold tracking-wider uppercase transition-colors duration-300 hover:text-gold-350 focus:outline-none ${
                  activeSection === link.id ? 'text-gold-400' : 'text-stone-300'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-0 h-[1.5px] w-full bg-gold-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Direct CTA Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            <a
              href="tel:+13235550192"
              className="flex items-center space-x-2 text-xs font-medium tracking-wide text-amber-200/80 hover:text-gold-300 transition-colors"
              id="navbar-phone-call"
            >
              <Phone size={14} className="text-gold-500" />
              <span>+1 (323) 555-0192</span>
            </a>
            <button
              onClick={() => handleScrollTo('reservation')}
              className="group relative overflow-hidden border border-gold-500/40 bg-zinc-900/50 px-5 py-2.5 font-cinzel text-[10px] font-bold tracking-[0.15em] text-gold-300 uppercase transition-all hover:border-gold-500 hover:text-stone-50"
              id="navbar-book-btn"
            >
              <span className="absolute inset-0 bg-gold-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative flex items-center space-x-1">
                <CalendarRange size={12} className="mr-1" />
                <span>Book A Table</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => handleScrollTo('reservation')}
              className="rounded-none border border-gold-500/30 p-2 text-gold-400 hover:text-gold-250 hover:bg-gold-500/5"
              title="Book Table"
            >
              <CalendarRange size={16} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none p-1 text-gold-100"
              id="mobile-menu-btn"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#050505]/95 p-6 backdrop-blur-lg"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gold-500/10">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center border border-gold-500/40 bg-[#040a12] overflow-hidden rounded-md p-0.5">
                  <img 
                    src="https://i.ibb.co/tpP123PR/Chat-GPT-Image-Jun-1-2026-09-22-41-AM.png" 
                    alt="Royal Spice" 
                    className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="block font-cinzel text-md font-bold tracking-widest text-gold-100">
                    ROYAL SPICE
                  </span>
                  <span className="block text-[8px] tracking-widest text-gold-400">
                    LUXURY DINING
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-400 hover:text-gold-400 focus:outline-none"
                id="close-mobile-menu-btn"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-1 flex-col justify-center space-y-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`font-cinzel text-lg tracking-[0.2em] uppercase focus:outline-none transition-colors ${
                    activeSection === link.id ? 'text-gold-400 font-bold' : 'text-stone-300'
                  }`}
                  id={`mobile-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="border-t border-gold-500/10 pt-6 text-center">
              <a
                href="tel:+13235550192"
                className="block mb-4 font-mono text-sm text-stone-300 hover:text-gold-400"
              >
                +1 (323) 555-0192
              </a>
              <button
                onClick={() => handleScrollTo('reservation')}
                className="w-full bg-gold-500 px-6 py-3 font-cinzel text-xs font-bold tracking-widest text-[#0d0c0a] uppercase hover:bg-gold-400 active:scale-95 transition-all duration-300"
                id="mobile-book-btn"
              >
                Reserve Tasting Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

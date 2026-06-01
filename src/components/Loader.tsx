/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040a12] text-center"
      id="royal-spice-loader"
    >
      {/* Decorative aurora glow inside loader */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8A2BE2]/10 rounded-full blur-[80px]"></div>
      </div>
      <div className="relative flex flex-col items-center p-8">
        {/* Elegant Animated Logo Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mb-6 flex h-28 w-28 items-center justify-center border border-gold-500/30 overflow-hidden rounded-lg bg-[#040a12]/80 p-1"
        >
          {/* Gilded Inner Frame */}
          <div className="absolute inset-1 border border-gold-500/10"></div>
          
          {/* Animated corner lines */}
          <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-gold-500"></span>
          <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-gold-500"></span>
          <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-gold-500"></span>
          <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-gold-500"></span>
          
          <motion.img
            initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            src="https://i.ibb.co/tpP123PR/Chat-GPT-Image-Jun-1-2026-09-22-41-AM.png"
            alt="Royal Spice Logo"
            className="h-full w-full object-contain filter drop-shadow-[0_0_12px_rgba(0,242,255,0.5)] relative z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Elegant Restaurant Name Drawing */}
        <motion.h1
          initial={{ letterSpacing: '0.2em', opacity: 0 }}
          animate={{ letterSpacing: '0.4em', opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
          className="font-cinzel text-2xl font-bold tracking-[0.3em] uppercase text-gold-200"
        >
          ROYAL SPICE
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
          className="my-4 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-serif text-xs italic tracking-widest text-gold-100"
        >
          EPICUREAN FINE DINING
        </motion.p>
      </div>

      {/* Decorative side accents */}
      <div className="absolute bottom-10 left-10 hidden font-mono text-[9px] tracking-widest text-gold-500/20 md:block">
        EST. 2026
      </div>
      <div className="absolute bottom-10 right-10 hidden font-mono text-[9px] tracking-widest text-gold-500/20 md:block">
        MEMBER RESORT GUEST
      </div>
    </motion.div>
  );
}

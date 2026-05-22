import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';
import heroFoodBanner from '../assets/hero_food_banner.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20"
    >
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFoodBanner}
          alt="L'Étoile Dorée Gourmet Plate"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
        />
        {/* Gradients to blend background */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/80 to-neutral-950 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-10" />
      </div>

      {/* Decorative Gold Glow Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel-light rounded-full border border-gold-500/20 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-premium animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-gold-premium font-medium">
            Michelin Starred Excellence
          </span>
        </motion.div>

        {/* Brand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          A Symphony of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-premium to-gold-400">Flavors</span>,
          <br className="hidden sm:inline" /> Orchestrated to Perfection
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 font-light tracking-wide leading-relaxed mb-10"
        >
          Experience gourmet culinary art where classic French traditions meet modern innovation in an atmosphere of refined luxury.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-neutral-950 font-bold tracking-widest text-xs uppercase rounded-none transition-all duration-300 shadow-xl shadow-gold-950/20 hover:shadow-gold-500/25 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book A Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950/40 hover:bg-neutral-900/60 text-white border border-white/10 hover:border-gold-premium/50 font-bold tracking-widest text-xs uppercase rounded-none transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold-premium" />
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Victoria Sterling",
      role: "Gastronomy Critic",
      text: "L'Étoile Dorée offers an absolute masterclass in flavor balancing. The Wagyu beef tenderloin was buttery soft, and the chocolate sphere table demonstration was mesmerizing. A true jewel of haute cuisine.",
      stars: 5,
      initials: "VS"
    },
    {
      id: 2,
      name: "Dr. Adrian Vance",
      role: "Fine Dining Enthusiast",
      text: "The estate-to-table freshness shines in every starter. The scallops were incredibly tender, complemented beautifully by the saffron foam. Pair it with their sommelier's wine list for pure perfection.",
      stars: 5,
      initials: "AV"
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Luxury Lifestyle Blogger",
      text: "An unforgettable atmosphere. The custom warm golden lighting, the velvet acoustics, and the white-glove attentiveness make this the ultimate anniversary or special occasion destination in the city.",
      stars: 5,
      initials: "MT"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Background glow behind testimonial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Loved By Connoisseurs
          </h2>
          <div className="w-16 h-[1px] bg-gold-premium mx-auto" />
        </div>

        {/* Testimonials Slider Card */}
        <div className="relative glass-panel border border-white/5 px-8 py-12 md:p-16 flex flex-col items-center text-center">
          <Quote className="w-12 h-12 text-gold-premium/20 mb-6" />

          {/* Review Slider */}
          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-premium text-gold-premium" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-neutral-300 font-light italic leading-relaxed max-w-2xl mx-auto">
                  "{reviews[currentIndex].text}"
                </p>

                {/* Reviewer Meta */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gold-600/10 border border-gold-premium/30 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xs font-serif font-bold text-gold-premium">
                      {reviews[currentIndex].initials}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">
                    {reviews[currentIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 border border-white/10 hover:border-gold-premium/40 text-neutral-400 hover:text-gold-premium transition-all duration-300 rounded-none focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 transition-all duration-300 ${
                    currentIndex === idx ? 'bg-gold-premium w-4' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 border border-white/10 hover:border-gold-premium/40 text-neutral-400 hover:text-gold-premium transition-all duration-300 rounded-none focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

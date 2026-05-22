import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Heart } from 'lucide-react';
import chefPortrait from '../assets/chef_portrait.png';

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-gold-premium" />,
      title: "Michelin Heritage",
      description: "Our cuisine is crafted under the vision of multi-starred Michelin chefs, ensuring absolute culinary precision."
    },
    {
      icon: <Heart className="w-6 h-6 text-gold-premium" />,
      title: "Estate-to-Table",
      description: "We source rare ingredients directly from sustainable, organic micro-farms and local biodynamic growers."
    },
    {
      icon: <Compass className="w-6 h-6 text-gold-premium" />,
      title: "Curated Pairings",
      description: "Discover a wine library curated by master sommeliers, containing over 500 vintages from around the globe."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Decorative background light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Chef Image Column */}
          <div className="lg:col-span-5 relative group">
            {/* Elegant Background Gold Border Frame */}
            <div className="absolute -inset-4 border border-gold-premium/30 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative overflow-hidden border border-white/10 aspect-[3/4]">
              <img
                src={chefPortrait}
                alt="Executive Chef Jean-Marc Dorée"
                className="w-full h-full object-cover grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute bottom-6 -right-4 glass-panel border border-gold-premium/20 px-6 py-4 max-w-[200px]">
              <p className="font-serif text-3xl font-bold text-gold-premium">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mt-1">
                Years of Haute Cuisine Excellence
              </p>
            </div>
          </div>

          {/* Text/Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
                OUR STORY & PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Where culinary heritage <br />
                meets modern innovation.
              </h2>
              <div className="w-16 h-[1px] bg-gold-premium" />
            </div>

            <p className="text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
              Founded in 2012, L'Étoile Dorée was established with a singular vision: to create an unforgettable gastronomic journey that appeals to all senses. We believe that true dining is a form of art.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed text-sm">
              Under the creative direction of Executive Chef Jean-Marc Dorée, we continue to rewrite fine dining standards. Every ingredient is treated with absolute respect, cooking techniques are meticulously refined, and presentation is treated as a master canvas.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="font-serif text-sm font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11.5px] leading-relaxed text-neutral-400 font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

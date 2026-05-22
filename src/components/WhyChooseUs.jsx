import React from 'react';
import { ChefHat, Sparkles, Utensils, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold-premium" />,
      title: "Fresh Artisanal Ingredients",
      description: "We work directly with certified estate producers and local growers to source rare microgreens, organic meat, and sustainable seafood daily."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-gold-premium" />,
      title: "World Class Culinary Team",
      description: "Our culinary craft is led by visionary chefs who have honed their skills in prestigious kitchens across Paris, Tokyo, and New York."
    },
    {
      icon: <Utensils className="w-8 h-8 text-gold-premium" />,
      title: "Impeccable Dining Ambience",
      description: "Step into a meticulously designed environment boasting custom warm lighting, velvet seating, and acoustically treated luxury settings."
    },
    {
      icon: <Award className="w-8 h-8 text-gold-premium" />,
      title: "Exemplary White-Glove Service",
      description: "From custom table pairings to specialized menu guidance, our staff ensures you experience absolute warmth and attention to detail."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Soft golden light circle in bottom right */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text/Content Sidebar (Columns 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
              THE ART OF HOSPITALITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Crafting Unforgettable Experiences
            </h2>
            <div className="w-16 h-[1px] bg-gold-premium" />
            <p className="text-neutral-400 font-light leading-relaxed text-sm">
              At L'Étoile Dorée, our pursuit goes far beyond simple culinary excellence. We curate every element of your evening to create memories that linger long after the final course.
            </p>
          </div>

          {/* Cards Grid (Columns 5-12) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 glass-panel border border-white/5 hover:border-gold-premium/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-5 p-3 w-fit bg-white/5 border border-white/10 group-hover:border-gold-premium/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-gold-premium transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-neutral-400 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

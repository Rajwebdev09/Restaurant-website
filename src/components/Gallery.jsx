import React from 'react';
import { Camera } from 'lucide-react';
import dishStarter from '../assets/dish_starter.png';
import dishMain from '../assets/dish_main.png';
import dishDessert from '../assets/dish_dessert.png';
import dishDrink from '../assets/dish_drink.png';
import restaurantAmbience from '../assets/restaurant_ambience.png';
import heroFoodBanner from '../assets/hero_food_banner.png';
import dishPasta from '../assets/dish_pasta.png';
import restaurantBar from '../assets/restaurant_bar.png';

export default function Gallery() {
  const images = [
    { src: restaurantAmbience, title: "Grand Dining Hall", colSpan: "md:col-span-2 md:row-span-2" },
    { src: dishStarter, title: "Saffron Sea Scallops", colSpan: "" },
    { src: dishMain, title: "Wagyu Tenderloin Plating", colSpan: "" },
    { src: dishDessert, title: "Chocolate Sphere Dessert", colSpan: "" },
    { src: heroFoodBanner, title: "Signature Steak Service", colSpan: "" },
    { src: dishPasta, title: "Truffled Forest Pasta", colSpan: "" },
    { src: dishDrink, title: "The Golden Alchemy Cocktail", colSpan: "md:col-span-2" },
    { src: restaurantBar, title: "The Sommelier Lounge", colSpan: "" }
  ];


  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
            VISUAL GASTRONOMY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Ambience & Culinary Art
          </h2>
          <div className="w-16 h-[1px] bg-gold-premium mx-auto" />
          <p className="text-neutral-400 font-light text-sm">
            Take a visual tour through our grand dining spaces and peek into our curated kitchen, where every dish is a handcrafted masterpiece.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group border border-white/5 ${img.colSpan}`}
            >
              {/* Image zoom on hover */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-90 group-hover:brightness-75"
                loading="lazy"
              />

              {/* Gold border outline fade on hover */}
              <div className="absolute inset-4 border border-gold-premium/0 group-hover:border-gold-premium/45 transition-all duration-500 pointer-events-none" />

              {/* Title Slide-Up Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 mb-1">
                  <Camera className="w-3.5 h-3.5 text-gold-premium" />
                  <span className="text-[10px] uppercase tracking-widest text-gold-premium font-bold">
                    Gallery View
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

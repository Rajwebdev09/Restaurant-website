import React from 'react';
import { Star, Flame } from 'lucide-react';
import dishStarter from '../assets/dish_starter.png';
import dishMain from '../assets/dish_main.png';
import dishDessert from '../assets/dish_dessert.png';
import dishDrink from '../assets/dish_drink.png';

export default function PopularDishes() {
  const dishes = [
    {
      id: 1,
      name: "Saffron Sea Scallops",
      category: "Starter",
      price: "$28",
      image: dishStarter,
      rating: 4.9,
      reviews: 124,
      desc: "Pan-seared scallops served with micro-herbs and a rich, velvety golden saffron foam.",
      special: "Signature"
    },
    {
      id: 2,
      name: "Prime Wagyu Tenderloin",
      category: "Main Course",
      price: "$72",
      image: dishMain,
      rating: 5.0,
      reviews: 318,
      desc: "Slow-roasted wagyu beef, served with truffled mashed potatoes and a glazed asparagus side.",
      special: "Chef's Special"
    },
    {
      id: 3,
      name: "Deconstructed Chocolate Sphere",
      category: "Dessert",
      price: "$22",
      image: dishDessert,
      rating: 4.8,
      reviews: 98,
      desc: "Warm gold-tinted dark chocolate dome, melted tableside with hot orange-infused caramel.",
      special: "Trending"
    },
    {
      id: 4,
      name: "The Golden Alchemy",
      category: "Drink",
      price: "$18",
      image: dishDrink,
      rating: 4.9,
      reviews: 145,
      desc: "Signature crystal gin cocktail infused with real 24k edible gold flakes and smoked rosemary.",
      special: "Exclusive"
    }
  ];

  return (
    <section id="dishes" className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
            WEEKLY SPECIALTIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Chef's Recommended Creations
          </h2>
          <div className="w-16 h-[1px] bg-gold-premium mx-auto" />
          <p className="text-neutral-400 font-light text-sm">
            Discover a handpicked selection of our guest favorites and culinary masterpieces, designed to evoke wonder and satisfy the finest palates.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group glass-panel border border-white/5 overflow-hidden flex flex-col justify-between hover:border-gold-premium/30 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image & Badge Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Special Tag */}
                {dish.special && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-neutral-950/80 border border-gold-premium/40 backdrop-blur-md">
                    <Flame className="w-3 h-3 text-gold-premium fill-gold-premium animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gold-premium">
                      {dish.special}
                    </span>
                  </div>
                )}

                {/* Hover overlay details */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                    {dish.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-premium transition-colors duration-300 leading-snug">
                    {dish.name}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-neutral-400 font-light line-clamp-3">
                    {dish.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-gold-premium text-gold-premium" />
                    <span className="text-xs font-semibold text-white">{dish.rating}</span>
                    <span className="text-[10px] text-neutral-400">({dish.reviews})</span>
                  </div>
                  <span className="font-serif text-lg font-bold text-gold-premium">
                    {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

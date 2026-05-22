import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Award, ShieldAlert } from 'lucide-react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('starters');
  const [isLoading, setIsLoading] = useState(false);

  // Trigger loading skeleton on tab change to simulate real database fetch
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Signature Drinks' }
  ];

  const menuItems = {
    starters: [
      { name: "Foie Gras Terrine", price: "$32", ingredients: "Armagnac-infused goose liver, homemade fig jam, toasted artisanal brioche.", v: false, gf: false, chef: true },
      { name: "Heritage Beetroot Carpaccio", price: "$24", ingredients: "Thinly sliced heirloom beets, whipped goat cheese, candied walnuts, premium truffle vinaigrette.", v: true, gf: true, chef: false },
      { name: "Saffron Sea Scallops", price: "$28", ingredients: "Pan-seared scallops served with micro-herbs and a rich, velvety golden saffron foam.", v: false, gf: true, chef: true },
      { name: "Truffle Mushroom Velouté", price: "$26", ingredients: "Wild woodland mushrooms, summer black truffle paste, double cream, toasted sourdough croutons.", v: true, gf: false, chef: false }
    ],
    mains: [
      { name: "Prime Wagyu Tenderloin", price: "$72", ingredients: "Slow-roasted wagyu beef, served with truffled mashed potatoes and a glazed asparagus side.", v: false, gf: true, chef: true },
      { name: "Wild Atlantic Halibut", price: "$52", ingredients: "Pan-roasted halibut fillet, braised baby leeks, caviar butter sauce, champagne foam.", v: false, gf: true, chef: false },
      { name: "Truffle & Forest Mushroom Gnocchi", price: "$44", ingredients: "Handmade potato gnocchi, porcini mushroom emulsion, fresh shaved Italian winter truffles.", v: true, gf: false, chef: true },
      { name: "Duck à l'Orange Moderne", price: "$58", ingredients: "Sous-vide duck breast, blood orange gastrique, carrot-ginger purée, crisp parsnip ribbons.", v: false, gf: true, chef: false }
    ],
    desserts: [
      { name: "Deconstructed Chocolate Sphere", price: "$22", ingredients: "Warm gold-tinted dark chocolate dome, melted tableside with hot orange-infused caramel.", v: true, gf: false, chef: true },
      { name: "Madagascar Vanilla Crème Brûlée", price: "$18", ingredients: "Classic custard with caramelized sugar top, fresh macerated berries, lavender shortbread.", v: true, gf: false, chef: false },
      { name: "Grand Marnier Soufflé", price: "$20", ingredients: "Light orange liqueur soufflé, cold white chocolate pour-in sauce, orange zest.", v: true, gf: false, chef: true },
      { name: "Champagne Poached Pear", price: "$19", ingredients: "Bosc pear poached in Dom Pérignon, cardamom spiced syrup, vegan vanilla bean ice cream.", v: true, gf: true, chef: false }
    ],
    drinks: [
      { name: "The Golden Alchemy", price: "$18", ingredients: "Signature crystal gin cocktail infused with real 24k edible gold flakes and smoked rosemary.", v: true, gf: true, chef: true },
      { name: "Smoked Oak Old Fashioned", price: "$20", ingredients: "Reserve bourbon, angostura bitters, orange peel, cold woodsmoke infusion served under glass cloche.", v: true, gf: true, chef: true },
      { name: "La Vie En Rose Mocktail", price: "$14", ingredients: "Fresh pressed organic raspberry extract, rose water, sparkling elderflower syrup, mint.", v: true, gf: true, chef: false },
      { name: "Grand Cru Wine Selection", price: "$24", ingredients: "Sommelier selected weekly red/white wine pour from premium heritage French estates.", v: true, gf: true, chef: false }
    ]
  };

  return (
    <section id="menu" className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Decorative side light */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
            A LA CARTE MENU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Curated Dining Experience
          </h2>
          <div className="w-16 h-[1px] bg-gold-premium mx-auto" />
          <p className="text-neutral-400 font-light text-sm">
            Experience our seasonal culinary selection. Every dish is a representation of precision cooking, artful plate presentation, and premium ingredients.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center border-b border-white/5 mb-12">
          <div className="flex space-x-6 sm:space-x-12 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative pb-4 text-sm font-medium tracking-wider uppercase whitespace-nowrap focus:outline-none transition-colors duration-300"
                style={{ color: activeTab === cat.id ? '#C5A880' : '#a3a3a3' }}
              >
                {cat.name}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-premium"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Area */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              /* Premium Skeleton Loading State */
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
              >
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col space-y-3 animate-pulse">
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-white/10 w-2/3 rounded" />
                      <div className="h-5 bg-gold-500/20 w-12 rounded" />
                    </div>
                    <div className="h-3 bg-white/5 w-full rounded" />
                    <div className="h-3 bg-white/5 w-4/5 rounded" />
                  </div>
                ))}
              </motion.div>
            ) : (
              /* Real Menu Items list */
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
              >
                {menuItems[activeTab].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between py-2 border-b border-white/5 hover:border-gold-premium/30 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-premium transition-colors duration-300 flex items-center gap-2">
                        {item.name}
                        {/* Food Badges */}
                        <div className="flex gap-1">
                          {item.v && (
                            <span title="Vegetarian">
                              <Leaf className="w-3.5 h-3.5 text-emerald-500/80 fill-emerald-500/10" />
                            </span>
                          )}
                          {item.chef && (
                            <span title="Chef's Special Selection">
                              <Award className="w-3.5 h-3.5 text-gold-premium" />
                            </span>
                          )}
                        </div>
                      </h3>
                      <span className="font-serif text-lg font-bold text-gold-premium">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-[12.5px] leading-relaxed text-neutral-400 font-light pr-8">
                      {item.ingredients}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nutritional & Dietary footnote */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 px-6 py-4 glass-panel border border-white/5">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-400">
            <Leaf className="w-4 h-4 text-emerald-500" />
            <span>Vegetarian Option (V)</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-400">
            <Award className="w-4 h-4 text-gold-premium" />
            <span>Chef's Special Recommendation</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-400">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <span>Please advise server of allergies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

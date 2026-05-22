import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative tiny glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <a href="#home" className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold tracking-widest text-gold-premium">
                L'ÉTOILE DORÉE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 -mt-1">
                Haute Cuisine
              </span>
            </a>
            <p className="text-xs leading-relaxed text-neutral-400 font-light">
              Crafting spectacular sensory dining journeys combining the precision of heritage culinary arts with contemporary innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-serif text-xs font-semibold text-white uppercase tracking-widest">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li>
                <a href="#home" className="hover:text-gold-premium transition-colors duration-300">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-premium transition-colors duration-300">
                  Chef & Heritage
                </a>
              </li>
              <li>
                <a href="#dishes" className="hover:text-gold-premium transition-colors duration-300">
                  Weekly Specials
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-premium transition-colors duration-300">
                  A La Carte Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-gold-premium transition-colors duration-300">
                  Request Seating
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-5">
            <h3 className="font-serif text-xs font-semibold text-white uppercase tracking-widest">
              Opening Hours
            </h3>
            <div className="space-y-3 text-xs text-neutral-400 font-light">
              <div>
                <p className="text-white font-medium">Monday – Friday</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Lunch: 12:00 PM – 3:00 PM</p>
                <p className="text-[11px] text-neutral-400">Dinner: 6:00 PM – 11:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Saturday – Sunday</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Dinner Service Only: 5:00 PM – 11:30 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-5">
            <h3 className="font-serif text-xs font-semibold text-white uppercase tracking-widest">
              The Club Newsletter
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Subscribe to receive exclusive recipes, wine dinner invitations, and seasonal chef menus.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-gold-premium font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Successfully Subscribed</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border border-white/10 focus-within:border-gold-premium/65 transition-colors duration-300">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-xs text-white px-3 py-2.5 w-full focus:outline-none placeholder:text-neutral-600"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white/5 hover:bg-gold-premium text-white hover:text-neutral-950 px-4 transition-all duration-300 border-l border-white/10 cursor-pointer"
                  aria-label="Subscribe"
                >
                  {loading ? (
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 font-light tracking-wide uppercase">
          <p>© 2026 L'Étoile Dorée Restaurant. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

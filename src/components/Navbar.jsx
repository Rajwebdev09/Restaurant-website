import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Specialties', href: '#dishes' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ambience', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-panel border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col items-start group">
          <span className="font-serif text-2xl font-bold tracking-widest text-gold-premium transition-all duration-300 group-hover:text-gold-300">
            L'ÉTOILE DORÉE
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 -mt-1">
            Haute Cuisine
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-gold-premium transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-premium after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-neutral-950 font-semibold tracking-wider text-xs uppercase rounded-none transition-all duration-300 shadow-lg shadow-gold-950/20 hover:shadow-gold-500/20 hover:-translate-y-0.5"
          >
            Book A Table
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-300 hover:text-gold-premium p-1.5 focus:outline-none transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[73px] bg-neutral-950/95 backdrop-blur-lg z-40 transition-transform duration-500 ease-out border-t border-white/5 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-73px)] space-y-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif tracking-widest uppercase text-neutral-300 hover:text-gold-premium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 font-bold tracking-wider uppercase text-sm"
          >
            Reserve Table
          </a>
        </div>
      </div>
    </nav>
  );
}

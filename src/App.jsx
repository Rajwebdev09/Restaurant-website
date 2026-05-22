import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PopularDishes from './components/PopularDishes';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-100 font-sans min-h-screen selection:bg-gold-500 selection:text-neutral-950">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section (entry animation handled internally via framer-motion) */}
      <Hero />

      {/* Main Content Sections with scroll reveal animations */}
      <div className="reveal-on-scroll">
        <About />
      </div>

      <div className="reveal-on-scroll">
        <PopularDishes />
      </div>

      <div className="reveal-on-scroll">
        <Menu />
      </div>

      <div className="reveal-on-scroll">
        <WhyChooseUs />
      </div>

      <div className="reveal-on-scroll">
        <Testimonials />
      </div>

      <div className="reveal-on-scroll">
        <Gallery />
      </div>

      <div className="reveal-on-scroll">
        <Reservation />
      </div>

      <div className="reveal-on-scroll">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

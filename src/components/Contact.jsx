import React from 'react';
import { MapPin, Phone, Mail, Compass } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Details Column (Columns 1-5) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
                LOCATIONS & INQUIRIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Connect With Us
              </h2>
              <div className="w-16 h-[1px] bg-gold-premium" />
            </div>

            {/* Contacts Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 border border-white/10 w-fit h-fit">
                  <MapPin className="w-5 h-5 text-gold-premium" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
                    Our Address
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    12 Rue de la Paix, 75002 Paris, France
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 border border-white/10 w-fit h-fit">
                  <Phone className="w-5 h-5 text-gold-premium" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
                    Reservations Desk
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    +33 (0) 1 42 68 53 00
                  </p>
                  <p className="text-[10px] text-neutral-500 font-light">
                    Available daily from 10:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 border border-white/10 w-fit h-fit">
                  <Mail className="w-5 h-5 text-gold-premium" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
                    Private Events & PR
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    events@letoiledoree.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
                Follow our Gastronomic Journey
              </h4>
              <div className="flex gap-3">
                <a
                  href="#instagram"
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-gold-premium/40 text-neutral-400 hover:text-gold-premium transition-colors duration-300"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-gold-premium/40 text-neutral-400 hover:text-gold-premium transition-colors duration-300"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#tripadvisor"
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-gold-premium/40 text-neutral-400 hover:text-gold-premium transition-colors duration-300"
                  aria-label="Tripadvisor Profile"
                >
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Premium Custom Map Mockup UI Column (Columns 6-12) */}
          <div className="lg:col-span-7 w-full h-[400px] border border-white/10 relative group overflow-hidden">
            {/* Elegant dark grid map background representing Paris streets */}
            <div className="absolute inset-0 bg-[#080808] opacity-100 transition-all duration-500 flex flex-col justify-center items-center">
              {/* Abstract map lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />

              {/* Map abstract street blocks */}
              <div className="absolute top-1/4 left-1/3 w-28 h-20 bg-neutral-900 border border-white/5 opacity-50 rotate-12" />
              <div className="absolute top-1/2 left-2/3 w-32 h-16 bg-neutral-900 border border-white/5 opacity-50 -rotate-6" />
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-neutral-900 border border-white/5 opacity-50 rotate-45" />

              {/* Seine River representation */}
              <div className="absolute left-0 bottom-1/3 right-0 h-10 bg-neutral-950 border-y border-white/5 opacity-20 -rotate-12 flex justify-center items-center">
                <span className="text-[9px] uppercase tracking-widest text-neutral-700 font-bold select-none">LA SEINE</span>
              </div>

              {/* Golden Marker Pin */}
              <div className="relative z-20 flex flex-col items-center">
                {/* Ping waves */}
                <div className="absolute -top-1 w-8 h-8 bg-gold-500/20 rounded-full animate-ping pointer-events-none" />
                <div className="w-10 h-10 bg-gradient-to-tr from-gold-600 to-gold-400 rounded-full flex items-center justify-center shadow-lg shadow-gold-950/50">
                  <MapPin className="w-5 h-5 text-neutral-950 fill-neutral-950" />
                </div>
                {/* Pin Card info */}
                <div className="mt-3 px-4 py-2 glass-panel border border-gold-premium/30 text-center shadow-2xl pointer-events-none">
                  <p className="font-serif text-xs font-bold text-white uppercase tracking-wider">L'Étoile Dorée</p>
                  <p className="text-[9px] text-neutral-400 mt-0.5">Place Vendôme / Opera District</p>
                </div>
              </div>
            </div>

            {/* Bottom floating helper controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-30">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest bg-neutral-950/80 px-2 py-1 border border-white/5">
                GPS: 48.8681° N, 2.3301° E
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 text-[10px] uppercase font-bold tracking-widest shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

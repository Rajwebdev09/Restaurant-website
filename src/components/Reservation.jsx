import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      time: '19:00',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-premium font-semibold block">
            SECURE A TABLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Reserve Your Culinary Journey
          </h2>
          <div className="w-16 h-[1px] bg-gold-premium mx-auto" />
          <p className="text-neutral-400 font-light text-sm">
            Due to our high attention to detail, seating is limited. We recommend making table reservations at least 48 hours in advance.
          </p>
        </div>

        {/* Main Card container */}
        <div className="glass-panel border border-white/5 p-8 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victoria Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. victoria@sterling.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300"
                    />
                  </div>

                  {/* Guests Dropdown */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-premium" />
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6+ Guests (Requires Call)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-premium" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300 cursor-pointer"
                    />
                  </div>

                  {/* Time Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-premium" />
                      Seating Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
                    Special Inquiries / Allergies
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Vegetarian preference, celebrating an anniversary, allergy concerns..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-premium/65 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-neutral-950 font-bold tracking-widest text-xs uppercase rounded-none transition-all duration-300 shadow-xl shadow-gold-950/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Request Seating
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success Confirmation Card overlay */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10 flex flex-col items-center space-y-6"
              >
                <CheckCircle className="w-16 h-16 text-gold-premium animate-bounce" />
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Reservation Requested
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-gold-premium font-semibold">{formData.name}</span>. We are reviewing table availability for <span className="text-white font-semibold">{formData.date}</span> at <span className="text-white font-semibold">{formData.time}</span> for <span className="text-white font-semibold">{formData.guests} guests</span>.
                  </p>
                </div>
                <div className="p-4 border border-white/5 bg-white/2 max-w-sm text-left text-xs text-neutral-400 space-y-1.5 leading-relaxed">
                  <p>• A confirmation email has been sent to <span className="text-white">{formData.email}</span>.</p>
                  <p>• Our host will contact you shortly via SMS to confirm final seating details.</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-white/10 hover:border-gold-premium text-neutral-400 hover:text-gold-premium text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
                >
                  Make Another Booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

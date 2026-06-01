/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, Clock, ShieldCheck, Trash2, HelpCircle, UtensilsCrossed } from 'lucide-react';
import { Reservation } from '../types';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'lounge' | 'window' | 'vip' | 'garden'>('window');
  const [specialRequests, setSpecialRequests] = useState('');

  // Status variables
  const [savedReservations, setSavedReservations] = useState<Reservation[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [latestBooking, setLatestBooking] = useState<Reservation | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  // Load existing bookings on mount
  useEffect(() => {
    const data = localStorage.getItem('royal_spice_reservations');
    if (data) {
      try {
        setSavedReservations(JSON.parse(data));
      } catch (err) {
        console.error('Failed to parse local reservation entries', err);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !email || !date || !time) {
      alert('Please fill out all mandatory fields to secure your reservation.');
      return;
    }

    const newBooking: Reservation = {
      id: `res-${Date.now()}`,
      name,
      phone,
      email,
      date,
      time,
      guests,
      seatingArea,
      specialRequests,
      createdAt: new Date().toISOString(),
    };

    const updatedList = [newBooking, ...savedReservations];
    localStorage.setItem('royal_spice_reservations', JSON.stringify(updatedList));
    setSavedReservations(updatedList);
    setLatestBooking(newBooking);
    setShowSuccess(true);

    // Reset fields
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setTime('18:00');
    setGuests(2);
    setSeatingArea('window');
    setSpecialRequests('');

    // Hide success after 10s or user clicks dismiss
  };

  const handleDelete = (id: string) => {
    const updatedList = savedReservations.filter((res) => res.id !== id);
    localStorage.setItem('royal_spice_reservations', JSON.stringify(updatedList));
    setSavedReservations(updatedList);
  };

  const seatingAreas = [
    { value: 'lounge', name: 'Main Velvet Lounge', desc: 'Plush crimson seats, soft jazz background' },
    { value: 'window', name: 'Window Promenade', desc: 'Overlooking manicured gardens & city lights' },
    { value: 'vip', name: 'Obsidian VIP Vault', desc: 'Extremely private, customized lighting & cellar access' },
    { value: 'garden', name: 'Starlight Garden Patio', desc: 'Al fresco dining beneath climbing rose vines' },
  ];

  return (
    <section id="reservation" className="relative bg-transparent py-24 lg:py-32">
      {/* Background graphic */}
      <div className="absolute top-0 left-0 -translate-x-12 h-96 w-96 rounded-full bg-gold-950/20 blur-[130px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Epicurean Seating</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            Digital Reservations
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs font-light text-stone-400">
            Secure your presence. All bookings are stored locally in your browser for review, alteration, or cancellation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start" id="reservation-container">
          
          {/* Reservation Form (L: 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-glass-card p-8 shadow-2xl relative">
              
              {/* Corner accents */}
              <span className="absolute top-2 left-2 border-t border-l border-gold-500/25 h-3.5 w-3.5"></span>
              <span className="absolute top-2 right-2 border-t border-r border-gold-500/25 h-3.5 w-3.5"></span>
              <span className="absolute bottom-2 left-2 border-b border-l border-gold-500/25 h-3.5 w-3.5"></span>
              <span className="absolute bottom-2 right-2 border-b border-r border-gold-500/25 h-3.5 w-3.5"></span>

              <h3 className="font-cinzel text-md font-bold tracking-widest text-gold-200 mb-6 uppercase">
                Secure Gastronomy Table
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gold-500/50">
                        <User size={14} />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sterling Archer"
                        className="w-full bg-white/5 border border-white/5 py-3 pl-10 pr-4 font-sans text-xs text-stone-200 focus:border-gold-500/40 focus:outline-none focus:bg-stone-900/60 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gold-500/50">
                        <Phone size={14} />
                      </span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 (323) 555-0155"
                        className="w-full bg-white/5 border border-white/5 py-3 pl-10 pr-4 font-sans text-xs text-stone-200 focus:border-gold-500/40 focus:outline-none focus:bg-stone-900/60 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Email, Date & Time Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="relative sm:col-span-1">
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gold-500/50">
                        <Mail size={14} />
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="archer@figgis.com"
                        className="w-full bg-white/5 border border-white/5 py-3 pl-10 pr-4 font-sans text-xs text-stone-200 focus:border-gold-500/40 focus:outline-none focus:bg-stone-900/60 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gold-500/50">
                        <Calendar size={14} />
                      </span>
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/5 py-2.5 pl-10 pr-4 font-sans text-xs text-stone-200 focus:border-gold-500/40 focus:outline-none focus:bg-stone-900/60 transition-all duration-300"
                        id="date-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Preferred Hour *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gold-500/50">
                        <Clock size={14} />
                      </span>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#12100d] border border-white/5 py-3 pl-10 pr-4 font-sans text-xs text-stone-200 focus:border-gold-500/40 focus:outline-none focus:bg-stone-900/60 transition-all duration-300"
                        id="time-select"
                      >
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM (Prime)</option>
                        <option value="19:30">7:30 PM (Prime)</option>
                        <option value="20:00">8:00 PM (Prime)</option>
                        <option value="20:30">8:30 PM (Prime)</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Seating Area & Guests Info */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Seating Ambience Select
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {seatingAreas.map((area) => (
                        <button
                          key={area.value}
                          type="button"
                          onClick={() => setSeatingArea(area.value as any)}
                          className={`p-3 text-left border transition-all duration-350 focus:outline-none ${
                            seatingArea === area.value
                              ? 'border-gold-500 bg-gold-500/10 text-gold-100 shadow-[0_0_15px_rgba(210,180,114,0.15)]'
                              : 'border-white/5 bg-white/5 text-stone-300 hover:border-gold-500/20'
                          }`}
                        >
                          <span className="block font-cinzel text-[9.5px] font-bold tracking-wider">{area.name}</span>
                          <span className="block text-[8px] text-stone-400 leading-tight mt-0.5">{area.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                      Guest Count
                    </label>
                    <div className="flex items-center border border-white/5 bg-white/5 overflow-hidden">
                      <button
                        type="button"
                        disabled={guests <= 1}
                        onClick={() => setGuests(guests - 1)}
                        className="w-12 py-3 text-stone-400 hover:text-gold-400 active:bg-white/5 transition-colors disabled:opacity-20 text-md font-bold"
                        title="Reduce Guests"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-mono text-xs text-stone-100 font-bold">
                        {guests} {guests === 1 ? 'Patron' : 'Patrons'}
                      </span>
                      <button
                        type="button"
                        disabled={guests >= 12}
                        onClick={() => setGuests(guests + 1)}
                        className="w-12 py-3 text-stone-400 hover:text-gold-400 active:bg-white/5 transition-colors disabled:opacity-20 text-md font-bold"
                        title="Increase Guests"
                      >
                        +
                      </button>
                    </div>
                    <span className="block text-[8px] text-stone-500 mt-1.5">We accommodate up to 12 persons. For corporate galas of larger numbers, call Beverly office.</span>
                  </div>
                </div>

                {/* Special Instructions / Requests */}
                <div>
                  <label className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Dietary Restrictions & Special Demands
                  </label>
                  <textarea
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g., Saffron allergy, celebrating golden anniversary, require corner table..."
                    className="w-full bg-white/5 border border-white/5 p-3 font-sans text-xs text-stone-200 focus:border-gold-500/40 focus:outline-none focus:bg-stone-900/60 transition-all duration-300 resize-none"
                    id="requests-textarea"
                  ></textarea>
                </div>

                {/* Secure Trust note & Submit */}
                <div className="flex flex-col items-start gap-4 pt-4 border-t border-gold-500/10 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-2 text-stone-550 font-mono text-[8px] tracking-wider uppercase">
                    <ShieldCheck size={12} className="text-gold-500" />
                    <span>Real-Time Local Instant Guarding Enabled</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#d2b472] to-[#b48538] hover:from-[#c29d51] hover:to-[#986d2b] py-3.5 px-8 font-cinzel text-xs font-bold tracking-[0.15em] text-[#0d0c0a] uppercase transition-all shadow-lg active:scale-95 duration-300"
                    id="submit-res-btn"
                  >
                    Confirm Tasting Seating
                  </button>
                </div>

              </form>
            </div>
          </div>

          {/* Booking History & Interactive Ledger (R: 5 cols) */}
          <div className="lg:col-span-5 space-y-8" id="reservation-ledger">
            
            {/* Success Animation Box */}
            <AnimatePresence>
              {showSuccess && latestBooking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-zinc-950 border-2 border-green-500/30 p-6 flex flex-col space-y-4"
                >
                  <div className="flex items-center space-x-2.5 text-green-400">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-950 text-emerald-400">✓</span>
                    <h4 className="font-cinzel text-xs font-bold tracking-wider uppercase">Reservation Secured</h4>
                  </div>
                  <p className="font-sans text-[11px] font-light text-stone-300 leading-relaxed">
                    Thank you, <strong className="text-white">{latestBooking.name}</strong>. Your tasting table in the{' '}
                    <strong className="text-gold-300">{seatingAreas.find((a) => a.value === latestBooking.seatingArea)?.name}</strong> was registered.
                  </p>
                  
                  {/* Digital ticket details */}
                  <div className="bg-[#12100d] border border-gold-500/10 p-4 font-mono text-[10px] space-y-1.5 text-stone-400">
                    <p className="text-gold-400 font-bold border-b border-gold-500/10 pb-1.5 mb-2 flex justify-between">
                      <span>TICKET CODE:</span>
                      <span>#{latestBooking.id.split('-')[1]}</span>
                    </p>
                    <p>DATE: <span className="text-stone-200">{latestBooking.date}</span></p>
                    <p>TIME: <span className="text-stone-200">{latestBooking.time}</span></p>
                    <p>GUESTS: <span className="text-stone-200">{latestBooking.guests} Patrons</span></p>
                    {latestBooking.specialRequests && (
                      <p className="truncate">REQUESTS: <span className="text-stone-200">{latestBooking.specialRequests}</span></p>
                    )}
                  </div>

                  <button
                    onClick={() => setShowSuccess(false)}
                    className="text-stone-400 hover:text-stone-100 text-[10px] font-mono tracking-widest uppercase border border-white/5 py-1.5 hover:bg-white/5 text-center"
                    id="dismiss-success-btn"
                  >
                    Dismiss Note
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* User ledger / Booking list accordion */}
            <div className="border border-gold-500/10 bg-zinc-950/40 p-6 relative">
              <span className="absolute top-2 left-2 border-t border-l border-gold-500/25 h-2 w-2"></span>
              <span className="absolute bottom-2 right-2 border-b border-r border-gold-500/25 h-2 w-2"></span>
              
              <div className="flex items-center justify-between pb-4 border-b border-gold-500/10 mb-6">
                <div className="flex items-center space-x-2">
                  <UtensilsCrossed size={14} className="text-gold-400" />
                  <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#f5f2eb] uppercase">
                    Your Reservations
                  </h4>
                </div>
                <span className="bg-gold-500/10 border border-gold-500/25 px-2 py-0.5 font-mono text-[9px] text-gold-300 leading-none">
                  {savedReservations.length} Active
                </span>
              </div>

              {savedReservations.length === 0 ? (
                <div className="text-center py-8 text-stone-500 space-y-2">
                  <HelpCircle size={32} className="mx-auto text-gold-500/20 stroke-1" />
                  <p className="font-serif text-xs italic">"No table configurations found"</p>
                  <p className="text-[10px] font-sans font-light">Fill out the left-side secure form to secure your live tasting seat.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1" id="saved-res-list">
                  {savedReservations.map((res) => (
                    <div
                      key={res.id}
                      className="border border-white/5 bg-zinc-900/40 p-4 font-mono text-[10px] text-stone-300 hover:border-gold-500/20 transition-all flex justify-between items-start"
                      id={`saved-res-item-${res.id}`}
                    >
                      <div className="space-y-1">
                        <p className="font-cinzel text-[11px] font-bold text-stone-100 uppercase tracking-wider">
                          {res.name}
                        </p>
                        <p className="text-gold-400 font-bold">Patrons: {res.guests} &middot; {res.time}</p>
                        <p>Date: {res.date}</p>
                        <p className="text-[8px] text-stone-500 truncate max-w-[200px]">
                          Area: {seatingAreas.find((a) => a.value === res.seatingArea)?.name}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDelete(res.id)}
                        className="text-stone-500 hover:text-red-400 p-2 border border-transparent hover:border-red-500/10 hover:bg-red-500/5 transition-all"
                        title="Cancel Booking"
                        id={`cancel-res-${res.id}`}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Security info disclaimer */}
              <div className="mt-6 pt-4 border-t border-gold-500/10 text-[9px] font-sans font-light leading-relaxed text-stone-500 space-y-1.5 uppercase tracking-wide">
                <p>&middot; Cancellations requested within 6 hours match no penalty.</p>
                <p>&middot; Credit cards are NOT recorded here for maximum consumer safety.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CalendarCheck, HelpCircle } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      title: 'Our Sanctuary Address',
      desc: '742 Obsidian Ave, Beverly Hills, CA 90210',
      icon: MapPin,
    },
    {
      title: 'Reservations Assistance',
      desc: '+1 (323) 555-0192 / concierges@royalspice.com',
      icon: Phone,
    },
    {
      title: 'Private Event Galas',
      desc: 'galas@royalspice.com / Ext 302',
      icon: Mail,
    },
  ];

  const hours = [
    { day: 'Monday', time: '5:00 PM – 11:30 PM' },
    { day: 'Tuesday', time: '5:00 PM – 11:30 PM' },
    { day: 'Wednesday', time: '5:00 PM – 11:30 PM' },
    { day: 'Thursday', time: '5:00 PM – Midnight' },
    { day: 'Friday', time: '4:30 PM – 1:00 AM' },
    { day: 'Saturday', time: '4:30 PM – 1:00 AM' },
    { day: 'Sunday', time: '5:00 PM – 11:30 PM' },
  ];

  return (
    <section id="contact" className="relative bg-transparent py-24 lg:py-32">
      {/* Background visual accents */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-gold-950/15 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="font-serif text-sm italic tracking-widest text-gold-400">Concierge Desk & Coordinates</span>
          <h2 className="mt-2 font-cinzel text-3xl font-extrabold tracking-widest text-stone-100 sm:text-4xl uppercase royal-border-bottom pb-4">
            Connect With Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs font-light text-stone-400">
            For bespoke bookings, media inquiries, or customized chef tasting alignments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start" id="contact-panel-grid">
          
          {/* Detailed Info Column (L: 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Cards */}
            <div className="space-y-6">
              {contacts.map((item, id) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    className="flex items-start space-x-4 border border-gold-500/10 bg-zinc-950/40 p-5 hover:border-gold-500/25 transition-all"
                    id={`contact-card-${id}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none border border-gold-500/25 bg-gold-500/5 text-gold-400">
                      <IconComp size={16} />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-[10.5px] font-bold tracking-widest text-[#f5f2eb] uppercase">
                        {item.title}
                      </h4>
                      <p className="mt-1 font-sans text-xs font-light leading-relaxed text-stone-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Business Hours Listing */}
            <div className="border border-gold-500/15 bg-zinc-950/65 p-6 relative">
              <span className="absolute top-2 left-2 border-t border-l border-gold-500/25 h-2.5 w-2.5"></span>
              <span className="absolute bottom-2 right-2 border-b border-r border-gold-500/25 h-2.5 w-2.5"></span>

              <div className="flex items-center space-x-2.5 pb-4 border-b border-gold-500/15 mb-4">
                <Clock size={14} className="text-gold-400" />
                <h4 className="font-cinzel text-xs font-bold tracking-widest text-stone-100 uppercase">
                  Service Dining Hours
                </h4>
              </div>

              <div className="space-y-2 font-mono text-[10.5px]">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-stone-400 hover:text-stone-200 py-1 transition-colors border-b border-stone-900 last:border-0">
                    <span className="text-stone-300 font-medium">{h.day}</span>
                    <span className="text-gold-300 font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center space-x-2 text-[9px] font-sans font-light text-stone-550 uppercase tracking-widest">
                <CalendarCheck size={12} className="text-gold-550" />
                <span>Smart Valet Service available during all operating hours</span>
              </div>
            </div>

          </div>

          {/* Map Section Panel (R: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 h-[460px] relative gilded-frame overflow-hidden bg-zinc-950 shadow-2xl"
            id="contact-map-block"
          >
            {/* Embedded high-end dark Google maps styling or styled standard iframe */}
            <div className="absolute inset-4 overflow-hidden border border-gold-500/10 h-[calc(100%-32px)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105742.3614272828!2d-118.41169720610344!3d34.06892102170364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379c909dd1b!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 brightness-75 contrast-125 saturate-50 hover:brightness-90 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Spice Beverly Hills map location"
              ></iframe>
            </div>

            {/* Custom map overlay flag */}
            <div className="absolute bottom-10 left-10 bg-black/90 border border-gold-500/35 p-4 max-w-xs shadow-2xl backdrop-blur-md">
              <span className="block font-cinzel text-[10px] font-bold tracking-widest text-gold-400 uppercase">
                THE PHYSICAL CELLAR
              </span>
              <p className="mt-1 font-sans text-[11px] font-light leading-tight text-stone-300">
                Gated elevator entry left of the obsidian statue in Beverly Plaza.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

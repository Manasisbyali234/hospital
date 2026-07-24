"use client";

import { motion } from "framer-motion";
import { Heart, Bed, Wifi, Utensils, Car, Activity, FlaskConical } from "lucide-react";
import Image from "next/image";

const FACILITIES = [
  { icon: Bed, title: "Private Rooms", desc: "Comfortable, well-equipped private and semi-private rooms for patients and families." },
  { icon: Activity, title: "Advanced NICU", desc: "State-of-the-art Neonatal ICU with round-the-clock specialist care for newborns." },
  { icon: FlaskConical, title: "In-house Lab", desc: "Fully equipped diagnostic laboratory for fast and accurate test results." },
  { icon: Utensils, title: "Nutrition & Diet", desc: "Personalised diet plans and in-hospital meals curated by expert nutritionists." },
  { icon: Wifi, title: "Smart Rooms", desc: "Wi-Fi enabled smart rooms with entertainment and remote nurse-call systems." },
  { icon: Car, title: "Ambulance Service", desc: "24×7 ambulance service with trained paramedics for emergency response." },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-[#FDF3F7] py-12 lg:py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left – grid */}
        <div>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={12} fill="#E11D74" strokeWidth={0} /> FACILITIES
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight">
              World-Class <span className="italic text-[#E11D74]">Infrastructure</span>
            </h2>
            <p className="mt-3 text-gray-500 text-[15px]">
              Modern facilities designed to ensure comfort, safety, and the best possible outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACILITIES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-[#E11D74]">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-serif text-[15px] font-bold text-[#2B0F1E] mb-0.5">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right – image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden h-[520px] shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80"
            alt="Hospital room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow">
            <p className="font-serif text-2xl font-bold text-[#E11D74]">NABH</p>
            <p className="text-sm text-gray-600">Accredited Hospital</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

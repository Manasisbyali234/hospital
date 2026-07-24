"use client";

import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const INFO = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "care@rosewoodhospital.com" },
  { icon: MapPin, label: "Address", value: "12, Rose Avenue, Bandra West, Mumbai – 400050" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 8 AM – 8 PM  |  Emergency: 24×7" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#FDF3F7] py-12 lg:py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left – Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
            <Heart size={12} fill="#E11D74" strokeWidth={0} /> CONTACT US
          </span>
          <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight mb-4">
            We're Here <span className="italic text-[#E11D74]">For You</span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Have a question or need to book an appointment? Reach out to us — our team is always ready to help.
          </p>

          <div className="flex flex-col gap-5">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-[#E11D74]">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-[12px] font-bold tracking-widest text-[#E11D74] uppercase">{label}</p>
                  <p className="text-[14px] text-[#2B0F1E] font-medium mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hospital image */}
          <div className="relative mt-4 rounded-2xl overflow-hidden h-44 shadow">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
              alt="Rosewood Hospital"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2B0F1E]/20" />
          </div>
        </motion.div>

        {/* Right – Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#2B0F1E]">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#2B0F1E]">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[#2B0F1E]">Email Address</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[#2B0F1E]">Message</label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[#E11D74] py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-pink-200 hover:scale-[1.02] transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Clock, MessageCircle, Ambulance, Instagram, Facebook, Youtube } from "lucide-react";

const DEPARTMENTS = [
  { name: "Gynecology OPD", ext: "101", hours: "Mon–Sat, 9 AM – 6 PM" },
  { name: "Maternity & Labour", ext: "102", hours: "24×7" },
  { name: "IVF & Fertility", ext: "103", hours: "Mon–Sat, 10 AM – 5 PM" },
  { name: "Emergency", ext: "104", hours: "24×7" },
  { name: "Billing & Insurance", ext: "105", hours: "Mon–Sat, 8 AM – 8 PM" },
  { name: "Appointments", ext: "106", hours: "Mon–Sat, 8 AM – 8 PM" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", handle: "@rosewoodwomenscare", href: "#" },
  { icon: Facebook, label: "Facebook", handle: "GurushreeWomen's Care", href: "#" },
  { icon: Youtube, label: "YouTube", handle: "GurushreeHealth", href: "#" },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ContactPageContent() {
  return (
    <div className="bg-white">

      {/* Emergency Banner */}
      <section className="bg-[#2B0F1E] py-5 px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E11D74]">
              <Ambulance size={18} />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-widest text-pink-300">24×7 EMERGENCY</p>
              <p className="font-serif text-lg font-bold">+91 98765 43210</p>
            </div>
          </div>
          <p className="text-[13px] text-gray-400 text-center sm:text-right">
            For life-threatening emergencies, call immediately. Ambulance available round the clock.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left – Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 border border-pink-200 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-5">
              <MessageCircle size={11} /> SEND US A MESSAGE
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight mb-2">
              Get in <span className="italic text-[#E11D74]">Touch</span>
            </h2>
            <p className="text-gray-500 text-[15px] mb-8">Fill in the form and our team will respond within 2 business hours.</p>

            <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-3xl p-8 shadow-sm border border-pink-100 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#2B0F1E]">Full Name</label>
                  <input type="text" placeholder="Your name" className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#2B0F1E]">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#2B0F1E]">Email Address</label>
                <input type="email" placeholder="you@email.com" className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#2B0F1E]">Department</label>
                <select className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors bg-white text-gray-600">
                  <option value="">Select a department</option>
                  {DEPARTMENTS.map((d) => <option key={d.name}>{d.name}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#2B0F1E]">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="rounded-xl border border-pink-100 px-4 py-3 text-[14px] outline-none focus:border-[#E11D74] transition-colors resize-none" />
              </div>
              <button type="submit" className="rounded-full bg-[#E11D74] py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-pink-200 hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right – Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Contact details */}
            <div className="bg-white rounded-3xl p-7 border border-pink-100 shadow-sm flex flex-col gap-5">
              <h3 className="font-serif text-[20px] font-bold text-[#2B0F1E]">Contact Information</h3>
              {[
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "care@rosewoodhospital.com" },
                { icon: MapPin, label: "Address", value: "12, Rose Avenue, Bandra West, Mumbai – 400050" },
                { icon: Clock, label: "Hours", value: "Mon – Sat: 8 AM – 8 PM  |  Emergency: 24×7" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-[#E11D74]">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-[#E11D74] uppercase">{label}</p>
                    <p className="text-[14px] text-[#2B0F1E] font-medium mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-52 shadow-sm border border-pink-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8296!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknNDYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="GurushreeHospital Location"
              />
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm">
              <h3 className="font-serif text-[17px] font-bold text-[#2B0F1E] mb-4">Follow Us</h3>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ icon: Icon, label, handle, href }) => (
                  <a key={label} href={href}
                    className="flex items-center gap-3 rounded-xl bg-pink-50 px-4 py-3 hover:bg-pink-100 transition-colors"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E11D74] text-white">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#2B0F1E]">{label}</p>
                      <p className="text-[12px] text-gray-500">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Phone size={11} /> DEPARTMENT DIRECTORY
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Reach the Right <span className="italic text-[#E11D74]">Department</span>
            </h2>
          </div>
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {DEPARTMENTS.map(({ name, ext, hours }) => (
              <motion.div key={name} variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex items-center justify-between bg-[#FDF3F7] rounded-2xl px-5 py-4 border border-pink-100 transition-all"
              >
                <div>
                  <p className="font-semibold text-[14px] text-[#2B0F1E]">{name}</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">{hours}</p>
                </div>
                <a href={`tel:+9198765432${ext}`}
                  className="flex items-center gap-1.5 rounded-full bg-[#E11D74] text-white px-3 py-1.5 text-[12px] font-bold hover:scale-105 transition-transform"
                >
                  <Phone size={11} /> Ext. {ext}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

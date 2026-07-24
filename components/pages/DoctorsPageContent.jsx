"use client";

import { motion } from "framer-motion";
import { Heart, Star, Award, Clock, Phone, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DOCTORS = [
  { name: "Dr. Priya Sharma", specialty: "Senior Gynecologist", dept: "Gynecology", exp: "18 yrs", rating: 4.9, lang: "Hindi, English", days: "Mon, Wed, Fri", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Anita Mehta", specialty: "Obstetrician & Maternity", dept: "Maternity", exp: "14 yrs", rating: 4.8, lang: "Hindi, Marathi", days: "Tue, Thu, Sat", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Sunita Rao", specialty: "Fertility Specialist", dept: "IVF & Fertility", exp: "12 yrs", rating: 4.9, lang: "English, Telugu", days: "Mon–Sat", img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Kavya Nair", specialty: "Laparoscopic Surgeon", dept: "Surgery", exp: "10 yrs", rating: 4.7, lang: "Malayalam, English", days: "Mon, Wed, Sat", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Rekha Joshi", specialty: "High-Risk Pregnancy", dept: "Maternity", exp: "16 yrs", rating: 4.8, lang: "Hindi, Gujarati", days: "Tue, Thu", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Divya Menon", specialty: "Women's Wellness", dept: "Wellness", exp: "9 yrs", rating: 4.6, lang: "Tamil, English", days: "Wed, Fri, Sat", img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Pooja Agarwal", specialty: "Neonatologist", dept: "NICU", exp: "11 yrs", rating: 4.9, lang: "Hindi, English", days: "Mon–Fri", img: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=500&fit=crop&crop=face" },
  { name: "Dr. Smita Kulkarni", specialty: "Endocrinologist", dept: "Hormonal Health", exp: "13 yrs", rating: 4.7, lang: "Marathi, Hindi", days: "Mon, Thu, Sat", img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=500&fit=crop&crop=face" },
];

const DEPTS = ["All", "Gynecology", "Maternity", "IVF & Fertility", "Surgery", "Wellness", "NICU", "Hormonal Health"];

const WHY = [
  { icon: Award, title: "Board Certified", desc: "All doctors are board-certified with international training and fellowships." },
  { icon: Clock, title: "Flexible Hours", desc: "Morning, afternoon, and evening slots available 6 days a week." },
  { icon: Phone, title: "Tele-Consultation", desc: "Connect with our specialists from the comfort of your home." },
  { icon: Heart, title: "Patient-First", desc: "Average consultation time of 30 minutes — never rushed." },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function DoctorsPageContent() {
  return (
    <div className="bg-white">

      {/* Why Our Doctors */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> WHY CHOOSE OUR DOCTORS
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Care You Can <span className="italic text-[#E11D74]">Trust</span>
            </h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {WHY.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm text-center transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-[#E11D74] mb-4 mx-auto">
                  <Icon size={20} />
                </span>
                <h3 className="font-serif text-[16px] font-bold text-[#2B0F1E] mb-1">{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Department Filter + Full Team */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Filter size={11} /> OUR FULL TEAM
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Browse by <span className="italic text-[#E11D74]">Department</span>
            </h2>
          </div>

          {/* Dept pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {DEPTS.map((d, i) => (
              <motion.span key={d}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer border transition-all ${d === "All" ? "bg-[#E11D74] text-white border-[#E11D74]" : "bg-pink-50 text-[#2B0F1E] border-pink-200 hover:border-[#E11D74] hover:text-[#E11D74]"}`}
              >
                {d}
              </motion.span>
            ))}
          </div>

          {/* Doctor cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doc, i) => (
              <motion.div key={doc.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(225,29,116,0.12)" }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100 transition-all"
              >
                <div className="relative h-64 w-full">
                  <Image src={doc.img} alt={doc.name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/50 to-transparent" />
                  <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-[#E11D74]">{doc.dept}</span>
                </div>
                <div className="p-5">
                  <p className="font-serif text-[16px] font-bold text-[#2B0F1E]">{doc.name}</p>
                  <p className="text-[13px] text-[#E11D74] font-medium mt-0.5 mb-3">{doc.specialty}</p>
                  <div className="flex flex-col gap-1.5 text-[12px] text-gray-500 mb-4">
                    <span>🕐 {doc.exp} experience</span>
                    <span>🗣 {doc.lang}</span>
                    <span>📅 {doc.days}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[12px] font-semibold text-[#2B0F1E]">
                      <Star size={12} fill="#E11D74" strokeWidth={0} className="text-[#E11D74]" /> {doc.rating}
                    </span>
                    <Link href="/book-appointment"
                      className="rounded-full bg-[#E11D74] px-4 py-1.5 text-[12px] font-semibold text-white hover:scale-105 transition-transform"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 px-6 lg:px-10 bg-gradient-to-r from-[#E11D74] to-[#be185d] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-serif text-3xl lg:text-4xl font-extrabold mb-3">Ready to Meet Your Doctor?</h2>
          <p className="text-pink-200 text-[15px] mb-7 max-w-lg mx-auto">Book an appointment today and take the first step towards better health.</p>
          <Link href="/book-appointment"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#E11D74] font-bold px-8 py-3.5 text-[15px] shadow-lg hover:scale-105 transition-transform"
          >
            <Heart size={16} fill="#E11D74" strokeWidth={0} /> Book Appointment
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

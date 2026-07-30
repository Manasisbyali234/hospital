"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, ShieldPlus, Sparkles, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";

const TIMELINE = [
  { year: "1999", title: "Founded", desc: "GurushreeWomen's Care was established with a vision to provide world-class gynecological care in Mumbai." },
  { year: "2005", title: "NABH Accreditation", desc: "Received National Accreditation Board for Hospitals certification, setting a new standard of quality." },
  { year: "2010", title: "IVF Centre Launched", desc: "Opened a dedicated fertility and IVF centre, bringing hope to thousands of families." },
  { year: "2015", title: "10,000 Deliveries", desc: "Celebrated a milestone of 10,000 safe deliveries with zero maternal mortality." },
  { year: "2020", title: "Digital Health Wing", desc: "Launched telemedicine and digital health records for seamless patient care." },
  { year: "2024", title: "50,000+ Patients", desc: "Proudly serving over 50,000 women across Mumbai and beyond." },
];

const VALUES = [
  { icon: Heart, title: "Compassion", desc: "Every patient is treated with warmth, dignity, and genuine care." },
  { icon: ShieldPlus, title: "Safety First", desc: "Rigorous protocols ensure the highest safety standards at every step." },
  { icon: Award, title: "Excellence", desc: "Continuous learning and innovation drive our clinical outcomes." },
  { icon: Users, title: "Community", desc: "We invest in women's health education and community outreach programs." },
];

const LEADERSHIP = [
  {
    name: "Dr. Meera Kapoor",
    role: "Founder & Chief Gynecologist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    quote: "Every woman deserves expert care delivered with compassion.",
  },
  {
    name: "Dr. Rajan Iyer",
    role: "Medical Director",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    quote: "Our mission is to make quality healthcare accessible to all.",
  },
  {
    name: "Ms. Preethi Nair",
    role: "Chief Nursing Officer",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    quote: "Nursing is the heart of patient experience at Rosewood.",
  },
];

const ACCREDITATIONS = ["NABH Accredited", "ISO 9001:2015", "JCI Standards", "FOGSI Member", "ICMR Approved Lab"];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function AboutPageContent() {
  return (
    <div className="bg-white">

      {/* Our Story */}
      <section className="py-16 px-6 lg:px-10" style={{ background: "linear-gradient(135deg,#fff0f6 0%,#fff 60%,#fdf2f8 100%)" }}>
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 border border-pink-200 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-5">
              <Sparkles size={11} /> OUR STORY
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight mb-5">
              25 Years of Caring for <span className="italic text-[#E11D74]">Women&apos;s Health</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
              Founded in 1999 by Dr. Meera Kapoor, GurushreeWomen&apos;s Care began as a small clinic in Bandra with a single mission — to give every woman access to compassionate, expert gynecological care.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              Over two decades, we have grown into Mumbai&apos;s most trusted women&apos;s hospital, with a 150-bed facility, 12 operation theatres, and a team of over 150 specialists. Yet our founding values remain unchanged: every patient is family.
            </p>
            <div className="flex flex-wrap gap-3">
              {ACCREDITATIONS.map((a) => (
                <span key={a} className="flex items-center gap-1.5 rounded-full bg-pink-50 border border-pink-200 px-3 py-1.5 text-[12px] font-semibold text-[#E11D74]">
                  <CheckCircle2 size={12} /> {a}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl ring-2 ring-pink-100"
          >
            <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=85" alt="Hospital building" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-serif text-xl font-bold text-[#E11D74]">Est. 1999</p>
              <p className="text-sm text-gray-600">Mumbai&apos;s Trusted Women&apos;s Hospital</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> OUR JOURNEY
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Milestones That <span className="italic text-[#E11D74]">Define Us</span>
            </h2>
          </div>
          <div className="relative flex flex-col gap-8">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-pink-200 hidden lg:block" />
            {TIMELINE.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative lg:w-[46%] bg-white rounded-2xl p-6 shadow-sm border border-pink-100 ${i % 2 === 0 ? "lg:self-start" : "lg:self-end"}`}
              >
                <span className="inline-block rounded-full bg-[#E11D74] text-white text-[12px] font-bold px-3 py-1 mb-3">{year}</span>
                <h3 className="font-serif text-[17px] font-bold text-[#2B0F1E] mb-1">{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
                <div className={`absolute top-7 hidden lg:block w-4 h-4 rounded-full bg-[#E11D74] border-4 border-white shadow ${i % 2 === 0 ? "-right-[2.35rem]" : "-left-[2.35rem]"}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> OUR VALUES
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              What We <span className="italic text-[#E11D74]">Stand For</span>
            </h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(225,29,116,0.12)" }}
                className="rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 p-7 text-center transition-all"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E11D74] text-white mb-4 mx-auto">
                  <Icon size={22} />
                </span>
                <h3 className="font-serif text-[18px] font-bold text-[#2B0F1E] mb-2">{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Users size={11} /> LEADERSHIP
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              The People Behind <span className="italic text-[#E11D74]">Rosewood</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {LEADERSHIP.map(({ name, role, img, quote }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100"
              >
                <div className="relative h-64">
                  <Image src={img} alt={name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/50 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="font-serif text-[17px] font-bold text-[#2B0F1E]">{name}</p>
                  <p className="text-[13px] text-[#E11D74] font-semibold mb-4">{role}</p>
                  <div className="flex gap-2 items-start">
                    <Quote size={16} className="text-pink-300 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-gray-500 italic leading-relaxed">{quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

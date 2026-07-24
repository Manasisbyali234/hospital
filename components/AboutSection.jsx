"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ShieldPlus, Award, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const HIGHLIGHTS = [
  { icon: Award, label: "25+ Years of Excellence" },
  { icon: ShieldPlus, label: "24×7 Emergency Care" },
  { icon: Users, label: "150+ Expert Doctors" },
  { icon: Heart, label: "50,000+ Patients Served" },
];

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-12 lg:py-16 px-6 lg:px-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fff 40%, #fdf2f8 70%, #fce7f3 100%)" }}
    >
      {/* Animated mesh blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        animate={{ background: ["radial-gradient(circle, #fbcfe8 0%, transparent 70%)", "radial-gradient(circle, #f9a8d4 0%, transparent 70%)", "radial-gradient(circle, #fbcfe8 0%, transparent 70%)"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
        animate={{ background: ["radial-gradient(circle, #fce7f3 0%, transparent 70%)", "radial-gradient(circle, #fbcfe8 0%, transparent 70%)", "radial-gradient(circle, #fce7f3 0%, transparent 70%)"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating sparkle dots */}
      {[
        { top: "15%", left: "8%", size: 8, delay: 0 },
        { top: "70%", left: "5%", size: 5, delay: 1 },
        { top: "30%", right: "6%", size: 6, delay: 0.5 },
        { top: "80%", right: "10%", size: 9, delay: 1.5 },
        { top: "50%", left: "50%", size: 5, delay: 2 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          variants={pulseVariants}
          animate="animate"
          style={{ top: dot.top, left: dot.left, right: dot.right, width: dot.size, height: dot.size, transitionDelay: `${dot.delay}s` }}
          className="pointer-events-none absolute rounded-full bg-[#E11D74]"
        />
      ))}

      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#E11D74 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── Image Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow ring behind image */}
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-3xl bg-gradient-to-br from-pink-300 to-rose-300 blur-2xl -z-10"
          />

          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl ring-2 ring-pink-200">
            <motion.div style={{ y: bgY }} className="absolute inset-0">
              <Image src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=900&q=85" alt="Mother and baby" fill className="object-cover scale-110" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/60 via-[#2B0F1E]/10 to-transparent" />

            {/* Floating bottom stat */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-pink-100"
            >
              <p className="font-serif text-2xl font-bold text-[#E11D74]">25+</p>
              <p className="text-sm text-gray-600">Years Caring for Women</p>
            </motion.div>

            {/* Floating top-right stat */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: "1s" }}
              transition={{ delay: 1 }}
              className="absolute top-6 right-6 bg-gradient-to-br from-[#E11D74] to-[#be185d] backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl text-white text-center"
            >
              <p className="font-serif text-xl font-bold">50K+</p>
              <p className="text-xs opacity-90">Happy Patients</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Text Column ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-5 shadow-sm border border-pink-200"
          >
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
              <Sparkles size={12} />
            </motion.span>
            ABOUT US
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl lg:text-5xl font-extrabold text-[#2B0F1E] leading-tight mb-5"
          >
            Dedicated to Every <br />
            <span className="relative italic text-[#E11D74]">
              Woman&apos;s Well-being
              <motion.svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              >
                <motion.path
                  d="M1 6 Q75 1 150 6 Q225 11 299 6"
                  stroke="#E11D74"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-500 text-[15px] leading-relaxed mb-4">
            Rosewood Women&apos;s Care is a premier gynecology and maternity hospital
            committed to providing compassionate, expert care at every stage of a
            woman&apos;s life — from adolescence through menopause and beyond.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Our state-of-the-art facilities, combined with a team of highly
            qualified specialists, ensure that every patient receives personalized
            attention in a warm and supportive environment.
          </motion.p>

          {/* Highlight cards */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-3 mb-8">
            {HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-pink-100 hover:border-pink-300 hover:shadow-pink-100 hover:shadow-md cursor-default"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 text-[#E11D74]"
                >
                  <Icon size={16} />
                </motion.span>
                <p className="text-[13px] font-semibold text-[#2B0F1E]">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(225,29,116,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E11D74] to-[#be185d] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-pink-200 transition-colors duration-200"
          >
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart size={15} fill="white" strokeWidth={0} />
            </motion.span>
            Book a Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Navbar from "./Navbar";

export default function PageHero({ badge, title, highlight, subtitle, animVariant = "fadeUp" }) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -6, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    },
    flipUp: {
      hidden: { opacity: 0, rotateX: 30, y: 30 },
      visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
  };

  const chosen = variants[animVariant] || variants.fadeUp;

  return (
    <>
      <Navbar />
      <section
        className="relative overflow-hidden pt-36 pb-20 px-6 lg:px-10 text-center"
        style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fff 50%, #fce7f3 100%)" }}
      >
        {/* Animated blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose-200 blur-3xl"
        />
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#E11D74 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <motion.div
          variants={chosen}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 border border-pink-200 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-5">
            <Heart size={11} fill="#E11D74" strokeWidth={0} />
            {badge}
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-extrabold text-[#2B0F1E] leading-tight mb-4">
            {title}{" "}
            <span className="italic text-[#E11D74]">{highlight}</span>
          </h1>
          <p className="text-gray-500 text-[16px] leading-relaxed max-w-xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
            <path d="M0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,40 L0,40Z" fill="white" />
          </svg>
        </div>
      </section>
    </>
  );
}

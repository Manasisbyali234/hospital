"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Heart,
  Phone,
  ArrowRight,
  Award,
  Users,
  ShieldPlus,
  Building2,
  Star,
  Stethoscope,
} from "lucide-react";
import ECGHeartbeat from "./ECGHeartbeat";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
];

const BOTTOM_STATS = [
  {
    icon: Building2,
    end: 20, suffix: "+",
    label: "Departments",
    desc: "Advanced medical infrastructure",
  },
  {
    icon: Users,
    end: 150, suffix: "+",
    label: "Expert Doctors",
    desc: "Highly qualified & compassionate",
  },
  {
    icon: Heart,
    end: 50, suffix: "K+",
    label: "Patients Served",
    desc: "Trusted by thousands of women",
  },
  {
    icon: Star,
    end: 4.9, suffix: "/5", decimals: 1,
    label: "Patient Rating",
    desc: "Based on real patient experiences",
  },
  {
    icon: Award,
    end: 25, suffix: "+",
    label: "Years of Excellence",
    desc: "Delivering trusted women's care",
  },
];

function useCountUp(end, { duration = 2, decimals = 0, trigger }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) { setCount(0); return; }
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(decimals)));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [trigger, end, duration, decimals]);
  return count;
}


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDF3F7] pb-6 pt-[72px] md:pt-[80px] md:pb-8">
      {/* decorative heart marks */}
      <span className="pointer-events-none absolute left-[37%] top-28 hidden select-none text-3xl text-pink-300/80 lg:block">
        ❤
      </span>
      <span className="pointer-events-none absolute left-[41%] top-[15rem] hidden select-none text-4xl text-pink-300/70 lg:block">
        ❤
      </span>
      <span className="pointer-events-none absolute right-[24%] top-[4.5rem] hidden select-none text-3xl text-pink-300/80 lg:block">
        ❤
      </span>
      <span className="pointer-events-none absolute right-[9%] bottom-40 hidden select-none text-3xl text-pink-300/70 lg:block">
        ❤
      </span>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-2 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:px-10">
        {/* Left column */}
        <div className="relative flex flex-col justify-center pb-4 pt-0 lg:pb-14 lg:pt-0">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-pink-100 px-4 py-[7px] text-[11px] font-bold tracking-[0.06em] text-[#E11D74]">
            <Heart size={13} fill="#E11D74" strokeWidth={0} />
            GYNECOLOGY &amp; MATERNITY CARE
          </div>

          <h1 className="font-serif text-[1.8rem] font-extrabold leading-[1.1] tracking-tight text-[#2A1020] sm:text-[2.4rem] lg:text-[3.2rem] xl:text-[3.6rem]">
            Where Every
            <br />
            Woman&apos;s Journey
            <br />
            <span className="italic text-[#EC1E79]">Begins with Care</span>
          </h1>

          <p className="mt-3 max-w-[460px] text-[14px] leading-relaxed text-gray-500 sm:text-[16px]">
            Expert gynecologists, compassionate care, and advanced facilities
            – from your first check-up to the moment you hold your baby, we
            are with you at every step.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-[#E11D74] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-pink-200 transition-transform hover:scale-[1.03]"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-pink-200 px-6 py-3.5 text-[15px] font-semibold text-[#E11D74] transition-colors hover:bg-pink-50"
            >
              <Phone size={15} />
              Talk to Us
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Happy mother"
                    width={38}
                    height={38}
                    className="h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-[#E11D74]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="#E11D74" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[13.5px] text-gray-500">
                  Trusted by <span className="font-semibold text-[#2A1020]">10,000+</span>{" "}
                  mothers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[#E11D74]">
                <ShieldPlus size={18} />
              </span>
              <div>
                <p className="text-[15px] font-bold text-[#2A1020] leading-tight">24×7</p>
                <p className="text-[13.5px] text-gray-500 leading-tight">Emergency Care</p>
              </div>
            </div>
          </div>

          {/* Premium animated ECG heartbeat */}
          <div className="mt-4 max-w-[520px]">
            <ECGHeartbeat />
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <HeroVisual />
      </div>

      {/* Bottom stats bar */}
      <StatsBar />
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────── */
function StatItem({ icon: Icon, end, suffix, decimals = 0, label, desc }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const count = useCountUp(end, { decimals, trigger: inView });
  return (
    <div ref={ref} className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[#E11D74]">
        <Icon size={22} />
      </span>
      <div>
        <p className="font-serif text-2xl font-bold text-[#E11D74]">
          {count}{suffix}
        </p>
        <p className="font-semibold text-[#2B0F1E]">{label}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="mx-auto mt-2 max-w-[1400px] px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-5 shadow-[0_10px_40px_rgba(225,29,116,0.08)] sm:grid-cols-3 lg:grid-cols-5 lg:p-6">
        {BOTTOM_STATS.map((stat, i) => (
          <div key={stat.label} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
            <StatItem {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BUTTERFLY
───────────────────────────────────────────── */
const BUTTERFLIES = [
  { id: "bf1", size: 38, startX: "8%",  startY: "12%", dur: 18, delay: 0,   colors: ["#f9a8d4", "#e11d74", "#fce7f3", "#be185d"] },
  { id: "bf2", size: 28, startX: "78%", startY: "20%", dur: 22, delay: 3,   colors: ["#f472b6", "#db2777", "#fbcfe8", "#9d174d"] },
  { id: "bf3", size: 32, startX: "55%", startY: "70%", dur: 20, delay: 6,   colors: ["#fda4af", "#e11d74", "#ffe4e6", "#be123c"] },
  { id: "bf4", size: 22, startX: "20%", startY: "60%", dur: 16, delay: 1.5, colors: ["#f9a8d4", "#a21caf", "#fae8ff", "#86198f"] },
  { id: "bf5", size: 26, startX: "88%", startY: "65%", dur: 24, delay: 8,   colors: ["#fda4af", "#be185d", "#fce7f3", "#9f1239"] },
  { id: "bf6", size: 30, startX: "45%", startY: "10%", dur: 19, delay: 2,   colors: ["#f9a8d4", "#e11d74", "#fce7f3", "#be185d"] },
  { id: "bf7", size: 24, startX: "65%", startY: "50%", dur: 21, delay: 5,   colors: ["#fda4af", "#db2777", "#ffe4e6", "#9d174d"] },
  { id: "bf8", size: 34, startX: "15%", startY: "35%", dur: 17, delay: 4,   colors: ["#f472b6", "#be185d", "#fbcfe8", "#9f1239"] },
];

function Butterfly({ size, startX, startY, dur, delay, colors }) {
  const w = size;
  const h = size * 0.72;
  // Fly path: figure-8 style wandering across the section
  const x1 = parseFloat(startX);
  const y1 = parseFloat(startY);
  const flyX = [
    `${x1}%`, `${x1 + 18}%`, `${x1 + 8}%`, `${x1 - 12}%`,
    `${x1 + 22}%`, `${x1 + 5}%`, `${x1}%`,
  ];
  const flyY = [
    `${y1}%`, `${y1 - 15}%`, `${y1 + 20}%`, `${y1 + 5}%`,
    `${y1 - 10}%`, `${y1 + 18}%`, `${y1}%`,
  ];

  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ left: startX, top: startY, zIndex: 25 }}
      animate={{ left: flyX, top: flyY }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.18, 0.35, 0.5, 0.68, 0.85, 1] }}
    >
      {/* Wing flap wrapper */}
      <motion.div
        animate={{ scaleX: [1, 0.15, 1, 0.15, 1] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ transformOrigin: "center" }}
      >
        <svg width={w} height={h} viewBox="0 0 80 58" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={`bfg_l_${delay}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor={colors[2]} stopOpacity="0.95" />
              <stop offset="60%" stopColor={colors[0]} stopOpacity="0.9" />
              <stop offset="100%" stopColor={colors[1]} stopOpacity="0.85" />
            </radialGradient>
            <radialGradient id={`bfg_r_${delay}`} cx="65%" cy="30%" r="70%">
              <stop offset="0%" stopColor={colors[2]} stopOpacity="0.95" />
              <stop offset="60%" stopColor={colors[0]} stopOpacity="0.9" />
              <stop offset="100%" stopColor={colors[3]} stopOpacity="0.85" />
            </radialGradient>
            <filter id={`bfglow_${delay}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Upper left wing */}
          <path
            d="M40 30 C34 18 18 8 8 14 C0 20 2 34 12 38 C22 42 34 36 40 30Z"
            fill={`url(#bfg_l_${delay})`}
            filter={`url(#bfglow_${delay})`}
          />
          {/* Lower left wing */}
          <path
            d="M40 30 C32 36 20 44 14 42 C6 40 6 50 16 52 C26 54 36 44 40 30Z"
            fill={colors[1]}
            opacity="0.7"
          />
          {/* Upper right wing */}
          <path
            d="M40 30 C46 18 62 8 72 14 C80 20 78 34 68 38 C58 42 46 36 40 30Z"
            fill={`url(#bfg_r_${delay})`}
            filter={`url(#bfglow_${delay})`}
          />
          {/* Lower right wing */}
          <path
            d="M40 30 C48 36 60 44 66 42 C74 40 74 50 64 52 C54 54 44 44 40 30Z"
            fill={colors[3]}
            opacity="0.7"
          />
          {/* Wing shimmer veins left */}
          <path d="M40 30 C34 22 22 14 12 16" stroke="white" strokeWidth="0.7" fill="none" opacity="0.5" />
          <path d="M40 30 C30 28 18 30 10 28" stroke="white" strokeWidth="0.5" fill="none" opacity="0.35" />
          {/* Wing shimmer veins right */}
          <path d="M40 30 C46 22 58 14 68 16" stroke="white" strokeWidth="0.7" fill="none" opacity="0.5" />
          <path d="M40 30 C50 28 62 30 70 28" stroke="white" strokeWidth="0.5" fill="none" opacity="0.35" />
          {/* Body */}
          <ellipse cx="40" cy="32" rx="2.2" ry="10" fill={colors[3]} opacity="0.95" />
          {/* Head */}
          <circle cx="40" cy="21" r="2.8" fill={colors[3]} opacity="0.95" />
          {/* Antennae */}
          <path d="M40 20 C37 14 33 10 31 8" stroke={colors[1]} strokeWidth="0.9" fill="none" strokeLinecap="round" />
          <circle cx="31" cy="8" r="1.4" fill={colors[0]} />
          <path d="M40 20 C43 14 47 10 49 8" stroke={colors[1]} strokeWidth="0.9" fill="none" strokeLinecap="round" />
          <circle cx="49" cy="8" r="1.4" fill={colors[0]} />
          {/* Glitter dots on wings */}
          <circle cx="22" cy="22" r="1.5" fill="white" opacity="0.6" />
          <circle cx="58" cy="22" r="1.5" fill="white" opacity="0.6" />
          <circle cx="18" cy="34" r="1" fill="white" opacity="0.45" />
          <circle cx="62" cy="34" r="1" fill="white" opacity="0.45" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   3D HEART BALLOONS
───────────────────────────────────────────── */
const BALLOONS = [
  {
    id: "b1", size: 88,
    pos: { right: "-2%", top: "-4%" },
    gradId: "hbg1", stops: ["#FFB6D1", "#F4568F", "#C91B60"],
    floatY: [-12, 0, -12], rotate: [-2, 1.5, -2],
    duration: 4.2, delay: 0, opacity: 0.82, zIndex: 15, stringColor: "#F4A9C6",
  },
  {
    id: "b2", size: 72,
    pos: { left: "0%", top: "5%" },
    gradId: "hbg2", stops: ["#FFE4EE", "#FBCFE8", "#F472B6"],
    floatY: [-9, 0, -9], rotate: [2, -1.5, 2],
    duration: 4.8, delay: 1.2, opacity: 0.75, zIndex: 15, stringColor: "#FBCFE8",
  },
  {
    id: "b3", size: 60,
    pos: { right: "2%", bottom: "10%" },
    gradId: "hbg3", stops: ["#FFC0CB", "#E8527A", "#B91C5A"],
    floatY: [-8, 0, -8], rotate: [-1.5, 2, -1.5],
    duration: 3.8, delay: 0.4, opacity: 0.78, zIndex: 15, stringColor: "#F9A8D4",
  },
];

function HeartBalloon({ size, pos, gradId, stops, floatY, rotate, duration, delay, opacity, zIndex, stringColor }) {
  const heartPath = "M50 28 C50 14 30 10 22 22 C14 34 14 46 26 56 L50 80 L74 56 C86 46 86 34 78 22 C70 10 50 14 50 28Z";
  const stringLen = size * 0.55;
  const h = size * 1.3;

  return (
    <motion.div
      className="absolute pointer-events-none hidden lg:block"
      style={{ ...pos, zIndex, opacity }}
      animate={{ y: floatY, rotate }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg width={size} height={h + stringLen} viewBox={`0 0 100 ${185}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={gradId} cx="28%" cy="22%" r="75%">
            <stop offset="0%" stopColor={stops[0]} />
            <stop offset="55%" stopColor={stops[1]} />
            <stop offset="100%" stopColor={stops[2]} />
          </radialGradient>
          <radialGradient id={`${gradId}_sh`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
          </radialGradient>
          <filter id={`${gradId}_blur`}>
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        {/* shadow */}
        <path d={heartPath} fill="rgba(180,30,80,0.2)" filter={`url(#${gradId}_blur)`} transform="translate(3,6)" />
        {/* body */}
        <path d={heartPath} fill={`url(#${gradId})`} />
        {/* depth */}
        <path d={heartPath} fill={`url(#${gradId}_sh)`} />
        {/* gloss */}
        <ellipse cx="38" cy="30" rx="14" ry="18" fill="white" opacity="0.35" transform="rotate(-20 38 30)" />
        <ellipse cx="34" cy="24" rx="5" ry="7" fill="white" opacity="0.6" transform="rotate(-20 34 24)" />
        {/* rim */}
        <path d="M68 38 C74 44 76 54 72 62" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.2" />
        {/* knot */}
        <ellipse cx="50" cy="82" rx="3.5" ry="2.5" fill={stops[2]} opacity="0.9" />
        {/* string */}
        <motion.path
          d="M50 85 C46 105 54 115 50 155"
          stroke={stringColor}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{ d: ["M50 85 C46 105 54 115 50 155", "M50 85 C54 105 46 115 50 155", "M50 85 C46 105 54 115 50 155"] }}
          transition={{ duration: duration * 1.3, repeat: Infinity, ease: "easeInOut", delay }}
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   GLASS CARD DATA
───────────────────────────────────────────── */
const CARDS = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    gradient: "from-pink-500 to-rose-400",
    pos: "left-[-4%] top-[6%]",
    delay: 0,
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Mothers",
    gradient: "from-fuchsia-500 to-pink-400",
    pos: "left-[-6%] top-[46%] -translate-y-1/2",
    delay: 0.4,
  },
  {
    icon: Stethoscope,
    value: "30+",
    label: "Specialists",
    gradient: "from-rose-500 to-pink-400",
    pos: "right-[-4%] top-[10%]",
    delay: 0.2,
  },
  {
    icon: ShieldPlus,
    value: "24×7",
    label: "Emergency Care",
    gradient: "from-pink-600 to-fuchsia-400",
    pos: "right-[-6%] top-[44%] -translate-y-1/2",
    delay: 0.6,
  },
  {
    icon: Building2,
    value: "Advanced",
    label: "Maternity Care",
    gradient: "from-rose-400 to-pink-300",
    pos: "bottom-[4%] left-1/2 -translate-x-1/2",
    delay: 0.8,
    wide: true,
  },
];


/* ─────────────────────────────────────────────
   GLASS CARD
───────────────────────────────────────────── */
function GlassCard({ icon: Icon, value, label, gradient, pos, delay, wide }) {
  return (
    <motion.div
      className={`absolute z-20 hidden lg:block ${pos} ${wide ? "w-[170px]" : "w-[118px]"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.6, duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ y: -10, scale: 1.04 }}
        className={`rounded-[24px] border border-white/45 p-3.5 backdrop-blur-md ${wide ? "flex items-center gap-3" : ""}`}
        style={{
          background: "rgba(255,255,255,0.60)",
          boxShadow: "0 8px 28px rgba(225,29,116,0.13)",
        }}
      >
        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white ${wide ? "h-9 w-9" : "mb-2 h-10 w-10"}`}
        >
          <Icon size={wide ? 16 : 18} />
        </span>
        <div>
          <p className={`font-bold leading-tight text-[#2A1020] ${wide ? "text-[14px]" : "text-[20px]"}`}>{value}</p>
          <p className="text-[11.5px] leading-tight text-gray-500">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}


/* ─────────────────────────────────────────────
   HERO VISUAL (right column)
───────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center py-2 sm:max-w-[420px] sm:py-4 lg:max-w-[600px] lg:py-10">

      {/* ── ROTATING GRADIENT RINGS ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `min(${340 + i * 90}px, ${85 + i * 5}vw)`,
              height: `min(${340 + i * 90}px, ${85 + i * 5}vw)`,
              background: `conic-gradient(from ${i * 120}deg, #fce7f3, #f9a8d4, #e11d74, #fce7f3)`,
              opacity: 0.13 - i * 0.03,
              filter: "blur(2px)",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18 + i * 6, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <div
          className="absolute rounded-full"
          style={{
            width: "min(380px, 90vw)",
            height: "min(460px, 90vw)",
            background: "radial-gradient(ellipse, rgba(225,29,116,0.18) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* ── MAIN IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[min(260px,68vw)] sm:w-[min(340px,76vw)] lg:w-[min(420px,80vw)]"
      >
        {/* Animated border ring */}
        <motion.div
          className="absolute inset-0"
          style={{
            borderRadius: "50% / 40%",
            background: "conic-gradient(from 0deg, #e11d74, #f9a8d4, #fce7f3, #e11d74)",
            padding: 3,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Image container */}
        <div
          className="relative overflow-hidden border-[10px] border-white w-full"
          style={{
            borderRadius: "50% / 40%",
            aspectRatio: "420 / 500",
            boxShadow: "0 30px 80px rgba(225,29,116,0.25), 0 8px 24px rgba(0,0,0,0.10)",
          }}
        >
          <Image
            src="/images/hero-doctor.png"
            alt="Doctor providing women's care"
            fill
            className="object-cover object-top"
            priority
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* ── BUTTERFLIES ── */}
      {BUTTERFLIES.map((b) => <Butterfly key={b.id} {...b} />)}

      {/* ── 3D HEART BALLOONS ── */}
      {BALLOONS.map((b) => <HeartBalloon key={b.id} {...b} />)}

      {/* ── GLASS CARDS ── */}
      {CARDS.map((card) => (
        <GlassCard key={card.label} {...card} />
      ))}
    </div>
  );
}

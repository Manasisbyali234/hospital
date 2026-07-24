"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const STEPS = [
  { label: "Women's Wellness", desc: "Holistic health screenings & preventive care", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
  { label: "Pregnancy Planning", desc: "Fertility guidance & pre-conception counselling", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80" },
  { label: "Pregnancy Care", desc: "Trimester-wise monitoring & nutrition support", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80" },
  { label: "Delivery", desc: "Safe, comfortable labour suite experience", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80" },
  { label: "Postnatal Care", desc: "Mother recovery & lactation support", img: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&q=80" },
  { label: "Baby Care", desc: "Newborn screening, NICU & paediatric follow-up", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80" },
];

function CareJourneyBg() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 600"
    >
      <defs>
        {/* Base gradient */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0f5" />
          <stop offset="45%" stopColor="#fff8fb" />
          <stop offset="100%" stopColor="#fce4ec" />
        </linearGradient>

        {/* Blob gradients */}
        <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9a8c9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f9a8c9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbc8dc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fbc8dc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde8f0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fde8f0" stopOpacity="0" />
        </radialGradient>

        {/* Glow circles */}
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f48fb1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f48fb1" stopOpacity="0" />
        </radialGradient>

        {/* Blur filter for bokeh */}
        <filter id="blur4" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="blur8" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="blur16" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#e91e8c" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* ── Base fill ── */}
      <rect width="1440" height="600" fill="url(#bgGrad)" />

      {/* ── Abstract blobs ── */}
      <ellipse cx="120" cy="80" rx="220" ry="180" fill="url(#blob1)" filter="url(#blur16)" />
      <ellipse cx="1360" cy="520" rx="260" ry="200" fill="url(#blob2)" filter="url(#blur16)" />
      <ellipse cx="1300" cy="60" rx="180" ry="150" fill="url(#blob3)" filter="url(#blur8)" />
      <ellipse cx="200" cy="520" rx="200" ry="160" fill="url(#blob3)" filter="url(#blur16)" />
      <ellipse cx="720" cy="580" rx="300" ry="120" fill="url(#blob1)" filter="url(#blur16)" opacity="0.4" />

      {/* ── Glowing circles ── */}
      <circle cx="80" cy="300" r="120" fill="url(#glow1)" filter="url(#blur8)" />
      <circle cx="1380" cy="200" r="100" fill="url(#glow2)" filter="url(#blur8)" />
      <circle cx="700" cy="30" r="80" fill="url(#glow1)" filter="url(#blur8)" opacity="0.6" />

      {/* ── Bokeh dots ── */}
      {[
        [60,140,18],[130,420,12],[1390,130,20],[1310,400,14],[400,560,10],
        [980,540,16],[1100,80,10],[300,60,8],[850,580,12],[1200,300,9],
      ].map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill="#fff" opacity="0.55" filter="url(#blur4)" />
      ))}

      {/* ── Sparkles (4-point stars) ── */}
      {[
        [340,90,6],[1050,110,5],[1240,460,7],[180,480,5],[620,40,6],[1380,380,5],[90,560,6],
      ].map(([x,y,s],i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity="0.55">
          <path d={`M0,${-s} L${s*0.25},${-s*0.25} L${s},0 L${s*0.25},${s*0.25} L0,${s} L${-s*0.25},${s*0.25} L${-s},0 L${-s*0.25},${-s*0.25}Z`}
            fill="#f48fb1" />
        </g>
      ))}

      {/* ── Dotted circular patterns ── */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
        const rad = (deg * Math.PI) / 180;
        return <circle key={i} cx={100 + 55 * Math.cos(rad)} cy={300 + 55 * Math.sin(rad)}
          r="3" fill="#f48fb1" opacity="0.3" />;
      })}
      {[0,40,80,120,160,200,240,280,320].map((deg,i) => {
        const rad = (deg * Math.PI) / 180;
        return <circle key={i} cx={1340 + 45 * Math.cos(rad)} cy={300 + 45 * Math.sin(rad)}
          r="2.5" fill="#e91e8c" opacity="0.2" />;
      })}

      {/* ── Curved dotted journey path ── */}
      <path
        d="M 160 520 Q 400 200 720 300 Q 1040 400 1280 120"
        fill="none" stroke="#f48fb1" strokeWidth="2"
        strokeDasharray="6 10" opacity="0.35"
      />
      {/* Small circles along path as waypoints */}
      {[[160,520],[340,340],[540,280],[720,300],[900,330],[1100,230],[1280,120]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#e91e8c" opacity="0.25" />
      ))}

      {/* ── Medical crosses (right side, subtle) ── */}
      {[[1360,80],[1400,200],[1420,340],[1350,460]].map(([x,y],i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity="0.18">
          <rect x="-3" y="-10" width="6" height="20" rx="2" fill="#e91e8c" />
          <rect x="-10" y="-3" width="20" height="6" rx="2" fill="#e91e8c" />
        </g>
      ))}
      {/* A couple on left too */}
      {[[40,100],[60,460]].map(([x,y],i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity="0.15">
          <rect x="-3" y="-10" width="6" height="20" rx="2" fill="#e91e8c" />
          <rect x="-10" y="-3" width="20" height="6" rx="2" fill="#e91e8c" />
        </g>
      ))}

      {/* ── Small hearts ── */}
      {[[1370,150,10],[1410,280,8],[50,200,9],[80,400,7],[700,560,8],[1200,540,9]].map(([x,y,s],i) => (
        <path key={i}
          transform={`translate(${x - s},${y - s * 0.85}) scale(${s / 12})`}
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          fill="#f48fb1" opacity="0.22"
        />
      ))}

      {/* ── Mother & baby line-art illustration (right side) ── */}
      <g transform="translate(1080, 40)" opacity="0.13" fill="none" stroke="#c2185b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Body / torso */}
        <path d="M160 520 Q140 460 150 400 Q155 360 145 320" />
        <path d="M200 520 Q220 460 210 400 Q205 360 215 320" />
        {/* Arms cradling */}
        <path d="M145 320 Q100 290 90 250 Q85 220 110 210 Q130 205 145 225" />
        <path d="M215 320 Q240 300 250 270 Q255 240 235 225 Q215 215 205 235" />
        {/* Forearms meeting under baby */}
        <path d="M145 225 Q160 240 180 238 Q200 236 205 235" />
        {/* Mother head */}
        <circle cx="180" cy="290" r="38" />
        {/* Hair */}
        <path d="M145 275 Q148 240 180 235 Q212 240 215 275" />
        <path d="M145 275 Q135 295 140 315" />
        {/* Baby body */}
        <ellipse cx="178" cy="195" rx="28" ry="22" />
        {/* Baby head */}
        <circle cx="178" cy="162" r="22" />
        {/* Baby arm */}
        <path d="M155 190 Q140 185 138 175" />
        {/* Neck */}
        <line x1="180" y1="252" x2="180" y2="328" />
        {/* Skirt / lower body */}
        <path d="M150 400 Q155 460 145 520" />
        <path d="M210 400 Q205 460 215 520" />
        <path d="M145 520 Q180 535 215 520" />
        {/* Decorative heart above */}
        <path transform="translate(155,100) scale(1.4)" d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </g>

      {/* Soft vignette overlay to keep center bright */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#fce4ec" stopOpacity="0.18" />
      </radialGradient>
      <rect width="1440" height="600" fill="url(#vignette)" />
    </svg>
  );
}

function WaveStep({ label, desc, img, i, scrollYProgress }) {
  const baseOffset = i % 2 === 0 ? 0 : 60;
  // each step gets a slightly different phase in the wave
  const phase = i * 0.12;
  const raw = useTransform(scrollYProgress, [phase, phase + 0.5, phase + 1], [baseOffset + 20, baseOffset - 20, baseOffset + 20]);
  const y = useSpring(raw, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      key={label}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center flex-1 px-2"
      style={{ y }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.12 + 0.15 }}
        className="relative h-[88px] w-[88px] mb-3"
      >
        <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-lg shadow-pink-100">
          <Image src={img} alt={label} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#E11D74]/20" />
        </div>
        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#E11D74] text-white text-[11px] font-bold shadow z-10">
          {i + 1}
        </span>
      </motion.div>
      {i < 5 && (
        <motion.span
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.12 + 0.35 }}
          className="hidden lg:block absolute top-[68px] right-[-8px] text-[#E11D74] text-xl font-bold z-20"
        >›</motion.span>
      )}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.12 + 0.28 }}
        className="font-serif text-[14px] font-bold text-[#2B0F1E] mb-1"
      >{label}</motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.12 + 0.36 }}
        className="text-[12px] text-gray-500 leading-relaxed"
      >{desc}</motion.p>
    </motion.div>
  );
}

export default function CareJourneySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="care-journey" className="relative overflow-hidden pt-4 pb-4 lg:pt-6 lg:pb-6 px-6 lg:px-10">
      <CareJourneyBg />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
            <Heart size={12} fill="#E11D74" strokeWidth={0} /> OUR CARE JOURNEY
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-[#2B0F1E] leading-tight">
            With You at <span className="italic text-[#E11D74]">Every Step</span>
          </h2>
          <p className="mt-3 text-gray-500 text-[15px] max-w-xl mx-auto">
            A seamless continuum of care — from wellness to welcoming your newborn.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-0 pb-16">
          {STEPS.map(({ label, desc, img }, i) => (
            <WaveStep key={label} label={label} desc={desc} img={img} i={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

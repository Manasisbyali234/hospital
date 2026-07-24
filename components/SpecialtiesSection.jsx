"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Stethoscope } from "lucide-react";

/* ── Inline 3-D SVG icons ── */
function Icon3D_Stethoscope() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 drop-shadow-xl">
      <defs>
        <radialGradient id="sg1" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ff80ab" />
          <stop offset="100%" stopColor="#c2185b" />
        </radialGradient>
        <radialGradient id="sg2" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Body */}
      <circle cx="40" cy="40" r="36" fill="url(#sg1)" />
      <ellipse cx="32" cy="22" rx="14" ry="8" fill="url(#sg2)" />
      {/* Stethoscope tube */}
      <path d="M28 28 Q20 38 22 50 Q24 60 34 62 Q44 64 48 54 Q52 44 46 38" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Ear tips */}
      <circle cx="28" cy="27" r="4" fill="#fff" opacity="0.9" />
      <circle cx="46" cy="27" r="4" fill="#fff" opacity="0.9" />
      {/* Chest piece */}
      <circle cx="46" cy="38" r="7" fill="#fff" opacity="0.95" />
      <circle cx="46" cy="38" r="4" fill="#e91e8c" opacity="0.7" />
    </svg>
  );
}

function Icon3D_Baby() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 drop-shadow-xl">
      <defs>
        <radialGradient id="bg1" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#ad1457" />
        </radialGradient>
        <radialGradient id="bg2" cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#bg1)" />
      <ellipse cx="32" cy="20" rx="14" ry="8" fill="url(#bg2)" />
      {/* Baby head */}
      <circle cx="40" cy="30" r="12" fill="#fff" opacity="0.95" />
      {/* Baby body */}
      <ellipse cx="40" cy="50" rx="10" ry="12" fill="#fff" opacity="0.9" />
      {/* Arms */}
      <path d="M30 46 Q24 44 23 50" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 46 Q56 44 57 50" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Face dots */}
      <circle cx="36" cy="29" r="1.5" fill="#e91e8c" opacity="0.7" />
      <circle cx="44" cy="29" r="1.5" fill="#e91e8c" opacity="0.7" />
      <path d="M37 34 Q40 37 43 34" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}

function Icon3D_Microscope() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 drop-shadow-xl">
      <defs>
        <radialGradient id="mg1" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ce93d8" />
          <stop offset="100%" stopColor="#7b1fa2" />
        </radialGradient>
        <radialGradient id="mg2" cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#mg1)" />
      <ellipse cx="32" cy="20" rx="14" ry="8" fill="url(#mg2)" />
      {/* Stand */}
      <rect x="36" y="52" width="8" height="12" rx="2" fill="#fff" opacity="0.9" />
      <rect x="28" y="62" width="24" height="4" rx="2" fill="#fff" opacity="0.9" />
      {/* Arm */}
      <rect x="38" y="28" width="5" height="26" rx="2.5" fill="#fff" opacity="0.9" />
      {/* Eyepiece */}
      <rect x="34" y="20" width="13" height="6" rx="3" fill="#fff" opacity="0.95" />
      {/* Lens */}
      <circle cx="40" cy="52" r="5" fill="#fff" opacity="0.95" />
      <circle cx="40" cy="52" r="3" fill="#ce93d8" opacity="0.7" />
      {/* Light beam */}
      <path d="M40 57 L36 66 M40 57 L44 66" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function Icon3D_Surgery() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 drop-shadow-xl">
      <defs>
        <radialGradient id="rg1" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ef9a9a" />
          <stop offset="100%" stopColor="#b71c1c" />
        </radialGradient>
        <radialGradient id="rg2" cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#rg1)" />
      <ellipse cx="32" cy="20" rx="14" ry="8" fill="url(#rg2)" />
      {/* Scalpel handle */}
      <rect x="22" y="37" width="28" height="6" rx="3" fill="#fff" opacity="0.95" transform="rotate(-30 36 40)" />
      {/* Blade */}
      <path d="M46 28 L56 22 L54 30 Z" fill="#fff" opacity="0.9" />
      {/* Cross */}
      <rect x="34" y="48" width="12" height="4" rx="2" fill="#fff" opacity="0.85" />
      <rect x="38" y="44" width="4" height="12" rx="2" fill="#fff" opacity="0.85" />
    </svg>
  );
}

function Icon3D_Shield() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 drop-shadow-xl">
      <defs>
        <radialGradient id="shg1" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#80cbc4" />
          <stop offset="100%" stopColor="#00695c" />
        </radialGradient>
        <radialGradient id="shg2" cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#shg1)" />
      <ellipse cx="32" cy="20" rx="14" ry="8" fill="url(#shg2)" />
      {/* Shield */}
      <path d="M40 18 L56 25 L56 42 Q56 56 40 62 Q24 56 24 42 L24 25 Z" fill="#fff" opacity="0.92" />
      <path d="M40 22 L52 28 L52 42 Q52 53 40 58 Q28 53 28 42 L28 28 Z" fill="#80cbc4" opacity="0.5" />
      {/* Plus */}
      <rect x="36" y="34" width="8" height="3" rx="1.5" fill="#fff" />
      <rect x="38.5" y="31.5" width="3" height="8" rx="1.5" fill="#fff" />
    </svg>
  );
}

function Icon3D_Heart() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 drop-shadow-xl">
      <defs>
        <radialGradient id="hg1" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#880e4f" />
        </radialGradient>
        <radialGradient id="hg2" cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#hg1)" />
      <ellipse cx="32" cy="20" rx="14" ry="8" fill="url(#hg2)" />
      {/* Heart */}
      <path d="M40 56 C40 56 22 44 22 32 C22 25 28 20 34 22 C37 23 39 26 40 28 C41 26 43 23 46 22 C52 20 58 25 58 32 C58 44 40 56 40 56Z" fill="#fff" opacity="0.95" />
      {/* Inner shine */}
      <ellipse cx="34" cy="28" rx="4" ry="3" fill="#fff" opacity="0.4" transform="rotate(-20 34 28)" />
    </svg>
  );
}

const SPECIALTIES = [
  {
    Icon3D: Icon3D_Stethoscope,
    title: "General Gynecology",
    desc: "Comprehensive care for all gynecological conditions, routine check-ups, and preventive screenings.",
    bg: "from-rose-50 to-pink-100",
    ring: "ring-pink-200",
  },
  {
    Icon3D: Icon3D_Baby,
    title: "Maternity & Obstetrics",
    desc: "Expert care through every trimester — prenatal, delivery, and postnatal support.",
    bg: "from-pink-50 to-fuchsia-100",
    ring: "ring-fuchsia-200",
  },
  {
    Icon3D: Icon3D_Microscope,
    title: "Fertility & IVF",
    desc: "Advanced fertility treatments and IVF procedures with high success rates.",
    bg: "from-purple-50 to-fuchsia-100",
    ring: "ring-purple-200",
  },
  {
    Icon3D: Icon3D_Surgery,
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive surgical procedures for faster recovery and less discomfort.",
    bg: "from-red-50 to-rose-100",
    ring: "ring-red-200",
  },
  {
    Icon3D: Icon3D_Shield,
    title: "High-Risk Pregnancy",
    desc: "Specialized monitoring and care for high-risk pregnancies ensuring mother and baby safety.",
    bg: "from-teal-50 to-emerald-100",
    ring: "ring-teal-200",
  },
  {
    Icon3D: Icon3D_Heart,
    title: "Women's Wellness",
    desc: "Holistic wellness programs covering nutrition, mental health, and hormonal balance.",
    bg: "from-rose-50 to-pink-100",
    ring: "ring-rose-200",
  },
];

function SpecialtiesBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="sb-g1" cx="20%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="100%" stopColor="#fff0f5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sb-g2" cx="80%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#f8bbd0" />
          <stop offset="100%" stopColor="#fff0f5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sb-g3" cx="60%" cy="10%" r="45%">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="sb-blur4"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="sb-blur10"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="sb-blur20"><feGaussianBlur stdDeviation="20" /></filter>
      </defs>

      {/* Base */}
      <rect width="1440" height="700" fill="#fff8fa" />

      {/* Large soft blobs */}
      <circle cx="180" cy="160" r="220" fill="url(#sb-g1)" filter="url(#sb-blur20)" />
      <circle cx="1280" cy="560" r="240" fill="url(#sb-g2)" filter="url(#sb-blur20)" />
      <circle cx="720" cy="60" r="180" fill="url(#sb-g3)" filter="url(#sb-blur20)" />
      <circle cx="1100" cy="120" r="140" fill="#fce4ec" opacity="0.35" filter="url(#sb-blur20)" />
      <circle cx="300" cy="580" r="160" fill="#f8bbd0" opacity="0.3" filter="url(#sb-blur20)" />

      {/* Bokeh dots */}
      {[[80,120,16],[150,430,12],[1380,100,18],[1300,420,14],[420,660,10],[960,640,15],[1080,60,11],[260,50,9],[860,680,13],[1200,280,10],[500,80,8],[700,600,12]].map(([cx,cy,r],i)=>(
        <circle key={i} cx={cx} cy={cy} r={r} fill="#f48fb1" opacity="0.18" filter="url(#sb-blur4)" />
      ))}

      {/* Sparkle stars */}
      {[[320,80,6],[1060,100,5],[1220,500,7],[160,500,5],[640,30,6],[1360,400,5],[100,640,6],[780,50,5],[1440,260,6]].map(([x,y,s],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.45">
          <path d={`M0,${-s} L${s*.25},${-s*.25} L${s},0 L${s*.25},${s*.25} L0,${s} L${-s*.25},${s*.25} L${-s},0 L${-s*.25},${-s*.25}Z`} fill="#e91e8c" />
        </g>
      ))}

      {/* Dotted rings */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i)=>{
        const r=(deg*Math.PI)/180;
        return <circle key={i} cx={90+60*Math.cos(r)} cy={350+60*Math.sin(r)} r="3" fill="#f48fb1" opacity="0.25" />;
      })}
      {[0,40,80,120,160,200,240,280,320].map((deg,i)=>{
        const r=(deg*Math.PI)/180;
        return <circle key={i} cx={1360+50*Math.cos(r)} cy={350+50*Math.sin(r)} r="2.5" fill="#e91e8c" opacity="0.2" />;
      })}
      {[0,45,90,135,180,225,270,315].map((deg,i)=>{
        const r=(deg*Math.PI)/180;
        return <circle key={i} cx={720+80*Math.cos(r)} cy={680+80*Math.sin(r)} r="3" fill="#f48fb1" opacity="0.18" />;
      })}

      {/* Subtle medical crosses */}
      {[[1380,60],[1410,200],[1430,360],[1360,500],[50,80],[70,480],[40,300]].map(([x,y],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.12">
          <rect x="-3" y="-10" width="6" height="20" rx="2" fill="#e91e8c" />
          <rect x="-10" y="-3" width="20" height="6" rx="2" fill="#e91e8c" />
        </g>
      ))}

      {/* Floating hearts */}
      {[[1370,160,10],[50,220,9],[700,660,8],[1200,600,9],[400,30,7]].map(([x,y,s],i)=>(
        <path key={i}
          transform={`translate(${x-s},${y-s*.85}) scale(${s/12})`}
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          fill="#f48fb1" opacity="0.2"
        />
      ))}

      {/* Curved dashed path */}
      <path d="M 100 600 Q 400 300 720 400 Q 1040 500 1340 200" fill="none" stroke="#f48fb1" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.2" />

      {/* Vignette */}
      <radialGradient id="sb-vig" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
        <stop offset="100%" stopColor="#fce4ec" stopOpacity="0.2" />
      </radialGradient>
      <rect width="1440" height="700" fill="url(#sb-vig)" />
    </svg>
  );
}

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="relative overflow-hidden bg-[#fff8fa] pt-0 pb-4 lg:pb-6 px-6 lg:px-10">
      <SpecialtiesBg />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* ── Full-width heading banner ── */}
        <div className="relative rounded-3xl overflow-hidden mb-6 px-6 py-10 sm:px-8 sm:py-14 text-center bg-gradient-to-br from-[#fff0f6] via-white to-[#fce4ec] border border-pink-100 shadow-[0_4px_60px_0_rgba(225,29,116,0.10)]">

          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.055]" aria-hidden>
            <defs>
              <pattern id="hdr-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.6" fill="#E11D74" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hdr-dots)" />
          </svg>

          {/* Top-left blob */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-25 blur-3xl" />
          {/* Bottom-right blob */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-tl from-fuchsia-200 to-pink-300 opacity-25 blur-3xl" />
          {/* Top-right small accent */}
          <div className="absolute top-6 right-10 w-28 h-28 rounded-full bg-pink-100 opacity-40 blur-2xl" />
          {/* Bottom-left small accent */}
          <div className="absolute bottom-6 left-10 w-28 h-28 rounded-full bg-rose-100 opacity-40 blur-2xl" />

          {/* Decorative wavy top border */}
          <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1280 18" preserveAspectRatio="none" fill="none" aria-hidden>
            <path d="M0 18 Q160 0 320 10 Q480 18 640 6 Q800 0 960 12 Q1120 18 1280 4 L1280 0 L0 0Z" fill="#E11D74" opacity="0.07" />
          </svg>
          {/* Decorative wavy bottom border */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1280 18" preserveAspectRatio="none" fill="none" aria-hidden>
            <path d="M0 0 Q160 18 320 8 Q480 0 640 14 Q800 18 960 6 Q1120 0 1280 16 L1280 18 L0 18Z" fill="#E11D74" opacity="0.07" />
          </svg>

          {/* Floating sparkle dots */}
          {[[6,8],[94,12],[18,88],[88,80],[50,5],[5,50]].map(([x,y],i)=>(
            <div key={i} className="absolute w-2 h-2 rounded-full bg-[#E11D74] opacity-20"
              style={{left:`${x}%`, top:`${y}%`}} />
          ))}

          {/* Content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-5">
              <Stethoscope size={12} className="text-[#E11D74]" strokeWidth={2} /> SPECIALTIES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-[#2B0F1E]">Our Areas of </span>
              <span className="relative inline-block italic text-[#E11D74]">
                Expertise
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M2 7 Q50 2 100 6 Q150 10 198 4" stroke="#E11D74" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6 mb-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300" />
              <Heart size={14} fill="#E11D74" strokeWidth={0} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300" />
            </div>
            <p className="mt-2 text-gray-500 text-[15px] max-w-xl mx-auto leading-relaxed">
              From routine care to complex procedures, we cover every aspect of women's health.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map(({ Icon3D, title, desc, bg, ring }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl border border-pink-100 bg-white hover:border-[#E11D74]/30 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 overflow-hidden"
            >
              {/* Icon banner */}
              <div className={`relative flex items-center justify-center h-44 bg-gradient-to-br ${bg} overflow-hidden`}>
                {/* Soft glow blob */}
                <div className="absolute w-36 h-36 rounded-full bg-white/60 blur-3xl" />
                {/* Floating platform shadow */}
                <div className="absolute bottom-6 w-20 h-4 rounded-full bg-black/10 blur-md" />
                {/* 3D icon with hover float */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`relative z-10 ring-4 ${ring} rounded-full bg-white/30 backdrop-blur-sm p-1`}
                >
                  <Icon3D />
                </motion.div>
              </div>

              {/* Colored top accent bar */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#E11D74] to-pink-300 transition-all duration-500 rounded-b-sm" />

              {/* Text */}
              <div className="p-6">
                <h3 className="font-serif text-[18px] font-bold text-[#2B0F1E] mb-2">{title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#E11D74] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

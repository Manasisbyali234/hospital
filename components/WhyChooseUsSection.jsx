"use client";

import { motion } from "framer-motion";
import { Heart, UserCheck, BedDouble, Stethoscope, ScanLine, HandHeart, BadgeIndianRupee } from "lucide-react";
import Image from "next/image";

const REASONS = [
  { icon: UserCheck, title: "Personalized Care", desc: "Every mother receives a tailored care plan designed around her unique health needs and preferences." },
  { icon: BedDouble, title: "Comfortable Labour Suites", desc: "Spacious, private labour suites with modern amenities to ensure a calm and dignified birth experience." },
  { icon: Stethoscope, title: "Experienced Specialists", desc: "Our team of senior obstetricians and gynaecologists brings decades of expertise to every case." },
  { icon: ScanLine, title: "Advanced Diagnostics", desc: "In-house imaging, pathology, and fetal medicine services for fast, accurate results." },
  { icon: HandHeart, title: "Compassionate Nursing Staff", desc: "Round-the-clock nursing care with empathy, patience, and professional excellence." },
  { icon: BadgeIndianRupee, title: "Affordable Packages", desc: "Transparent, all-inclusive maternity and wellness packages with no hidden charges." },
];

function WhyBg() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 600"
    >
      <defs>
        <linearGradient id="wBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0f5" />
          <stop offset="45%" stopColor="#fff8fb" />
          <stop offset="100%" stopColor="#fce4ec" />
        </linearGradient>
        <radialGradient id="wBlob1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9a8c9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f9a8c9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wBlob2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbc8dc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fbc8dc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wBlob3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde8f0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fde8f0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f48fb1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f48fb1" stopOpacity="0" />
        </radialGradient>
        <filter id="wBlur4" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="wBlur8" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id="wBlur16" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16" /></filter>
      </defs>

      <rect width="1440" height="600" fill="url(#wBgGrad)" />

      {/* Blobs */}
      <ellipse cx="120" cy="80" rx="220" ry="180" fill="url(#wBlob1)" filter="url(#wBlur16)" />
      <ellipse cx="1360" cy="520" rx="260" ry="200" fill="url(#wBlob2)" filter="url(#wBlur16)" />
      <ellipse cx="1300" cy="60" rx="180" ry="150" fill="url(#wBlob3)" filter="url(#wBlur8)" />
      <ellipse cx="200" cy="520" rx="200" ry="160" fill="url(#wBlob3)" filter="url(#wBlur16)" />
      <ellipse cx="720" cy="580" rx="300" ry="120" fill="url(#wBlob1)" filter="url(#wBlur16)" opacity="0.4" />

      {/* Glowing circles */}
      <circle cx="80" cy="300" r="120" fill="url(#wGlow1)" filter="url(#wBlur8)" />
      <circle cx="1380" cy="200" r="100" fill="url(#wGlow2)" filter="url(#wBlur8)" />
      <circle cx="700" cy="30" r="80" fill="url(#wGlow1)" filter="url(#wBlur8)" opacity="0.6" />

      {/* Bokeh dots */}
      {[[60,140,18],[130,420,12],[1390,130,20],[1310,400,14],[400,560,10],[980,540,16],[1100,80,10],[300,60,8],[850,580,12],[1200,300,9]]
        .map(([cx,cy,r],i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" opacity="0.55" filter="url(#wBlur4)" />)}

      {/* Sparkles */}
      {[[340,90,6],[1050,110,5],[1240,460,7],[180,480,5],[620,40,6],[1380,380,5],[90,560,6]]
        .map(([x,y,s],i) => (
          <g key={i} transform={`translate(${x},${y})`} opacity="0.55">
            <path d={`M0,${-s} L${s*0.25},${-s*0.25} L${s},0 L${s*0.25},${s*0.25} L0,${s} L${-s*0.25},${s*0.25} L${-s},0 L${-s*0.25},${-s*0.25}Z`} fill="#f48fb1" />
          </g>
        ))}

      {/* Dotted circular patterns */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
        const rad = (deg*Math.PI)/180;
        return <circle key={i} cx={100+55*Math.cos(rad)} cy={300+55*Math.sin(rad)} r="3" fill="#f48fb1" opacity="0.3" />;
      })}
      {[0,40,80,120,160,200,240,280,320].map((deg,i) => {
        const rad = (deg*Math.PI)/180;
        return <circle key={i} cx={1340+45*Math.cos(rad)} cy={300+45*Math.sin(rad)} r="2.5" fill="#e91e8c" opacity="0.2" />;
      })}

      {/* Curved dotted path */}
      <path d="M 160 520 Q 400 200 720 300 Q 1040 400 1280 120" fill="none" stroke="#f48fb1" strokeWidth="2" strokeDasharray="6 10" opacity="0.35" />
      {[[160,520],[340,340],[540,280],[720,300],[900,330],[1100,230],[1280,120]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#e91e8c" opacity="0.25" />
      ))}

      {/* Medical crosses */}
      {[[1360,80],[1400,200],[1420,340],[1350,460],[40,100],[60,460]].map(([x,y],i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity="0.18">
          <rect x="-3" y="-10" width="6" height="20" rx="2" fill="#e91e8c" />
          <rect x="-10" y="-3" width="20" height="6" rx="2" fill="#e91e8c" />
        </g>
      ))}

      {/* Small hearts */}
      {[[1370,150,10],[1410,280,8],[50,200,9],[80,400,7],[700,560,8],[1200,540,9]].map(([x,y,s],i) => (
        <path key={i}
          transform={`translate(${x-s},${y-s*0.85}) scale(${s/12})`}
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          fill="#f48fb1" opacity="0.22"
        />
      ))}

      {/* Mother & baby line-art */}
      <g transform="translate(1080,40)" opacity="0.13" fill="none" stroke="#c2185b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M160 520 Q140 460 150 400 Q155 360 145 320" />
        <path d="M200 520 Q220 460 210 400 Q205 360 215 320" />
        <path d="M145 320 Q100 290 90 250 Q85 220 110 210 Q130 205 145 225" />
        <path d="M215 320 Q240 300 250 270 Q255 240 235 225 Q215 215 205 235" />
        <path d="M145 225 Q160 240 180 238 Q200 236 205 235" />
        <circle cx="180" cy="290" r="38" />
        <path d="M145 275 Q148 240 180 235 Q212 240 215 275" />
        <path d="M145 275 Q135 295 140 315" />
        <ellipse cx="178" cy="195" rx="28" ry="22" />
        <circle cx="178" cy="162" r="22" />
        <path d="M155 190 Q140 185 138 175" />
        <line x1="180" y1="252" x2="180" y2="328" />
        <path d="M150 400 Q155 460 145 520" />
        <path d="M210 400 Q205 460 215 520" />
        <path d="M145 520 Q180 535 215 520" />
        <path transform="translate(155,100) scale(1.4)" d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </g>

      {/* Vignette */}
      <radialGradient id="wVignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#fce4ec" stopOpacity="0.18" />
      </radialGradient>
      <rect width="1440" height="600" fill="url(#wVignette)" />
    </svg>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative overflow-hidden py-14 lg:py-20 px-6 lg:px-10">
      <WhyBg />

      <div className="relative z-10 mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden h-[520px] shadow-2xl order-2 lg:order-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
            alt="Doctor with patient"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/40 to-transparent" />

          {/* Decorative ring */}
          <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border-2 border-pink-300/30" />
          <div className="absolute -top-3 -right-3 h-20 w-20 rounded-full border border-pink-300/20" />
        </motion.div>

        {/* Right content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={12} fill="#E11D74" strokeWidth={0} /> WHY CHOOSE US
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight">
              Why Mothers{" "}
              <span className="italic text-[#E11D74]">Choose Us</span>
            </h2>
            <p className="mt-3 text-gray-500 text-[15px]">
              Six reasons thousands of families trust Rosewood Women&apos;s Care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl p-5 flex gap-4 overflow-hidden
                           bg-white border border-pink-100 shadow-sm
                           hover:shadow-md hover:border-pink-300 transition-all duration-300 cursor-default"
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl" />

                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                                 bg-pink-100 text-[#E11D74]
                                 group-hover:bg-pink-200 transition-all duration-300">
                  <Icon size={18} />
                </span>
                <div className="relative">
                  <h3 className="font-serif text-[15px] font-bold text-[#2B0F1E] mb-0.5">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

function DoctorsBg() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 800"
    >
      <defs>
        <linearGradient id="dBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0f5" />
          <stop offset="45%" stopColor="#fff8fb" />
          <stop offset="100%" stopColor="#fce4ec" />
        </linearGradient>
        <radialGradient id="dBlob1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9a8c9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f9a8c9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dBlob2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbc8dc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fbc8dc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dBlob3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde8f0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fde8f0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f48fb1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f48fb1" stopOpacity="0" />
        </radialGradient>
        <filter id="dBlur4" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="dBlur8" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id="dBlur16" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16" /></filter>
      </defs>

      <rect width="1440" height="800" fill="url(#dBgGrad)" />

      <ellipse cx="120" cy="100" rx="220" ry="180" fill="url(#dBlob1)" filter="url(#dBlur16)" />
      <ellipse cx="1360" cy="700" rx="260" ry="200" fill="url(#dBlob2)" filter="url(#dBlur16)" />
      <ellipse cx="1300" cy="80" rx="180" ry="150" fill="url(#dBlob3)" filter="url(#dBlur8)" />
      <ellipse cx="200" cy="700" rx="200" ry="160" fill="url(#dBlob3)" filter="url(#dBlur16)" />
      <ellipse cx="720" cy="780" rx="300" ry="120" fill="url(#dBlob1)" filter="url(#dBlur16)" opacity="0.4" />

      <circle cx="80" cy="400" r="120" fill="url(#dGlow1)" filter="url(#dBlur8)" />
      <circle cx="1380" cy="250" r="100" fill="url(#dGlow2)" filter="url(#dBlur8)" />
      <circle cx="700" cy="40" r="80" fill="url(#dGlow1)" filter="url(#dBlur8)" opacity="0.6" />

      {[[60,160,18],[130,520,12],[1390,160,20],[1310,500,14],[400,740,10],[980,720,16],[1100,100,10],[300,80,8],[850,760,12],[1200,400,9]]
        .map(([cx,cy,r],i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" opacity="0.55" filter="url(#dBlur4)" />)}

      {[[340,110,6],[1050,130,5],[1240,580,7],[180,600,5],[620,50,6],[1380,480,5],[90,720,6]]
        .map(([x,y,s],i) => (
          <g key={i} transform={`translate(${x},${y})`} opacity="0.55">
            <path d={`M0,${-s} L${s*0.25},${-s*0.25} L${s},0 L${s*0.25},${s*0.25} L0,${s} L${-s*0.25},${s*0.25} L${-s},0 L${-s*0.25},${-s*0.25}Z`} fill="#f48fb1" />
          </g>
        ))}

      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
        const rad = (deg*Math.PI)/180;
        return <circle key={i} cx={100+55*Math.cos(rad)} cy={400+55*Math.sin(rad)} r="3" fill="#f48fb1" opacity="0.3" />;
      })}
      {[0,40,80,120,160,200,240,280,320].map((deg,i) => {
        const rad = (deg*Math.PI)/180;
        return <circle key={i} cx={1340+45*Math.cos(rad)} cy={400+45*Math.sin(rad)} r="2.5" fill="#e91e8c" opacity="0.2" />;
      })}

      {[[1360,100],[1400,250],[1420,440],[1350,580],[40,120],[60,580]].map(([x,y],i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity="0.18">
          <rect x="-3" y="-10" width="6" height="20" rx="2" fill="#e91e8c" />
          <rect x="-10" y="-3" width="20" height="6" rx="2" fill="#e91e8c" />
        </g>
      ))}

      {[[1370,190,10],[1410,360,8],[50,250,9],[80,520,7],[700,740,8],[1200,700,9]].map(([x,y,s],i) => (
        <path key={i}
          transform={`translate(${x-s},${y-s*0.85}) scale(${s/12})`}
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          fill="#f48fb1" opacity="0.22"
        />
      ))}

      <radialGradient id="dVignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#fce4ec" stopOpacity="0.18" />
      </radialGradient>
      <rect width="1440" height="800" fill="url(#dVignette)" />
    </svg>
  );
}

const DOCTORS = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Senior Gynecologist",
    exp: "18 yrs exp",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Anita Mehta",
    specialty: "Obstetrician & Maternity",
    exp: "14 yrs exp",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Sunita Rao",
    specialty: "Fertility Specialist",
    exp: "12 yrs exp",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Kavya Nair",
    specialty: "Laparoscopic Surgeon",
    exp: "10 yrs exp",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=500&fit=crop&crop=face",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-[#FDF3F7] pt-12 lg:pt-16 pb-0 px-6 lg:px-10">
      <DoctorsBg />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
            <Heart size={12} fill="#E11D74" strokeWidth={0} /> OUR DOCTORS
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-[#2B0F1E] leading-tight">
            Meet Our <span className="italic text-[#E11D74]">Expert Team</span>
          </h2>
          <p className="mt-3 text-gray-500 text-[15px] max-w-xl mx-auto">
            Highly qualified specialists dedicated to providing the best care for women at every stage of life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-72 w-full">
                <Image src={doc.img} alt={doc.name} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/40 to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-serif text-[17px] font-bold text-[#2B0F1E]">{doc.name}</p>
                <p className="text-[13px] text-[#E11D74] font-medium mt-0.5">{doc.specialty}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[12px] text-gray-400">{doc.exp}</span>
                  <span className="flex items-center gap-1 text-[12px] font-semibold text-[#2B0F1E]">
                    <Star size={12} fill="#E11D74" strokeWidth={0} className="text-[#E11D74]" />
                    {doc.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

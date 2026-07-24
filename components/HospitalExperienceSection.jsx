"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const AREAS = [
  {
    title: "Reception",
    desc: "A warm, welcoming lobby designed to put every patient at ease from the moment they arrive.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  },
  {
    title: "Consultation Rooms",
    desc: "Private, well-equipped rooms for confidential one-on-one consultations with our specialists.",
    img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
  },
  {
    title: "Labour Rooms",
    desc: "Spacious, serene labour suites with modern monitoring equipment and family-friendly settings.",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
  },
  {
    title: "NICU",
    desc: "State-of-the-art Neonatal ICU with 24×7 specialist care for premature and high-risk newborns.",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  },
  {
    title: "Deluxe Rooms",
    desc: "Comfortable deluxe rooms with premium amenities, ensuring a restful recovery for mothers.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    title: "Pharmacy",
    desc: "In-house pharmacy stocked with all prescribed medications for convenient, same-day dispensing.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
  },
  {
    title: "Diagnostics",
    desc: "Advanced imaging and pathology lab delivering fast, accurate results under one roof.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
  },
];

export default function HospitalExperienceSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let paused = false;

    const id = setInterval(() => {
      if (paused) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 16);

    el.addEventListener("mouseenter", () => (paused = true));
    el.addEventListener("mouseleave", () => (paused = false));

    return () => clearInterval(id);
  }, []);

  return (
    <section id="hospital-experience" className="relative overflow-hidden bg-gradient-to-br from-[#fff0f5] via-[#fce4ec] to-[#f8bbd0] py-12 lg:py-16 px-6 lg:px-10">

      {/* Decorative SVG — hearts + dotted lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Dotted curved lines */}
        <path d="M0 80 Q360 160 720 80 Q1080 0 1440 80" fill="none" stroke="#f48fb1" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.4" />
        <path d="M0 200 Q400 120 800 200 Q1100 260 1440 180" fill="none" stroke="#E11D74" strokeWidth="1" strokeDasharray="4 12" opacity="0.2" />
        <path d="M0 420 Q360 340 720 420 Q1080 500 1440 420" fill="none" stroke="#f48fb1" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.35" />
        {/* Hearts scattered */}
        {[
          [60,40,14],[200,90,10],[420,30,12],[700,60,9],[950,25,13],[1150,70,10],[1350,40,14],
          [100,380,10],[350,420,13],[600,390,9],[880,410,12],[1200,380,10],[1420,400,13],
        ].map(([x,y,s],i) => (
          <path key={i}
            transform={`translate(${x - s},${y - s * 0.85}) scale(${s / 12})`}
            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
            fill="#E11D74" opacity="0.15"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
            <Heart size={12} fill="#E11D74" strokeWidth={0} /> HOSPITAL EXPERIENCE
          </span>
          <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight">
            Inside <span className="italic text-[#E11D74]">Rosewood</span>
          </h2>
          <p className="mt-3 text-gray-500 text-[15px] max-w-xl mx-auto">
            Every space is thoughtfully designed for comfort, safety, and healing.
          </p>
        </div>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-hidden pb-4 scrollbar-hide">
          {[...AREAS, ...AREAS].map(({ title, desc, img }, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white border border-pink-50"
            >
              <div className="relative h-44 w-full">
                <Image src={img} alt={title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/50 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold text-[#E11D74]">
                  {title}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[13px] text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

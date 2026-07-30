"use client";

import { motion } from "framer-motion";
import { Heart, Play, Star } from "lucide-react";
import Image from "next/image";

const STORIES = [
  {
    name: "Priya Sharma",
    tag: "First-time Mother",
    quote: "The team at Gurushreemade my entire pregnancy journey feel safe and special. The labour suite was so calm — I couldn't have asked for a better birth experience.",
    stars: 5,
    thumb: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&q=80",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ananya Mehta",
    tag: "High-Risk Pregnancy",
    quote: "I had a complicated pregnancy and the specialists here monitored me with such care and precision. My baby and I are both healthy today because of this incredible team.",
    stars: 5,
    thumb: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Deepa Nair",
    tag: "IVF Success Story",
    quote: "After years of trying, Rosewood's fertility team gave us hope and results. The compassion and expertise here is unmatched. We are forever grateful.",
    stars: 5,
    thumb: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

export default function PatientStoriesSection() {
  return (
    <section id="patient-stories" className="bg-[#FDF3F7] py-12 lg:py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
            <Heart size={12} fill="#E11D74" strokeWidth={0} /> PATIENT STORIES
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-[#2B0F1E] leading-tight">
            Voices of <span className="italic text-[#E11D74]">Our Mothers</span>
          </h2>
          <p className="mt-3 text-gray-500 text-[15px] max-w-xl mx-auto">
            Real stories from real families who trusted us with their most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STORIES.map(({ name, tag, quote, stars, thumb, avatar }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col"
            >
              {/* Video thumbnail with real image */}
              <div className="relative h-48 w-full">
                <Image src={thumb} alt={name} fill className="object-cover" />
                <div className="absolute inset-0 bg-[#2B0F1E]/30" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-lg text-[#E11D74] hover:scale-105 transition-transform">
                    <Play size={22} fill="#E11D74" strokeWidth={0} />
                  </span>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} size={14} fill="#E11D74" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-[14px] text-gray-600 leading-relaxed italic flex-1">"{quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-pink-50">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                    <Image src={avatar} alt={name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-[#2B0F1E]">{name}</p>
                    <p className="text-[12px] text-gray-400">{tag}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

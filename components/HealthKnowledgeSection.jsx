"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BLOGS = [
  {
    category: "Pregnancy Tips",
    title: "10 Things Every First-Time Mother Should Know",
    excerpt: "From managing morning sickness to preparing your birth plan, here's your essential guide to a healthy pregnancy.",
    date: "July 18, 2025",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80",
  },
  {
    category: "Nutrition",
    title: "Best Foods to Eat During Each Trimester",
    excerpt: "A trimester-by-trimester breakdown of the nutrients your body and baby need most — and the foods that deliver them.",
    date: "July 12, 2025",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
  },
  {
    category: "Breastfeeding",
    title: "Breastfeeding Challenges & How to Overcome Them",
    excerpt: "Latching issues, low supply, engorgement — our lactation experts share practical solutions for new mothers.",
    date: "July 5, 2025",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&q=80",
  },
  {
    category: "Women's Health",
    title: "Understanding PCOS: Symptoms, Causes & Treatment",
    excerpt: "PCOS affects 1 in 5 women. Learn how to identify the signs early and manage it effectively with the right care.",
    date: "June 28, 2025",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    category: "Newborn Care",
    title: "Your Newborn's First Week: A Complete Guide",
    excerpt: "Feeding schedules, sleep patterns, umbilical cord care and warning signs — everything you need in the first 7 days.",
    date: "June 20, 2025",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
  },
];

export default function HealthKnowledgeSection() {
  return (
    <section id="health-knowledge" className="bg-white py-12 lg:py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={12} fill="#E11D74" strokeWidth={0} /> HEALTH KNOWLEDGE CENTER
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight">
              Latest from Our <span className="italic text-[#E11D74]">Experts</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#E11D74] hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map(({ category, title, excerpt, date, readTime, img }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-3xl border border-pink-100 overflow-hidden hover:shadow-lg hover:shadow-pink-100 transition-all"
            >
              {/* Real image banner */}
              <div className="relative h-44 w-full">
                <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/40 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold text-[#E11D74]">
                  {category}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-serif text-[17px] font-bold text-[#2B0F1E] leading-snug group-hover:text-[#E11D74] transition-colors">
                  {title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{excerpt}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[12px] text-gray-400">{date} · {readTime}</span>
                  <ArrowRight size={16} className="text-[#E11D74] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

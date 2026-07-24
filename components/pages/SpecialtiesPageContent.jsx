"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SPECIALTIES = [
  {
    title: "General Gynecology",
    color: "from-rose-50 to-pink-100",
    accent: "#E11D74",
    img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
    desc: "Comprehensive gynecological care covering routine check-ups, menstrual disorders, PCOS, infections, and preventive screenings.",
    services: ["Annual Well-Woman Exam", "Pap Smear & HPV Testing", "PCOS Management", "Menstrual Disorder Treatment", "Contraception Counselling", "Menopause Management"],
  },
  {
    title: "Maternity & Obstetrics",
    color: "from-pink-50 to-fuchsia-100",
    accent: "#be185d",
    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80",
    desc: "Expert care through every trimester — from your first prenatal visit to a safe delivery and postnatal recovery.",
    services: ["Prenatal Care & Monitoring", "Normal & C-Section Delivery", "Postnatal Support", "Breastfeeding Guidance", "Newborn Care", "Postpartum Depression Support"],
  },
  {
    title: "Fertility & IVF",
    color: "from-purple-50 to-fuchsia-100",
    accent: "#7c3aed",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    desc: "Advanced fertility treatments with one of Mumbai's highest IVF success rates, guided by compassionate specialists.",
    services: ["IVF & ICSI", "IUI Treatment", "Egg Freezing", "Embryo Freezing", "Donor Egg Programme", "Fertility Preservation"],
  },
  {
    title: "Laparoscopic Surgery",
    color: "from-red-50 to-rose-100",
    accent: "#dc2626",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    desc: "Minimally invasive surgical procedures for faster recovery, less pain, and minimal scarring.",
    services: ["Laparoscopic Hysterectomy", "Ovarian Cyst Removal", "Endometriosis Surgery", "Fibroid Removal", "Tubal Ligation", "Diagnostic Laparoscopy"],
  },
  {
    title: "High-Risk Pregnancy",
    color: "from-teal-50 to-emerald-100",
    accent: "#0d9488",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    desc: "Specialized monitoring and multidisciplinary care for pregnancies requiring extra attention and expertise.",
    services: ["Gestational Diabetes Care", "Preeclampsia Management", "Twin & Multiple Pregnancy", "Fetal Growth Monitoring", "Preterm Labour Prevention", "Maternal-Fetal Medicine"],
  },
  {
    title: "Women's Wellness",
    color: "from-amber-50 to-orange-100",
    accent: "#d97706",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    desc: "Holistic wellness programs addressing nutrition, mental health, hormonal balance, and preventive care.",
    services: ["Hormonal Health Assessment", "Nutrition & Diet Planning", "Mental Health Support", "Bone Density Screening", "Thyroid Management", "Lifestyle Counselling"],
  },
];

const FAQS = [
  { q: "How do I know which specialty I need?", a: "Our general gynecologist will assess your condition during an initial consultation and refer you to the appropriate specialist if needed." },
  { q: "Are all procedures available in-house?", a: "Yes, all diagnostics, surgeries, and treatments are performed within our facility with no need for external referrals." },
  { q: "What is the IVF success rate at Rosewood?", a: "Our IVF success rate is 68% per cycle for women under 35, which is among the highest in Mumbai." },
  { q: "Do you offer second opinions?", a: "Absolutely. We welcome second opinion consultations and provide a thorough review of your existing reports and treatment plan." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-pink-100 rounded-2xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-semibold text-[15px] text-[#2B0F1E]">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} className="text-[#E11D74]" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[14px] text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SpecialtiesPageContent() {
  return (
    <div className="bg-white">

      {/* Specialty Detail Cards */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> WHAT WE OFFER
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Detailed <span className="italic text-[#E11D74]">Specialty Guide</span>
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            {SPECIALTIES.map(({ title, color, img, desc, services }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-sm border border-pink-100 ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative h-64 lg:h-auto min-h-[260px]">
                  <Image src={img} alt={title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2B0F1E]/30 to-transparent" />
                </div>
                <div className={`bg-gradient-to-br ${color} p-8 flex flex-col justify-center`}>
                  <h3 className="font-serif text-2xl font-extrabold text-[#2B0F1E] mb-3">{title}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-[13px] text-[#2B0F1E] font-medium">
                        <CheckCircle2 size={14} className="text-[#E11D74] shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/book-appointment"
                    className="mt-6 self-start rounded-full bg-[#E11D74] text-white px-6 py-2.5 text-[13px] font-semibold hover:scale-105 transition-transform shadow-md shadow-pink-200"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> FAQS
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Common <span className="italic text-[#E11D74]">Questions</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => <FAQ key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

    </div>
  );
}

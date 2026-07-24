"use client";

import { motion } from "framer-motion";
import { Heart, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const PACKAGES = [
  {
    name: "Basic Wellness",
    price: "₹1,499",
    tag: null,
    features: [
      "Complete Blood Count",
      "Pap Smear Test",
      "Thyroid Profile",
      "Urine Analysis",
      "Doctor Consultation",
    ],
  },
  {
    name: "Maternity Care",
    price: "₹3,999",
    tag: "Most Popular",
    features: [
      "All Basic Wellness tests",
      "Anomaly Scan (Level II)",
      "Glucose Tolerance Test",
      "Iron & Calcium Profile",
      "3 Prenatal Consultations",
    ],
  },
  {
    name: "Comprehensive",
    price: "₹6,999",
    tag: null,
    features: [
      "All Maternity Care tests",
      "Hormonal Panel",
      "Bone Density Scan",
      "Cardiac Risk Profile",
      "Unlimited Consultations",
    ],
  },
];

export default function HealthPackagesSection() {
  return (
    <section id="health-packages" className="bg-white py-12 lg:py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
            <Heart size={12} fill="#E11D74" strokeWidth={0} /> HEALTH PACKAGES
          </span>
          <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E] leading-tight">
            Affordable Care <span className="italic text-[#E11D74]">Packages</span>
          </h2>
          <p className="mt-3 text-gray-500 text-[15px] max-w-xl mx-auto">
            Transparent pricing with comprehensive health packages tailored for every woman's needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PACKAGES.map(({ name, price, tag, features }, i) => {
            const isPopular = !!tag;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  isPopular
                    ? "bg-[#E11D74] text-white shadow-xl shadow-pink-300"
                    : "bg-[#FDF3F7] text-[#2B0F1E]"
                }`}
              >
                {tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[11px] font-bold text-[#E11D74] shadow">
                    {tag}
                  </span>
                )}
                <p className={`text-[13px] font-bold tracking-widest mb-2 ${isPopular ? "text-pink-200" : "text-[#E11D74]"}`}>
                  {name.toUpperCase()}
                </p>
                <p className="font-serif text-4xl font-extrabold mb-6">{price}</p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[14px]">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isPopular ? "bg-white/20" : "bg-pink-100"}`}>
                        <Check size={11} className={isPopular ? "text-white" : "text-[#E11D74]"} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-appointment"
                  className={`inline-flex items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold transition-transform hover:scale-[1.02] ${
                    isPopular
                      ? "bg-white text-[#E11D74]"
                      : "bg-[#E11D74] text-white shadow-md shadow-pink-200"
                  }`}
                >
                  Book Now <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

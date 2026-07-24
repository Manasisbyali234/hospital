"use client";

import { motion } from "framer-motion";
import { Heart, Check, X, ArrowRight, Phone, Star } from "lucide-react";
import Link from "next/link";

const PACKAGES = [
  {
    name: "Basic Wellness",
    price: "₹1,499",
    tag: null,
    color: "bg-[#FDF3F7]",
    textColor: "text-[#2B0F1E]",
    features: {
      "Complete Blood Count": true,
      "Pap Smear Test": true,
      "Thyroid Profile": true,
      "Urine Analysis": true,
      "Doctor Consultation": true,
      "Anomaly Scan": false,
      "Hormonal Panel": false,
      "Bone Density Scan": false,
      "Cardiac Risk Profile": false,
      "Unlimited Consultations": false,
    },
  },
  {
    name: "Maternity Care",
    price: "₹3,999",
    tag: "Most Popular",
    color: "bg-[#E11D74]",
    textColor: "text-white",
    features: {
      "Complete Blood Count": true,
      "Pap Smear Test": true,
      "Thyroid Profile": true,
      "Urine Analysis": true,
      "Doctor Consultation": true,
      "Anomaly Scan": true,
      "Hormonal Panel": false,
      "Bone Density Scan": false,
      "Cardiac Risk Profile": false,
      "Unlimited Consultations": false,
    },
  },
  {
    name: "Comprehensive",
    price: "₹6,999",
    tag: null,
    color: "bg-[#FDF3F7]",
    textColor: "text-[#2B0F1E]",
    features: {
      "Complete Blood Count": true,
      "Pap Smear Test": true,
      "Thyroid Profile": true,
      "Urine Analysis": true,
      "Doctor Consultation": true,
      "Anomaly Scan": true,
      "Hormonal Panel": true,
      "Bone Density Scan": true,
      "Cardiac Risk Profile": true,
      "Unlimited Consultations": true,
    },
  },
];

const ADDONS = [
  { name: "3D/4D Ultrasound", price: "₹1,200" },
  { name: "Genetic Counselling", price: "₹2,500" },
  { name: "Nutritionist Session", price: "₹800" },
  { name: "Physiotherapy (5 sessions)", price: "₹3,000" },
  { name: "Mental Wellness Consultation", price: "₹1,000" },
  { name: "Lactation Consultant", price: "₹600" },
];

const STEPS = [
  { step: "01", title: "Choose Your Package", desc: "Select the package that best fits your health needs and budget." },
  { step: "02", title: "Book Online or Call", desc: "Schedule your appointment online or call our care team at +91 98765 43210." },
  { step: "03", title: "Visit & Get Tested", desc: "Arrive at the hospital — our team will guide you through every test." },
  { step: "04", title: "Receive Your Report", desc: "Get a detailed health report with a doctor consultation to discuss results." },
];

const TESTIMONIALS = [
  { name: "Sneha R.", pkg: "Maternity Care", rating: 5, text: "The maternity package covered everything I needed. The doctors were thorough and the reports came within 24 hours." },
  { name: "Divya M.", pkg: "Comprehensive", rating: 5, text: "Best investment in my health. The comprehensive package found my thyroid issue early — so grateful!" },
  { name: "Ananya K.", pkg: "Basic Wellness", rating: 4, text: "Affordable and complete. The basic package is perfect for an annual check-up. Very professional staff." },
];

const ALL_FEATURES = Object.keys(PACKAGES[0].features);

export default function HealthPackagesPageContent() {
  return (
    <div className="bg-white">

      {/* How It Works */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> HOW IT WORKS
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Simple <span className="italic text-[#E11D74]">4-Step Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ step, title, desc }, i) => (
              <motion.div key={step}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-6 border border-pink-100 shadow-sm text-center"
              >
                <span className="inline-block font-serif text-5xl font-extrabold text-pink-100 mb-3">{step}</span>
                <h3 className="font-serif text-[16px] font-bold text-[#2B0F1E] mb-2">{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> COMPARE PACKAGES
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Find the Right <span className="italic text-[#E11D74]">Package for You</span>
            </h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-3xl border border-pink-100 shadow-sm"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="bg-[#FDF3F7] px-6 py-5 text-left font-serif text-[15px] font-bold text-[#2B0F1E]">Features</th>
                  {PACKAGES.map(({ name, price, tag, color, textColor }) => (
                    <th key={name} className={`${color} ${textColor} px-6 py-5 text-center relative`}>
                      {tag && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-[#E11D74] text-[10px] font-bold px-3 py-1 shadow border border-pink-200">
                          {tag}
                        </span>
                      )}
                      <p className="font-serif text-[16px] font-bold">{name}</p>
                      <p className={`text-[13px] mt-0.5 ${tag ? "text-pink-200" : "text-[#E11D74]"}`}>{price}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_FEATURES.map((feature, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-[#FDF3F7]/50"}>
                    <td className="px-6 py-4 text-[14px] text-[#2B0F1E] font-medium">{feature}</td>
                    {PACKAGES.map(({ name, features, color }) => (
                      <td key={name} className={`${color} px-6 py-4 text-center`}>
                        {features[feature]
                          ? <Check size={18} className="text-[#E11D74] mx-auto" strokeWidth={3} />
                          : <X size={16} className="text-gray-300 mx-auto" strokeWidth={2} />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white">
                  <td className="px-6 py-5" />
                  {PACKAGES.map(({ name, tag }) => (
                    <td key={name} className="px-6 py-5 text-center">
                      <Link href="/book-appointment"
                        className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-transform hover:scale-105 ${tag ? "bg-white text-[#E11D74]" : "bg-[#E11D74] text-white shadow-md shadow-pink-200"}`}
                      >
                        Book Now <ArrowRight size={13} />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> ADD-ONS
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Enhance Your <span className="italic text-[#E11D74]">Package</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map(({ name, price }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 border border-pink-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#E11D74]" />
                  <span className="text-[14px] font-medium text-[#2B0F1E]">{name}</span>
                </div>
                <span className="text-[14px] font-bold text-[#E11D74]">{price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Star size={11} fill="#E11D74" strokeWidth={0} /> PATIENT REVIEWS
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              What Our Patients <span className="italic text-[#E11D74]">Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, pkg, rating, text }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FDF3F7] rounded-3xl p-7 border border-pink-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#E11D74" strokeWidth={0} className="text-[#E11D74]" />
                  ))}
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[14px] text-[#2B0F1E]">{name}</p>
                  <p className="text-[12px] text-[#E11D74]">{pkg} Package</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 lg:px-10 bg-gradient-to-r from-[#E11D74] to-[#be185d] text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl lg:text-4xl font-extrabold mb-3">Need Help Choosing a Package?</h2>
          <p className="text-pink-200 text-[15px] mb-7 max-w-lg mx-auto">Our care team is available to guide you to the right package for your needs.</p>
          <a href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#E11D74] font-bold px-8 py-3.5 text-[15px] shadow-lg hover:scale-105 transition-transform"
          >
            <Phone size={16} /> Call Us Now
          </a>
        </motion.div>
      </section>

    </div>
  );
}

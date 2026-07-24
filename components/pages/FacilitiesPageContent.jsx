"use client";

import { motion } from "framer-motion";
import { Heart, Bed, Wifi, Utensils, Car, Activity, FlaskConical, ShieldCheck, Zap, Wind, Baby, Microscope } from "lucide-react";
import Image from "next/image";

const ROOMS = [
  {
    type: "Deluxe Private Room",
    price: "₹4,500 / night",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
    features: ["King-size adjustable bed", "Private attached bathroom", "Smart TV & Wi-Fi", "Sofa for attendant", "24×7 nurse call"],
  },
  {
    type: "Suite Room",
    price: "₹8,000 / night",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    features: ["Luxury suite with lounge", "Kitchenette", "Premium toiletries", "Dedicated nurse", "Complimentary meals"],
    popular: true,
  },
  {
    type: "Semi-Private Room",
    price: "₹2,200 / night",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    features: ["2-bed shared room", "Privacy curtains", "Shared bathroom", "TV & Wi-Fi", "Nurse call system"],
  },
];

const TECH = [
  { icon: Zap, title: "3D/4D Ultrasound", desc: "High-resolution imaging for detailed fetal assessment and gynecological diagnosis." },
  { icon: Microscope, title: "Robotic Surgery", desc: "Da Vinci robotic system for ultra-precise minimally invasive procedures." },
  { icon: Activity, title: "Fetal Monitoring", desc: "Continuous electronic fetal monitoring for real-time baby health tracking." },
  { icon: FlaskConical, title: "Genetic Lab", desc: "In-house genetic testing including NIPT, amniocentesis, and chromosomal analysis." },
  { icon: Baby, title: "Level III NICU", desc: "48-bed NICU with ventilators, incubators, and round-the-clock neonatologists." },
  { icon: Wind, title: "Laminar Flow OT", desc: "12 operation theatres with laminar airflow for infection-free surgical environment." },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
  "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FacilitiesPageContent() {
  return (
    <div className="bg-white">

      {/* Room Types */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Bed size={11} /> ACCOMMODATION
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Comfortable <span className="italic text-[#E11D74]">Room Options</span>
            </h2>
            <p className="mt-3 text-gray-500 text-[15px] max-w-xl mx-auto">
              Choose from a range of thoughtfully designed rooms that feel more like a hotel than a hospital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ROOMS.map(({ type, price, img, features, popular }, i) => (
              <motion.div key={type}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl overflow-hidden bg-white border transition-all ${popular ? "border-[#E11D74] shadow-xl shadow-pink-100" : "border-pink-100 shadow-sm"}`}
              >
                {popular && (
                  <span className="absolute top-4 right-4 z-10 rounded-full bg-[#E11D74] text-white text-[11px] font-bold px-3 py-1">Most Popular</span>
                )}
                <div className="relative h-48">
                  <Image src={img} alt={type} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1E]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[18px] font-bold text-[#2B0F1E] mb-1">{type}</h3>
                  <p className="text-[#E11D74] font-bold text-[15px] mb-4">{price}</p>
                  <ul className="flex flex-col gap-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-gray-600">
                        <ShieldCheck size={13} className="text-[#E11D74] shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Zap size={11} /> TECHNOLOGY
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              Cutting-Edge <span className="italic text-[#E11D74]">Medical Technology</span>
            </h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TECH.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E11D74] text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-serif text-[16px] font-bold text-[#2B0F1E] mb-1">{title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-6 lg:px-10 bg-[#FDF3F7]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#E11D74] mb-4">
              <Heart size={11} fill="#E11D74" strokeWidth={0} /> GALLERY
            </span>
            <h2 className="font-serif text-4xl font-extrabold text-[#2B0F1E]">
              A Glimpse Inside <span className="italic text-[#E11D74]">Rosewood</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden h-48 lg:h-60 shadow-sm"
              >
                <Image src={src} alt={`Facility ${i + 1}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Specialties", href: "/specialties" },
  { label: "Facilities", href: "/facilities" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES = [
  "General Gynecology",
  "Maternity & Obstetrics",
  "Fertility & IVF",
  "Laparoscopic Surgery",
  "High-Risk Pregnancy",
  "Women's Wellness",
];

export default function Footer() {
  return (
    <footer className="bg-[#2B0F1E] text-white pt-16 pb-8 px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/images/hospital-symbol.jpg" alt="GurushreeHospital Logo" width={44} height={44} className="rounded-full" />
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold text-white">Gurushree</span>
                <span className="block text-[11px] font-semibold tracking-[0.18em] text-[#E11D74]">WOMEN'S CARE</span>
              </span>
            </Link>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
              A premier gynecology and maternity hospital committed to compassionate, expert care at every stage of a woman's life.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#E11D74] hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[16px] font-bold text-white mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[14px] text-gray-400 hover:text-[#E11D74] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-[16px] font-bold text-white mb-5">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-[14px] text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[16px] font-bold text-white mb-5">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E11D74] mt-0.5 shrink-0" />
                <p className="text-[14px] text-gray-400">12, Rose Avenue, Bandra West, Mumbai – 400050</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#E11D74] shrink-0" />
                <a href="tel:+919876543210" className="text-[14px] text-gray-400 hover:text-[#E11D74] transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#E11D74] shrink-0" />
                <a href="mailto:care@gurushreehospital.com" className="text-[14px] text-gray-400 hover:text-[#E11D74] transition-colors">
                  care@gurushreehospital.com
                </a>
              </div>
              <div className="mt-2 rounded-2xl bg-white/5 px-4 py-3">
                <p className="text-[12px] font-bold text-[#E11D74] tracking-widest mb-1">HOURS</p>
                <p className="text-[13px] text-gray-400">Mon – Sat: 8 AM – 8 PM</p>
                <p className="text-[13px] text-gray-400">Emergency: 24×7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-gray-500">
            © {new Date().getFullYear()} GurushreeWomen's Care. All rights reserved.
          </p>
          <p className="text-[13px] text-gray-500 flex items-center gap-1.5">
            Made with <Heart size={12} fill="#E11D74" strokeWidth={0} className="text-[#E11D74]" /> for every mother
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/", id: null },
  { label: "About Us", href: "/#about", id: "about" },
  { label: "Doctors", href: "/#doctors", id: "doctors" },
  { label: "Specialties", href: "/#specialties", id: "specialties" },
  { label: "Facilities", href: "/#facilities", id: "facilities" },
  { label: "Health Packages", href: "/#health-packages", id: "health-packages" },
  { label: "Contact Us", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sectionIds = NAV_LINKS.filter((l) => l.id).map((l) => l.id);
      let current = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e, id) => {
    setMenuOpen(false);
    if (!id) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1536px] items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/hospital-symbol.jpg" alt="GurushreeHospital Logo" width={44} height={44} className="rounded-full" />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-[#2B0F1E]">Gurushree</span>
            <span className="block text-[11px] font-semibold tracking-[0.18em] text-[#E11D74]">WOMEN&apos;S CARE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = link.id ? activeId === link.id : activeId === null;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.id)}
                  className={`relative pb-1 text-[15px] font-medium transition-colors ${
                    active ? "text-[#E11D74]" : "text-[#2B0F1E] hover:text-[#E11D74]"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-[3px] left-0 h-[2px] w-full rounded-full bg-[#E11D74]" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/book-appointment"
          className="hidden items-center gap-2 rounded-full bg-[#E11D74] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          <Calendar size={16} />
          Book Appointment
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-full p-2 text-[#2B0F1E] lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur border-t border-pink-100 px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => {
              const active = link.id ? activeId === link.id : activeId === null;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.id)}
                    className={`block py-3 text-[15px] font-medium border-b border-pink-50 transition-colors ${
                      active ? "text-[#E11D74]" : "text-[#2B0F1E]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <Link
            href="/book-appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#E11D74] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}

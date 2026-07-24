"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Specialties", href: "/specialties" },
  { label: "Facilities", href: "/facilities" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1536px] items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E11D74] text-xl font-bold text-white">
            R
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-[#2B0F1E]">
              Rosewood
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.18em] text-[#E11D74]">
              WOMEN&apos;S CARE
            </span>
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 text-[15px] font-medium transition-colors ${
                    active
                      ? "text-[#E11D74]"
                      : "text-[#2B0F1E] hover:text-[#E11D74]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-[3px] left-0 h-[2px] w-full rounded-full bg-[#E11D74]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/book-appointment"
          className="hidden items-center gap-2 rounded-full bg-[#E11D74] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          <Calendar size={16} />
          Book Appointment
        </Link>
      </nav>
    </header>
  );
}

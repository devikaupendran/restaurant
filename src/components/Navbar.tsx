"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
  isPage?: boolean;
}

const navLinks: NavLink[] = [
  { name: "HOME", href: "/", isPage: true },
  { name: "MENU", href: "/menu", isPage: true },
  { name: "ABOUT", href: "/#about" },
  { name: "GALLERY", href: "/#gallery" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || pathname === "/menu"
          ? "bg-stone-950/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 sm:py-7"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logo Image */}
        <Link
          href="/"
          className="group flex items-center focus:outline-none"
        >
          <Image
            src="/images/logo.png"
            alt="Grandeur Multicuisine Restaurant Logo"
            width={260}
            height={80}
            className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href === "/" && pathname === "/");

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative text-[11px] font-medium tracking-[0.25em] transition-colors duration-300 py-1 ${isActive
                    ? "text-white font-semibold"
                    : "text-neutral-300/80 hover:text-white"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#C59E61]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Reserve A Table Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            className="group px-6 py-2.5 rounded-full border border-white/30 hover:border-[#C59E61] bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white hover:text-amber-200 text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-2"
          >
            <span>RESERVE A TABLE</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          className="lg:hidden relative z-50 p-2 text-neutral-200 hover:text-amber-400 focus:outline-none transition-colors"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-stone-950/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-center items-center px-8 transition-all duration-500 ${mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          <span className="font-serif text-3xl tracking-[0.25em] text-[#C59E61] mb-2">
            GRANDEUR
          </span>
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href === "/" && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-xl tracking-[0.2em] transition-all duration-300 ${isActive
                    ? "text-[#C59E61] font-semibold"
                    : "text-neutral-300 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-8 py-3 rounded-full border border-[#C59E61] text-[#C59E61] text-xs tracking-[0.2em] uppercase font-medium"
          >
            RESERVE A TABLE →
          </Link>
        </div>
      </div>
    </header>
  );
}

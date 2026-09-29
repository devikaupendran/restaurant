"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "ABOUT", href: "/about" },
  { name: "GALLERY", href: "/gallery" },
  { name: "OUR BRANCHES", href: "/branches" },
  { name: "BLOG", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Light theme pages (Menu, About, Branches, Blog, FAQ, Privacy Policy, Terms of Service, Home)
  const isLightPage =
    pathname === "/" ||
    pathname.startsWith("/menu") ||
    pathname === "/about" ||
    pathname === "/gallery" ||
    pathname === "/branches" ||
    pathname.startsWith("/blog") ||
    pathname === "/faq" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-service";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className={`relative flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-500 ${isLightPage
              ? isScrolled
                ? "bg-white/90 backdrop-blur-xl border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-stone-900"
                : "bg-white/70 backdrop-blur-md border border-stone-200/50 shadow-sm text-stone-900"
              : isScrolled
                ? "bg-[#0E1410]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] text-white"
                : "bg-black/30 backdrop-blur-md border border-white/15 shadow-lg text-white"
            }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center focus:outline-none z-10">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/logo.png"
                alt="Grandeur Multicuisine Restaurant Logo"
                width={220}
                height={70}
                className="h-10 sm:h-12 w-auto object-contain brightness-110 drop-shadow-sm"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href === "/" && pathname === "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.22em] transition-all duration-300 group ${isLightPage
                      ? isActive
                        ? "text-[#8B6914]"
                        : "text-stone-700 hover:text-stone-950"
                      : isActive
                        ? "text-[#E6CA85]"
                        : "text-stone-300 hover:text-white"
                    }`}
                >
                  {/* Active Link Floating Glow Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className={`absolute inset-0 rounded-full -z-10 ${isLightPage
                          ? "bg-[#B38F4E]/12 border border-[#B38F4E]/30"
                          : "bg-[#B38F4E]/20 border border-[#B38F4E]/40"
                        }`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Hover Subtle Pill */}
                  <span
                    className={`absolute inset-0 rounded-full -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isLightPage ? "bg-stone-100/80" : "bg-white/5"
                      }`}
                  />

                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Branch Call & Explore CTA */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            {/* Quick Phone Call Pill */}
            <a
              href="tel:08943667000"
              className={`hidden xl:flex items-center space-x-2 text-xs tracking-wider transition-colors py-2 px-3 rounded-full ${isLightPage
                  ? "text-stone-600 hover:text-[#8B6914] bg-stone-100/60"
                  : "text-stone-300 hover:text-amber-300 bg-white/5"
                }`}
            >
              <svg
                className="w-3.5 h-3.5 text-[#B38F4E]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium text-[11px]">+91 89436 67000</span>
            </a>

            {/* Main CTA Button */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/menu"
                className={`relative group px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-2 shadow-md overflow-hidden ${isLightPage
                    ? "bg-[#1C1814] text-white hover:bg-[#8B6914]"
                    : "bg-gradient-to-r from-[#B38F4E] to-[#D4AF37] text-stone-950 hover:from-[#C59E61] hover:to-[#E6CA85]"
                  }`}
              >
                <span className="relative z-10">EXPLORE MENU</span>
                <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle Navigation Menu"
            className={`lg:hidden p-2.5 rounded-full transition-colors focus:outline-none z-50 ${isLightPage
                ? "bg-stone-100 text-stone-900 hover:bg-stone-200"
                : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`w-full h-0.5 rounded-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
              />
              <span
                className={`w-full h-0.5 rounded-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlays */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-[#0B100C]/98 backdrop-blur-3xl z-40 lg:hidden flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#B38F4E]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center space-y-6 text-center max-w-sm mx-auto w-full">
              <span className="text-[10px] font-bold text-[#B38F4E] tracking-[0.35em] uppercase border-b border-[#B38F4E]/30 pb-2 mb-2 w-full text-center">
                NAVIGATION
              </span>

              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === pathname ||
                  (link.href === "/" && pathname === "/");

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 font-serif text-2xl tracking-[0.18em] transition-all duration-300 ${isActive
                          ? "text-[#E6CA85]"
                          : "text-stone-300 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-6 w-full space-y-4">
                <Link
                  href="/menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B38F4E] to-[#D4AF37] text-stone-950 font-bold text-xs tracking-[0.2em] uppercase shadow-lg"
                >
                  <span>EXPLORE MENU</span>
                  <span>→</span>
                </Link>

                <a
                  href="tel:08943667000"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-full border border-white/20 text-stone-300 text-xs tracking-wider"
                >
                  <svg
                    className="w-4 h-4 text-[#B38F4E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>CALL +91 89436 67000</span>
                </a>
              </div>
            </div>

            {/* Mobile Footer Note */}
            <div className="relative z-10 text-center text-stone-500 text-[11px] uppercase tracking-widest pt-8 border-t border-white/10">
              Parippally & Korani (Attingal) Branches
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B100C] text-[#E5E3DF] pt-16 sm:pt-20 pb-8 font-sans relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* ==================== TOP SECTION ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Left Side: Logo, Headline & Social Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Grandeur Multicuisine Restaurant Logo"
                  width={240}
                  height={75}
                  className="h-12 sm:h-16 w-auto object-contain brightness-110"
                />
              </Link>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-normal tracking-tight leading-[1.1] text-white">
                Start your journey <br />
                with us.
              </h2>
            </div>

            {/* Social Circle Icon Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              {/* YouTube */}
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#B38F4E" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#B38F4E" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300 text-sm font-bold"
              >
                𝕏
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#B38F4E" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#B38F4E" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Right Side: 2x2 Info Grid with separate branch locations & timings */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 self-center">
            
            {/* Parippally Branch */}
            <div>
              <span className="text-[10px] font-bold text-[#B38F4E] uppercase tracking-[0.25em] block mb-2">
                PARIPPALLY BRANCH
              </span>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                N.H. 47, Parippally, Kerala 691574
              </p>
              <p className="text-xs text-stone-400 font-normal mt-1.5 flex items-center space-x-1">
                <span className="text-[#B38F4E] font-medium">Timings:</span>
                <span>8:30 AM – 10:30 PM</span>
              </p>
            </div>

            {/* Korani (Attingal) Branch */}
            <div>
              <span className="text-[10px] font-bold text-[#B38F4E] uppercase tracking-[0.25em] block mb-2">
                KORANI (ATTINGAL) BRANCH
              </span>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                Korani, Attingal, Kerala 695104
              </p>
              <p className="text-xs text-stone-400 font-normal mt-1.5 flex items-center space-x-1">
                <span className="text-[#B38F4E] font-medium">Timings:</span>
                <span>8:00 AM – 11:00 PM</span>
              </p>
            </div>

            {/* Call Us */}
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] block mb-2">
                CALL US
              </span>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                +91 89436 67000
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] block mb-2">
                CONTACT US
              </span>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                concierge@grandeur-restaurant.com
              </p>
            </div>

          </div>
        </div>

        {/* ==================== MIDDLE SECTION ==================== */}
        <div className="pt-12 pb-14 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">
          
          {/* Column 1: Navigation */}
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Cuisines */}
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] block mb-4">
              OUR CUISINES
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300 font-light">
              <li>
                <Link href="/menu/arabic" className="hover:text-white transition-colors">
                  Arabic Specialties
                </Link>
              </li>
              <li>
                <Link href="/menu/biriyani" className="hover:text-white transition-colors">
                  Dum Biriyani & Mandi
                </Link>
              </li>
              <li>
                <Link href="/menu/sea-food" className="hover:text-white transition-colors">
                  Coastal Seafood
                </Link>
              </li>
              <li>
                <Link href="/menu/chinese" className="hover:text-white transition-colors">
                  Chinese & Sizzlers
                </Link>
              </li>
              <li>
                <Link href="/menu/beverages" className="hover:text-white transition-colors">
                  Mocktails & Beverages
                </Link>
              </li>
              <li>
                <Link href="/menu/cakes" className="hover:text-white transition-colors">
                  Cakes & Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fine Dining Experience */}
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] block mb-4">
              FINE DINING EXPERIENCE
            </span>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-xs mb-4">
              Visit our restaurant branches to relish authentic multicuisine delicacies and warm hospitality.
            </p>
            <Link
              href="/branches#contact"
              className="inline-flex items-center text-xs text-[#B38F4E] hover:text-[#d4aa5d] font-medium tracking-wide transition-colors"
            >
              <span>Reserve a Table</span>
              <span className="ml-1.5">→</span>
            </Link>
          </div>

        </div>

        {/* ==================== BOTTOM BAR ==================== */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 space-y-3 sm:space-y-0">
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>

          <p>© Copyright {new Date().getFullYear()}. All rights reserved</p>

          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
}

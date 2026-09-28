"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="relative min-h-[80vh] py-24 sm:py-32 bg-stone-950 text-stone-100 flex items-center justify-center overflow-hidden border-t border-amber-500/20">
      {/* Dark Ambient Restaurant Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-restaurant-interior.jpg"
          alt="Grandeur Restaurant Chandelier Evening Ambiance"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/90" />
      </div>

      {/* Subtle Warm Chandelier Spotlight Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] block">
            AN INVITATION TO DINE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight">
            "Your table is waiting."
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto">
            Step into our warm dining room and let us craft an unforgettable multicuisine evening for you and your guests.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
        >
          {/* Primary CTA */}
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#c3a02e] text-stone-950 font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105"
          >
            Reserve a Table →
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 hover:border-amber-400 bg-stone-900/60 hover:bg-stone-800/80 text-white hover:text-amber-200 font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-md"
          >
            Explore the Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

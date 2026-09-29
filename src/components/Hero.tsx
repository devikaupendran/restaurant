"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background Video & Fallback Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Fallback Image */}
        <Image
          src="/images/gallery/korani-shop.jpg"
          alt="Grandeur Multicuisine Restaurant - Korani"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${videoLoaded && !videoError ? "opacity-0" : "opacity-100 scale-105"
            }`}
        />

        {/* Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/gallery/korani-shop.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
              }`}
          >
            <source src="/videos/hero-video.MP4" type="video/mp4" />
          </video>
        )}

        {/* Balanced Ambient Overlay with refined contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/65 z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-24 sm:pt-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-6 sm:mb-8"
        >
          <span className="h-[1px] w-8 sm:w-16 bg-white/40 inline-block" />
          <span className="text-neutral-200/90 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em]">
            A TASTE WORTH REMEMBERING
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-white/40 inline-block" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center leading-tight mb-6"
        >
          <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#FAF6F0] font-normal tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Mastery of
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif italic text-6xl sm:text-8xl md:text-9xl text-gold-champagne font-normal tracking-tight -mt-2 sm:-mt-4 drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]"
          >
            Global Flavors
          </motion.span>
        </motion.h1>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl text-neutral-100 text-sm sm:text-base font-light leading-relaxed mb-10 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          Immerse yourself in an extraordinary culinary journey where centuries-old multi-cuisine traditions meet modern gastronomy, handcrafted with passion and precision.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#menu"
            onClick={(e) => handleScrollTo(e, "menu")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-btn text-stone-950 font-medium text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-amber-950/30 flex items-center justify-center group cursor-pointer"
          >
            <span>EXPLORE MENU</span>
            <span className="ml-2.5 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#about"
            onClick={(e) => handleScrollTo(e, "about")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 hover:border-[#C59E61] bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white hover:text-amber-200 font-medium text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            OUR STORY
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
      >
        <a
          href="#menu"
          onClick={(e) => handleScrollTo(e, "menu")}
          className="flex flex-col items-center group cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-amber-300 transition-colors mb-2">
            SCROLL
          </span>
          <div className="w-4 h-7 rounded-full border border-neutral-400/60 flex justify-center pt-1.5">
            <span className="w-1 h-1.5 bg-[#C59E61] rounded-full animate-bounce" />
          </div>
          <span className="w-[1px] h-3 bg-neutral-400/40 mt-1" />
        </a>
      </motion.div>
    </section>
  );
}

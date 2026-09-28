"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
          src="/images/hero-fallback.jpg"
          alt="Grandeur Multicuisine Fine Dining Ambiance"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            videoLoaded && !videoError ? "opacity-0" : "opacity-100 scale-105"
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
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/hero-video.MP4" type="video/mp4" />
            <source src="/videos/restaurant-hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Cinematic Dark Gradient Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40 z-10" />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-95 z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-24 sm:pt-16">
        {/* Eyebrow Flanked by Horizontal Lines */}
        <div className="flex items-center space-x-4 mb-6 sm:mb-8">
          <span className="h-[1px] w-8 sm:w-16 bg-white/40 inline-block" />
          <span className="text-neutral-200/90 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em]">
            A TASTE WORTH REMEMBERING
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-white/40 inline-block" />
        </div>

        {/* Main Headline */}
        <h1 className="flex flex-col items-center leading-tight mb-6">
          <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#FAF6F0] font-normal tracking-tight drop-shadow-md">
            Mastery of
          </span>
          <span className="font-serif italic text-6xl sm:text-8xl md:text-9xl text-gold-champagne font-normal tracking-tight -mt-2 sm:-mt-4 drop-shadow-lg">
            Global Flavors
          </span>
        </h1>

        {/* Description Text */}
        <p className="max-w-xl text-neutral-300/90 text-sm sm:text-base font-light leading-relaxed mb-10 text-center drop-shadow">
          Immerse yourself in an extraordinary culinary journey where centuries-old multi-cuisine traditions meet modern gastronomy, handcrafted with passion and precision.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
          {/* Left CTA: EXPLORE MENU → */}
          <a
            href="#menu"
            onClick={(e) => handleScrollTo(e, "menu")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-btn text-stone-950 font-medium text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:brightness-110 shadow-lg shadow-amber-950/30 flex items-center justify-center group"
          >
            <span>EXPLORE MENU</span>
            <span className="ml-2.5 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>

          {/* Right CTA: OUR STORY */}
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "about")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 hover:border-[#C59E61] bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white hover:text-amber-200 font-medium text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center"
          >
            OUR STORY
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
        <a
          href="#menu"
          onClick={(e) => handleScrollTo(e, "menu")}
          className="flex flex-col items-center group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-amber-300 transition-colors mb-2">
            SCROLL
          </span>
          <div className="w-4 h-7 rounded-full border border-neutral-400/60 flex justify-center pt-1.5">
            <span className="w-1 h-1.5 bg-[#C59E61] rounded-full animate-bounce" />
          </div>
          <span className="w-[1px] h-3 bg-neutral-400/40 mt-1" />
        </a>
      </div>
    </section>
  );
}

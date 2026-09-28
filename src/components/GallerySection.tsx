"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Anil M.",
    role: "Food Critic & Dining Enthusiast",
    rating: 5,
    quote:
      "Grandeur offers an unparalleled fine dining experience. The Arabian Al Faham, authentic Dum Biriyani, and warm hospitality make every family visit unforgettable!",
    highlight: "Best Multicuisine Experience",
  },
  {
    id: 2,
    name: "Deepak S.",
    role: "Local Gourmet Enthusiast",
    rating: 5,
    quote:
      "Sensational multicuisine menu! From sizzling steaks to fresh Asian delicacies, every single dish is executed with supreme precision and authentic flavors.",
    highlight: "Sensational Menu & Ambiance",
  },
  {
    id: 3,
    name: "Vishnu R.",
    role: "Culinary Traveler",
    rating: 5,
    quote:
      "Immaculate service, stunning interior ambiance, and incredible food quality. Hands down the finest multi-cuisine restaurant in the entire area!",
    highlight: "Top-Notch Hospitality",
  },
  {
    id: 4,
    name: "Sreejith T.",
    role: "Regular Diner & Guest",
    rating: 5,
    quote:
      "A wide variety of mouth-watering collections with great customer support. If you are planning to enjoy authentic grill & dining, this is the ultimate destination.",
    highlight: "Exceptional Taste & Variety",
  },
];

export default function GallerySection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play testimonial carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeTestimonial];

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FAF7F2] text-stone-900 relative overflow-hidden border-t border-[#E5D8C3]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
            <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              GUEST RATING & PHOTO GALLERY
            </span>
            <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Culinary <span className="font-serif italic text-[#B38F4E]">Gallery</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide max-w-md mx-auto">
            Explore our multicuisine creations, luxurious ambiance, and top-rated dining moments.
          </p>
        </div>

        {/* Asymmetric Distorted Bento Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* ─── COLUMN 1 (4 cols) ─────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* 1. Rating Card */}
            <div className="bg-white rounded-[2rem] p-7 border border-[#E8DEC9] shadow-lg relative flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center space-x-1.5 text-[#B38F4E] text-2xl mb-4">
                  ★ ★ ★ ★ ★
                </div>
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-3 tracking-tight">
                  4.9 <span className="text-stone-400 font-light text-2xl sm:text-3xl">/ 5.0</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light pr-6">
                  Customer satisfaction is our top priority. We are committed to providing quality products, reliable service, and the best value for every customer.
                </p>
              </div>

              {/* Small circle toggle badge matching reference screenshot */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#D9CBAE] flex items-center justify-center bg-[#F9F6F0] shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B38F4E] inline-block" />
              </div>
            </div>

            {/* 2. Image Slot 1: Tall Vertical 9:16 Portrait Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] min-h-[380px] flex-1 group">
              <Image
                src="/images/culinary-experience-img.png"
                alt="Culinary Experience & Chef Artistry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-amber-300 text-[10px] font-semibold uppercase tracking-[0.25em] block mb-1">
                  EXCELLENCE & ARTISTRY
                </span>
                <h4 className="font-serif text-xl font-normal">
                  Master Chefs at Work
                </h4>
              </div>
            </div>
          </div>

          {/* ─── COLUMN 2 (4 cols) ─────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* 3. Image Slot 2: Hero Dining Image with Play Button */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] min-h-[290px] group">
              <Image
                src="/images/hero-fallback.jpg"
                alt="Grandeur Main Dining Atmosphere"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 text-stone-900 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-base ml-1 text-stone-900">▶</span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <h4 className="font-serif text-xl font-medium mb-0.5">
                  Grandeur Multicuisine
                </h4>
                <p className="text-amber-200/90 text-xs font-light tracking-wide">
                  Luxury Dining Room & Ambiance
                </p>
              </div>
            </div>

            {/* 4. Image Slot 3: Full-Bleed Authentic Biriyani & Cuisine Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] min-h-[310px] flex-1 group">
              <Image
                src="/images/menu-biriyani.jpg"
                alt="Authentic Dum Biriyani Feast"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-amber-300 text-[10px] font-semibold uppercase tracking-[0.25em] block mb-1">
                  SIGNATURE DELICACY
                </span>
                <h4 className="font-serif text-xl font-normal">
                  Authentic Dum Biriyani & Spices
                </h4>
              </div>
            </div>
          </div>

          {/* ─── COLUMN 3 (4 cols) ─────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* 5. Top Card: Sizzling Tandoor & Wagyu Steak Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] h-[190px] group">
              <Image
                src="/images/wagyu-steak.jpg"
                alt="Sizzling Wagyu & Grill"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <h4 className="font-serif text-lg font-medium">
                  Sizzling Grills & Steaks
                </h4>
              </div>
            </div>

            {/* 6. Bottom Combined Slot: Testimonial Carousel Card */}
            <div className="bg-stone-900 text-white rounded-[2rem] p-7 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden flex-1 min-h-[420px]">
              {/* Background Ambient Glow & Watermark */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute right-6 bottom-14 font-serif text-8xl text-amber-500/10 pointer-events-none select-none">
                “
              </div>

              {/* Carousel Header & Star Rating */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-400 text-lg">
                    ★ ★ ★ ★ ★
                  </div>
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    GUEST REVIEWS
                  </span>
                </div>

                {/* Highlight Badge */}
                <h5 className="text-amber-400 font-serif italic text-sm mb-3">
                  {current.highlight}
                </h5>

                {/* Testimonial Quote */}
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-6 italic transition-all duration-300">
                  &quot;{current.quote}&quot;
                </p>
              </div>

              {/* Author Info & Navigation Controls */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h5 className="font-serif text-base font-semibold text-white">
                    {current.name}
                  </h5>
                  <span className="text-stone-400 text-[11px] font-light uppercase tracking-wider block">
                    {current.role}
                  </span>
                </div>

                {/* Navigation Buttons & Indicators */}
                <div className="flex items-center space-x-3">
                  {/* Dot Indicators */}
                  <div className="flex items-center space-x-1.5 mr-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === activeTestimonial ? "w-5 bg-amber-400" : "w-1.5 bg-stone-700"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 transition-colors flex items-center justify-center text-sm"
                    aria-label="Previous review"
                  >
                    ←
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 transition-colors flex items-center justify-center text-sm"
                    aria-label="Next review"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

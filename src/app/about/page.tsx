"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const handleScrollToStory = () => {
    const el = document.getElementById("our-story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#1C1814] font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden relative">
      {/* Light Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1536px] mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
        
        {/* Subtle Botanical Line Art Watermark */}
        <div className="absolute top-40 right-0 w-96 h-96 opacity-[0.06] pointer-events-none z-0">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#B38F4E]">
            <path d="M40,160 Q70,90 140,50 Q170,120 40,160 M90,110 Q120,80 150,70" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="140" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* ==================== HERO CARD BANNER (BRANCHES PAGE HERO STYLE) ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden min-h-[420px] sm:min-h-[500px] shadow-lg border border-[#E8DEC9]/70 bg-stone-900 flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Background Dining Ambiance Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery/about-us-baner.jpg"
              alt="Grandeur Fine Dining Ambiance"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-95 filter"
            />
            {/* Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </div>

          {/* Top Left Label */}
          <div className="relative z-10 flex items-center space-x-3 text-white/90">
            <span className="w-1.5 h-6 bg-[#C59E61] rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
              OUR CULINARY JOURNEY
            </span>
          </div>

          {/* Middle Left Main Text Overlay Box */}
          <div className="relative z-10 max-w-2xl text-white space-y-3 my-auto pt-6 pb-12 sm:pb-16">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-none drop-shadow-md">
              About Us
            </h1>
            <p className="text-stone-100 text-sm sm:text-base font-normal leading-relaxed drop-shadow">
              Good Food Brings People Together. Discover our passion for multicuisine excellence, warm hospitality, and memorable dining experiences across Korani (Attingal) and Parippally.
            </p>
          </div>

          {/* Bottom Left Floating Cutout Pill Button Tab */}
          <div className="relative z-10 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleScrollToStory}
              className="px-7 py-3.5 rounded-full bg-black/90 hover:bg-black text-[#C59E61] border border-[#C59E61]/40 backdrop-blur-md font-bold text-xs uppercase tracking-[0.2em] shadow-xl flex items-center space-x-2.5 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Our Story</span>
              <span className="text-sm">↓</span>
            </motion.button>

            {/* Quick Location Pills */}
            <div className="hidden sm:flex items-center space-x-3 text-xs text-white/90 font-semibold">
              <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">📍 Korani (Attingal)</span>
              <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">📍 Parippally</span>
            </div>
          </div>
        </motion.section>

        {/* ==================== SECTION 1: OUR STORY ==================== */}
        <section id="our-story" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-4 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center"
          >
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold text-[#A88B52] uppercase tracking-[0.3em]">
                  OUR STORY
                </span>
                <span className="w-12 h-[1px] bg-[#B38F4E]/60 inline-block" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1C1814] tracking-tight leading-[1.15]">
                A Passion for <br /> Great Food
              </h2>

              <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
                At Grandeur, we believe that food is more than just a meal — it's an experience. Our journey began with a simple idea: to bring people together over fresh ingredients, authentic multicuisine flavors, and warm hospitality.
              </p>

              <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
                What started as a cherished culinary passion has grown into a beloved dining destination across our Parippally and Korani (Attingal) branches, thanks to our amazing guests and a dedicated kitchen team who share the same love for great food.
              </p>
            </div>

            {/* Right Story Image */}
            <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group min-h-[260px]">
              <Image
                src="/images/about_gourmet_dish.jpg"
                alt="Grandeur Gourmet Plated Dish"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </section>

        {/* ==================== SECTION 2: OUR VALUES ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 text-center space-y-8"
        >
          {/* Header */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#A88B52] uppercase tracking-[0.3em]">
              OUR VALUES
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1814] tracking-tight">
              More Than Just a Restaurant
            </h2>
          </div>

          {/* 3 Metrics Grid with Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#D9CBAE]/60 max-w-5xl mx-auto pt-4">
            {/* Metric 1 */}
            <div className="pt-6 md:pt-0 md:px-8 space-y-2 flex flex-col items-center">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#B38F4E] tracking-tight">
                100%
              </span>
              <p className="text-stone-700 text-sm sm:text-base font-semibold tracking-wide">
                Quality Ingredients
              </p>
            </div>

            {/* Metric 2 */}
            <div className="pt-6 md:pt-0 md:px-8 space-y-2 flex flex-col items-center">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#B38F4E] tracking-tight">
                2K+
              </span>
              <p className="text-stone-700 text-sm sm:text-base font-semibold tracking-wide">
                Happy Guests
              </p>
            </div>

            {/* Metric 3 */}
            <div className="pt-6 md:pt-0 md:px-8 space-y-2 flex flex-col items-center">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#B38F4E] tracking-tight">
                5+
              </span>
              <p className="text-stone-700 text-sm sm:text-base font-semibold tracking-wide">
                Years of Serving
              </p>
            </div>
          </div>
        </motion.section>

        {/* ==================== SECTION: OUR ROOTS (FROM KOLLAM TO TRIVANDRUM) ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-6 text-center space-y-10"
        >
          {/* Header */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[1px] bg-[#B38F4E]/60 inline-block" />
              <span className="text-xs font-bold text-[#A88B52] uppercase tracking-[0.3em]">
                OUR ROOTS
              </span>
              <span className="w-8 h-[1px] bg-[#B38F4E]/60 inline-block" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1814] tracking-tight">
              From Kollam to Trivandrum
            </h2>

            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              Two vibrant districts. One shared love for authentic Kerala cuisine. <br className="hidden sm:inline" />
              Our journey is inspired by the rich culture, landscapes and people of Kollam and Trivandrum.
            </p>
          </div>

          {/* Panoramic Sketches (kollam.png & trivandrum.png) */}
          <div className="relative w-full rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/7] md:aspect-[16/8] w-full">
              <Image
                src="/images/kollam.png"
                alt="Kollam Heritage Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center mix-blend-multiply opacity-45"
              />
            </div>
            <div className="relative aspect-[16/7] md:aspect-[16/8] w-full">
              <Image
                src="/images/trivandrum.png"
                alt="Trivandrum Heritage Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center mix-blend-multiply opacity-45"
              />
            </div>
          </div>

          {/* District Descriptions (2 Columns with Vertical Divider) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#D9CBAE]/60 pt-2">
            {/* Kollam District */}
            <div className="pt-6 md:pt-0 md:px-8 space-y-3 flex flex-col items-center">
              <h3 className="font-serif text-2xl font-normal text-[#1C1814]">
                Kollam District
              </h3>
              <div className="w-10 h-[1.5px] bg-[#B38F4E]/60 my-1" />
              <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed max-w-md">
                Known for its serene backwaters, historic ports and rich cultural heritage, Kollam reflects the soul of Kerala. Its flavours, traditions and coastal charm continue to inspire our cuisine.
              </p>
            </div>

            {/* Trivandrum District */}
            <div className="pt-6 md:pt-0 md:px-8 space-y-3 flex flex-col items-center">
              <h3 className="font-serif text-2xl font-normal text-[#1C1814]">
                Trivandrum District
              </h3>
              <div className="w-10 h-[1.5px] bg-[#B38F4E]/60 my-1" />
              <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed max-w-md">
                The capital city, Trivandrum, is a blend of heritage, spirituality and modern vibrance. From iconic temples to scenic shores, it brings a unique warmth and diversity to our culinary story.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ==================== SECTION 3: OUR SPACE ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-4 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center"
        >
          {/* Left Space Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group min-h-[260px]">
            <Image
              src="/images/parippally_branch_interior.jpg"
              alt="Grandeur Dining Room Space"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Space Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold text-[#A88B52] uppercase tracking-[0.3em]">
                OUR SPACE
              </span>
              <span className="w-12 h-[1px] bg-[#B38F4E]/60 inline-block" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1C1814] tracking-tight leading-[1.15]">
              A Place to Belong
            </h2>

            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              Whether it's a casual meal, a family gathering, or a special celebration, Grandeur offers a warm and comfortable space where good food and great company come together.
            </p>

            <div className="pt-4">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>View Our Menu</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

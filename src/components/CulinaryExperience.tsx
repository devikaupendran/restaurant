"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CulinaryExperience() {
  return (
    <section className="bg-[#FAF7F2] text-stone-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Top Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
          <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
            WHY DINE WITH GRANDEUR
          </span>
          <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal tracking-tight leading-tight mb-4">
          A Complete{" "}
          <span className="font-serif italic text-[#B38F4E]">
            Culinary Experience
          </span>
        </h2>

        {/* Description */}
        <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
          From exquisite dishes to exceptional service, every detail is crafted to make your dining experience truly memorable.
        </p>
      </motion.div>

      {/* Main Grid: Left Features - Center Image - Right Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Features Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 flex flex-col space-y-12 sm:space-y-16 items-center"
        >
          {/* Feature 1: Exquisite Menu */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center max-w-sm">
            <div className="w-16 h-16 rounded-full border border-[#E5D7BF] bg-[#F4EFE6] flex items-center justify-center mb-5 shadow-sm">
              <svg className="w-7 h-7 text-[#B38F4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v2m-7 8a7 7 0 0114 0H5zm-1 3h16m-9-3v1" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">Exquisite Menu</h3>
            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              A curated selection of global flavors, crafted with the finest ingredients by expert chefs.
            </p>
          </motion.div>

          {/* Feature 2: Fresh Ingredients */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center max-w-sm">
            <div className="w-16 h-16 rounded-full border border-[#E5D7BF] bg-[#F4EFE6] flex items-center justify-center mb-5 shadow-sm">
              <svg className="w-7 h-7 text-[#B38F4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 2.12-.74 4.07-1.97 5.61L12 21z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">Fresh Ingredients</h3>
            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              Sourced locally and globally to ensure unmatched taste and quality in every dish.
            </p>
          </motion.div>
        </motion.div>

        {/* Center Dish Graphic Centerpiece with Floating Micro-Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 flex justify-center items-center my-4 lg:my-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-full max-w-[500px] sm:max-w-[560px] flex items-center justify-center"
          >
            <Image
              src="/images/culinary-experience-img.png"
              alt="A Complete Culinary Experience - Grandeur Multicuisine Dish"
              width={560}
              height={560}
              priority
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Right Features Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 flex flex-col space-y-12 sm:space-y-16 items-center"
        >
          {/* Feature 3: Exceptional Service */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center max-w-sm">
            <div className="w-16 h-16 rounded-full border border-[#E5D7BF] bg-[#F4EFE6] flex items-center justify-center mb-5 shadow-sm">
              <svg className="w-7 h-7 text-[#B38F4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">Exceptional Service</h3>
            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              Our team is dedicated to making your dining experience seamless and unforgettable.
            </p>
          </motion.div>

          {/* Feature 4: Elegant Ambience */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center max-w-sm">
            <div className="w-16 h-16 rounded-full border border-[#E5D7BF] bg-[#F4EFE6] flex items-center justify-center mb-5 shadow-sm">
              <svg className="w-7 h-7 text-[#B38F4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6m-4 0h8m-7-15h6l1 7a4 4 0 01-8 0l1-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">Elegant Ambience</h3>
            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              A sophisticated setting designed to elevate every meal, from casual dining to special celebrations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

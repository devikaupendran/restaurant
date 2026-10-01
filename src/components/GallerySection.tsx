"use client";

import Image from "next/image";

export default function GallerySection() {
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
          <p className="text-stone-700 text-sm sm:text-base font-normal tracking-wide max-w-md mx-auto">
            Explore our multicuisine creations, luxurious ambiance, and top-rated dining moments.
          </p>
        </div>

        {/* Asymmetric Distorted Bento Grid */}
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
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal pr-6">
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
                src="/images/gallery/image4.jpg"
                alt="Culinary Experience & Chef Artistry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* ─── COLUMN 2 (4 cols) ─────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* 3. Image Slot 2: Hero Dining Image with Play Button */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] min-h-[290px] group">
              <Image
                src="/images/gallery/paripally-image8.webp"
                alt="Grandeur Main Dining Atmosphere"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 text-stone-900 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-base ml-1 text-stone-900">▶</span>
              </div>
            </div>

            {/* 4. Image Slot 3: Full-Bleed Authentic Biriyani & Cuisine Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] min-h-[310px] flex-1 group">
              <Image
                src="/images/gallery/image7.jpg"
                alt="Authentic Dum Biriyani Feast"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* ─── COLUMN 3 (4 cols) ─────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* 5. Top Card: Sizzling Tandoor & Wagyu Steak Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DEC9] min-h-[310px] flex-1 group">
              <Image
                src="/images/gallery/paripally-image6.webp"
                alt="Grandeur Dining Area & Atmosphere"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

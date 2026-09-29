"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ─── Gallery Image Data ─────────────────────────────────────────────── */
interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "featured";
}

const koraniImages: GalleryImage[] = [
  { src: "/images/gallery/image1.jpg", alt: "Grandeur Dining Experience", span: "wide" },
  { src: "/images/gallery/image2.jpg", alt: "Family Celebration at Grandeur" },
  { src: "/images/gallery/image3.jpg", alt: "Evening Ambiance & Decor" },
  { src: "/images/gallery/image4.jpg", alt: "Grand Opening Ceremony", span: "tall" },
  { src: "/images/gallery/image5.jpg", alt: "Special Event at Grandeur" },
  { src: "/images/gallery/image6.jpg", alt: "VIP Dining Setup" },
  { src: "/images/gallery/image7.jpg", alt: "Rooftop Night View", span: "wide" },
  { src: "/images/gallery/image8.jpg", alt: "Birthday Celebration", span: "featured" },
  { src: "/images/gallery/image9.jpg", alt: "Private Dining Area" },
  { src: "/images/gallery/image10.jpg", alt: "Grandeur Kitchen Tour" },
  { src: "/images/gallery/image11.jpg", alt: "Restaurant Exterior Night" },
  { src: "/images/gallery/image12.jpg", alt: "Anniversary Dinner Setup" },
  { src: "/images/gallery/image13.jpg", alt: "Garden Seating Area", span: "tall" },
  { src: "/images/gallery/image14.jpg", alt: "Catering & Events", span: "wide" },
  { src: "/images/gallery/image15.jpg", alt: "Team Grandeur" },
  { src: "/images/gallery/image16.jpg", alt: "Customer Delight" },
  { src: "/images/gallery/image17.jpg", alt: "Grand Feast Arrangement", span: "featured" },
  { src: "/images/gallery/image18.webp", alt: "Elegant Plating & Presentation" },
  { src: "/images/gallery/image19.webp", alt: "Chef's Special Creations" },
  { src: "/images/gallery/image20.webp", alt: "Luxurious Interior Decor", span: "tall" },
  { src: "/images/gallery/image21.webp", alt: "Live Cooking Station" },
  { src: "/images/gallery/image22.webp", alt: "Grandeur Moments" },
];

const paripallyImages: GalleryImage[] = [
  { src: "/images/gallery/paripally-shop.png", alt: "Parippally Branch Exterior", span: "wide" },
  { src: "/images/gallery/paripally-image1.webp", alt: "Parippally Dining Hall" },
  { src: "/images/gallery/paripally-image2.webp", alt: "Elegant Table Setting", span: "tall" },
  { src: "/images/gallery/paripally-image3.webp", alt: "Private Dining Area" },
  { src: "/images/gallery/paripally-image4.webp", alt: "Interior Ambiance", span: "featured" },
  { src: "/images/gallery/paripally-image5.webp", alt: "Guest Celebrations" },
  { src: "/images/gallery/paripally-image6.webp", alt: "Evening Dining Experience", span: "wide" },
  { src: "/images/gallery/paripally-image7.webp", alt: "Family Gatherings" },
  { src: "/images/gallery/paripally-image8.webp", alt: "Event Decorations", span: "tall" },
  { src: "/images/gallery/paripally-image9.webp", alt: "Parippally Night View" },
  { src: "/images/gallery/paripally-image10.webp", alt: "Banquet Hall Setup" },
  { src: "/images/gallery/paripally-image11.webp", alt: "Grand Entrance & Lobby", span: "featured" },
];

type BranchTab = "korani" | "parippally";

const tabs: { key: BranchTab; label: string; subtitle: string }[] = [
  { key: "korani", label: "Korani Branch", subtitle: "Attingal" },
  { key: "parippally", label: "Parippally Branch", subtitle: "Kollam" },
];

/* ─── Lightbox Component ─────────────────────────────────────────────── */
function Lightbox({
  image,
  images,
  currentIdx,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  images: GalleryImage[];
  currentIdx: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-8 sm:right-8 z-[110] w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-300"
          aria-label="Close lightbox"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-[110] w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-300"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-[110] w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-300"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image */}
        <motion.div
          key={image.src}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[85vh] aspect-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain rounded-2xl"
            priority
          />
        </motion.div>

        {/* Caption & Counter */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center z-[110]">
          <p className="text-white/90 font-serif text-lg sm:text-xl">{image.alt}</p>
          <span className="text-white/40 text-xs mt-1 block">
            {currentIdx + 1} / {images.length}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main Gallery Page ──────────────────────────────────────────────── */
export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<BranchTab>("korani");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const currentImages = activeTab === "korani" ? koraniImages : paripallyImages;

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const goLightboxPrev = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx(lightboxIdx === 0 ? currentImages.length - 1 : lightboxIdx - 1);
  };

  const goLightboxNext = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % currentImages.length);
  };

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#1C1814] font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden relative">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1536px] mx-auto w-full relative z-10 space-y-12 sm:space-y-16">

        {/* Subtle Botanical Watermark */}
        <div className="absolute top-40 right-0 w-96 h-96 opacity-[0.06] pointer-events-none z-0">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#B38F4E]">
            <path d="M40,160 Q70,90 140,50 Q170,120 40,160 M90,110 Q120,80 150,70" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="140" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* ==================== HERO BANNER ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden min-h-[420px] sm:min-h-[500px] shadow-lg border border-[#E8DEC9]/70 bg-stone-900 flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery/about-us-baner.jpg"
              alt="Grandeur Gallery - Fine Dining Experience"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-95 filter"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[350px] sm:min-h-[430px]">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <span className="h-[1px] w-8 sm:w-12 bg-[#C59E61]/70 inline-block" />
                <span className="text-[#C59E61] text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em]">
                  VISUAL JOURNEY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight mb-4">
                Our <span className="italic text-[#C59E61]">Gallery</span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                A curated collection of moments — from the artistry of our chefs to the elegance of our dining spaces and the warmth of celebrations shared within our walls.
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-6 sm:gap-10 mt-6 pt-6 border-t border-white/15">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">{koraniImages.length + paripallyImages.length}+</span>
                  <span className="block text-stone-400 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Photos</span>
                </div>
                <div className="w-px h-10 bg-white/15" />
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">2</span>
                  <span className="block text-stone-400 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Branches</span>
                </div>
                <div className="w-px h-10 bg-white/15" />
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">∞</span>
                  <span className="block text-stone-400 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Memories</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ==================== BRANCH TABS ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setLightboxIdx(null); }}
              className={`relative px-6 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-center transition-all duration-400 border ${
                activeTab === tab.key
                  ? "bg-[#1C1814] text-white border-[#C59E61]/40 shadow-xl shadow-black/10"
                  : "bg-white text-stone-600 border-stone-200/80 hover:border-[#B38F4E]/50 hover:text-[#B38F4E] shadow-sm"
              }`}
            >
              <span className={`block text-xs sm:text-sm font-bold uppercase tracking-wider ${
                activeTab === tab.key ? "text-[#C59E61]" : ""
              }`}>
                {tab.label}
              </span>
              <span className={`block text-[10px] sm:text-xs mt-0.5 font-light ${
                activeTab === tab.key ? "text-stone-400" : "text-stone-400"
              }`}>
                {tab.subtitle} · {tab.key === "korani" ? koraniImages.length : paripallyImages.length} photos
              </span>

              {/* Active indicator dot */}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTabDot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C59E61]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ==================== MASONRY GALLERY GRID ==================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {currentImages.map((image, idx) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className={`break-inside-avoid relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-md border border-[#E8DEC9]/70 group cursor-pointer ${
                  image.span === "tall"
                    ? "min-h-[450px] sm:min-h-[520px]"
                    : image.span === "featured"
                    ? "min-h-[350px] sm:min-h-[420px]"
                    : "min-h-[260px] sm:min-h-[320px]"
                }`}
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-base sm:text-lg text-white font-normal leading-snug">
                    {image.alt}
                  </h3>
                </div>

                {/* Expand Icon (top right on hover) */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ==================== BOTTOM CTA ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center pt-6"
        >
          <p className="text-stone-500 text-sm font-light mb-5 max-w-md mx-auto">
            Every dish, every corner, and every moment at Grandeur is crafted to perfection. Experience it in person.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/menu"
              className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-[#1C1814] hover:bg-stone-800 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Explore Our Menu</span>
              <span className="text-sm">→</span>
            </a>
            <a
              href="/branches"
              className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 font-bold text-xs uppercase tracking-[0.2em] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>Visit Our Branches</span>
              <span className="text-sm">→</span>
            </a>
          </div>
        </motion.div>

      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxIdx !== null && currentImages[lightboxIdx] && (
        <Lightbox
          image={currentImages[lightboxIdx]}
          images={currentImages}
          currentIdx={lightboxIdx}
          onClose={closeLightbox}
          onPrev={goLightboxPrev}
          onNext={goLightboxNext}
        />
      )}
    </div>
  );
}

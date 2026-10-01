"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuSectionData {
  number: string;
  categoryTag?: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  portionLegend?: string;
}

const arabicSections: MenuSectionData[] = [
  {
    number: "01",
    categoryTag: "MANDHI",
    title: "TRADITIONAL MANDHI",
    subtitle: "Aromatic rice cooked to perfection with authentic Arabic spices.",
    portionLegend: "( Full / Half / Quarter )",
    items: [
      { name: "Mandhi", price: "₹730 / 410 / 240" },
      { name: "Al Faham Mandhi", price: "₹770 / 460 / 270" },
      { name: "Mandhi Chicken", price: "₹450 / 250 / 150" },
      { name: "Mandhi Rice", price: "₹120" },
    ],
    image: "/images/arabic/traditional-mandhi.png",
    imageAlt: "Authentic Arabic Mandhi Rice with Roasted Chicken",
    imageLeft: false,
  },
  {
    number: "02",
    categoryTag: "AL FAHAM",
    title: "FLAVOURED AL FAHAM",
    subtitle: "Juicy, tender and marinated with unique flavours. Served with Arabian sides.",
    portionLegend: "( Full / Half / Quarter )",
    items: [
      { name: "Dragon Al Faham", price: "₹600 / 320 / -" },
      { name: "Honey Chilli Al Faham", price: "₹510 / 280 / -" },
      { name: "Peri Peri Al Faham", price: "₹490 / 270 / -" },
      { name: "Lebanese Al Faham", price: "₹520 / 290 / -" },
      { name: "Turkish Al Faham", price: "₹520 / 290 / -" },
      { name: "Kanthari Al Faham", price: "₹520 / 290 / -" },
      { name: "Mexican Al Faham", price: "₹520 / 290 / -" },
      { name: "Red Chilli Al Faham", price: "₹450 / 250 / 160" },
      { name: "Green Chilli Al Faham", price: "₹450 / 250 / 160" },
    ],
    image: "/images/arabic/flavoured-alfam.png",
    imageAlt: "Marinated Flavoured Charcoal Al Faham Chicken",
    imageLeft: true,
  },
  {
    number: "03",
    categoryTag: "GRILLED",
    title: "ARABIC SPECIALS",
    subtitle: "Simple ingredients. Bold flavours.",
    portionLegend: "( Full / Half / Quarter )",
    items: [
      { name: "Al Faham", price: "₹450 / 250 / 160" },
      { name: "Grilled Chicken", price: "₹440 / 260 / 170" },
    ],
    image: "/images/arabic/arabic-specials.png",
    imageAlt: "Charcoal Grilled Chicken with Arabian Garlic Dip and Bread",
    imageLeft: false,
  },
];

export default function ArabicMenuPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-stone-900 font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden">
      {/* Light Navbar */}
      <Navbar />

      <main className="flex-1 pb-8 relative">
        {/* ==================== HERO BANNER WITH PROPER TOP CLEARANCE ==================== */}
        <section className="relative pt-40 sm:pt-48 lg:pt-56 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#F3ECE0] via-[#F7F3EC] to-[#F7F3EC] flex items-center justify-between min-h-[460px] lg:min-h-[520px]">
          
          {/* Back Button */}
          <div className="absolute top-28 left-4 sm:left-8 lg:left-14 z-20">
            <BackButton href="/menu" label="Back to Menu" />
          </div>
          
          {/* Left Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              x: { duration: 0.9, ease: "easeOut" },
              opacity: { duration: 0.9 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            className="absolute -left-8 sm:-left-4 lg:left-0 xl:left-4 top-[58%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[430px] xl:w-[480px] aspect-square flex-shrink-0 pointer-events-none z-0"
          >
            <Image
              src="/images/arabic/arabic-mandhi-banner-left.png"
              alt="Arabic Lanterns and Mosque Sketch"
              fill
              priority
              className="object-contain object-left"
            />
          </motion.div>

          {/* Center Content Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 text-center max-w-xl mx-auto flex flex-col items-center py-4 mt-2 sm:mt-4"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1 }}
              className="text-[11px] sm:text-xs font-semibold text-[#A68858] uppercase mb-1"
            >
              ## TRADITIONAL ARABIC CUISINE ##
            </motion.span>
            
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1C1814] tracking-tight leading-none mb-2">
              Arabic
            </h1>
            
            <p className="text-stone-500 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6">
              RICH FLAVOURS, TIMELESS TRADITIONS
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#section-intro"
              className="inline-flex items-center space-x-2 px-7 py-2.5 bg-[#C2A680] hover:bg-[#B29367] text-white text-[11px] font-medium tracking-[0.25em] uppercase rounded-sm shadow-sm transition-colors duration-300"
            >
              <span>VIEW FULL MENU</span>
              <span>↓</span>
            </motion.a>
          </motion.div>

          {/* Right Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{
              x: { duration: 0.9, ease: "easeOut" },
              opacity: { duration: 0.9 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute -right-8 sm:-right-4 lg:right-0 xl:right-4 top-[58%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[430px] xl:w-[480px] aspect-square flex-shrink-0 pointer-events-none z-0"
          >
            <Image
              src="/images/arabic/arabic-main-banner-right.png"
              alt="Arabic Mandhi Platter Banner"
              fill
              priority
              className="object-contain object-right"
            />
          </motion.div>
        </section>

        {/* ==================== CURSIVE DESCRIPTION INTRO SECTION (AFTER HERO) ==================== */}
        <section id="section-intro" className="py-4 px-6 max-w-4xl mx-auto text-center relative z-10 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-16 h-[1px] bg-[#B38F4E]/60 mb-2" />
            <p className="font-cursive text-3xl sm:text-4xl md:text-5xl text-[#9E7A36] font-normal leading-relaxed text-center px-4">
              "Experience the royal dining traditions of Arabia with Grandeur’s aromatic slow-cooked Mandhi, spiced charcoal-grilled Al Fahams, and authentic Middle Eastern specialties."
            </p>
            <div className="w-16 h-[1px] bg-[#B38F4E]/60 mt-2" />
          </motion.div>
        </section>

        {/* ==================== 3 ARABIC SECTIONS WITH EXPANDED LAYOUT ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 space-y-6 sm:space-y-10">
          {arabicSections.map((sec) => (
            <motion.section
              key={sec.number}
              id={`section-${sec.number}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative scroll-mt-24 pb-6 sm:pb-8 border-b border-stone-300/30 last:border-0"
            >
              {/* Gold Botanical Leaf Branch Decorative Background Accent */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: sec.imageLeft ? [3, 8, 3] : [-3, -8, -3] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className={`absolute ${
                  sec.imageLeft ? "-left-8 sm:left-2 lg:left-8" : "-right-8 sm:right-2 lg:right-8"
                } top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[580px] aspect-square pointer-events-none opacity-40 z-0 ${
                  sec.imageLeft ? "" : "scale-x-[-1]"
                }`}
              >
                <Image
                  src="/images/decorations/gold-branch.svg"
                  alt="Gold Leaf Branch Accent"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <div
                className={`relative z-10 flex flex-col ${
                  sec.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between gap-6 lg:gap-14`}
              >
                {/* Text Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: sec.imageLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  {/* Number, Category Tag & Title Header */}
                  <div className="flex items-baseline space-x-3 mb-1">
                    <span className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#D4C2A5] select-none leading-none">
                      {sec.number}
                    </span>
                    <div className="flex flex-col">
                      {sec.categoryTag && (
                        <span className="text-xs sm:text-xs font-bold text-[#A68858] uppercase tracking-[0.25em]">
                          {sec.categoryTag}
                        </span>
                      )}
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1814] tracking-tight uppercase leading-none">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed mb-4 italic">
                    {sec.subtitle}
                  </p>

                  {/* Portion Legend indicator */}
                  {sec.portionLegend && (
                    <div className="text-xs sm:text-xs font-semibold text-[#8B6914] uppercase tracking-wider mb-2.5">
                      {sec.portionLegend}
                    </div>
                  )}

                  {/* Menu Items Table */}
                  <div className="space-y-3 sm:space-y-2">
                    {sec.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + idx * 0.04 }}
                        className="flex items-baseline justify-between text-base sm:text-base border-b border-stone-300/40 py-2 sm:py-1.5 hover:border-[#B38F4E]/60 transition-colors"
                      >
                        <span className="font-sans font-semibold text-stone-900 text-base sm:text-base">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-stone-400/40 mx-2.5 sm:mx-3" />
                        <span className="font-sans font-bold text-[#8B6914] min-w-[90px] sm:min-w-[120px] text-right text-base sm:text-base">
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Section Image with Scaled-Up Presentation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="w-full lg:w-1/2 relative aspect-square sm:aspect-4/3 lg:aspect-square overflow-hidden flex items-center justify-center max-w-lg lg:max-w-none mx-auto"
                >
                  <Image
                    src={sec.image}
                    alt={sec.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain drop-shadow-md transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

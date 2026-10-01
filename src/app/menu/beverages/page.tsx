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
}

const beveragesSections: MenuSectionData[] = [
  {
    number: "01",
    categoryTag: "HOT BEVERAGES",
    title: "TEA SELECTIONS",
    subtitle: "A perfect cup for every moment.",
    items: [
      { name: "Traditional Chaya", price: "₹20" },
      { name: "Masala Chaya", price: "₹30" },
      { name: "Ginger Chaya", price: "₹30" },
      { name: "Elaichi Chaya", price: "₹30" },
      { name: "Lemon Tea", price: "₹25" },
      { name: "Green Tea", price: "₹35" },
      { name: "Black Tea", price: "₹25" },
    ],
    image: "/images/beverages/tea-selectors.png",
    imageAlt: "Freshly Brewed Tea Selections with Spices",
    imageLeft: false,
  },
  {
    number: "02",
    categoryTag: "AROMATIC BREWS",
    title: "COFFEE CORNER",
    subtitle: "Rich aroma, perfect flavour.",
    items: [
      { name: "Black Coffee", price: "₹40" },
      { name: "Filter Coffee", price: "₹50" },
      { name: "Espresso", price: "₹60" },
      { name: "Americano", price: "₹70" },
      { name: "Cappuccino", price: "₹80" },
      { name: "Latte", price: "₹90" },
      { name: "Mocha", price: "₹100" },
      { name: "Cold Coffee", price: "₹110" },
    ],
    image: "/images/beverages/coffee-corner.png",
    imageAlt: "Hot Cappuccino and Cold Coffee Corner",
    imageLeft: true,
  },
  {
    number: "03",
    categoryTag: "SIGNATURE BLENDS",
    title: "SPECIALTY DRINKS",
    subtitle: "Unique blends for a refreshing experience.",
    items: [
      { name: "Karikku Shake", price: "₹120" },
      { name: "Tender Coconut Water", price: "₹80" },
      { name: "Badam Milk", price: "₹90" },
      { name: "Horlicks", price: "₹80" },
      { name: "Boost", price: "₹70" },
      { name: "Chocolate Milk", price: "₹90" },
    ],
    image: "/images/beverages/speciality-drinks.png",
    imageAlt: "Delicious Specialty Milkshakes and Drinks",
    imageLeft: false,
  },
  {
    number: "04",
    categoryTag: "CHILLED REFRESHMENTS",
    title: "FRESH JUICES & COOLERS",
    subtitle: "Natural goodness in every sip.",
    items: [
      { name: "Fresh Lime Juice", price: "₹40" },
      { name: "Mint Lime Juice", price: "₹50" },
      { name: "Watermelon Juice", price: "₹70" },
      { name: "Pineapple Juice", price: "₹70" },
      { name: "Orange Juice", price: "₹80" },
      { name: "Mango Juice (Seasonal)", price: "₹80" },
      { name: "Mosambi Juice", price: "₹80" },
      { name: "Fruit Punch", price: "₹100" },
      { name: "Iced Tea", price: "₹70" },
      { name: "Lemon Mint Cooler", price: "₹70" },
      { name: "Blue Lagoon", price: "₹90" },
      { name: "Virgin Mojito", price: "₹90" },
    ],
    image: "/images/beverages/fresh-juice-corners.png",
    imageAlt: "Assorted Fresh Fruit Juices and Coolers",
    imageLeft: true,
  },
];

export default function BeveragesMenuPage() {
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
          
          {/* Left Floating Image: Tea Kettle & Spices */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              x: { duration: 0.9, ease: "easeOut" },
              opacity: { duration: 0.9 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            className="absolute left-0 sm:left-4 lg:left-8 xl:left-12 top-[60%] -translate-y-1/2 w-[140px] sm:w-[190px] md:w-[240px] lg:w-[280px] xl:w-[320px] aspect-square flex-shrink-0 pointer-events-none z-0"
          >
            <Image
              src="/images/beverages/beverages-main-banner-left.png"
              alt="Tea Kettle and Warm Spices"
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
              ## REFRESHING BEVERAGES ##
            </motion.span>
            
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1C1814] tracking-tight leading-none mb-2">
              Beverages
            </h1>
            
            <p className="text-stone-500 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6">
              SIPS FOR EVERY MOOD
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#section-intro"
              className="inline-flex items-center space-x-2 px-7 py-2.5 bg-[#C2A680] hover:bg-[#B29367] text-white text-[11px] font-medium tracking-[0.25em] uppercase rounded-sm shadow-sm transition-colors duration-300"
            >
              <span>EXPLORE MENU</span>
              <span>↓</span>
            </motion.a>
          </motion.div>

          {/* Right Floating Image: Coffee & Milkshakes */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{
              x: { duration: 0.9, ease: "easeOut" },
              opacity: { duration: 0.9 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute right-0 sm:right-4 lg:right-8 xl:right-12 top-[60%] -translate-y-1/2 w-[140px] sm:w-[190px] md:w-[240px] lg:w-[280px] xl:w-[320px] aspect-square flex-shrink-0 pointer-events-none z-0"
          >
            <Image
              src="/images/beverages/beverages-main-banner-right.png"
              alt="Fresh Juice and Cold Beverages Banner"
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
              "Quench your thirst with Grandeur’s exquisite beverages collection, featuring aromatic teas, handcrafted coffees, decadent specialty shakes, and freshly squeezed fruit juices & coolers."
            </p>
            <div className="w-16 h-[1px] bg-[#B38F4E]/60 mt-2" />
          </motion.div>
        </section>

        {/* ==================== 4 BEVERAGE SECTIONS WITH EXPANDED LAYOUT ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 space-y-6 sm:space-y-10">
          {beveragesSections.map((sec) => (
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
                        <span className="font-sans font-bold text-[#8B6914] min-w-[55px] text-right text-base sm:text-base">
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

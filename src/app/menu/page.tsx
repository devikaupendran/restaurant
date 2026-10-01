"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Appam, Porotta, Dosas & Breads",
    image: "/images/main-menu/breakfast-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "starters",
    title: "Starters",
    subtitle: "Crispy Appetizers & Tandoori Platters",
    image: "/images/main-menu/starters-main.png",
    href: "/menu/starters",
  },
  {
    id: "biriyani",
    title: "Biriyani",
    subtitle: "Aromatic Dum Biriyani & Fragrant Rice",
    image: "/images/main-menu/biriyani-main.png",
    href: "/menu/biriyani",
  },
  {
    id: "arabic",
    title: "Arabic",
    subtitle: "Authentic Mandi, Shawarma & Grills",
    image: "/images/main-menu/arabic-main.png",
    href: "/menu/arabic",
  },
  {
    id: "maincourse",
    title: "Main Course",
    subtitle: "Rich Curries, Gravies & Breads",
    image: "/images/main-menu/maincourse-main.png",
    href: "/menu/main-course",
  },
  {
    id: "chinese",
    title: "Chinese",
    subtitle: "Wok Tossed Noodles, Rice & Sizzlers",
    image: "/images/main-menu/chinese-main.png",
    href: "/menu/chinese",
  },
  {
    id: "sea-food",
    title: "Sea Food",
    subtitle: "Fresh Fish, Prawns & Coastal Catch",
    image: "/images/main-menu/sea-food-main.png",
    href: "/menu/sea-food",
  },
  {
    id: "beverages",
    title: "Beverages",
    subtitle: "Fresh Juices, Mocktails & Shakes",
    image: "/images/main-menu/beverages-main.png",
    href: "/menu/beverages",
  },
  {
    id: "cakes",
    title: "Cakes",
    subtitle: "Artisan Pastries & Gourmet Desserts",
    image: "/images/main-menu/cakes.png",
    href: "/menu/cakes",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden">
      {/* Light Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-24 sm:pt-32 pb-24 px-6 sm:px-8 lg:px-12 flex-1 relative">
        {/* Background Floating Gold Leaf Branch Decorative Patterns */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute -left-16 sm:-left-28 top-32 w-[320px] sm:w-[450px] aspect-square pointer-events-none opacity-25 z-0"
        >
          <Image
            src="/images/decorations/gold-branch.svg"
            alt="Decorative Gold Leaf Branch Left"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-16 sm:-right-28 bottom-20 w-[320px] sm:w-[450px] aspect-square pointer-events-none opacity-25 z-0 scale-x-[-1]"
        >
          <Image
            src="/images/decorations/gold-branch.svg"
            alt="Decorative Gold Leaf Branch Right"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Animated Header Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/50" />
              <span className="text-[#A17A38] text-xs font-semibold uppercase tracking-[0.3em]">
                Grandeur Menu
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/50" />
            </div>
            
            <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-tight">
              Our Main <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#B38F4E] inline-block"
              >
                Categories
              </motion.span>
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 font-normal tracking-wide max-w-md mx-auto">
              Select any category to explore authentic dishes and specialties
            </p>
          </motion.div>

          {/* Animated Category Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 items-center"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={item.href}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* PNG Image with gentle micro-floating animation */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5 + (index % 3) * 0.5,
                      delay: index * 0.2,
                    }}
                    className="relative w-full aspect-square overflow-hidden mb-2 max-w-[340px] sm:max-w-none"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
                      priority={index < 3}
                    />
                  </motion.div>

                  {/* Big Luxury Cursive Text right under the PNG image - enlarged for mobile readability */}
                  <motion.h2
                    whileHover={{ scale: 1.04 }}
                    className="font-cursive text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-stone-900 group-hover:text-[#B38F4E] transition-colors leading-none tracking-wide pt-1"
                  >
                    {item.title}
                  </motion.h2>

                  {/* Subtitle denoting the data & dishes - clear and readable on mobile */}
                  <p className="text-sm sm:text-base text-stone-700 font-medium tracking-wide mt-2 px-2 line-clamp-1 group-hover:text-stone-900 transition-colors">
                    {item.subtitle}
                  </p>

                  {/* Interactive 'View Menu' Callout Pill with Animated Arrow */}
                  <div className="mt-4 inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase text-stone-800 bg-white border border-[#B38F4E]/40 shadow-sm group-hover:bg-[#1C1814] group-hover:text-amber-200 group-hover:border-[#1C1814] group-hover:shadow-md transition-all duration-300">
                    <span className="text-xs">View Menu</span>
                    <svg
                      className="w-4 h-4 text-[#B38F4E] group-hover:text-amber-300 transform group-hover:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

interface MenuItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    image: "/images/main-menu/breakfast-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "starters",
    title: "Starters",
    image: "/images/main-menu/starters-main.png",
    href: "/menu/starters",
  },
  {
    id: "biriyani",
    title: "Biriyani",
    image: "/images/main-menu/biriyani-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "arabic",
    title: "Arabic",
    image: "/images/main-menu/arabic-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "maincourse",
    title: "Main Course",
    image: "/images/main-menu/maincourse-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "chinese",
    title: "Chinese",
    image: "/images/main-menu/chinese-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "sea-food",
    title: "Sea Food",
    image: "/images/main-menu/sea-food-main.png",
    href: "/menu/breakfast",
  },
  {
    id: "beverages",
    title: "Beverages",
    image: "/images/main-menu/beverages-main.png",
    href: "/menu/breakfast",
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
            
            <h1 className="font-cursive text-4xl sm:text-6xl md:text-7xl text-stone-900 leading-tight">
              Our Main <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#B38F4E] inline-block"
              >
                Categories
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Category Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 items-center"
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
                    className="relative w-full aspect-square overflow-hidden mb-1"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                      priority={index < 3}
                    />
                  </motion.div>

                  {/* Big Luxury Cursive Text right under the PNG image */}
                  <motion.h2
                    whileHover={{ scale: 1.04 }}
                    className="font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 group-hover:text-[#B38F4E] transition-colors leading-none tracking-wide pt-0"
                  >
                    {item.title}
                  </motion.h2>
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Morning Fresh Delights",
    image: "/images/main-menu/breakfast-main.png",
  },
  {
    id: "starters",
    title: "Starters",
    subtitle: "Appetizers & Small Bites",
    image: "/images/main-menu/starters-main.png",
  },
  {
    id: "biriyani",
    title: "Biriyani",
    subtitle: "Aromatic & Authentic",
    image: "/images/main-menu/biriyani-main.png",
  },
  {
    id: "arabic",
    title: "Arabic",
    subtitle: "Mandhi & Charcoal Al Faham",
    image: "/images/main-menu/arabic-main.png",
  },
  {
    id: "maincourse",
    title: "Main Course",
    subtitle: "Curries, Breads & Rice",
    image: "/images/main-menu/maincourse-main.png",
  },
  {
    id: "chinese",
    title: "Chinese",
    subtitle: "Wok Tossed Classics",
    image: "/images/main-menu/chinese-main.png",
  },
  {
    id: "sea-food",
    title: "Sea Food",
    subtitle: "Fresh Catch & Coastal Specials",
    image: "/images/main-menu/sea-food-main.png",
  },
  {
    id: "beverages",
    title: "Beverages",
    subtitle: "Shakes, Juices & Mocktails",
    image: "/images/main-menu/beverages-main.png",
  },
  {
    id: "cakes",
    title: "Cakes",
    subtitle: "Artisanal Bakes & Desserts",
    image: "/images/main-menu/cakes.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CuisineCategories() {
  return (
    <section className="bg-[#FAF7F2] pb-24 pt-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center space-x-4 mb-3">
            <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
            <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              EXPLORE OUR CATEGORIES
            </span>
            <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal tracking-tight leading-tight mb-3">
            Multicuisine{" "}
            <span className="font-serif italic text-[#B38F4E]">
              Offerings
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Explore our main culinary categories crafted with genuine passion and authentic recipes.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={
                  cat.id === "breakfast"
                    ? "/menu/breakfast"
                    : cat.id === "starters"
                    ? "/menu/starters"
                    : cat.id === "beverages"
                    ? "/menu/beverages"
                    : cat.id === "cakes"
                    ? "/menu/cakes"
                    : cat.id === "sea-food"
                    ? "/menu/sea-food"
                    : cat.id === "chinese"
                    ? "/menu/chinese"
                    : cat.id === "arabic"
                    ? "/menu/arabic"
                    : cat.id === "biriyani"
                    ? "/menu/biriyani"
                    : cat.id === "maincourse"
                    ? "/menu/main-course"
                    : "/menu"
                }
                className="group bg-[#F4EFE7] hover:bg-[#EFE9DF] rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-between border border-[#E8DEC9]/60 hover:border-[#D9CBAE] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer h-full"
              >
                {/* Dish Image Container */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + (idx % 3), ease: "easeInOut" }}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 flex items-center justify-center overflow-hidden rounded-full border border-amber-900/10"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full rounded-full group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                  />
                </motion.div>

                {/* Title & Subtitle */}
                <div className="flex flex-col items-center">
                  <h3 className="font-serif text-sm sm:text-base font-semibold text-stone-900 mb-0.5 group-hover:text-[#B38F4E] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <span className="text-stone-500 text-[10px] font-light tracking-wide line-clamp-1">
                    {cat.subtitle}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: { name: string; price: string; note?: string }[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "flavoured-al-faham",
    title: "Flavoured Al Faham",
    subtitle: "Full / Half / Quarter",
    image: "/images/menu-tandoor.jpg",
    items: [
      { name: "Dragon Al Faham", price: "₹600 / 320" },
      { name: "Honey Chilli Al Faham", price: "₹510 / 280" },
      { name: "Peri Peri Al Faham", price: "₹490 / 270" },
      { name: "Lebanese Al Faham", price: "₹520 / 290" },
      { name: "Turkish Al Faham", price: "₹520 / 290" },
      { name: "Kanthari Al Faham", price: "₹520 / 290" },
      { name: "Mexican Al Faham", price: "₹520 / 290" },
      { name: "Red Chilli Al Faham", price: "₹450 / 250 / 160" },
      { name: "Green Chilli Al Faham", price: "₹450 / 250 / 160" },
    ],
  },
  {
    id: "biriyani",
    title: "Biriyani",
    subtitle: "Aromatic & Authentic",
    image: "/images/menu-biriyani.jpg",
    items: [
      { name: "Chicken Dum Biriyani", price: "₹200" },
      { name: "Chicken Tikka Biriyani", price: "₹270" },
      { name: "Beef Biriyani", price: "₹220" },
      { name: "Mutton Biriyani", price: "₹340" },
      { name: "Fish Biriyani", price: "₹380" },
      { name: "Prawns Biriyani", price: "₹350" },
      { name: "Egg Biriyani", price: "₹160" },
      { name: "Veg Biriyani", price: "₹160" },
      { name: "Mushroom Biriyani", price: "₹220" },
      { name: "Paneer Biriyani", price: "₹280" },
    ],
  },
  {
    id: "egg",
    title: "Egg",
    subtitle: "Savory Delights",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Omelette", price: "₹80" },
      { name: "Egg Masala", price: "₹120" },
      { name: "Egg Roast", price: "₹110" },
    ],
  },
  {
    id: "meals",
    title: "Meals",
    subtitle: "Hearty Thalis",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Veg Meals", price: "₹160" },
      { name: "Fish Curry Meals", price: "₹200" },
    ],
  },
  {
    id: "from-sea",
    title: "From Sea",
    subtitle: "Ocean Fresh Catch",
    image: "/images/sushi-selection.jpg",
    items: [
      { name: "Kanava Thoran", price: "₹270" },
      { name: "Kanava Roast", price: "₹250" },
      { name: "Kanava Fry", price: "₹260" },
      { name: "Kanava Masala", price: "₹270" },
      { name: "Prawns Fry", price: "₹360" },
      { name: "Prawns Tawa Fry", price: "₹390" },
      { name: "Prawns Roast", price: "₹380" },
      { name: "Prawns Masala", price: "₹390" },
      { name: "Chemmeen Manga Curry", price: "₹420" },
      { name: "Chemmeen Kizhi", price: "₹450" },
      { name: "Neymeen Fry (King Fish)", price: "APS", note: "As Per Size" },
      { name: "Chemballi Fry (Red Snapper)", price: "APS", note: "As Per Size" },
      { name: "Karimeen Fry (Pearl Spot)", price: "APS", note: "As Per Size" },
    ],
  },
  {
    id: "arabic",
    title: "Arabic",
    subtitle: "Full / Half / Quarter",
    image: "/images/menu-arabic.jpg",
    items: [
      { name: "Mandhi", price: "₹730 / 410 / 240" },
      { name: "Al Faham Mandhi", price: "₹770 / 460 / 270" },
      { name: "Mandhi Chicken", price: "₹450 / 250 / 150" },
      { name: "Mandhi Rice", price: "₹120" },
      { name: "Al Faham", price: "₹450 / 250 / 160" },
      { name: "Grilled Chicken", price: "₹440 / 260 / 170" },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    subtitle: "Fresh Naans & Rotis",
    image: "/images/menu-breads.jpg",
    items: [
      { name: "Chappathi", price: "₹14" },
      { name: "Porotta", price: "₹14" },
      { name: "Wheat Porotta", price: "₹22" },
      { name: "Appam", price: "₹17" },
      { name: "Kubooz", price: "₹13" },
      { name: "Tandoori Roti", price: "Special" },
      { name: "Butter Roti", price: "Special" },
      { name: "Naan", price: "Special" },
      { name: "Butter Naan", price: "Special" },
      { name: "Garlic Naan", price: "Special" },
      { name: "Garlic Butter Naan", price: "Special" },
      { name: "Kulcha Roti", price: "₹30" },
    ],
  },
  {
    id: "flavoured-rice",
    title: "Flavoured Rice",
    subtitle: "Infused & Seasoned",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Biriyani Rice", price: "₹130" },
      { name: "Ghee Rice", price: "₹150" },
      { name: "Veg Pulao", price: "₹180" },
    ],
  },
  {
    id: "fish-on-plate",
    title: "Fish on Plate",
    subtitle: "Chef's Special Catch",
    image: "/images/sushi-selection.jpg",
    items: [
      { name: "Fish in Banana Leaf", price: "APS", note: "As Per Size" },
      { name: "Fish Molie", price: "APS", note: "As Per Size" },
      { name: "Fish Mappas", price: "APS", note: "As Per Size" },
      { name: "Fish Mulaikithath", price: "APS", note: "As Per Size" },
      { name: "Fish Masala", price: "APS", note: "As Per Size" },
      { name: "Aleppy Fish Curry", price: "APS", note: "As Per Size" },
      { name: "Fish Malabari", price: "APS", note: "As Per Size" },
    ],
  },
  {
    id: "tandoor",
    title: "Tandoor",
    subtitle: "Full / Half / Quarter",
    image: "/images/menu-tandoor.jpg",
    items: [
      { name: "Tandoori Chicken", price: "₹550 / 330 / 220" },
      { name: "Chicken Tikka", price: "₹370 / 240" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    subtitle: "Starters & Small Bites",
    image: "/images/truffle-pasta.jpg",
    items: [
      { name: "Chicken Lollypop", price: "₹350" },
      { name: "Dragon Chicken", price: "₹320" },
      { name: "Honey Glazed Chicken", price: "₹300" },
      { name: "Beef Dry Fry", price: "₹220" },
    ],
  },
  {
    id: "from-the-great-wall",
    title: "From the Great Wall",
    subtitle: "Gravy / Dry",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Gobi Manchurian", price: "₹170 / 150" },
      { name: "Chilli Gobi", price: "₹180 / 190" },
      { name: "Chilli Paneer", price: "₹230 / 260" },
      { name: "Paneer Manchurian", price: "₹260 / 270" },
      { name: "Chilli Chicken", price: "₹230 / 260" },
      { name: "Chilli Chicken Boneless", price: "₹270 / 300" },
      { name: "Ginger Chicken", price: "₹240 / 260" },
      { name: "Garlic Chicken", price: "₹240 / 260" },
      { name: "Chicken Manchurian", price: "₹260 / 280" },
      { name: "Beef Chilly", price: "₹250 / 270" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    subtitle: "Fresh & Crisp Greens",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Hawaiian Veg Salad", price: "₹380" },
      { name: "Hawaiian Chicken Salad", price: "₹380" },
      { name: "Tossed Salad", price: "₹220" },
      { name: "Russian Salad", price: "₹270" },
      { name: "Green Salad", price: "₹110" },
    ],
  },
  {
    id: "chinese-rice-and-noodles",
    title: "Chinese Rice & Noodles",
    subtitle: "Wok Tossed Classics",
    image: "/images/menu-chinese-noodles.jpg",
    items: [
      { name: "Veg Fried Rice", price: "₹170" },
      { name: "Egg Fried Rice", price: "₹180" },
      { name: "Chicken Fried Rice", price: "₹200" },
      { name: "Schezwan Fried Rice Veg", price: "₹180" },
      { name: "Schezwan Fried Rice Egg", price: "₹190" },
      { name: "Schezwan Fried Rice Chicken", price: "₹210" },
      { name: "Schezwan Fried Rice Mixed", price: "₹280" },
      { name: "Mushroom Fried Rice", price: "₹220" },
      { name: "Prawns Fried Rice", price: "₹360" },
      { name: "Paneer Fried Rice", price: "₹300" },
      { name: "Mushroom Paneer Fried Rice", price: "₹320" },
      { name: "Veg Noodles", price: "₹170" },
      { name: "Egg Noodles", price: "₹190" },
      { name: "Chicken Noodles", price: "₹210" },
      { name: "Mixed Noodles", price: "₹270" },
      { name: "Schezwan Noodles Veg", price: "₹190" },
      { name: "Schezwan Noodles Egg", price: "₹200" },
      { name: "Schezwan Noodles Chicken", price: "₹220" },
      { name: "Schezwan Noodles Mixed", price: "₹280" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Handcrafted & Wood-Fired",
    image: "/images/truffle-pasta.jpg",
    items: [
      { name: "Chicken Tikka Pizza", price: "₹349" },
      { name: "Paneer Mushroom Pizza", price: "₹339" },
    ],
  },
  {
    id: "thai-cuisine",
    title: "Thai Cuisine",
    subtitle: "Aromatic Herbs & Spices",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Oyster Chicken", price: "₹350" },
      { name: "Thai Veg Fried Rice", price: "₹260" },
      { name: "Thai Chicken Fried Rice", price: "₹310" },
      { name: "Thai Veg Noodles", price: "₹270" },
      { name: "Thai Chicken Noodles", price: "₹330" },
    ],
  },
  {
    id: "north-indian-veg-tastes",
    title: "North Indian Veg Taste",
    subtitle: "Rich Curries & Gravies",
    image: "/images/menu-veg-curry.jpg",
    items: [
      { name: "Dal Fry", price: "₹180" },
      { name: "Dal Tadka", price: "₹200" },
      { name: "Paneer Butter Masala", price: "₹250" },
      { name: "Paneer Masala", price: "₹230" },
      { name: "Kadai Paneer", price: "₹270" },
      { name: "Mushroom Masala", price: "₹240" },
      { name: "Aloo Jeera", price: "₹180" },
      { name: "Veg Kuruma", price: "₹150" },
    ],
  },
  {
    id: "indian-non-veg-dishes",
    title: "Indian Non Veg Dishes",
    subtitle: "Spiced Meat & Poultry",
    image: "/images/wagyu-steak.jpg",
    items: [
      { name: "Kasuri Malai Murgh", price: "₹350" },
      { name: "Methi Malai Chicken", price: "₹330" },
      { name: "Malai Chicken", price: "₹350" },
      { name: "Pepper Chicken Dry", price: "₹260" },
      { name: "Butter Chicken", price: "₹270" },
      { name: "Chicken Butter Boneless", price: "₹310" },
      { name: "Chicken Tikka Masala", price: "₹340" },
      { name: "Chicken Korma", price: "₹300" },
      { name: "Kadai Chicken", price: "₹300" },
      { name: "Chicken Mughalia", price: "₹350" },
    ],
  },
  {
    id: "mutton",
    title: "Mutton",
    subtitle: "Slow Cooked Royal Cuts",
    image: "/images/wagyu-steak.jpg",
    items: [
      { name: "Mutton Kadai", price: "₹390" },
      { name: "Mutton Varutharachathu", price: "₹360" },
      { name: "Mutton Curry", price: "₹330" },
      { name: "Mutton Stew", price: "₹370" },
      { name: "Mutton Roast", price: "₹360" },
    ],
  },
  {
    id: "beef",
    title: "Beef",
    subtitle: "Sizzling & Roasted",
    image: "/images/wagyu-steak.jpg",
    items: [
      { name: "Beef Fry", price: "₹210" },
      { name: "Beef Curry", price: "₹200" },
      { name: "Beef Varutharachathu", price: "₹260" },
      { name: "Beef Kadai", price: "₹260" },
      { name: "Beef Roast", price: "₹250" },
    ],
  },
  {
    id: "kerala-on-plate",
    title: "Kerala on Plate",
    subtitle: "Authentic Coastal Recipes",
    image: "/images/culinary-experience-img.png",
    items: [
      { name: "Chicken Curry with Coconut Milk", price: "₹280" },
      { name: "Chicken Ghee Roast", price: "₹280" },
      { name: "Chicken Curry", price: "₹180" },
      { name: "Chicken Fry", price: "₹210" },
      { name: "Chicken 65 / Boneless", price: "₹240 / 290" },
      { name: "Chicken Roast / Masala", price: "₹260" },
      { name: "Chicken Chettinad", price: "₹250" },
      { name: "Chicken Stew", price: "₹260" },
      { name: "Chicken Varutharachathu", price: "₹250" },
    ],
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 pt-28 sm:pt-36 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Banner Header matching design */}
          <div className="relative border-b border-[#E5D8C3] pb-12 mb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            {/* Left Header Content */}
            <div className="max-w-2xl">
              <span className="text-[#A88B52] text-xs font-semibold uppercase tracking-[0.35em] block mb-2">
                OUR MENU
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-stone-900 font-normal tracking-tight leading-tight mb-4">
                A WORLD <br className="hidden sm:block" />
                OF FLAVOUR
              </h1>

              {/* Accent Underline Bar */}
              <div className="w-16 h-[1.5px] bg-[#CDB58E] mb-5" />

              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Explore our diverse cuisines, crafted with the finest ingredients and inspired by cultures from around the world.
              </p>
            </div>

            {/* Right Decorative Line Art Illustration & Tagline */}
            <div className="hidden lg:flex items-center space-x-6 text-right">
              <div className="flex flex-col items-end justify-center">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A88B52] font-semibold">
                  GOOD
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A88B52] font-semibold">
                  FOOD
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A88B52] font-semibold">
                  BRINGS
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A88B52] font-semibold">
                  PEOPLE
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A88B52] font-semibold">
                  TOGETHER
                </span>
              </div>
              <div className="w-24 h-24 relative opacity-60">
                <svg viewBox="0 0 100 100" fill="none" stroke="#B38F4E" strokeWidth="1.5">
                  <path d="M50,90 Q70,50 90,10 Q50,30 50,90 Z" />
                  <path d="M50,90 Q30,50 10,10 Q50,30 50,90 Z" />
                  <line x1="50" y1="90" x2="50" y2="10" strokeWidth="1" strokeDasharray="2,2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Menu Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="group cursor-pointer bg-[#F4EFE7] hover:bg-[#EFE9DF] rounded-2xl overflow-hidden border border-[#E8DEC9]/70 hover:border-[#D9CBAE] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col"
              >
                {/* Image Cover */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Footer Content */}
                <div className="p-5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-serif text-xl font-normal text-stone-900 group-hover:text-[#B38F4E] transition-colors mb-0.5">
                      {category.title}
                    </h3>
                    <span className="text-stone-500 text-xs font-light tracking-wide">
                      {category.subtitle}
                    </span>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 group-hover:bg-[#B38F4E] group-hover:text-white group-hover:border-[#B38F4E] transition-all duration-300">
                    <span className="text-sm font-medium transform group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Category Dish Items Modal / Drawer */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#FAF7F2] text-stone-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E5D8C3] max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-48 w-full">
              <Image
                src={selectedCategory.image}
                alt={selectedCategory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 bg-stone-950/70 hover:bg-stone-950 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[#E6C896] text-[10px] uppercase tracking-[0.3em] font-semibold block mb-1">
                  {selectedCategory.subtitle}
                </span>
                <h2 className="font-serif text-3xl font-normal text-white">
                  {selectedCategory.title}
                </h2>
              </div>
            </div>

            {/* Modal Dishes List */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {selectedCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between pb-3 border-b border-[#E8DEC9]/60 last:border-0"
                >
                  <div className="flex flex-col">
                    <h4 className="font-serif text-lg font-medium text-stone-900">
                      {item.name}
                    </h4>
                    {item.note && (
                      <span className="text-stone-500 text-[11px] font-light">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-base font-semibold text-[#B38F4E] ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#F4EFE7] border-t border-[#E8DEC9] text-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-2 rounded-full bg-[#B38F4E] hover:bg-[#A37F3E] text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Close Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import { useState, useRef } from "react";

interface MenuItemData {
  name: string;
  price: string | number;
  note?: string;
}

interface MenuCategoryData {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItemData[];
}

const mobileMenuData: MenuCategoryData[] = [
  {
    id: "al-faham",
    title: "Flavoured Al Faham",
    subtitle: "Full / Half / Quarter",
    items: [
      { name: "Dragon Al Faham", price: "600 / 320" },
      { name: "Honey Chilli Al Faham", price: "510 / 280" },
      { name: "Peri Peri Al Faham", price: "490 / 270" },
      { name: "Lebanese Al Faham", price: "520 / 290" },
      { name: "Turkish Al Faham", price: "520 / 290" },
      { name: "Kanthari Al Faham", price: "520 / 290" },
      { name: "Mexican Al Faham", price: "520 / 290" },
      { name: "Red Chilli Al Faham", price: "450 / 250 / 160" },
      { name: "Green Chilli Al Faham", price: "450 / 250 / 160" },
    ],
  },
  {
    id: "biriyani",
    title: "Biriyani",
    subtitle: "Aromatic & Authentic",
    items: [
      { name: "Chicken Dum Biriyani", price: 200 },
      { name: "Chicken Tikka Biriyani", price: 270 },
      { name: "Beef Biriyani", price: 220 },
      { name: "Mutton Biriyani", price: 340 },
      { name: "Fish Biriyani", price: 380 },
      { name: "Prawns Biriyani", price: 350 },
      { name: "Egg Biriyani", price: 160 },
      { name: "Veg Biriyani", price: 160 },
      { name: "Mushroom Biriyani", price: 220 },
      { name: "Paneer Biriyani", price: 280 },
    ],
  },
  {
    id: "egg-meals",
    title: "Egg & Meals",
    subtitle: "Savory & Thali Platters",
    items: [
      { name: "Omelette", price: 80 },
      { name: "Egg Masala", price: 120 },
      { name: "Egg Roast", price: 110 },
      { name: "Veg Meals", price: 160 },
      { name: "Fish Curry Meals", price: 200 },
    ],
  },
  {
    id: "breads-rice",
    title: "Breads & Rice",
    subtitle: "Naans, Rotis & Pulao",
    items: [
      { name: "Biriyani Rice", price: 130 },
      { name: "Ghee Rice", price: 150 },
      { name: "Veg Pulao", price: 180 },
      { name: "Chappathi / Porotta", price: 14 },
      { name: "Wheat Porotta", price: 22 },
      { name: "Appam", price: 17 },
      { name: "Kubooz", price: 13 },
      { name: "Tandoori / Butter Roti", price: "Special" },
      { name: "Garlic Butter Naan", price: "Special" },
      { name: "Kulcha Roti", price: 30 },
    ],
  },
  {
    id: "from-sea",
    title: "From Sea",
    subtitle: "Fresh Catch Delicacies",
    items: [
      { name: "Kanava Thoran / Roast", price: "270 / 250" },
      { name: "Kanava Fry / Masala", price: "260 / 270" },
      { name: "Prawns Fry / Tawa Fry", price: "360 / 390" },
      { name: "Prawns Roast / Masala", price: "380 / 390" },
      { name: "Chemmeen Manga Curry / Kizhi", price: "420 / 450" },
      { name: "Neymeen Fry (King Fish)", price: "APS", note: "As Per Size" },
      { name: "Chemballi Fry (Red Snapper)", price: "APS", note: "As Per Size" },
      { name: "Karimeen Fry (Pearl Spot)", price: "APS", note: "As Per Size" },
    ],
  },
  {
    id: "arabic-appetizers",
    title: "Arabic & Appetizers",
    subtitle: "Mandhi & Starters",
    items: [
      { name: "Mandhi", price: "730 / 410 / 240" },
      { name: "Al Faham Mandhi", price: "770 / 460 / 270" },
      { name: "Mandhi Chicken", price: "450 / 250 / 150" },
      { name: "Mandhi Rice", price: 120 },
      { name: "Chicken Lollypop / Dragon", price: "350 / 320" },
      { name: "Honey Glazed / Beef Dry Fry", price: "300 / 220" },
    ],
  },
  {
    id: "chinese",
    title: "Great Wall & Chinese",
    subtitle: "Rice, Noodles & Gravies",
    items: [
      { name: "Gobi Manchurian / Chilli Gobi", price: "170 / 180" },
      { name: "Chilli Paneer / Manchurian", price: "230 / 260" },
      { name: "Chilli Chicken / Boneless", price: "230 / 270" },
      { name: "Veg / Egg / Chicken Fried Rice", price: "170 / 180 / 200" },
      { name: "Veg / Egg / Chicken Noodles", price: "170 / 190 / 210" },
      { name: "Schezwan Mixed Rice / Noodles", price: 280 },
    ],
  },
  {
    id: "indian-curries",
    title: "Indian Curries & Grills",
    subtitle: "North & South Specialties",
    items: [
      { name: "Dal Fry / Dal Tadka", price: "180 / 200" },
      { name: "Paneer Butter Masala", price: 250 },
      { name: "Kasuri Malai Murgh", price: 350 },
      { name: "Butter Chicken / Boneless", price: "270 / 310" },
      { name: "Mutton Kadai / Roast", price: "390 / 360" },
      { name: "Beef Fry / Roast", price: "210 / 250" },
      { name: "Chicken Chettinad / Stew", price: "250 / 260" },
    ],
  },
];

export default function MobileMenuScroll() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleChipClick = (index: number) => {
    setActiveTab(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / mobileMenuData.length;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / mobileMenuData.length;
      const newIndex = Math.round(scrollPos / cardWidth);
      if (newIndex !== activeTab && newIndex >= 0 && newIndex < mobileMenuData.length) {
        setActiveTab(newIndex);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Horizontal Category Pill Bar */}
      <div className="w-full overflow-x-auto no-scrollbar flex items-center space-x-2.5 px-4 mb-6 pt-2">
        {mobileMenuData.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => handleChipClick(idx)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeTab === idx
                ? "bg-[#B38F4E] text-white font-medium shadow-md"
                : "bg-[#F4EFE7] text-stone-700 border border-[#E8DEC9]"
              }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Horizontal Card Scroll Container with Touch Snap */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar"
      >
        {mobileMenuData.map((cat) => (
          <div
            key={cat.id}
            className="w-[88vw] max-w-[350px] flex-shrink-0 snap-center bg-[#F4EFE7] rounded-3xl p-6 border border-[#E8DEC9] shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="border-b border-[#E8DEC9] pb-3 mb-4">
                <span className="text-[#A88B52] text-xs font-semibold uppercase tracking-[0.25em] block mb-1">
                  {cat.subtitle}
                </span>
                <h3 className="font-serif text-3xl font-normal text-stone-900">
                  {cat.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-3.5">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <span className="font-serif text-lg font-semibold text-stone-900 pr-2">
                      {item.name}
                    </span>
                    <span className="font-sans text-sm font-bold text-[#B38F4E] whitespace-nowrap">
                      {item.price === "APS" ? "APS" : typeof item.price === "number" ? `₹${item.price}` : `₹${item.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Swipe Indicator Footer */}
            <div className="pt-5 mt-4 border-t border-[#E8DEC9]/60 flex items-center justify-between text-[11px] text-stone-500 uppercase tracking-widest">
              <span>Swipe for More</span>
              <span className="text-[#B38F4E]">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center space-x-2 mt-4">
        {mobileMenuData.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${activeTab === idx ? "w-6 bg-[#B38F4E]" : "w-2 bg-[#D9CBAE]"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

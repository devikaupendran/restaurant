"use client";

import { useState } from "react";
import Image from "next/image";

interface Dish {
  id: string;
  name: string;
  category: "all" | "signature" | "continental" | "asian" | "mediterranean";
  description: string;
  price: string;
  image: string;
  badge?: string;
}

const dishes: Dish[] = [
  {
    id: "1",
    name: "Black Truffle Tagliatelle",
    category: "signature",
    description:
      "Handcrafted pasta tossed in 36-month aged Parmigiano-Reggiano, French butter, and freshly shaved Umbrian black winter truffles.",
    price: "$38",
    image: "/images/truffle-pasta.jpg",
    badge: "Chef's Signature",
  },
  {
    id: "2",
    name: "A5 Japanese Wagyu Ribeye",
    category: "continental",
    description:
      "Wood-grilled Miyazaki Wagyu served with caramelized shallot jus, smoked bone marrow butter, and roasted heirloom carrots.",
    price: "$85",
    image: "/images/wagyu-steak.jpg",
    badge: "Prime Cut",
  },
  {
    id: "3",
    name: "Grandeur Sashimi & Nigiri Omakase",
    category: "asian",
    description:
      "Sustainably sourced Bluefin tuna, King salmon, and Hamachi with fresh Wasabi root, edible gold leaf, and artisanal soy reduction.",
    price: "$52",
    image: "/images/sushi-selection.jpg",
    badge: "Fresh Catch",
  },
  {
    id: "4",
    name: "Pan-Seared Mediterranean Sea Bass",
    category: "mediterranean",
    description:
      "Wild-caught Branzino with saffron risotto, charred baby fennel, caper berries, and extra virgin Kalamata olive emulsion.",
    price: "$44",
    image: "/images/hero-fallback.jpg",
    badge: "Gluten Free",
  },
];

const categories = [
  { id: "all", label: "Full Selection" },
  { id: "signature", label: "Chef's Signature" },
  { id: "continental", label: "Continental & Grills" },
  { id: "asian", label: "Pan-Asian Delicacies" },
  { id: "mediterranean", label: "Mediterranean" },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredDishes =
    activeTab === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-neutral-950 text-white relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] block mb-3">
            Culinary Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Our Multicuisine Menu
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Every dish tells a unique story of global traditions, elevated by master techniques and uncompromised ingredient freshness.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-amber-500 text-neutral-950 font-semibold shadow-md shadow-amber-500/20"
                  : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-neutral-900/60 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                {dish.badge && (
                  <span className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-md text-neutral-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {dish.badge}
                  </span>
                )}

                <span className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-md text-amber-400 font-serif text-xl font-bold px-3.5 py-1.5 rounded-lg border border-amber-500/30">
                  {dish.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 uppercase tracking-wider">
                  <span>Multicuisine Artistry</span>
                  <span className="text-amber-400">★ 4.9</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

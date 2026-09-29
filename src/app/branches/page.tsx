"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BranchDetail {
  id: string;
  name: string;
  badge: string;
  address: string;
  description: string;
  hours: string;
  timingSlots: string;
  facilities: string[];
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  image: string;
  mapLink: string;
}

const branchData: BranchDetail[] = [
  {
    id: "korani",
    name: "Korani (Attingal) Branch",
    badge: "Rooftop & Fine Dining",
    address: "Korani, Attingal, Keralam 695104",
    description: "Stunning open-air rooftop seating, curated Arabian grills, multi-cuisine buffet, and warm family hospitality.",
    hours: "Mon – Sun · 8:00 AM – 11:00 PM",
    timingSlots: "Breakfast: 8–10:30am · Lunch: 12:30–3:30pm · Dinner: 5:30–11pm",
    facilities: ["Open-Air Rooftop", "Private VIP Suites", "On-Site Parking", "AC Family Lounge"],
    phone: "+91 89436 67000",
    phoneRaw: "08943667000",
    whatsapp: "https://wa.me/918943667000?text=Hello%20Grandeur%20Restaurant%20Korani%20Branch",
    email: "concierge@grandeur-restaurant.com",
    instagram: "https://www.instagram.com/grandeurmulticuisinerestaurant",
    facebook: "https://www.facebook.com/grandeurmulticuisinerestaurant",
    image: "/images/gallery/korani-shop.jpg",
    mapLink: "https://maps.google.com/?q=Grandeur+Multicuisine+Restaurant+Korani+Attingal",
  },
  {
    id: "parippally",
    name: "Parippally Branch",
    badge: "Highway Fine Dining",
    address: "N.H. 47, Parippally, Keralam 691574",
    description: "Expansive dining halls, private family suites, all-you-can-eat multicuisine dining, and convenient highway parking.",
    hours: "Mon – Sun · 8:30 AM – 10:30 PM",
    timingSlots: "All You Can Eat Buffet · Private VIP Family Suites · Outdoor Patio",
    facilities: ["Outdoor Patio Dining", "Private VIP Suites", "Buffet Counters", "Spacious Guest Parking"],
    phone: "+91 89436 67000",
    phoneRaw: "08943667000",
    whatsapp: "https://wa.me/918943667000?text=Hello%20Grandeur%20Restaurant%20Parippally%20Branch",
    email: "concierge@grandeur-restaurant.com",
    instagram: "https://www.instagram.com/grandeurmulticuisinerestaurant",
    facebook: "https://www.facebook.com/grandeurmulticuisinerestaurant",
    image: "/images/gallery/paripally-shop.png",
    mapLink: "https://maps.google.com/?q=Grandeur+Multicuisine+Restaurant+Parippally",
  },
];

export default function BranchesPage() {
  const handleScrollToCards = () => {
    const el = document.getElementById("branch-list");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1814] font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden relative">
      {/* Light Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1536px] mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
        
        {/* Subtle Botanical Line Art Watermark */}
        <div className="absolute top-40 right-0 w-96 h-96 opacity-[0.06] pointer-events-none z-0">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#B38F4E]">
            <path d="M40,160 Q70,90 140,50 Q170,120 40,160 M90,110 Q120,80 150,70" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="140" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* ==================== HERO CARD BANNER ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden min-h-[420px] sm:min-h-[480px] shadow-lg border border-stone-200/80 bg-stone-900 flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Background Architecture Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/branches_hero_architecture.jpg"
              alt="Grandeur Branches Modern Dining Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-95 filter"
            />
            {/* Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Top Left Label */}
          <div className="relative z-10 flex items-center space-x-3 text-white/90">
            <span className="w-1.5 h-6 bg-[#C59E61] rounded-full" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              OUR BRANCH LOCATIONS
            </span>
          </div>

          {/* Middle Left Main Text Overlay Box */}
          <div className="relative z-10 max-w-xl text-white space-y-3 my-auto pt-6 pb-12 sm:pb-16">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-none drop-shadow-md">
              Our Branches
            </h1>
            <p className="text-stone-200 text-sm sm:text-base font-light leading-relaxed drop-shadow">
              Modern multicuisine dining spaces, open-air rooftop lounges, and authentic flavors designed for your family & friends across Korani (Attingal) and Parippally.
            </p>
          </div>

          {/* Bottom Left Floating Cutout Pill Button Tab */}
          <div className="relative z-10 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleScrollToCards}
              className="px-7 py-3.5 rounded-full bg-[#1F2B20]/90 hover:bg-[#162017] backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl flex items-center space-x-2.5 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Branch Locations</span>
              <span className="text-sm">↓</span>
            </motion.button>

            {/* Quick Location Pills */}
            <div className="hidden sm:flex items-center space-x-3 text-xs text-white/80 font-medium">
              <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">📍 Korani (Attingal)</span>
              <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">📍 Parippally</span>
            </div>
          </div>
        </motion.section>

        {/* ==================== STACKED WHITE BRANCH LISTING CARDS ==================== */}
        <section id="branch-list" className="scroll-mt-32 space-y-8">
          {branchData.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-stone-200/80 shadow-md hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Specs & Contact Details */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                      {branch.name}
                    </h2>
                    <span className="px-4 py-1.5 rounded-full bg-[#F5EFE6] text-[#A88B52] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider flex-shrink-0 border border-[#E8DEC9]">
                      {branch.badge}
                    </span>
                  </div>

                  <p className="text-stone-500 text-xs sm:text-sm font-light mb-4">
                    {branch.address}
                  </p>

                  <div className="h-[1px] w-full bg-stone-100 mb-4" />

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light mb-5">
                    {branch.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-stone-800">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B38F4E]" />
                      <span className="font-bold text-stone-900">Operating Hours:</span>
                      <span className="text-stone-700">{branch.hours}</span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B38F4E]" />
                      <span className="font-bold text-stone-900">Timing Slots:</span>
                      <span className="text-stone-700">{branch.timingSlots}</span>
                    </div>

                    <div className="flex items-start space-x-2.5 pt-1">
                      <span className="w-2 h-2 rounded-full bg-[#B38F4E] mt-1.5" />
                      <span className="font-bold text-stone-900 flex-shrink-0 mt-0.5">Highlights:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {branch.facilities.map((fac, fIdx) => (
                          <span key={fIdx} className="px-3 py-1 rounded-full bg-[#F5EFE6] text-stone-800 text-[11px] font-medium border border-[#E8DEC9]">
                            ✓ {fac}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect & Direct Actions Bar (Strictly 2 Color Palette: Black & Gold Only) */}
                <div id="contact" className="pt-2 flex flex-wrap items-center gap-3">
                  {/* Get Directions (Gold Gradient Button) */}
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C59E61] via-[#B38F4E] to-[#A37E3E] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-1.5"
                  >
                    <span>Get Directions</span>
                    <span className="text-sm">↗</span>
                  </a>

                  {/* Call Us (Black Button with Gold Icon) */}
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className="px-4.5 py-3 rounded-full bg-[#1C1814] hover:bg-[#8B6914] text-white text-xs font-bold transition-all duration-300 flex items-center space-x-2 shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 text-[#C59E61] fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
                    </svg>
                    <span>Call Us</span>
                  </a>

                  {/* WhatsApp (Black Button with Gold Icon) */}
                  <a
                    href={branch.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4.5 py-3 rounded-full bg-[#1C1814] hover:bg-[#8B6914] text-white text-xs font-bold transition-all duration-300 flex items-center space-x-2 shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 text-[#C59E61] fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.127-1.333c1.472.802 3.141 1.226 4.88 1.227h.005c5.506 0 9.99-4.478 9.99-9.984 0-2.668-1.039-5.176-2.926-7.062A9.923 9.923 0 0012.012 2zm5.836 14.28c-.244.686-1.42 1.309-1.961 1.393-.497.078-1.144.11-1.848-.115-.432-.138-1.002-.326-1.741-.645-3.072-1.328-5.074-4.42-5.228-4.624-.153-.204-1.248-1.66-1.248-3.167 0-1.507.786-2.248 1.066-2.553.28-.305.611-.382.815-.382.204 0 .408.002.586.01.19.009.444-.072.695.53.254.61.865 2.112.941 2.265.076.153.127.331.025.534-.102.203-.153.33-.305.508-.153.178-.321.398-.458.534-.153.153-.313.32-.134.627.178.305.792 1.307 1.699 2.115 1.166 1.039 2.152 1.362 2.458 1.514.305.153.483.127.661-.076.178-.204.763-.89 0.967-1.196.204-.305.408-.254.686-.153.28.102 1.78.839 2.086.992.305.153.508.229.584.356.076.127.076.737-.168 1.423z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  {/* Email (Black Button with Gold Icon) */}
                  <a
                    href={`mailto:${branch.email}`}
                    className="px-4.5 py-3 rounded-full bg-[#1C1814] hover:bg-[#8B6914] text-white text-xs font-bold transition-all duration-300 flex items-center space-x-2 shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 text-[#C59E61] fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>Email</span>
                  </a>

                  {/* Instagram (Black Button with Gold Icon) */}
                  <a
                    href={branch.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4.5 py-3 rounded-full bg-[#1C1814] hover:bg-[#8B6914] text-white text-xs font-bold transition-all duration-300 flex items-center space-x-2 shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 text-[#C59E61] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Rounded Photo Box (Matching Mockup) */}
              <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 shadow-md group min-h-[280px]">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

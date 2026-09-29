"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  category: "Locations & Operating Hours" | "Cuisines & Dietary" | "Facilities & Ambiance" | "Website & Contact";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-locations",
    category: "Locations & Operating Hours",
    question: "Where are Grandeur Multicuisine Restaurant branches located?",
    answer: "We operate two premier fine dining branches in Kerala:\n1. Korani (Attingal) Branch: Located on NH 66, Korani, Attingal, Keralam 695104.\n2. Parippally Branch: Located on N.H. 47, Parippally, Kollam District, Keralam 691574."
  },
  {
    id: "faq-hours",
    category: "Locations & Operating Hours",
    question: "What are the daily operating hours for Korani and Parippally branches?",
    answer: "Both branches are open 7 days a week:\n• Korani (Attingal) Branch: 8:00 AM – 11:00 PM\n• Parippally Branch: 8:30 AM – 10:30 PM"
  },
  {
    id: "faq-cuisines",
    category: "Cuisines & Dietary",
    question: "What cuisines do you specialize in?",
    answer: "Grandeur is a authentic multicuisine restaurant offering curated dishes across multiple culinary styles:\n• Kerala authentic dishes & seafood roasts\n• Arabian charcoal grills, Alfaham & Mandi\n• Chinese wok specialties, noodles & sizzlers\n• Tandoori breads & North Indian curries\n• Fresh juices, milkshakes & mocktails"
  },
  {
    id: "faq-halal-veg",
    category: "Cuisines & Dietary",
    question: "Are vegetarian and Halal options available?",
    answer: "Yes! All meat and poultry served at Grandeur are 100% Halal certified. We also maintain dedicated vegetarian preparation stations for our extensive vegetarian menu items."
  },
  {
    id: "faq-online-menu",
    category: "Cuisines & Dietary",
    question: "Can I view the full menu and pricing online before visiting?",
    answer: "Yes, our complete menu with itemized descriptions, prices, and high-resolution photos is available under the Menu tab on our website."
  },
  {
    id: "faq-rooftop-ac",
    category: "Facilities & Ambiance",
    question: "Do you offer open-air rooftop dining and AC family rooms?",
    answer: "Our Korani (Attingal) branch features an open-air rooftop dining deck alongside climate-controlled indoor seating. Our Parippally branch offers private VIP family dining suites and spacious indoor hall seating."
  },
  {
    id: "faq-parking",
    category: "Facilities & Ambiance",
    question: "Is customer parking available at both branches?",
    answer: "Yes, both our Korani (Attingal) and Parippally branches feature spacious, free customer parking lots right on the premises for cars and two-wheelers."
  },
  {
    id: "faq-[#website-ordering]",
    category: "Website & Contact",
    question: "Does this website support table reservations or online food delivery?",
    answer: "Our website is designed as an informational showcase guide for our guests to explore our authentic menu, branch locations, and dining ambiance. We welcome walk-in guests directly at both our Korani and Parippally locations!"
  },
  {
    id: "faq-contact-direct",
    category: "Website & Contact",
    question: "How can I contact the restaurant for direct branch inquiries?",
    answer: "You can reach us directly via phone at +91 89436 67000 or send us a message on WhatsApp. Complete map directions and email contacts are also available on our Branches page."
  }
];

const categories = ["All Questions", "Locations & Operating Hours", "Cuisines & Dietary", "Facilities & Ambiance", "Website & Contact"] as const;

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Questions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("faq-locations");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All Questions" || faq.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#1C1814] font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden relative">
      {/* Light Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
        
        {/* ==================== HERO HEADER ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-4 pt-4"
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="w-8 h-[1px] bg-[#B38F4E]/60 inline-block" />
            <span className="text-[11px] sm:text-xs font-bold text-[#A88B52] uppercase tracking-[0.3em]">
              HELP & INFORMATION
            </span>
            <span className="w-8 h-[1px] bg-[#B38F4E]/60 inline-block" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C1814] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Find answers to common questions about our branch locations, menu offerings, dining facilities, and operating hours across Korani (Attingal) and Parippally.
          </p>
        </motion.div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, menus, or locations..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-stone-200/90 shadow-sm text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#B38F4E]/40 transition-all duration-300"
          />
          <svg className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 fill-current" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* ==================== CATEGORY FILTER TABS ==================== */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-black text-[#C59E61] shadow-md border border-[#C59E61]/40"
                  : "bg-white/80 hover:bg-white text-stone-700 border border-stone-200/80 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==================== FAQ ACCORDION LIST ==================== */}
        <div className="space-y-4 pt-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = expandedId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#A88B52] uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1814] tracking-tight">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-[#F5EFE6] text-[#B38F4E] flex items-center justify-center flex-shrink-0 border border-[#E8DEC9] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-stone-100 text-stone-600 text-sm font-light leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone-200/80 p-8 space-y-3">
              <p className="text-stone-500 text-sm">No questions found matching your search term.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All Questions"); }}
                className="text-xs font-bold text-[#A88B52] underline uppercase tracking-wider"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* ==================== STILL HAVE QUESTIONS CARD ==================== */}
        <div className="bg-[#FAF7F2] rounded-[2.5rem] p-8 sm:p-12 border border-[#E8DEC9] shadow-sm text-center space-y-6 mt-12">
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1814] tracking-tight">
              Still Have Questions?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
              Our branch concierges are happy to help with menu details, locations, and directions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+918943667000"
              className="px-6 py-3 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-2"
            >
              <span>Call Us Direct</span>
              <span>📞</span>
            </a>

            <a
              href="https://wa.me/918943667000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-2"
            >
              <span>WhatsApp Concierge</span>
              <span>💬</span>
            </a>

            <Link
              href="/branches"
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-bold text-xs uppercase tracking-[0.15em] shadow-2xs transition-all duration-300"
            >
              View Our Branches
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

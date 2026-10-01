"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "acceptance-terms",
      title: "ACCEPTANCE OF TERMS",
      content: [
        "Welcome to Grandeur Multicuisine Restaurant. This website is provided solely as an informational showcase to enable guests to discover our multicuisine menus, culinary specialties, and physical restaurant locations.",
        "By browsing or accessing this website, you agree to abide by these Terms of Service.",
      ],
    },
    {
      id: "informational-purpose",
      title: "INFORMATIONAL PURPOSE & NO ONLINE ORDERING",
      content: [
        "This website is designed strictly for informational and menu exploration purposes ('for knowing only').",
        "We do not process food orders, online cart checkouts, digital payments, or home delivery transactions on this website. All dining services, order placement, and payments take place exclusively in person at our physical restaurant locations.",
      ],
    },
    {
      id: "menu-accuracy",
      title: "MENU & PRICING DISCLAIMER",
      content: [
        "We make every effort to display accurate dish titles, descriptions, categories, and prices across all menu selections.",
        "However, dish availability, seasonal ingredients, special offers, and prices are subject to change at our physical branch locations without prior notification.",
      ],
    },
    {
      id: "intellectual-property",
      title: "INTELLECTUAL PROPERTY",
      content: [
        "All visual content, dish imagery, brand logos, custom icons, and written text on this website belong exclusively to Grandeur Multicuisine Restaurant.",
        "Unauthorized reproduction, copying, or commercial distribution of any site content or assets is strictly prohibited.",
      ],
    },
    {
      id: "limitation-liability",
      title: "LIMITATION OF LIABILITY",
      content: [
        "Grandeur Multicuisine Restaurant accepts no liability for temporary website downtime, minor typographical errors, or slight variations between online menu previews and in-restaurant availability.",
        "Guests with specific food allergies or dietary requirements should communicate them directly to our staff when dining at our branches.",
      ],
    },
    {
      id: "modifications-terms",
      title: "MODIFICATIONS TO TERMS & CONTACT",
      content: [
        "We reserve the right to revise or update these Terms of Service at any time as our website evolves. Updates will be published directly on this page.",
        "For any inquiries regarding our website or restaurant locations, feel free to email concierge@grandeur-restaurant.com or contact our branch managers directly.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-stone-900 font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden">
      {/* Light Navbar */}
      <Navbar />

      <main className="flex-1 pb-16 relative">
        {/* ==================== HERO BANNER ==================== */}
        <section className="relative pt-40 sm:pt-48 pb-16 px-6 sm:px-10 overflow-hidden bg-gradient-to-b from-[#EFE5D5] via-[#F4EFE5] to-[#F7F3EC] flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
          {/* Back Button */}
          <div className="absolute top-28 left-4 sm:left-8 lg:left-14 z-20">
            <BackButton href="/" label="Back to Home" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto z-10 pt-4"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
              <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
                LEGAL & TERMS
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1C1814] tracking-tight uppercase leading-none mb-3">
              Terms of Service
            </h1>

            <p className="text-stone-500 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              Guidelines for exploring our website & menu showcase
            </p>
          </motion.div>
        </section>

        {/* ==================== CONTENT SECTION ==================== */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Sidebar: Related Questions */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 bg-[#EFE8DC]/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#D9CDB8]/60 shadow-sm sticky top-32"
            >
              <h3 className="font-sans text-xs font-bold text-[#1C1814] uppercase tracking-[0.25em] mb-4 pb-3 border-b border-[#D4C4A8]/60">
                RELATED QUESTIONS
              </h3>

              <nav className="flex flex-col space-y-3">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-xs sm:text-sm font-medium text-stone-600 hover:text-[#8B6914] transition-colors leading-relaxed py-1 flex items-center space-x-2 group"
                  >
                    <span className="text-[#B38F4E] opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span>{sec.title.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}?</span>
                  </a>
                ))}
              </nav>
            </motion.aside>

            {/* Right Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-8 space-y-10 sm:space-y-12"
            >
              {sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-32 border-b border-stone-300/40 pb-8 sm:pb-10 last:border-0"
                >
                  <h2 className="font-sans text-sm sm:text-base font-bold text-[#1C1814] uppercase tracking-[0.2em] mb-4 leading-snug">
                    {sec.title}
                  </h2>

                  <div className="space-y-3 text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
                    {sec.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </motion.div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

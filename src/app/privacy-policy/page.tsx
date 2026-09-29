"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "your-privacy",
      title: "YOUR PRIVACY & SITE PURPOSE",
      content: [
        "At Grandeur Multicuisine Restaurant, we are committed to respecting and protecting your privacy.",
        "This website has been created purely for informational purposes—allowing guests to view our multicuisine menus, learn about our culinary offerings, and find our branch locations.",
      ],
    },
    {
      id: "no-online-ordering",
      title: "NO ONLINE ORDERING OR PAYMENT PROCESSING",
      content: [
        "Please note that this website does not support online food ordering, shopping carts, delivery checkouts, or payment transactions.",
        "The website is designed strictly as a digital menu showcase to inform you about our dishes and dining experiences. All food orders and dining transactions take place exclusively in person at our physical restaurant locations.",
      ],
    },
    {
      id: "information-collection",
      title: "WHAT INFORMATION DO WE COLLECT AND HOW DO WE USE IT?",
      content: [
        "Because our website is purely informational and does not require account creation or online orders, we collect minimal data:",
        "• Direct Inquiries: Your contact details (such as email address or phone number) only if you voluntarily reach out to us for dining information or feedback.",
        "• Technical Data: Anonymous standard web analytics (such as page views and browser type) used solely to optimize site presentation and loading speeds.",
        "We do not collect credit card details, billing addresses, or online order histories.",
      ],
    },
    {
      id: "sharing-information",
      title: "SHARING YOUR INFORMATION",
      content: [
        "Grandeur Multicuisine Restaurant strictly respects your privacy. We do not sell, rent, trade, or share any personal information provided during inquiries with third-party marketing companies.",
        "Information is only disclosed if required by law or legal obligations.",
      ],
    },
    {
      id: "menu-information",
      title: "MENU & PRICING INFORMATION",
      content: [
        "All dish titles, descriptions, categories, and prices listed on this website are provided for informational guidance to help you plan your dining visit.",
        "While we aim for complete accuracy, menu availability, seasonal items, and prices may vary slightly across our physical branch locations.",
      ],
    },
    {
      id: "policy-changes",
      title: "POLICY CHANGES & CONTACT",
      content: [
        "We may update this Privacy Policy periodically as our informational website evolves. Any updates will be reflected directly on this page.",
        "If you have any questions regarding our site or restaurant locations, please contact us at concierge@grandeur-restaurant.com or call our branch phone numbers.",
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
                LEGAL & PRIVACY
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1C1814] tracking-tight uppercase leading-none mb-3">
              Privacy Policy
            </h1>

            <p className="text-stone-500 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              Informational website privacy guidelines
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
                  <h2 className="font-sans text-xs sm:text-sm font-bold text-[#1C1814] uppercase tracking-[0.25em] mb-4 leading-snug">
                    {sec.title}
                  </h2>

                  <div className="space-y-3 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
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

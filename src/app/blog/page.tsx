"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "Culinary Traditions" | "Arabian Kitchen" | "Kitchen Secrets" | "Dining Experience";
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "arabian-grills-mandi-secrets",
    title: "The Secrets Behind Grandeur's Signature Arabian Grills & Mandi",
    excerpt: "Discover how authentic charcoal roasting, traditional marinade blends, and slow-cooked Mandi rice create our most beloved Arabian specialties.",
    category: "Arabian Kitchen",
    date: "September 24, 2026",
    readTime: "5 min read",
    author: "Chef Tariq Al-Mansoor",
    image: "/images/menu-arabic.jpg",
    content: [
      "At Grandeur Multicuisine Restaurant, Arabian cuisine is not just a menu section — it is a masterclass in slow cooking, spice harmonization, and traditional fire techniques.",
      "Our signature Mandi and Alfaham dishes begin with prime cuts of meat marinated for 12 hours in custom spice rub blends featuring green cardamom, sun-dried limes (Loomi), clove buds, and Kashmiri saffron.",
      "The secret to our melt-in-the-mouth texture lies in our custom clay ovens and open-flame charcoal grills. By maintaining precise embers, the natural juices are sealed inside while developing a distinct smoky aroma that guests travel miles to taste at our Korani and Parippally branches."
    ]
  },
  {
    id: "coastal-kerala-seafood-flavors",
    title: "Coastal Kerala Flavors: From Local Fishery to Plate",
    excerpt: "Exploring the authentic spices, freshly squeezed coconut milk, and aromatic curry leaves that define our coastal fish curries and roast delicacies.",
    category: "Culinary Traditions",
    date: "September 18, 2026",
    readTime: "4 min read",
    author: "Executive Chef Suresh Nair",
    image: "/images/menu-biriyani.jpg",
    content: [
      "Kerala's culinary identity is deeply rooted in its coastline and lush spice gardens. At Grandeur, we honor this rich heritage by sourcing fresh sea bass, pearl spot (Karimeen), and tiger prawns directly from regional coastal markets every morning.",
      "Each curry is simmered in traditional clay cookware (Meen Chatti) using cold-pressed coconut oil, crushed shallots, kokum, and organic curry leaves harvested from local farms.",
      "Whether you enjoy our signature Fish Pollichathu wrapped in banana leaves or our spicy Malabar Meen Curry, every bite reflects the timeless warmth of traditional Kerala hospitality."
    ]
  },
  {
    id: "rooftop-dining-korani-attangal",
    title: "Creating the Ambiance: Rooftop Fine Dining at Korani (Attingal)",
    excerpt: "How thoughtful architectural lighting, open-air seating, and serene garden landscaping offer an enchanting dining backdrop for families.",
    category: "Dining Experience",
    date: "September 10, 2026",
    readTime: "6 min read",
    author: "Grandeur Design Team",
    image: "/images/korani_branch_rooftop.jpg",
    content: [
      "A great meal is elevated by the atmosphere in which it is shared. When designing our Korani (Attingal) branch, our vision was to create a sanctuary where guests could unwind under the evening sky.",
      "Our open-air rooftop space combines warm ambient lighting, hand-finished wooden dining furniture, and subtle green foliage to create an intimate yet spacious atmosphere for family gatherings and celebrations.",
      "Combined with attentive table service and gentle background melodies, dining at Korani turns an ordinary evening into a cherished memory."
    ]
  },
  {
    id: "freshness-first-ingredient-sourcing",
    title: "Freshness First: Our Daily Kitchen Sourcing Ritual",
    excerpt: "Step inside our kitchen prep stations to see how farm-fresh vegetables, organic herbs, and hand-ground spice mixes are prepared daily.",
    category: "Kitchen Secrets",
    date: "September 02, 2026",
    readTime: "4 min read",
    author: "Kitchen Manager Priya Joseph",
    image: "/images/about-chef-plating.jpg",
    content: [
      "We believe that the secret to extraordinary flavor lies in unwavering commitment to fresh ingredients. We never use pre-packaged pastes or frozen storage shortcuts.",
      "Every morning at 6:00 AM, our culinary team inspects fresh deliveries of vegetables, dairy, poultry, and aromatic herbs. Whole spices are lightly roasted and ground in-house to preserve essential oils.",
      "This meticulous prep ritual ensures that every starter, soup, curry, and biriyani served across our branches delivers vibrant taste and peak nutrition."
    ]
  },
  {
    id: "multicuisine-flavor-harmony",
    title: "Multicuisine Fine Dining: Balancing Chinese, Indian & Arabic Palettes",
    excerpt: "How our kitchen stations are meticulously organized to deliver authentic regional flavor profiles under one roof.",
    category: "Culinary Traditions",
    date: "August 28, 2026",
    readTime: "5 min read",
    author: "Executive Chef Suresh Nair",
    image: "/images/chinese/chilli_chicken.jpg",
    content: [
      "Offering a true multicuisine menu requires dedicated specialization. At Grandeur, our kitchen is structured into distinct master chef stations for Chinese Wok cooking, Tandoori clay roasting, Arabian grilling, and South Indian curries.",
      "This ensures that our Szechuan noodles achieve authentic wok hei, our naan bread gets perfect tandoori blistering, and our biriyanis maintain aromatic dum layering.",
      "No matter what cravings your family members have, everyone finds their favorite dish crafted to perfection."
    ]
  },
  {
    id: "parippally-family-celebrations",
    title: "Hosting Memorable Family Celebrations at Parippally Branch",
    excerpt: "Spacious VIP suites, custom celebration platters, and dedicated hospitality for birthday dinners and family reunions.",
    category: "Dining Experience",
    date: "August 15, 2026",
    readTime: "4 min read",
    author: "Grandeur Concierge Team",
    image: "/images/parippally_branch_interior.jpg",
    content: [
      "From anniversary dinners to milestone birthdays, Grandeur Parippally branch is equipped with private VIP family suites and expansive dining rooms designed to accommodate large groups in comfort.",
      "Our team assists with custom family dining arrangements, group platters featuring our chef's top recommendations, and warm festive service.",
      "Visit our Parippally branch on NH 47 to experience hospitality crafted around family togetherness."
    ]
  }
];

const categories = ["All Articles", "Culinary Traditions", "Arabian Kitchen", "Kitchen Secrets", "Dining Experience"] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === "All Articles"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#1C1814] font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E] flex flex-col justify-between overflow-x-hidden relative">
      {/* Light Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1536px] mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
        
        {/* ==================== HERO SECTION ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 pt-4"
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="w-8 h-[1px] bg-[#B38F4E]/60 inline-block" />
            <span className="text-[11px] sm:text-xs font-bold text-[#A88B52] uppercase tracking-[0.3em]">
              OUR CULINARY JOURNAL
            </span>
            <span className="w-8 h-[1px] bg-[#B38F4E]/60 inline-block" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C1814] tracking-tight leading-tight">
            Culinary Stories & Insights
          </h1>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Explore articles on spice traditions, kitchen secrets, Arabian charcoal grilling techniques, and fine dining experiences across our branches.
          </p>
        </motion.div>

        {/* ==================== FEATURED ARTICLE BANNER ==================== */}
        {selectedCategory === "All Articles" && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            {/* Featured Image */}
            <div className="lg:col-span-7 relative aspect-16/10 sm:aspect-16/9 lg:aspect-auto h-full min-h-[320px] sm:min-h-[400px] overflow-hidden group">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                FEATURED ARTICLE
              </div>
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs text-stone-500 font-medium">
                  <span className="text-[#A88B52] font-semibold">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1814] tracking-tight leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-stone-500 font-medium">
                  By <span className="text-stone-900 font-semibold">{featuredPost.author}</span>
                </div>

                <button
                  onClick={() => setActivePost(featuredPost)}
                  className="px-6 py-2.5 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                >
                  <span>Read Article</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ==================== CATEGORY FILTER TABS ==================== */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-4">
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

        {/* ==================== BLOG POSTS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden border-b border-stone-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-stone-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#1C1814] tracking-tight leading-snug group-hover:text-[#B38F4E] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                <span className="text-xs text-stone-500 font-medium">
                  By {post.author.split(" ")[0]}
                </span>

                <button
                  onClick={() => setActivePost(post)}
                  className="text-xs font-bold text-[#A88B52] hover:text-[#1C1814] uppercase tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Full</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================== ARTICLE READER MODAL ==================== */}
        <AnimatePresence>
          {activePost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FAF7F2] max-w-3xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-200/80 my-8 max-h-[90vh] flex flex-col justify-between"
              >
                {/* Modal Header Bar */}
                <div className="p-6 bg-white border-b border-stone-200/80 flex items-center justify-between sticky top-0 z-10">
                  <div className="flex items-center space-x-3 text-xs text-stone-500">
                    <span className="px-3 py-1 rounded-full bg-[#F5EFE6] text-[#A88B52] font-semibold text-[10px] uppercase border border-[#E8DEC9]">
                      {activePost.category}
                    </span>
                    <span>•</span>
                    <span>{activePost.readTime}</span>
                  </div>

                  <button
                    onClick={() => setActivePost(null)}
                    className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors cursor-pointer font-bold"
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1814] tracking-tight leading-tight">
                      {activePost.title}
                    </h2>

                    <div className="text-xs text-stone-500 font-medium">
                      Published on {activePost.date} by <span className="text-stone-900 font-semibold">{activePost.author}</span>
                    </div>
                  </div>

                  {/* Banner Image */}
                  <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200/80">
                    <Image
                      src={activePost.image}
                      alt={activePost.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-stone-700 text-sm sm:text-base font-light leading-relaxed">
                    {activePost.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Bottom Navigation Link */}
                  <div className="pt-6 border-t border-stone-200/80 flex items-center justify-between">
                    <Link
                      href="/menu"
                      onClick={() => setActivePost(null)}
                      className="px-6 py-3 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Explore Our Menu</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href="/branches"
                      onClick={() => setActivePost(null)}
                      className="text-xs font-semibold text-stone-600 hover:text-stone-950 underline underline-offset-4"
                    >
                      Visit Our Branches
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

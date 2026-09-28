import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CulinaryExperience from "@/components/CulinaryExperience";
import MenuBook from "@/components/menu-book";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Video & Headline */}
        <Hero />

        {/* Section 2: Why Dine With Grandeur / Culinary Experience */}
        <CulinaryExperience />

        {/* Section 3: Interactive Menu Journal & Mobile Scroll Menu */}
        <MenuBook />

        {/* Section 4: Bento Gallery & Rating Showcase */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


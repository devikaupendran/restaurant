import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CulinaryExperience from "@/components/CulinaryExperience";
import MenuBook from "@/components/menu-book";
import OurBranches from "@/components/OurBranches";
import GallerySection from "@/components/GallerySection";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import { getGoogleReviews } from "@/lib/googleReviews";

export default async function Home() {
  // Fetch Google reviews at build-time / with ISR (revalidates every 24h)
  const placeDetails = await getGoogleReviews();

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#1C1814] flex flex-col font-sans selection:bg-[#B38F4E]/20 selection:text-[#B38F4E]">
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

        {/* Section 4: Our Branches Store Showcase */}
        <OurBranches />

        {/* Section 5: Bento Gallery & Rating Showcase */}
        <GallerySection />

        {/* Section 6: Google Reviews & Ratings */}
        <GoogleReviews placeDetails={placeDetails} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


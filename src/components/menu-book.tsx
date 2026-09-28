"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import MobileMenuScroll from "./MobileMenuScroll";

// ─── Palette & Tokens ──────────────────────────────────────────────
const C = {
  ivory: "#FAF7F2",
  cream: "#F4EFE7",
  champagne: "#E8D5A3",
  gold: "#C9A84C",
  goldLight: "#E2C97E",
  goldDeep: "#8B6914",
  linen: "#EDE0CC",
  blush: "#E8C8B8",
  mocha: "#5C4033",
  espresso: "#1A100C",
  charcoal: "#121212",
};

// ─── Custom Hook for Window Size ──────────────────────────────────
function useWindowSize() {
  const [size, setSize] = useState({ width: 1200, height: 800 });
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return size;
}

// ─── Global Styles ────────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
    
    .paper-texture::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle, rgba(0,0,0,0.015) 1px, transparent 1px);
      background-size: 8px 8px;
      pointer-events: none;
      opacity: 0.5;
      mix-blend-mode: multiply;
      z-index: 10;
    }

    .book-spine-subtle {
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(0,0,0,0.02) 25%, 
        rgba(0,0,0,0.06) 50%, 
        rgba(0,0,0,0.02) 75%, 
        transparent 100%
      );
    }
  `}</style>
);

// ─── UI Helper Components ─────────────────────────────────────────
const GoldDivider = ({ width = "80%" }: { width?: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "10px auto", width }}>
    <div style={{ flex: 1, height: 0.5, background: C.gold, opacity: 0.4 }} />
    <div style={{ width: 4, height: 4, transform: 'rotate(45deg)', background: C.gold, opacity: 0.7 }} />
    <div style={{ flex: 1, height: 0.5, background: C.gold, opacity: 0.4 }} />
  </div>
);

const MenuItem = ({ name, price, note }: { name: string; price: string | number; note?: string }) => (
  <div style={{ marginBottom: 5 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 600, color: C.espresso, lineHeight: 1.25 }}>
        {name}
      </span>
      <span style={{ flex: 1, borderBottom: "1px dotted rgba(92,64,51,0.25)", margin: "0 6px" }} />
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: C.goldDeep, whiteSpace: "nowrap" }}>
        {price === "APS" ? "APS" : typeof price === "number" ? `₹${price}` : `₹${price}`}
      </span>
    </div>
    {note && (
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: C.mocha, opacity: 0.8, marginTop: 1 }}>
        {note}
      </div>
    )}
  </div>
);

const CategoryHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div style={{ marginBottom: 12, textAlign: "left" }}>
    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: C.espresso, letterSpacing: "0.02em", lineHeight: 1.2 }}>
      {title}
    </h3>
    {subtitle && (
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.goldDeep, opacity: 0.85, marginTop: 2 }}>
        {subtitle}
      </div>
    )}
    <div style={{ width: 32, height: 1.5, background: C.gold, marginTop: 4, opacity: 0.7 }} />
  </div>
);

// ─── Pages Content ─────────────────────────────────────────

// Cover Page
const CoverPage = () => (
  <div style={{
    width: "100%", height: "100%", background: C.espresso,
    display: "flex", flexDirection: "column", padding: "8%",
    color: C.ivory, position: "relative", overflow: "hidden"
  }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }}>
      <svg width="100%" height="100%">
        <pattern id="menu-pattern-book" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="1.5" fill={C.gold} />
          <path d="M40 10 L40 70 M10 40 L70 40" stroke={C.gold} strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#menu-pattern-book)" />
      </svg>
    </div>
    <div style={{ flex: 1, border: `1px solid rgba(201,168,76,0.35)`, padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <img
        src="/images/logo.png"
        alt="Grandeur Logo"
        style={{ width: "80%", maxWidth: 240, height: "auto", maxHeight: 90, objectFit: "contain", marginBottom: 16 }}
      />
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 8.5, letterSpacing: "0.4em", textTransform: "uppercase", color: C.champagne, marginBottom: 12 }}>
        The Gastronomy Collection
      </div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4.5vw, 44px)", fontWeight: 400, letterSpacing: "0.15em", lineHeight: 1.1, marginBottom: 8 }}>
        GRANDEUR
      </h1>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: C.goldLight, marginBottom: 16 }}>
        Multicuisine Excellence
      </div>
      <GoldDivider width="50%" />
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: C.champagne, opacity: 0.8, marginTop: 12 }}>
        Official Restaurant Menu
      </div>
    </div>
    <div style={{ position: "absolute", bottom: "4%", left: 0, right: 0, textAlign: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 8, letterSpacing: "0.3em", opacity: 0.5, textTransform: "uppercase" }}>
      A Taste Worth Remembering
    </div>
  </div>
);

// Inside Cover Welcome
const InsideCoverPage = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "8%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <div style={{ textAlign: "center", maxWidth: 340, margin: "0 auto" }}>
      <img
        src="/images/logo.png"
        alt="Grandeur Logo"
        style={{ width: "85%", maxWidth: 240, height: "auto", maxHeight: 85, objectFit: "contain", margin: "0 auto 16px" }}
      />
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: C.espresso, marginBottom: 12 }}>
        Welcome to Grandeur
      </h2>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14.5, color: C.mocha, fontStyle: "italic", lineHeight: 1.6, marginBottom: 16 }}>
        "Every dish tells a unique story of global traditions, elevated by master techniques and uncompromised ingredient freshness."
      </p>
      <GoldDivider width="40%" />
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 9.5, color: C.mocha, opacity: 0.8, lineHeight: 1.5 }}>
        Explore our curated selection of 18 global multicuisine categories, crafted with passion and precision.
      </p>
    </div>
  </div>
);

// Menu Pages
const Page1_AlFaham = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Flavoured Al Faham" subtitle="Full / Half / Quarter" />
    <MenuItem name="Dragon Al Faham" price="600 / 320" />
    <MenuItem name="Honey Chilli Al Faham" price="510 / 280" />
    <MenuItem name="Peri Peri Al Faham" price="490 / 270" />
    <MenuItem name="Lebanese Al Faham" price="520 / 290" />
    <MenuItem name="Turkish Al Faham" price="520 / 290" />
    <MenuItem name="Kanthari Al Faham" price="520 / 290" />
    <MenuItem name="Mexican Al Faham" price="520 / 290" />
    <MenuItem name="Red Chilli Al Faham" price="450 / 250 / 160" />
    <MenuItem name="Green Chilli Al Faham" price="450 / 250 / 160" />
  </div>
);

const Page2_Biriyani = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Biriyani" subtitle="Aromatic & Authentic" />
    <MenuItem name="Chicken Dum Biriyani" price={200} />
    <MenuItem name="Chicken Tikka Biriyani" price={270} />
    <MenuItem name="Beef Biriyani" price={220} />
    <MenuItem name="Mutton Biriyani" price={340} />
    <MenuItem name="Fish Biriyani" price={380} />
    <MenuItem name="Prawns Biriyani" price={350} />
    <MenuItem name="Egg Biriyani" price={160} />
    <MenuItem name="Veg Biriyani" price={160} />
    <MenuItem name="Mushroom Biriyani" price={220} />
    <MenuItem name="Paneer Biriyani" price={280} />
  </div>
);

const Page3_EggMeals = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Egg Specialties" subtitle="Rich & Savory" />
    <MenuItem name="Omelette" price={80} />
    <MenuItem name="Egg Masala" price={120} />
    <MenuItem name="Egg Roast" price={110} />

    <div style={{ marginTop: 16 }}>
      <CategoryHeader title="Traditional Meals" subtitle="Hearty Thalis" />
      <MenuItem name="Veg Meals" price={160} />
      <MenuItem name="Fish Curry Meals" price={200} />
    </div>
  </div>
);

const Page4_RiceBreads = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Flavoured Rice" subtitle="Infused & Seasoned" />
    <MenuItem name="Biriyani Rice" price={130} />
    <MenuItem name="Ghee Rice" price={150} />
    <MenuItem name="Veg Pulao" price={180} />

    <div style={{ marginTop: 14 }}>
      <CategoryHeader title="Breads" subtitle="Fresh Naans & Rotis" />
      <MenuItem name="Chappathi" price={14} />
      <MenuItem name="Porotta" price={14} />
      <MenuItem name="Wheat Porotta" price={22} />
      <MenuItem name="Appam" price={17} />
      <MenuItem name="Kubooz" price={13} />
      <MenuItem name="Tandoori Roti / Butter Roti" price="Special" />
      <MenuItem name="Naan / Butter Naan" price="Special" />
      <MenuItem name="Garlic Naan / Garlic Butter Naan" price="Special" />
      <MenuItem name="Kulcha Roti" price={30} />
    </div>
  </div>
);

const Page5_FromSea = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="From Sea" subtitle="Ocean Fresh Catch" />
    <MenuItem name="Kanava Thoran" price={270} />
    <MenuItem name="Kanava Roast" price={250} />
    <MenuItem name="Kanava Fry" price={260} />
    <MenuItem name="Kanava Masala" price={270} />
    <MenuItem name="Prawns Fry" price={360} />
    <MenuItem name="Prawns Tawa Fry" price={390} />
    <MenuItem name="Prawns Roast" price={380} />
    <MenuItem name="Prawns Masala" price={390} />
    <MenuItem name="Chemmeen Manga Curry" price={420} />
    <MenuItem name="Chemmeen Kizhi" price={450} />
    <MenuItem name="Neymeen Fry (King Fish)" price="APS" note="As Per Size" />
    <MenuItem name="Chemballi Fry (Red Snapper)" price="APS" note="As Per Size" />
    <MenuItem name="Karimeen Fry (Pearl Spot)" price="APS" note="As Per Size" />
  </div>
);

const Page6_FishTandoor = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Fish on Plate" subtitle="Chef's Special Catch" />
    <MenuItem name="Fish in Banana Leaf" price="APS" />
    <MenuItem name="Fish Molie" price="APS" />
    <MenuItem name="Fish Mappas" price="APS" />
    <MenuItem name="Fish Mulaikithath" price="APS" />
    <MenuItem name="Fish Masala" price="APS" />
    <MenuItem name="Aleppy Fish Curry" price="APS" />
    <MenuItem name="Fish Malabari" price="APS" />

    <div style={{ marginTop: 14 }}>
      <CategoryHeader title="Tandoor" subtitle="Full / Half / Quarter" />
      <MenuItem name="Tandoori Chicken" price="550 / 330 / 220" />
      <MenuItem name="Chicken Tikka" price="370 / 240" />
    </div>
  </div>
);

const Page7_ArabicAppetizers = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Arabic" subtitle="Full / Half / Quarter" />
    <MenuItem name="Mandhi" price="730 / 410 / 240" />
    <MenuItem name="Al Faham Mandhi" price="770 / 460 / 270" />
    <MenuItem name="Mandhi Chicken" price="450 / 250 / 150" />
    <MenuItem name="Mandhi Rice" price={120} />
    <MenuItem name="Al Faham" price="450 / 250 / 160" />
    <MenuItem name="Grilled Chicken" price="440 / 260 / 170" />

    <div style={{ marginTop: 14 }}>
      <CategoryHeader title="Appetizers" subtitle="Starters & Small Bites" />
      <MenuItem name="Chicken Lollypop" price={350} />
      <MenuItem name="Dragon Chicken" price={320} />
      <MenuItem name="Honey Glazed Chicken" price={300} />
      <MenuItem name="Beef Dry Fry" price={220} />
    </div>
  </div>
);

const Page8_SaladsPizza = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Salads" subtitle="Fresh & Crisp Greens" />
    <MenuItem name="Hawaiian Veg Salad" price={380} />
    <MenuItem name="Hawaiian Chicken Salad" price={380} />
    <MenuItem name="Tossed Salad" price={220} />
    <MenuItem name="Russian Salad" price={270} />
    <MenuItem name="Green Salad" price={110} />

    <div style={{ marginTop: 16 }}>
      <CategoryHeader title="Pizza" subtitle="Handcrafted & Wood-Fired" />
      <MenuItem name="Chicken Tikka Pizza" price={349} />
      <MenuItem name="Paneer Mushroom Pizza" price={339} />
    </div>
  </div>
);

const Page9_GreatWall = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="From the Great Wall" subtitle="Gravy / Dry" />
    <MenuItem name="Gobi Manchurian" price="170 / 150" />
    <MenuItem name="Chilli Gobi" price="180 / 190" />
    <MenuItem name="Chilli Paneer" price="230 / 260" />
    <MenuItem name="Paneer Manchurian" price="260 / 270" />
    <MenuItem name="Chilli Chicken" price="230 / 260" />
    <MenuItem name="Chilli Chicken Boneless" price="270 / 300" />
    <MenuItem name="Ginger Chicken" price="240 / 260" />
    <MenuItem name="Garlic Chicken" price="240 / 260" />
    <MenuItem name="Chicken Manchurian" price="260 / 280" />
    <MenuItem name="Beef Chilly" price="250 / 270" />
  </div>
);

const Page10_ChineseNoodles = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Chinese Rice & Noodles" subtitle="Wok Tossed Classics" />
    <MenuItem name="Veg / Egg Fried Rice" price="170 / 180" />
    <MenuItem name="Chicken Fried Rice" price={200} />
    <MenuItem name="Schezwan Fried Rice Veg/Egg/Chicken" price="180 / 190 / 210" />
    <MenuItem name="Schezwan Mixed Fried Rice" price={280} />
    <MenuItem name="Mushroom / Paneer Fried Rice" price="220 / 300" />
    <MenuItem name="Prawns Fried Rice" price={360} />
    <MenuItem name="Veg / Egg Noodles" price="170 / 190" />
    <MenuItem name="Chicken / Mixed Noodles" price="210 / 270" />
    <MenuItem name="Schezwan Noodles Veg/Egg/Chicken" price="190 / 200 / 220" />
    <MenuItem name="Schezwan Noodles Mixed" price={280} />
  </div>
);

const Page11_ThaiNorthIndian = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Thai Cuisine" subtitle="Aromatic Herbs & Spices" />
    <MenuItem name="Oyster Chicken" price={350} />
    <MenuItem name="Thai Veg / Chicken Fried Rice" price="260 / 310" />
    <MenuItem name="Thai Veg / Chicken Noodles" price="270 / 330" />

    <div style={{ marginTop: 14 }}>
      <CategoryHeader title="North Indian Veg Taste" subtitle="Rich Curries & Gravies" />
      <MenuItem name="Dal Fry / Dal Tadka" price="180 / 200" />
      <MenuItem name="Paneer Butter Masala / Paneer Masala" price="250 / 230" />
      <MenuItem name="Kadai Paneer / Mushroom Masala" price="270 / 240" />
      <MenuItem name="Aloo Jeera / Veg Kuruma" price="180 / 150" />
    </div>
  </div>
);

const Page12_IndianNonVegMutton = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Indian Non Veg Dishes" subtitle="Spiced Meat & Poultry" />
    <MenuItem name="Kasuri Malai Murgh / Methi Malai" price="350 / 330" />
    <MenuItem name="Pepper Chicken Dry / Butter Chicken" price="260 / 270" />
    <MenuItem name="Chicken Butter Boneless" price={310} />
    <MenuItem name="Chicken Tikka Masala / Korma" price="340 / 300" />
    <MenuItem name="Kadai Chicken / Mughalia" price="300 / 350" />

    <div style={{ marginTop: 14 }}>
      <CategoryHeader title="Mutton" subtitle="Slow Cooked Royal Cuts" />
      <MenuItem name="Mutton Kadai / Varutharachathu" price="390 / 360" />
      <MenuItem name="Mutton Curry / Stew / Roast" price="330 / 370 / 360" />
    </div>
  </div>
);

const Page13_BeefKerala = () => (
  <div className="paper-texture" style={{ width: "100%", height: "100%", background: C.ivory, padding: "7% 7%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <CategoryHeader title="Beef" subtitle="Sizzling & Roasted" />
    <MenuItem name="Beef Fry / Curry" price="210 / 200" />
    <MenuItem name="Beef Varutharachathu / Kadai / Roast" price="260 / 260 / 250" />

    <div style={{ marginTop: 14 }}>
      <CategoryHeader title="Kerala on Plate" subtitle="Authentic Coastal Recipes" />
      <MenuItem name="Chicken Curry with Coconut Milk" price={280} />
      <MenuItem name="Chicken Ghee Roast / Curry / Fry" price="280 / 180 / 210" />
      <MenuItem name="Chicken 65 / Boneless" price="240 / 290" />
      <MenuItem name="Chicken Roast / Masala / Chettinad" price="260 / 250" />
      <MenuItem name="Chicken Stew / Varutharachathu" price="260 / 250" />
    </div>
  </div>
);

const BackCoverPage = () => (
  <div style={{
    width: "100%", height: "100%", background: C.espresso,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    color: C.ivory, padding: "12%", textAlign: "center"
  }}>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, marginBottom: 14 }}>
      Thank You
    </div>
    <GoldDivider width="50%" />
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 15, color: C.goldLight, opacity: 0.9, lineHeight: 1.7, marginBottom: 16 }}>
      "Good food brings people together."
    </p>
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 9.5, color: C.champagne, opacity: 0.8, lineHeight: 1.5 }}>
      GRANDEUR MULTICUISINE RESTAURANT
    </div>
    <div style={{ marginTop: 24, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 8, letterSpacing: "0.3em", opacity: 0.5, textTransform: "uppercase" }}>
      Crafted with Passion & Precision
    </div>
  </div>
);

// ─── 3D Leaf Component ───────────────────────────────────────────
const Leaf = ({ index, zIndex, targetRotation, frontContent, backContent, isSpread }: any) => {
  return (
    <motion.div
      initial={{ rotateY: targetRotation }}
      animate={{ rotateY: targetRotation }}
      transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1] }}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: isSpread ? "50%" : "100%",
        height: "100%",
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        willChange: "transform",
        zIndex: zIndex,
      }}
    >
      {/* Front Side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          background: C.ivory,
          boxShadow: isSpread ? "inset 6px 0 10px -4px rgba(0,0,0,0.04), 12px 0 25px rgba(0,0,0,0.06)" : "0 0 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {frontContent}
      </div>

      {/* Back Side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: C.ivory,
          boxShadow: isSpread ? "inset -6px 0 10px -4px rgba(0,0,0,0.04), -12px 0 25px rgba(0,0,0,0.06)" : "0 0 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {backContent}
      </div>
    </motion.div>
  );
};

// ─── Main FlipBook Component ───────────────────────────────────────
const FlipBook = () => {
  const { width } = useWindowSize();
  const [mounted, setMounted] = useState(false);
  const isSpread = width > 900;
  const [currentSheet, setCurrentSheet] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 8 Sheets (16 Total Pages)
  const sheets = useMemo(() => [
    { front: <CoverPage />, back: <InsideCoverPage /> },
    { front: <Page1_AlFaham />, back: <Page2_Biriyani /> },
    { front: <Page3_EggMeals />, back: <Page4_RiceBreads /> },
    { front: <Page5_FromSea />, back: <Page6_FishTandoor /> },
    { front: <Page7_ArabicAppetizers />, back: <Page8_SaladsPizza /> },
    { front: <Page9_GreatWall />, back: <Page10_ChineseNoodles /> },
    { front: <Page11_ThaiNorthIndian />, back: <Page12_IndianNonVegMutton /> },
    { front: <Page13_BeefKerala />, back: <BackCoverPage /> },
  ], []);

  const totalSheets = sheets.length;

  const flipNext = useCallback(() => {
    if (isFlipping || currentSheet >= totalSheets - 1) return;
    setIsFlipping(true);
    setCurrentSheet(prev => prev + 1);
    setTimeout(() => setIsFlipping(false), 700);
  }, [currentSheet, totalSheets, isFlipping]);

  const flipPrev = useCallback(() => {
    if (isFlipping || currentSheet <= 1) return;
    setIsFlipping(true);
    setCurrentSheet(prev => prev - 1);
    setTimeout(() => setIsFlipping(false), 700);
  }, [currentSheet, isFlipping]);

  if (!mounted) {
    return (
      <div className="w-full flex justify-center items-center py-6 min-h-[580px] sm:min-h-[640px]">
        <div style={{ width: isSpread ? "860px" : "min(90vw, 420px)", height: isSpread ? "560px" : "min(76vh, 560px)", borderRadius: 12, overflow: "hidden", display: "flex", background: C.ivory }}>
          <div style={{ flex: 1 }}><InsideCoverPage /></div>
          <div style={{ flex: 1 }}><Page1_AlFaham /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Outer Flex Container Placing Arrow Buttons Outside the Book */}
      <div className="w-full max-w-6xl flex items-center justify-between relative z-10 px-2 sm:px-6">
        {/* Left Arrow Button Outside Book (Disabled at Sheet 1 so notebook stays open) */}
        <button
          onClick={flipPrev}
          disabled={currentSheet <= 1}
          aria-label="Previous page"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D9CBAE] bg-[#F4EFE7] hover:bg-[#B38F4E] text-stone-800 hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 font-serif text-xl sm:text-2xl flex-shrink-0 ${currentSheet <= 1 ? "opacity-25 cursor-not-allowed" : "opacity-90 hover:scale-110 cursor-pointer"
            }`}
        >
          ←
        </button>

        {/* 3D Book Container - Permanently Open */}
        <div className="flex-1 flex justify-center items-center py-6 min-h-[580px] sm:min-h-[640px]">
          <div
            style={{
              position: "relative",
              width: isSpread ? "860px" : "min(90vw, 420px)",
              height: isSpread ? "560px" : "min(76vh, 560px)",
              transformStyle: "preserve-3d",
              animation: "float 6s ease-in-out infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                x: 0,
              }}
            >
              {/* Permanent Opened Spine Shadow */}
              <div
                style={{
                  position: "absolute",
                  top: "-5px",
                  bottom: "-5px",
                  left: "-10px",
                  right: "-10px",
                  borderRadius: "4px 8px 8px 4px",
                  background: "#1C1008",
                  boxShadow: "0 35px 70px rgba(0,0,0,0.25)",
                  zIndex: -1
                }}
              />

              {/* Ultra-Subtle Spine Center Shadow Overlay */}
              {isSpread && (
                <div
                  className="book-spine-subtle"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    bottom: 0,
                    width: "14px",
                    marginLeft: "-7px",
                    zIndex: 100,
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Render Sheets */}
              {sheets.map((sheet, i) => (
                <Leaf
                  key={i}
                  index={i}
                  zIndex={
                    i < currentSheet
                      ? i
                      : totalSheets - i + 100
                  }
                  targetRotation={i < currentSheet ? -180 : 0}
                  frontContent={sheet.front}
                  backContent={sheet.back}
                  isSpread={isSpread}
                />
              ))}

              {/* Drag Gesture Overlay */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) flipNext();
                  if (info.offset.x > 100) flipPrev();
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 9999,
                  cursor: "grab"
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right Arrow Button Outside Book */}
        <button
          onClick={flipNext}
          disabled={currentSheet === totalSheets - 1}
          aria-label="Next page"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D9CBAE] bg-[#F4EFE7] hover:bg-[#B38F4E] text-stone-800 hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 font-serif text-xl sm:text-2xl flex-shrink-0 ${currentSheet === totalSheets - 1 ? "opacity-25 cursor-not-allowed" : "opacity-90 hover:scale-110 cursor-pointer"
            }`}
        >
          →
        </button>
      </div>

      {/* Page Progress Indicator Dots at Bottom */}
      <div className="flex items-center space-x-2 mt-4 z-20">
        {sheets.slice(1).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i + 1 === currentSheet
              ? "w-6 bg-[#B38F4E]"
              : "w-2 bg-[#D9CBAE] hover:bg-[#B38F4E]/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function MenuBook() {
  return (
    <section className="bg-[#FAF7F2] text-stone-900 py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden flex flex-col items-center justify-center border-t border-[#E5D8C3]/80">
      <GlobalStyle />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-8 relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
          <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
            GASTRONOMY CATALOG
          </span>
          <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal tracking-tight mb-3">
          Explore Our <span className="font-serif italic text-[#B38F4E]">Menus</span>
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide max-w-md mx-auto">
          Explore our complete gastronomy catalog across 18 categories with full item details & prices.
        </p>
      </div>

      {/* Mobile View: Horizontal Scroll Bar & Snap Cards (< md) */}
      <div className="w-full md:hidden relative z-10">
        <MobileMenuScroll />
      </div>

      {/* Desktop View: 3D Leather Journal Book (>= md) */}
      <div className="hidden md:flex w-full justify-center items-center relative z-10 max-w-7xl">
        <FlipBook />
      </div>
    </section>
  );
}

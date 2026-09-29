import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grandeur | Multicuisine Fine Dining Restaurant",
  description:
    "Experience culinary excellence across global flavors. Grandeur brings you an extraordinary multicuisine fine dining experience with authentic ingredients and refined artistry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${greatVibes.variable} scroll-smooth dark`}
    >
      <body className="bg-[#0c0a09] text-neutral-100 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

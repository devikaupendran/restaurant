"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChandelierProps {
  lightState: "off" | "turning-on" | "on" | "turning-off";
  flickerCount: number;
}

export default function Chandelier({ lightState, flickerCount }: ChandelierProps) {
  const isIlluminated = lightState === "on" || lightState === "turning-on";

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
      {/* Brass Ceiling Mount & Chain */}
      <div className="w-1 sm:w-1.5 h-20 sm:h-32 bg-gradient-to-b from-amber-900 via-amber-700 to-amber-900 opacity-80" />
      <div className="w-6 h-3 bg-amber-700/80 rounded-b-md border-b border-amber-500/40" />

      {/* Main Chandelier Frame SVG */}
      <div className="relative flex items-center justify-center -mt-1">
        <svg
          width="320"
          height="180"
          viewBox="0 0 320 180"
          fill="none"
          className="w-[240px] sm:w-[320px] h-auto drop-shadow-2xl"
        >
          {/* Central Stem */}
          <line x1="160" y1="0" x2="160" y2="70" stroke="#B38F4E" strokeWidth="3" />
          <path d="M160 30 Q160 55 160 70" stroke="#8B6914" strokeWidth="4" />

          {/* Upper Crown Ring */}
          <ellipse cx="160" cy="40" rx="40" ry="10" stroke="#C9A84C" strokeWidth="2" fill="none" />

          {/* Curved Brass Arms */}
          <path d="M160 70 Q110 90 70 60 Q50 40 40 80" stroke="#C9A84C" strokeWidth="2.5" fill="none" />
          <path d="M160 70 Q130 100 100 70 Q80 50 75 95" stroke="#C9A84C" strokeWidth="2" fill="none" />
          <path d="M160 70 Q210 90 250 60 Q270 40 280 80" stroke="#C9A84C" strokeWidth="2.5" fill="none" />
          <path d="M160 70 Q190 100 220 70 Q240 50 245 95" stroke="#C9A84C" strokeWidth="2" fill="none" />

          {/* Lower Main Ring */}
          <ellipse cx="160" cy="110" rx="110" ry="24" stroke="#8B6914" strokeWidth="3" fill="none" />
          <ellipse cx="160" cy="110" rx="100" ry="20" stroke="#C9A84C" strokeWidth="1.5" fill="none" />

          {/* Crystal Drops */}
          <path d="M40 80 L40 100" stroke="#E2C97E" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M75 95 L75 115" stroke="#E2C97E" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M160 110 L160 135" stroke="#E2C97E" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M245 95 L245 115" stroke="#E2C97E" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M280 80 L280 100" stroke="#E2C97E" strokeWidth="1" strokeDasharray="2 2" />

          {/* Candle Bulb Sockets */}
          <rect x="36" y="74" width="8" height="12" fill="#8B6914" rx="1" />
          <rect x="71" y="89" width="8" height="12" fill="#8B6914" rx="1" />
          <rect x="156" y="104" width="8" height="12" fill="#8B6914" rx="1" />
          <rect x="241" y="89" width="8" height="12" fill="#8B6914" rx="1" />
          <rect x="276" y="74" width="8" height="12" fill="#8B6914" rx="1" />
        </svg>

        {/* Tungsten Light Bulbs Glows */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bulb 1 */}
          <motion.div
            animate={{
              opacity: isIlluminated ? (flickerCount % 2 === 0 ? 1 : 0.2) : 0.05,
              scale: isIlluminated ? [1, 1.05, 1] : 0.8,
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[38%] left-[10%] w-6 h-6 rounded-full bg-amber-200 blur-[2px] shadow-[0_0_20px_#f59e0b,0_0_40px_#d97706]"
          />

          {/* Bulb 2 */}
          <motion.div
            animate={{
              opacity: isIlluminated ? (flickerCount % 2 === 0 ? 1 : 0.3) : 0.05,
              scale: isIlluminated ? [1, 1.05, 1] : 0.8,
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[48%] left-[21%] w-6 h-6 rounded-full bg-amber-200 blur-[2px] shadow-[0_0_20px_#f59e0b,0_0_40px_#d97706]"
          />

          {/* Central Main Bulb */}
          <motion.div
            animate={{
              opacity: isIlluminated ? (flickerCount % 2 === 0 ? 1 : 0.1) : 0.05,
              scale: isIlluminated ? [1.1, 1.15, 1.1] : 0.8,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            className="absolute top-[56%] left-[47%] w-8 h-8 rounded-full bg-amber-100 blur-[3px] shadow-[0_0_30px_#fbbf24,0_0_60px_#f59e0b]"
          />

          {/* Bulb 4 */}
          <motion.div
            animate={{
              opacity: isIlluminated ? (flickerCount % 2 === 0 ? 1 : 0.3) : 0.05,
              scale: isIlluminated ? [1, 1.05, 1] : 0.8,
            }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-[48%] right-[21%] w-6 h-6 rounded-full bg-amber-200 blur-[2px] shadow-[0_0_20px_#f59e0b,0_0_40px_#d97706]"
          />

          {/* Bulb 5 */}
          <motion.div
            animate={{
              opacity: isIlluminated ? (flickerCount % 2 === 0 ? 1 : 0.2) : 0.05,
              scale: isIlluminated ? [1, 1.05, 1] : 0.8,
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-[38%] right-[10%] w-6 h-6 rounded-full bg-amber-200 blur-[2px] shadow-[0_0_20px_#f59e0b,0_0_40px_#d97706]"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackButton({ href, label = "Back to Menu", className = "" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/menu");
    }
  };

  const content = (
    <motion.div
      whileHover={{ x: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1C1814]/85 backdrop-blur-md text-[#D4C2A5] border border-[#B38F4E]/40 hover:border-[#B38F4E] hover:text-white hover:bg-[#1C1814] text-xs font-semibold uppercase tracking-wider shadow-md transition-all duration-300 group cursor-pointer ${className}`}
    >
      <span className="text-sm group-hover:-translate-x-1 transition-transform duration-300">←</span>
      <span>{label}</span>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={handleBack}>{content}</button>;
}

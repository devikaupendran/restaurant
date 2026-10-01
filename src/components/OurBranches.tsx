"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Branch {
  id: string;
  name: string;
  subtitle: string;
  address: string;
  hours: string;
  phone: string;
  tag: string;
  image: string;
  mapUrl: string;
}

const branches: Branch[] = [
  {
    id: "korani-branch",
    name: "Korani (Attingal) Branch",
    subtitle: "Rooftop & Fine Dining",
    address: "Korani, Attingal, NH 66, Kerala 695104",
    hours: "Mon – Sun · 8:00 AM – 11:00 PM",
    phone: "+91 89436 67000",
    tag: "Rooftop Seating & AC Dining",
    image: "/images/gallery/korani-shop.jpg",
    mapUrl: "https://maps.google.com/?q=Grandeur+Multicuisine+Restaurant+Korani+Attingal",
  },
  {
    id: "parippally-branch",
    name: "Parippally Branch",
    subtitle: "Highway Fine Dining",
    address: "N.H. 47, Parippally, Kollam District 691574",
    hours: "Mon – Sun · 8:30 AM – 10:30 PM",
    phone: "+91 89436 67000",
    tag: "Family Suites & Multi-Cuisine",
    image: "/images/gallery/paripally-shop.png",
    mapUrl: "https://maps.google.com/?q=Grandeur+Multicuisine+Restaurant+Parippally",
  },
];

export default function OurBranches() {
  return (
    <section id="branches" className="bg-[#FAF7F2] py-20 px-4 sm:px-8 lg:px-14 text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
            <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              VISIT OUR RESTAURANTS
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1814] tracking-tight leading-tight mb-2">
            Our Branches
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Two locations, one culinary experience.
          </p>
        </motion.div>

        {/* 2-Column Grid of Side-by-Side Branch Cards (Mockup Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-stretch"
            >
              {/* Left Side: Aspect Square Branch Image */}
              <div className="w-full sm:w-1/2 aspect-square rounded-2xl overflow-hidden relative border border-stone-100 flex-shrink-0 group">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Right Side: Location Info & Details */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between py-1 px-1 space-y-4">
                <div className="space-y-3">
                  {/* Location Pin Icon & Title */}
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#F5EFE6] text-[#B38F4E] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#E8DEC9]">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1814] tracking-tight leading-snug">
                        {branch.name}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-stone-100 my-2" />

                  {/* Details Bullet List */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                    <div className="flex items-center space-x-2.5">
                      <svg className="w-4 h-4 text-[#B38F4E] flex-shrink-0 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span>{branch.hours}</span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <svg className="w-4 h-4 text-[#B38F4E] flex-shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
                      </svg>
                      <span>{branch.phone}</span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <svg className="w-4 h-4 text-[#B38F4E] flex-shrink-0 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span>{branch.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Full-width Get Directions Action Button (Black & Gold) */}
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#1C1814] hover:bg-black text-[#C59E61] border border-[#C59E61]/30 font-bold text-xs uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2 group/btn mt-2"
                >
                  <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                  <span>Get Directions</span>
                  <span className="text-sm font-light">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Branch Page Link */}
        <div className="mt-10 text-center">
          <Link
            href="/branches"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all duration-300"
          >
            <span>Explore All Branch Details & Facilities</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


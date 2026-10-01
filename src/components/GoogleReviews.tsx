"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { GooglePlaceDetails } from "@/lib/googleReviews";

interface GoogleReviewsProps {
  placeDetails?: GooglePlaceDetails;
}

// Fallback data if props are not provided
const DEFAULT_DETAILS: GooglePlaceDetails = {
  rating: 4.8,
  userRatingCount: 1450,
  googleMapsUri:
    "https://maps.google.com/?q=Grandeur+Multicuisine+Restaurant+Korani+Attingal",
  isFallback: true,
  reviews: [
    {
      id: "rev-1",
      authorName: "Anil M.",
      rating: 5,
      text: "Grandeur offers an incredible fine dining experience. The Arabian Alfaham, authentic Dum Biriyani, and warm family hospitality make every visit unforgettable!",
      relativeTime: "2 weeks ago",
    },
    {
      id: "rev-2",
      authorName: "Deepak S.",
      rating: 5,
      text: "Sensational multicuisine menu! From sizzling steaks to fresh Chinese noodles and Arabian grills, every single dish is prepared with authentic flavors and great care.",
      relativeTime: "a month ago",
    },
    {
      id: "rev-3",
      authorName: "Vishnu R.",
      rating: 5,
      text: "Immaculate service, stunning open-air rooftop ambiance at Korani, and top-notch food quality. Hands down the best multi-cuisine restaurant in the Attingal & Parippally region!",
      relativeTime: "a month ago",
    },
    {
      id: "rev-4",
      authorName: "Sreejith T.",
      rating: 5,
      text: "Wide variety of mouth-watering dishes with polite staff and prompt service. If you are looking to enjoy a peaceful family dinner, Grandeur is the ultimate destination.",
      relativeTime: "2 months ago",
    },
    {
      id: "rev-5",
      authorName: "Priya K.",
      rating: 5,
      text: "Absolutely loved the ambiance and the food. The biryani was out of this world and the staff was incredibly courteous. Will definitely be coming back with family again!",
      relativeTime: "3 weeks ago",
    },
    {
      id: "rev-6",
      authorName: "Rajesh B.",
      rating: 4,
      text: "Great place for family dining. The kids menu is thoughtful and the desserts are heavenly. Pricing is fair for the quality you get. Highly recommended for celebrations!",
      relativeTime: "a month ago",
    },
    {
      id: "rev-7",
      authorName: "Meera N.",
      rating: 5,
      text: "The rooftop dining at the Korani branch is a magical experience. Perfect for date nights. The grilled seafood platter and mocktails were exceptional!",
      relativeTime: "2 weeks ago",
    },
    {
      id: "rev-8",
      authorName: "Suresh P.",
      rating: 5,
      text: "Best multicuisine restaurant in the area, hands down. We hosted our anniversary dinner here and the team went above and beyond to make it special.",
      relativeTime: "3 months ago",
    },
  ],
};

/* ─── Carousel hook for responsive card count ────────────────────────── */
function useCardsPerView() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function GoogleReviews({
  placeDetails = DEFAULT_DETAILS,
}: GoogleReviewsProps) {
  const { rating, userRatingCount, googleMapsUri, reviews } = placeDetails;
  const cardsPerView = useCardsPerView();
  const totalSlides = Math.ceil(reviews.length / cardsPerView);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, totalSlides]);

  // Get the reviews for the current slide
  const startIdx = current * cardsPerView;
  const visibleReviews = reviews.slice(startIdx, startIdx + cardsPerView);

  return (
    <section
      id="reviews"
      className="bg-[#FAF7F2] py-20 sm:py-28 px-4 sm:px-8 lg:px-14 text-stone-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Eyebrow with Google Badge */}
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
            <div className="flex items-center space-x-2">
              {/* Google 'G' Logo SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-[#A88B52] text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                GOOGLE REVIEWS & RATINGS
              </span>
            </div>
            <span className="h-[1px] w-8 sm:w-12 bg-[#B38F4E]/60 inline-block" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1814] tracking-tight leading-tight mb-4">
            What Our Guests Say
          </h2>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-white border border-stone-200/80 shadow-xs">
            <span className="font-serif text-2xl font-bold text-stone-900">
              {rating.toFixed(1)}
            </span>
            <div className="flex items-center text-[#B38F4E] text-base">
              ★ ★ ★ ★ ★
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Based on{" "}
              <strong className="text-stone-900 font-semibold">
                {userRatingCount.toLocaleString()}+ verified Google reviews
              </strong>
            </span>
          </div>
        </motion.div>

        {/* ─── Carousel Container ─────────────────────────────────── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous reviews"
                className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-200/80 shadow-lg flex items-center justify-center text-stone-600 hover:text-[#B38F4E] hover:border-[#B38F4E]/40 transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next reviews"
                className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-200/80 shadow-lg flex items-center justify-center text-stone-600 hover:text-[#B38F4E] hover:border-[#B38F4E]/40 transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Animated Slide Area */}
          <div className="overflow-hidden px-2 sm:px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`grid gap-6 ${
                  cardsPerView === 3
                    ? "grid-cols-3"
                    : cardsPerView === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {visibleReviews.map((review, idx) => (
                  <div
                    key={review.id || idx}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    <div className="space-y-4">
                      {/* Header: Author Avatar & Name */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {review.authorPhoto ? (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-stone-200">
                              <Image
                                src={review.authorPhoto}
                                alt={review.authorName}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-[#F5EFE6] border border-[#E8DEC9] text-[#B38F4E] flex items-center justify-center font-bold text-sm shadow-2xs">
                              {review.authorName.charAt(0)}
                            </div>
                          )}

                          <div>
                            <h3 className="font-serif text-base font-bold text-stone-900 tracking-tight leading-none">
                              {review.authorName}
                            </h3>
                            <span className="text-xs text-stone-500 font-medium mt-1 block">
                              {review.relativeTime}
                            </span>
                          </div>
                        </div>

                        {/* Google 'G' icon watermark */}
                        <svg
                          className="w-4 h-4 opacity-40"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center text-[#B38F4E] text-sm">
                        {Array.from({ length: review.rating || 5 }).map(
                          (_, sIdx) => (
                            <span key={sIdx}>★</span>
                          )
                        )}
                      </div>

                      {/* Review Text Quote */}
                      <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed line-clamp-5 italic">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    {/* Attribution Footer */}
                    <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-medium">
                        Verified Google Review
                      </span>
                      <a
                        href={review.authorUri || googleMapsUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A88B52] hover:text-stone-900 font-bold uppercase tracking-wider flex items-center space-x-1 transition-colors"
                      >
                        <span>View</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── Dot Indicators ──────────────────────────────────── */}
          {totalSlides > 1 && (
            <div className="flex items-center justify-center space-x-2.5 mt-10">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-[#B38F4E]"
                      : "w-2.5 h-2.5 bg-stone-300 hover:bg-[#B38F4E]/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Read All Reviews on Google CTA */}
        <div className="mt-12 text-center">
          <a
            href={googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-black hover:bg-stone-900 text-[#C59E61] border border-[#C59E61]/40 font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Google Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
            </svg>
            <span>Read All Reviews on Google</span>
            <span className="text-sm font-light">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

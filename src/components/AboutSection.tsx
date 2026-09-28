import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid Showcase */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/hero-fallback.jpg"
                alt="Grandeur Fine Dining Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -right-4 sm:bottom-6 sm:-right-6 bg-neutral-950/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl max-w-xs hidden sm:block">
              <span className="font-serif text-3xl font-bold text-gold-gradient block mb-1">
                15+ Years
              </span>
              <p className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
                Of Uncompromising Culinary Excellence
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-3">
              Discover Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Where Passions & Cuisines Converge
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Grandeur was born from a singular vision: to curate an exceptional destination where lovers of world-class gastronomy can experience authentic flavors from Continental Europe, Pan-Asia, the Mediterranean, and South Asia under one majestic roof.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-10">
              Our team of international master chefs brings decades of refined expertise, handcrafting every sauce, aging every cut, and sourcing seasonal produce to ensure each plate served is a masterpiece of taste and visual elegance.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 w-full pt-6 border-t border-white/10">
              <div>
                <span className="font-serif text-2xl sm:text-4xl font-bold text-amber-400 block mb-1">
                  4
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400">
                  Global Cuisines
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-4xl font-bold text-amber-400 block mb-1">
                  25+
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400">
                  Master Chefs
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-4xl font-bold text-amber-400 block mb-1">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400">
                  Artisanal Freshness
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

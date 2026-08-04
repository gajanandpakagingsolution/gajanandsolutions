import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "../data/company";
import PlaceholderImage from "./PlaceholderImage";

const SLIDES = [
  {
    refCode: "HERO-IMG-1",
    kicker: "Smart Solutions for",
    lineOne: "SMART",
    lineTwo: "PACKAGING",
    desc: "High quality packaging machines for every industry with reliable service and support.",
  },
  {
    refCode: "HERO-IMG-2",
    kicker: "Trusted Across",
    lineOne: "EVERY",
    lineTwo: "INDUSTRY",
    desc: "From food and pharma to FMCG and chemicals, machines built for your production line.",
  },
  {
    refCode: "HERO-IMG-3",
    kicker: "End-to-End",
    lineOne: "SALES &",
    lineTwo: "SERVICE",
    desc: "Installation, training and after-sales support included with every machine.",
  },
];

const AUTOPLAY_MS = 7200;

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-8 md:py-16 lg:py-20">
      <div
        className="absolute left-0 top-0 z-0 h-64 w-64 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a8a29e 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="absolute right-0 top-0 z-0 hidden h-full w-[55%] pointer-events-none md:block lg:w-[50%]">
        <svg viewBox="0 0 500 700" preserveAspectRatio="none" className="h-full w-full">
          <path d="M 320 0 C 180 180, 20 320, 160 700 L 500 700 L 500 0 Z" fill="#BE1E2D" />
        </svg>
      </div>

      <div className="absolute right-0 top-0 z-0 h-full w-full overflow-hidden pointer-events-none md:hidden">
        <svg viewBox="0 0 400 600" preserveAspectRatio="none" className="h-full w-full">
          <path d="M 230 0 C 160 165, 265 365, 400 505 L 400 0 Z" fill="#BE1E2D" />
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 z-0 h-[58%] bg-gradient-to-b from-white via-white/95 to-transparent md:hidden" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-5 md:grid-cols-12 md:gap-8 lg:px-12">
        <div className="z-10 flex flex-col items-start md:col-span-6 lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span className="mb-1 block text-lg font-bold tracking-tight text-[#1C1917] md:text-xl lg:text-2xl">
                {slide.kicker}
              </span>

              <h1 className="mb-4 text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-[#1C1917]">{slide.lineOne}</span>
                <br />
                <span className="text-[#BE1E2D]">{slide.lineTwo}</span>
              </h1>

              <p className="mb-6 max-w-md text-base font-semibold leading-relaxed text-[#44403C] md:mb-8 lg:text-lg">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex w-full flex-row items-center gap-3 md:gap-4 sm:w-auto">
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#BE1E2D] px-5 py-3.5 text-xs font-bold uppercase text-white shadow-lg transition-all hover:bg-[#9C1824] hover:shadow-xl sm:flex-none sm:text-sm md:px-7 lg:text-base"
            >
              <svg className="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163A11.82 11.82 0 01.157 11.89C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24z" />
              </svg>
              <span>WHATSAPP NOW</span>
            </a>

            <a
              href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#BE1E2D] bg-white px-5 py-3.5 text-xs font-bold uppercase text-[#BE1E2D] shadow-sm transition-all hover:bg-[#FDECEC] sm:flex-none sm:text-sm md:px-7 lg:text-base"
            >
              <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>CALL NOW</span>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2.5 md:mt-12">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-500 ${
                  idx === active ? "w-8 bg-[#BE1E2D]" : "w-3 bg-[#D6D3D1] hover:bg-[#a8a29e]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-2 flex flex-col items-center justify-center md:col-span-6 md:mt-0 lg:col-span-7">
          <div className="relative flex w-full max-w-2xl flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.refCode}
                initial={{ opacity: 0, scale: 0.97, x: 26 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -18 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
  <PlaceholderImage
    label={`Packaging Machine Slide ${active + 1}`}
    refCode={slide.refCode}
    className="h-full w-full object-contain"
  />
</div>
              </motion.div>
            </AnimatePresence>

            <div
              className="z-0 -mt-5 h-8 w-[85%] rounded-[100%] opacity-40 blur-md pointer-events-none md:-mt-6"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(28,25,23,0.8) 0%, rgba(28,25,23,0.2) 50%, rgba(28,25,23,0) 80%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

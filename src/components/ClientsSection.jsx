import React, { useEffect, useRef, useState } from "react";
import { clients } from "../data/clients";

// Simple initials badge used until a real client logo is dropped into
// public/images/clients/ and wired up in src/data/clients.js.
const initials = (name) =>
  name
    .replace(/(Pvt\.?|Private|Ltd\.?|Limited|LLP|&|Co\.?)/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const ClientCard = ({ c }) => (
  <div className="client-card group relative flex w-[168px] sm:w-[196px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-100 hover:shadow-[0_16px_32px_-8px_rgba(190,30,39,0.25)]">
    {/* sheen sweep on hover */}
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <span className="sheen absolute -inset-y-4 -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </span>

    {c.logo ? (
      <img src={c.logo} alt={c.name} className="h-11 w-auto object-contain" />
    ) : (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 text-sm font-bold text-white shadow-md ring-4 ring-red-50 transition-transform duration-300 group-hover:scale-110">
        {initials(c.name)}
      </div>
    )}
    <div>
      <div className="text-sm font-semibold leading-tight text-gray-800">{c.name}</div>
      <div className="mt-0.5 text-xs text-gray-500">{c.city}</div>
    </div>
  </div>
);

const MarqueeRow = ({ items, duration, reverse }) => (
  <div className="marquee-row relative w-full overflow-hidden">
    <div
      className="marquee-track flex w-max gap-4 sm:gap-5"
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...items, ...items].map((c, i) => (
        <ClientCard c={c} key={`${c.name}-${i}`} />
      ))}
    </div>
  </div>
);

// Fires once when the section scrolls into view; drives the header/kicker
// reveal. Pure IntersectionObserver, no animation library required.
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const ClientsSection = () => {
  const [ref, inView] = useInView();
  const half = Math.ceil(clients.length / 2) || 1;
  const rowA = clients.slice(0, half).length ? clients.slice(0, half) : clients;
  const rowB = clients.slice(half).length ? clients.slice(half) : clients;

  return (
    <section ref={ref} className="clients-section relative overflow-hidden bg-gray-50 py-16 md:py-24">
      {/* soft ambient glow blobs for depth */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-red-300/20 blur-3xl" />

      <div
        className={`relative mx-auto mb-12 max-w-2xl px-4 text-center transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Trusted Partners</p>
        <h2 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl">Our Clients</h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-red-500 to-red-800" />
        <p className="mt-4 text-sm text-gray-500 md:text-base">
          Trusted by manufacturers and processors across Gujarat.
        </p>
      </div>

      <div
        className={`relative space-y-4 sm:space-y-5 transition-all duration-700 ease-out delay-150 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* edge fade mask so the marquee reads as premium, not clipped */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent sm:w-24" />

        <MarqueeRow items={rowA} duration={34} />
        <MarqueeRow items={rowB} duration={38} reverse />
      </div>

      <style>{`
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .client-card .sheen {
          transform: translateX(-220%) rotate(12deg);
          transition: transform 0.9s ease;
        }
        .client-card:hover .sheen {
          transform: translateX(220%) rotate(12deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            flex-wrap: wrap;
            overflow-x: auto;
          }
          .clients-section * {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;

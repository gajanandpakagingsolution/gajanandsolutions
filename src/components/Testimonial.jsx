import React, { useEffect, useState } from "react";
import { clients } from "../data/clients";

const TESTIMONIALS = [
  {
    quote:
      "Gajanand Packaging Solutions has supported our packaging requirements with practical guidance, dependable machines and responsive service.",
    author: clients[0]?.name || "Valued Client",
    city: clients[0]?.city,
  },
  {
    quote:
      "Their team understands production needs clearly and helps select the right packaging machine for smooth day-to-day operation.",
    author: clients[1]?.name || "Valued Client",
    city: clients[1]?.city,
  },
  {
    quote:
      "We appreciate the timely coordination, product knowledge and after-sales support provided by the Gajanand team.",
    author: clients[2]?.name || "Valued Client",
    city: clients[2]?.city,
  },
];

const AUTOPLAY_MS = 4500;

const Testimonial = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-5 md:hidden">
          <h2 className="text-xl font-bold text-gray-800">What Our Clients Say</h2>
          <div className="mt-2 h-1 w-10 rounded-full bg-red-700" />
        </div>
        <h2 className="mb-8 hidden text-center text-2xl font-bold text-gray-800 md:block md:text-3xl">What Our Clients Say</h2>

        <div className="relative flex min-h-[150px] flex-col justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 text-left md:min-h-[160px] md:p-10 md:text-center">
          <span className="absolute left-4 top-2 font-serif text-6xl leading-none text-red-100 md:left-6 md:top-4">&ldquo;</span>
          <p className="relative z-10 text-sm italic text-gray-600 md:text-base">{t.quote}</p>
          <div className="mt-4 text-sm font-medium text-gray-500">
            {t.author}
            {t.city ? `, ${t.city}` : ""}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-1">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.author + i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="flex h-11 w-11 items-center justify-center rounded-full"
            >
              <span className={`h-2.5 rounded-full transition-all ${i === active ? "w-6 bg-red-700" : "w-2.5 bg-gray-300"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

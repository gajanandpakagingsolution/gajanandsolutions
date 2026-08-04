import React from "react";
import { motion } from "framer-motion";

const ICONS = {
  food: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  pharma: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  fmcg: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  dairy: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  agriculture: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  electronics: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  textile: "M4 4h16v4l-3 2 3 2v8H4v-8l3-2-3-2V4zm5 0v4m6-4v4",
  warehouse: "M3 12l2-2m0 0l7-7 7 7m-9-5v10a1 1 0 001 1h3m-4-11l9 9m-2-2v6a1 1 0 01-1 1h-3a1 1 0 01-1-1v-4h-2v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-6",
};

const INDUSTRIES = [
  { label: "Food", icon: ICONS.food, stat: "Fresh packs" },
  { label: "Pharma", icon: ICONS.pharma, stat: "Clean sealing" },
  { label: "FMCG", icon: ICONS.fmcg, stat: "Fast lines" },
  { label: "Dairy", icon: ICONS.dairy, stat: "Daily output" },
  { label: "Agriculture", icon: ICONS.agriculture, stat: "Bulk ready" },
  { label: "Chemicals", icon: ICONS.pharma, stat: "Secure packs" },
  { label: "Electronics", icon: ICONS.electronics, stat: "Safe transit" },
  { label: "Textile", icon: ICONS.textile, stat: "Neat bundling" },
  { label: "Warehouses", icon: ICONS.warehouse, stat: "Dispatch flow" },
  { label: "E-commerce", icon: ICONS.food, stat: "Parcel ready" },
];

const IndustriesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-18">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 md:hidden">
          <h2 className="text-xl font-bold text-gray-800">Trusted Across Multiple Industries</h2>
          <div className="mt-2 h-1 w-10 rounded-full bg-red-700" />
        </div>

        <div className="mb-10 hidden text-center md:block">
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-red-700" />
            <span className="text-sm font-semibold uppercase tracking-widest text-red-700">Industries We Serve</span>
            <div className="h-px w-12 bg-red-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Trusted Across Multiple Industries</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-5"
        >
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-[0_18px_36px_-18px_rgba(190,30,45,0.5)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red-700 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-700 transition-colors group-hover:bg-red-700 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={ind.icon} />
                </svg>
              </div>
              <div className="text-sm font-bold text-gray-800 md:text-base">{ind.label}</div>
              <div className="mt-1 text-xs font-medium text-gray-500">{ind.stat}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;

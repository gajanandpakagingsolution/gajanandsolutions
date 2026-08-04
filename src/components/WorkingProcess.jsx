import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Inquiry",
    desc: "Share your requirement with our experts.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Consultation",
    desc: "We understand your needs and suggest the right solution.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Machine Selection",
    desc: "Choose the best machine for your business.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Delivery & Installation",
    desc: "Timely delivery and professional installation.",
    icon: "M8 16V8a1 1 0 011-1h6.5L20 11v5a1 1 0 01-1 1H8zM3 8h5v8H3a1 1 0 01-1-1V9a1 1 0 011-1z M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  },
  {
    title: "After Sales Support",
    desc: "Continuous support for smooth performance.",
    icon: "M18 13a3 3 0 100-6 3 3 0 000 6zM5 20a7 7 0 0114 0M5 20a2 2 0 01-2-2v-1a5 5 0 015-5h.5M13 12a3 3 0 10-6 0",
  },
];

const WorkingProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-10 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile / tablet heading */}
        <div className="md:hidden mb-6">
          <h2 className="text-xl font-bold text-gray-800">Our Working Process</h2>
          <div className="h-1 w-10 bg-red-700 mt-2 rounded-full" />
        </div>

        {/* Desktop heading */}
        <div className="hidden md:block text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-12 bg-red-700"></div>
            <span className="text-red-700 font-semibold text-sm tracking-widest uppercase">How It Works</span>
            <div className="h-px w-12 bg-red-700"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Our Working Process</h2>
        </div>

        {/* Mobile / tablet: vertical numbered timeline */}
        <div className="relative md:hidden">
          <div className="absolute left-6 top-6 bottom-6 border-l-2 border-dashed border-red-200" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex gap-4 mb-7 last:mb-0 relative z-10"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={step.icon} />
                  </svg>
                </div>
                <span className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-red-700 text-white text-[10px] font-bold flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-1.5">
                <h3 className="font-bold text-gray-800 text-sm mb-0.5">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-snug">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex gap-0 relative">
          <div
            className="absolute top-8 left-0 right-0 h-0.5 overflow-hidden bg-red-100 z-0"
            style={{ width: "80%", margin: "0 10%" }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full w-full bg-gradient-to-r from-red-300 via-red-700 to-red-300"
            />
          </div>
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              className="flex-1 flex flex-col items-center text-center px-4 relative z-10 group"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="w-16 h-16 rounded-full bg-red-700 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-red-700/20 ring-8 ring-white transition-colors group-hover:bg-gray-900"
              >
                {index + 1}
              </motion.div>
              <h3 className="font-bold text-gray-800 text-base mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;

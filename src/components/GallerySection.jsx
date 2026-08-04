import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";

const HOME_GALLERY = [
  { id: 1, className: "md:col-span-2 md:row-span-2", aspect: "aspect-[4/3]" },
  { id: 2, className: "", aspect: "aspect-[4/3]" },
  { id: 3, className: "", aspect: "aspect-[4/3]" },
  { id: 4, className: "", aspect: "aspect-[4/3]" },
  { id: 5, className: "", aspect: "aspect-[4/3]" },
];

const GallerySection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 md:hidden">
          <h2 className="text-xl font-bold text-gray-800">Factory & Machine Gallery</h2>
          <div className="mt-2 h-1 w-10 rounded-full bg-red-700" />
        </div>

        <div className="mb-10 hidden text-center md:block">
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-red-700" />
            <span className="text-sm font-semibold uppercase tracking-widest text-red-700">Our Gallery</span>
            <div className="h-px w-12 bg-red-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Factory &amp; Machine Gallery</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px] md:gap-4 lg:auto-rows-[220px]"
        >
          {HOME_GALLERY.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 22, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-sm ${item.className}`}
            >
              <PlaceholderImage
                label={`Gallery photo ${item.id}`}
                refCode={`GAL-${String(item.id).padStart(3, "0")}`}
                aspect={item.aspect}
                className="h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Gajanand Packaging
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-7 text-center md:mt-10">
          <Link
            to="/gallery"
            className="inline-block rounded border-2 border-red-700 px-8 py-3 text-sm font-bold text-red-700 transition hover:bg-red-700 hover:text-white md:border-transparent md:bg-red-700 md:text-base md:text-white"
          >
            VIEW FULL GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

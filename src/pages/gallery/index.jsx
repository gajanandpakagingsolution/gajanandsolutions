import React from "react";
import { motion } from "framer-motion";
import PageShell from "@/PageShell";
import PlaceholderImage from "@/PlaceholderImage";
import VideoGallery from "@/VideoGallery";

const GALLERY_COUNT = 12;

const PHOTO_LAYOUT = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "",
  "md:col-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "",
];

const GalleryPage = () => {
  return (
    <PageShell title="Gallery" breadcrumb="Home / Gallery">
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Factory View</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">Factory & Equipment Photos</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              A closer look at our machines, shop floor and packaging solutions in practical use.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[190px] md:gap-4 lg:auto-rows-[230px]"
          >
            {Array.from({ length: GALLERY_COUNT }, (_, i) => i + 1).map((i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${PHOTO_LAYOUT[i - 1] || ""}`}
              >
                <PlaceholderImage
                  label={`Gallery photo ${i}`}
                  refCode={`GAL-${String(i).padStart(3, "0")}`}
                  aspect="aspect-square"
                  className="h-full w-full bg-white transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Gallery {String(i).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <VideoGallery className="mt-20" title="Factory Footage" subtitle="Watch our industrial machinery operating live." />
        </div>
      </section>
    </PageShell>
  );
};

export default GalleryPage;

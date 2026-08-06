import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Video, Clapperboard, ChevronLeft, ChevronRight } from "lucide-react";
import { getImage } from "../data/imageMap";
import { galleryVideos } from "../data/videos";

const ITEMS_PER_PAGE = 6;

// Stagger animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Item pop-up animation
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const VideoCard = ({ item, onOpen }) => {
  const videoRef = React.useRef(null);
  const src = getImage(item.videoRef);
  const poster = getImage(item.posterRef);

  // Fallback state if source is missing
  if (!src) {
    return (
      <motion.div
        variants={itemVariants}
        className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-4 flex flex-col items-center justify-center gap-2 text-center transition-colors hover:border-red-300 hover:bg-red-50/20"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
          <Video className="h-5 w-5" />
        </div>
        <div>
          <span className="block text-xs font-semibold text-gray-700 leading-tight">{item.title}</span>
          <span className="text-[10px] text-gray-400 font-mono mt-0.5">{item.videoRef}</span>
        </div>
      </motion.div>
    );
  }

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.button
      type="button"
      variants={itemVariants}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 shadow-md ring-1 ring-black/5 hover:shadow-2xl hover:shadow-red-950/20 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      aria-label={`Play video: ${item.title}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dynamic Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

      {/* Play Button Icon with Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-2 rounded-full bg-red-600/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-red-700 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          </div>
        </div>
      </div>

      {/* Video Title Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
        <div className="text-sm font-semibold text-white drop-shadow-sm line-clamp-1">{item.title}</div>
      </div>
    </motion.button>
  );
};

const Lightbox = ({ item, onClose }) => {
  const src = item ? getImage(item.videoRef) : null;

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && src && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video modal"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              <video
                src={src}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Build a compact page list: 1 ... p-1 p p+1 ... last
  const pages = useMemo(() => {
    const range = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
    return Array.from(range)
      .filter((p) => p >= 1 && p <= totalPages)
      .sort((a, b) => a - b);
  }, [currentPage, totalPages]);

  const withEllipses = [];
  pages.forEach((p, idx) => {
    if (idx > 0 && p - pages[idx - 1] > 1) {
      withEllipses.push("ellipsis-" + p);
    }
    withEllipses.push(p);
  });

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Video gallery pagination"
      className="relative mt-10 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-transparent disabled:hover:text-gray-500"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {withEllipses.map((p) =>
        typeof p === "string" ? (
          <span key={p} className="px-1 text-sm text-gray-400 select-none">
            &#8230;
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === currentPage ? "page" : undefined}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              p === currentPage
                ? "bg-red-700 text-white shadow-md shadow-red-700/20"
                : "text-gray-600 hover:bg-red-50 hover:text-red-700"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-transparent disabled:hover:text-gray-500"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
};

const VideoGallery = ({
  items = galleryVideos,
  title = "Videos",
  subtitle = "See our machines running on the shop floor.",
  className = "",
  itemsPerPage = ITEMS_PER_PAGE,
}) => {
  const [active, setActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  // Keep current page valid if the items list shrinks/changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    // Scroll the gallery back into view so pagination doesn't jump the user around
    document.getElementById("video-gallery-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="video-gallery-top"
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-8 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-700 via-gray-900 to-red-700"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-100/60 blur-3xl" />
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white shadow-lg shadow-red-700/20"
          >
            <Clapperboard className="h-6 w-6" />
          </motion.div>
          {title && <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h3>}
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-red-600" />
          {subtitle && <p className="mt-3 text-base text-gray-500">{subtitle}</p>}
        </motion.div>
      )}

      {/* Animated Grid Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {paginatedItems.map((item) => (
            <VideoCard key={item.id} item={item} onOpen={setActive} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Page indicator + pagination controls */}
      <p className="mt-6 text-center text-xs font-medium text-gray-400">
        Showing {paginatedItems.length ? (currentPage - 1) * itemsPerPage + 1 : 0}
        &#8211;{Math.min(currentPage * itemsPerPage, items.length)} of {items.length} videos
      </p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      {/* Lightbox Modal */}
      <Lightbox item={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default VideoGallery;

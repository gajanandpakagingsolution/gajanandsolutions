import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/PageShell";
import PlaceholderImage from "@/PlaceholderImage";
import { categories, allProductsFlat } from "../../data/products";

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// Amazon-style cursor-tracking zoom: as the pointer moves over the image,
// the image content scales up around the pointer position. overflow-hidden
// on the wrapper keeps the zoomed content clipped to the card's image area.
const ZoomImage = ({ children, zoomScale = 1.6 }) => {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({ transform: "scale(1)", transformOrigin: "center" });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setStyle({
      transform: `scale(${zoomScale})`,
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "scale(1)", transformOrigin: "center" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-full overflow-hidden"
    >
      <div className="h-full w-full ease-out" style={{ ...style, transition: "transform 150ms ease-out" }}>
        {children}
      </div>
    </div>
  );
};

// Shared premium card chrome — pill badge over the image, title + optional
// subtext, circular arrow button. Used for both category cards and product
// result cards so the two grids feel like one system.
//
// Equal + medium sizing strategy:
// 1. The parent grid uses `auto-rows-fr` so every row (and therefore every
//    card, via h-full below) is stretched to match the tallest card overall.
// 2. The image slot itself is locked to `aspect-square` — a fixed, uniform
//    box regardless of the source image's real dimensions — and the image
//    inside uses `object-cover` to fill + crop to that box instead of
//    dictating the box's size.
// 3. The title is clamped to 2 lines with a matching min-height, and the
//    footnote line is always rendered (even if empty) so the text block
//    below the image takes up consistent space whether or not a card has a
//    footnote.
const ProductCard = ({ to, image, badge, title, subtitle, footnote }) => (
  <Link
    to={to}
    className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-[0_18px_36px_-20px_rgba(190,30,45,0.45)]"
  >
    <div className="relative aspect-square overflow-hidden bg-gray-100">
      <ZoomImage>{image}</ZoomImage>
      {badge && (
        <div className="pointer-events-none absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-700 shadow-sm">
          {badge}
        </div>
      )}
    </div>
    <div className="flex flex-1 items-start justify-between gap-2 p-3">
      <div className="flex flex-1 flex-col">
        <div className="line-clamp-2 min-h-[2.25rem] text-sm font-bold leading-snug text-gray-800 transition group-hover:text-red-700">
          {title}
        </div>
        {subtitle && (
          <p className="mt-1.5 hidden min-h-[2.5rem] text-xs leading-relaxed text-gray-500 md:line-clamp-2 md:block">
            {subtitle}
          </p>
        )}
        <div className="mt-1 min-h-[0.9rem] text-[11px] text-gray-500">{footnote || "\u00A0"}</div>
      </div>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </div>
  </Link>
);

const ProductsIndexPage = () => {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return [];
    return allProductsFlat.filter((p) => {
      const cat = categories.find((c) => c.slug === p.categorySlug);
      return (
        p.name.toLowerCase().includes(trimmed) ||
        (p.modelNo && p.modelNo.toLowerCase().includes(trimmed)) ||
        (cat && cat.name.toLowerCase().includes(trimmed))
      );
    });
  }, [trimmed]);

  return (
    <PageShell title="Our Products" breadcrumb="Home / Products">
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-600 max-w-2xl mb-6">
            Browse our full range of packaging machines, sourced directly from our product catalog —{" "}
            {categories.length} categories, {allProductsFlat.length}+ models.
          </p>

          {/* Search box */}
          <div className="relative max-w-xl mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 114 10.5a6.5 6.5 0 0113 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name or model no. (e.g. strapping, DZ-400)"
              className="w-full border rounded-full pl-12 pr-10 py-3 text-sm focus:outline-none focus:border-red-700 shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {trimmed ? (
            results.length > 0 ? (
              <>
                <div className="text-sm text-gray-500 mb-4">
                  {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
                </div>
                <motion.div
                  key={`results-${trimmed}`}
                  initial="hidden"
                  animate="visible"
                  variants={gridVariants}
                  className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5"
                >
                  {results.map((p) => {
                    const cat = categories.find((c) => c.slug === p.categorySlug);
                    return (
                      <motion.div key={`${p.categorySlug}-${p.slug}`} variants={cardVariants} whileHover={{ y: -6 }} className="h-full">
                        <ProductCard
                          to={`/products/${p.categorySlug}/${p.slug}`}
                          image={
                            <PlaceholderImage
                              product={p}
                              label={p.name}
                              refCode={p.imageRef}
                              className="h-full w-full object-cover"
                            />
                          }
                          badge={cat?.name}
                          title={p.name}
                          footnote={p.modelNo && p.modelNo !== "-" ? `Model: ${p.modelNo}` : null}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </>
            ) : (
              <div className="text-gray-500 text-sm border rounded-lg p-6 bg-gray-50 max-w-xl">
                No products matched &ldquo;{query}&rdquo; — try a shorter term or browse categories below.
              </div>
            )
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={gridVariants}
              className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
            >
              {categories.map((cat) => (
                <motion.div key={cat.slug} variants={cardVariants} whileHover={{ y: -6 }} className="h-full">
                  <ProductCard
                    to={`/products/${cat.slug}`}
                    image={
                      <PlaceholderImage
                        product={cat.products[0]}
                        label={cat.name}
                        refCode={cat.products[0]?.imageRef}
                        className="h-full w-full object-cover"
                      />
                    }
                    badge={`${cat.products.length} models`}
                    title={cat.name}
                    subtitle={cat.blurb}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default ProductsIndexPage;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/products";
import PlaceholderImage from "./PlaceholderImage";

const FEATURED_SLUGS = [
  "strapping-machines",
  "shrink-tunnel-machines",
  "vacuum-packaging-machines",
  "band-sealers",
  "coding-printing-machines",
  "pallet-box-wrapping-machines",
];

const ProductsSection = () => {
  const featured = FEATURED_SLUGS.map((slug) => categories.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 md:hidden">
          <h2 className="text-xl font-bold text-gray-800">Packaging Solutions for Every Need</h2>
          <div className="mt-2 h-1 w-10 rounded-full bg-red-700" />
        </div>

        <div className="mb-10 hidden text-center md:block">
          <div className="mb-2 flex items-center justify-center gap-3 text-sm font-semibold tracking-wider text-red-700">
            <span className="h-px w-8 bg-red-700" /> OUR PRODUCTS <span className="h-px w-8 bg-red-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Packaging Solutions for Every Need</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 md:gap-6"
        >
          {featured.map((cat) => (
            <motion.div
              key={cat.slug}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/products/${cat.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-[0_22px_44px_-24px_rgba(190,30,45,0.45)]"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <PlaceholderImage
                    product={cat.products[0]}
                    label={cat.name}
                    refCode={cat.products[0]?.imageRef}
                    aspect="aspect-[4/3] md:aspect-[16/10]"
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-700 shadow-sm">
                    {cat.products.length} models
                  </div>
                </div>
                <div className="flex flex-1 items-start justify-between gap-3 p-4">
                  <div>
                    <div className="text-sm font-bold leading-snug text-gray-800 transition group-hover:text-red-700 md:text-base">{cat.name}</div>
                    {cat.blurb && <p className="mt-2 hidden text-sm leading-relaxed text-gray-500 md:line-clamp-2 md:block">{cat.blurb}</p>}
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-7 text-center md:mt-10">
          <Link
            to="/products"
            className="inline-block rounded bg-red-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-800 md:text-base"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
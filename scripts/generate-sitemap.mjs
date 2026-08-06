// Regenerates public/sitemap.xml from src/data/products.js so it always
// matches whatever categories/products currently exist — run this any time
// you add or remove a product or category.
//
// Usage:  node scripts/generate-sitemap.mjs
// (Consider adding "postbuild": "node scripts/generate-sitemap.mjs" to
// package.json scripts so it regenerates automatically on every build.)

import { writeFileSync } from "fs";
import { categories, allProductsFlat } from "../src/data/products.js";
import { company } from "../src/data/company.js";

const DOMAIN = company.domain?.startsWith("http") ? company.domain : "https://www.gajanandpakagingsolution.com";

const staticUrls = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/products", priority: "0.9", changefreq: "weekly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
];

const categoryUrls = categories.map((c) => ({
  path: `/products/${c.slug}`,
  priority: "0.8",
  changefreq: "monthly",
}));

const productUrls = allProductsFlat.map((p) => ({
  path: `/products/${p.categorySlug}/${p.slug}`,
  priority: "0.7",
  changefreq: "monthly",
}));

const all = [...staticUrls, ...categoryUrls, ...productUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (u) => `  <url>
    <loc>${DOMAIN}${u.path}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml written with ${all.length} URLs`);
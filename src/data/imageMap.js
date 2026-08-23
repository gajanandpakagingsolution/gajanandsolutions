// ============================================================================
// ADD YOUR IMAGES HERE — this is the ONE file you need to edit.
//
// Product photos are keyed off each product's own `slug` (computed in
// products.js from its name + model number). A product's slug only changes
// if you change ITS OWN name/model — so this can't drift out of sync no
// matter how you reorder, add, or remove other products.
//
// How to add/replace a product photo:
//   1. Drop the image file into public/images/products/
//   2. Name the file exactly "<product-slug>.<ext>" where <ext> is jpg,
//      jpeg, png, or webp — you can find a product's slug printed in its
//      imageRef/slug field, or just derive it yourself: lowercase the name
//      + model number, replace anything that isn't a-z/0-9 with a dash.
//   3. Save. No code change needed — getProductImage()/getProductImageCandidates()
//      below try every extension automatically and use whichever exists.
//
// If no file is found for a given slug, getProductImage() returns null and
// your placeholder box shows instead (same behavior as before).
// ============================================================================

import { allProductsFlat } from "./products";

// Site-wide / gallery slots — unchanged, still edit these directly.
export const imageMap = {
  // --- Site-wide slots ---
  "HERO-IMG-1": "/images/hero/hero-1.webp",
  "HERO-IMG-2": "/images/hero/hero-2.webp",
  "HERO-IMG-3": "/images/hero/hero-3.webp",
  "ABOUT-IMG": "/owner.jpeg",
  MAP: null, // paste a Google Maps embed screenshot, or better, use a real <iframe> — see ContactSection.jsx

  // --- Gallery photos (12 slots) ---
  "GAL-001": "/images/gallery/gal-001.jpg",
  "GAL-002": "/images/gallery/gal-002.jpg",
  "GAL-003": "/images/gallery/gal-003.jpg",
  "GAL-004": "/images/gallery/gal-004.jpg",
  "GAL-005": "/images/gallery/gal-005.jpg",
  "GAL-006": "/images/gallery/gal-006.jpg",
  "GAL-007": "/images/gallery/gal-007.jpg",
  "GAL-008": "/images/gallery/gal-008.jpg",
  "GAL-009": "/images/gallery/gal-009.jpg",
  "GAL-010": "/images/gallery/gal-010.jpg",
  "GAL-011": "/images/gallery/gal-011.jpg",
  "GAL-012": "/images/gallery/gal-012.jpg",

  // --- Gallery videos (extensible — add more in src/data/videos.js) ---
  "GAL-VIDEO-001": "/videos/gal-video-001.mp4",
  "GAL-VIDEO-001-POSTER": null,
  "GAL-VIDEO-002": "/videos/gal-video-002.mp4",
  "GAL-VIDEO-002-POSTER": null,
  "GAL-VIDEO-003": "/videos/gal-video-003.mp4",
  "GAL-VIDEO-003-POSTER": null,
  "GAL-VIDEO-004": "/videos/gal-video-004.mp4",
  "GAL-VIDEO-004-POSTER": null,
  "GAL-VIDEO-005": "/videos/gal-video-005.mp4",
  "GAL-VIDEO-005-POSTER": null,
  "GAL-VIDEO-006": "/videos/gal-video-006.mp4",
  "GAL-VIDEO-006-POSTER": null,
  "GAL-VIDEO-007": "/videos/gal-video-007.mp4",
  "GAL-VIDEO-007-POSTER": null,
  "GAL-VIDEO-008": "/videos/gal-video-008.mp4",
  "GAL-VIDEO-008-POSTER": null,
  "GAL-VIDEO-009": "/videos/gal-video-009.mp4",
  "GAL-VIDEO-009-POSTER": null,
  "GAL-VIDEO-010": "/videos/gal-video-010.mp4",
  "GAL-VIDEO-010-POSTER": null,
  "GAL-VIDEO-011": "/videos/gal-video-011.mp4",
  "GAL-VIDEO-011-POSTER": null,
  "GAL-VIDEO-012": "/videos/gal-video-012.mp4",
  "GAL-VIDEO-012-POSTER": null,
  "GAL-VIDEO-013": "/videos/gal-video-013.mp4",
  "GAL-VIDEO-013-POSTER": null,
  "GAL-VIDEO-014": "/videos/gal-video-014.mp4",
  "GAL-VIDEO-014-POSTER": null,
  "GAL-VIDEO-015": "/videos/gal-video-015.mp4",
  "GAL-VIDEO-015-POSTER": null,
  "GAL-VIDEO-016": "/videos/gal-video-016.mp4",
  "GAL-VIDEO-016-POSTER": null,
  "GAL-VIDEO-017": "/videos/gal-video-017.mp4",
  "GAL-VIDEO-017-POSTER": null,
  "GAL-VIDEO-018": "/videos/gal-video-018.mp4",
  "GAL-VIDEO-018-POSTER": null,
  "GAL-VIDEO-019": "/videos/gal-video-019.mp4",
  "GAL-VIDEO-019-POSTER": null,
  "GAL-VIDEO-020": "/videos/gal-video-020.mp4",
  "GAL-VIDEO-020-POSTER": null,
  "GAL-VIDEO-021": "/videos/gal-video-021.mp4",
  "GAL-VIDEO-021-POSTER": null,
  "GAL-VIDEO-022": "/videos/gal-video-022.mp4",
  "GAL-VIDEO-022-POSTER": null,
  "GAL-VIDEO-023": "/videos/gal-video-023.mp4",
  "GAL-VIDEO-023-POSTER": null,
  "GAL-VIDEO-024": "/videos/gal-video-024.mp4",
  "GAL-VIDEO-024-POSTER": null,
  "GAL-VIDEO-025": "/videos/gal-video-025.mp4",
  "GAL-VIDEO-025-POSTER": null,
  "GAL-VIDEO-026": "/videos/gal-video-026.mp4",
  "GAL-VIDEO-026-POSTER": null,
  "GAL-VIDEO-027": "/videos/gal-video-027.mp4",
  "GAL-VIDEO-027-POSTER": null,
  "GAL-VIDEO-028": "/videos/gal-video-028.mp4",
  "GAL-VIDEO-028-POSTER": null,
  "GAL-VIDEO-029": "/videos/gal-video-029.mp4",
  "GAL-VIDEO-029-POSTER": null,
  "GAL-VIDEO-030": "/videos/gal-video-030.mp4",
  "GAL-VIDEO-030-POSTER": null,
};

// --- Product photos: derived automatically from each product's own slug ---
const PRODUCT_IMAGE_DIR = "/images/products";

// Your actual files mix .jpg / .jpeg / .png (e.g. primaries are .jpg but
// many "-2" secondary shots are .jpeg or .png) — so every candidate path is
// generated in each extension. ProductImageSlider already probes each URL
// with new Image() and only keeps the ones that actually load, so trying
// extra extensions that don't exist is harmless.
const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export const getProductImage = (product) => {
  if (!product || !product.slug) return null;
  // Best-guess single path for places that just need "a" primary image
  // (e.g. category/index grid thumbnails) — still defaults to .jpg first.
  return `${PRODUCT_IMAGE_DIR}/${product.slug}.jpg`;
};

// --- Multiple product photos (for the detail-page slider) ---
// Slug-based, up to MAX_PRODUCT_IMAGES per product:
//   <slug>.jpg | .jpeg | .png | .webp        (primary)
//   <slug>-2.jpg | .jpeg | .png | .webp
//   <slug>-3.jpg | .jpeg | .png | .webp
//   ...
// Missing ones are skipped automatically by the slider's own probing.
const MAX_PRODUCT_IMAGES = 5;

export const getProductImageCandidates = (product) => {
  if (!product || !product.slug) return [];
  const paths = [];
  for (let i = 1; i <= MAX_PRODUCT_IMAGES; i++) {
    const base = i === 1 ? product.slug : `${product.slug}-${i}`;
    IMAGE_EXTENSIONS.forEach((ext) => {
      paths.push(`${PRODUCT_IMAGE_DIR}/${base}.${ext}`);
    });
  }
  return paths;
};

// Back-compat: if any existing code still calls getImage(product.imageRef),
// this keeps working too — it looks the ref code up on allProductsFlat,
// finds that product, and resolves the image from ITS slug (not the ref
// number), so old call sites are automatically correct without changes.
const productByRef = Object.fromEntries(
  allProductsFlat.map((p) => [p.imageRef, p])
);

export const getImage = (refCodeOrProduct) => {
  if (!refCodeOrProduct) return null;
  // Called with a full product object (preferred, new call sites)
  if (typeof refCodeOrProduct === "object") {
    return getProductImage(refCodeOrProduct);
  }
  // Called with a site-wide slot key like "HERO-IMG-1" / "GAL-003"
  if (imageMap[refCodeOrProduct] !== undefined) {
    return imageMap[refCodeOrProduct];
  }
  // Called with an old-style IMG-XXX ref code — resolve via the product it
  // belongs to, then use THAT product's slug (this is the part that fixes
  // the mismatch even if some old call site still passes imageRef).
  const product = productByRef[refCodeOrProduct];
  return product ? getProductImage(product) : null;
};
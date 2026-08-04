# Gajanand Packaging Solutions — Website

Multi-page React site (Vite + Tailwind v4 + React Router) built from the
uploaded WhatsApp design mockup, the 49-page product catalog, and the
visiting card.

## Running it

```
npm install
npm run dev
```

(This sandbox has no network access, so the build could not be run here —
please run `npm install` yourself and check for any dependency hiccups.
All files were syntax-checked with `tsc --noEmit` and the product data was
runtime-verified, but a real `vite build` is worth doing before you ship.)

## Pages

- `/` — Home (matches the mockup: top bar, hero, USPs, featured products,
  industries, working process, testimonial, gallery preview, about preview,
  contact, CTA, footer)
- `/products` — all 29 categories
- `/products/:category` — models within a category
- `/products/:category/:product` — individual product detail page (per your
  choice, every model gets its own page/URL, e.g.
  `/products/strapping-machines/strapping-machine-hb-sp102h`)
- `/about`, `/gallery`, `/contact`

## Data

- `src/data/company.js` — contact info, "Mfg. of" list, About Us copy. Source
  of truth is the visiting card; it overrides the catalog wherever they
  differed, per your instruction.
- `src/data/products.js` — all 29 categories / 133 products extracted from
  `gajanand_catlog.pdf` (OCR + manual cleanup, since it's an image-only PDF).
  **Please spot-check exact spec numbers against the catalog before printing
  or quoting from them** — OCR handled most tables cleanly, but a few pages
  (Inkjet Printer, some Filling Machine variants) were low-resolution and
  those spec fields were left blank rather than guessed at.

## Logo

Real logo extracted from the visiting card (vector artwork rasterized at
400dpi, background keyed out):
- `public/images/logo-red.png` — red mark, for white/light backgrounds (nav)
- `public/images/logo-white.png` — white mark, for the dark footer
- `public/images/logo-badge-red.png` — original crop with the red backing,
  kept in case you want the badge treatment somewhere

## Images

Every product, category, hero, gallery, and about-page image is currently a
labeled placeholder (`PlaceholderImage` component) showing the item name and
an internal reference code (e.g. `IMG-014`) so you know exactly which photo
goes where once you have real photography or renders. Swap them in by
passing a `src` prop.

## Adding real images (one file only)

Edit **`src/data/imageMap.js`**. It has an entry for every ref code used on
the site (`HERO-IMG-1`, `GAL-001`, `IMG-014`, etc.) — drop your photo into
`public/images/...`, then set the matching entry to that path, e.g.:

```js
"IMG-014": "/images/products/hb-sp102h.jpg",
```

Save, and every placeholder box using that ref code (home page, category
grid, product page — wherever it appears) switches to the real photo
automatically. No component code needs touching.

## Hero slider & testimonial slider

Both auto-advance every 4.5-5s and have clickable dots.
- Hero slides/copy: edit the `SLIDES` array in `src/components/HeroSection.jsx`.
- Testimonials: edit the `TESTIMONIALS` array in `src/components/Testimonial.jsx`
  (currently placeholder quotes since no real ones were supplied — swap in
  real customer names/quotes there).

## Product search

Live search box on `/products` (also reachable via the magnifying-glass icon
in the desktop nav) filters across all 133 products by name, model number,
or category as you type.

## "Get a Quote" enquiry popup

Every **GET A QUOTE** button (nav bar, product detail pages) now opens a
popup form (name / phone / message) instead of linking straight out.
There's no backend hooked up yet, so on submit it builds a WhatsApp message
from what you typed and opens `wa.me` with it pre-filled — the closest
thing to a working flow without a server. If you'd rather it post to a real
form service or your CRM, that's a one-function change in
`src/components/EnquiryModal.jsx` (`handleSubmit`).

## Floating social icons

Fixed to the left edge on every page (`src/components/SocialFloatingBar.jsx`).
- **Desktop:** hover the tab to reveal Facebook/Instagram/LinkedIn, click one to open it.
- **Mobile:** tap the tab to reveal the icons, tap the one you want to open it (tapping the tab again hides them).
- **Add your real URLs** in `src/data/company.js` -> `socials: { facebook, instagram, linkedin }` (currently `"#"` placeholders).

## Known gaps / things to double-check

- Testimonial section is an intentional placeholder — no real customer quote
  was in the source material, so I didn't invent one.
- Google Map is a placeholder box — drop in an iframe embed for your Rajkot
  address when ready.
- A few products (e.g. Side Sealer BF450–BF950, Inkjet Printer ZH-127/254,
  Consumable Items) had no legible spec table in the catalog scan — their
  detail pages show a "contact us for spec sheet" note instead of guessed
  numbers.

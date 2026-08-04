# Gajanand Packaging Solutions — Website

Marketing website for **Gajanand Packaging Solutions**, a Rajkot (Gujarat, India) based manufacturer and supplier of packaging machines — bag sealers, strapping machines, shrink tunnels, vacuum packing machines, conveyors, and wrapping machines.

Live domain: `https://gajanandpakagingsolution.com`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion |
| Icons | lucide-react |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Starts the dev server at `http://localhost:8000`.

### Build for production
```bash
npm run build
```
Outputs to `dist/`. This also runs the `postbuild` script, which regenerates `public/sitemap.xml` from the current product/category list.

### Preview a production build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

---

## Environment Variables

Create a `.env` file in the project root (see `.env` for the current value):

| Variable | Purpose |
|---|---|
| `VITE_GOOGLE_SHEET_WEBHOOK_URL` | Google Apps Script Web App URL that the enquiry form posts to, so submissions land in a Google Sheet. |

---

## Project Structure

```
4cpl-react/
├── public/
│   ├── images/          # hero, product, gallery, logo images
│   ├── videos/          # gallery videos
│   ├── robots.txt
│   └── sitemap.xml      # auto-generated — do not hand-edit
├── scripts/
│   ├── generate-sitemap.mjs   # rebuilds sitemap.xml from src/data/products.js
│   └── rename-videos.mjs
├── src/
│   ├── components/      # shared UI: Navigation, Footer, HeroSection,
│   │                     # ProductsSection, GallerySection, EnquiryModal, etc.
│   ├── features/        # standalone interactive features (e.g. CursorZoomImage)
│   ├── context/          # React context (EnquiryContext — enquiry modal state)
│   ├── data/             # static content: company.js, products.js, clients.js,
│   │                     # videos.js, imageMap.js
│   ├── pages/             # file-based routes — folder/index.jsx maps to a URL
│   │                     # (see routing notes below)
│   ├── routes/            # dynamic routes not expressible as static files:
│   │                     # CategoryPage, ProductDetailPage
│   ├── index.css
│   └── main.jsx           # app entry, route table assembly
├── index.html
├── vercel.json             # rewrites + security headers for deployment
├── vite.config.js
└── jsconfig.json           # path alias: "@/*" → "src/components/*"
```

### Routing
Routes in `src/pages/` are picked up automatically — the folder path becomes the URL:
- `src/pages/index.jsx` → `/`
- `src/pages/about/index.jsx` → `/about`
- `src/pages/products/index.jsx` → `/products`
- `src/pages/gallery/index.jsx` → `/gallery`
- `src/pages/contact/index.jsx` → `/contact`

To add a new static page, add a new folder+`index.jsx` (or `name.jsx`) under `src/pages/` — no manual route registration needed.

Dynamic product routes are registered explicitly in `src/main.jsx`:
- `/products/:categorySlug` → `CategoryPage`
- `/products/:categorySlug/:productSlug` → `ProductDetailPage`

---

## Editing Content

Most site content lives in `src/data/`, not hardcoded in components:

| File | Controls |
|---|---|
| `company.js` | Company name, contact info, address, socials, map embed, WhatsApp/phone numbers |
| `products.js` | Product categories and individual products (drives `/products`, `CategoryPage`, `ProductDetailPage`, and the sitemap) |
| `clients.js` | Logos shown in the Clients section |
| `videos.js` | Gallery video entries |
| `imageMap.js` | Central lookup from a `refCode` to an actual image path — see the comment block at the top of that file for how `PlaceholderImage` resolves images |

Adding a product/category automatically updates navigation, the products page, and `sitemap.xml` (on next build) — no other files need touching.

---

## Images

- Real photos are wired up through `src/data/imageMap.js` by `refCode`; until an image is added there, `PlaceholderImage` renders a labeled placeholder box instead of a broken image.
- Keep hero images as WebP with a preserved alpha channel (transparent background) — do not flatten to RGB when re-exporting, or the transparency will be lost.
- Product/gallery photos should be compressed and sized close to their actual display width before committing (avoid dropping in unresized originals straight from a camera).

---

## Deployment

Hosted on **Vercel**. `vercel.json` handles SPA rewrites (`/*` → `/index.html`) and sets security headers (CSP, HSTS, X-Frame-Options, COOP). Pushing to the connected branch triggers a build + deploy automatically; the `postbuild` script keeps `sitemap.xml` in sync on every build.

---

## Performance & Accessibility Notes

The site is periodically checked with Lighthouse. Known conventions to preserve when adding new UI:

- Wrap new page content inside the existing `<main>` landmark (via `PageShell` for inner pages) rather than adding sections as siblings of `<Footer>`.
- Keep heading levels sequential (don't jump from `h2` to `h4`).
- Use `text-gray-500` or darker for body text on white backgrounds — `text-gray-400` fails contrast on light surfaces (it's fine on the dark Footer).
- Interactive icon buttons should be at least 44×44px (`w-11 h-11` or larger) for touch targets.
- Give `<img>`/`PlaceholderImage` explicit `width`/`height`, and `loading="lazy"` for anything below the fold (leave the hero slide image eager since it's the LCP element).
- New routes should be added under `src/pages/` so they pick up automatic code-splitting (lazy-loaded per route in `main.jsx`) rather than being imported eagerly.
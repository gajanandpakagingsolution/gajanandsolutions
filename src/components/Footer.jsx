import React from "react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import { categories } from "../data/products";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const FOOTER_PRODUCT_SLUGS = [
  "strapping-machines",
  "shrink-tunnel-machines",
  "vacuum-packaging-machines",
  "band-sealers",
  "coding-printing-machines",
];

const SOCIAL_LINKS = [
  {
    key: "facebook",
    href: company.socials.facebook,
    label: "Visit Gajanand Packaging Solutions on Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    href: company.socials.instagram,
    label: "Visit Gajanand Packaging Solutions on Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    href: company.socials.linkedin,
    label: "Visit Gajanand Packaging Solutions on LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    key: "youtube",
    href: company.socials.youtube,
    label: "Visit Gajanand Packaging Solutions on YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const Footer = () => {
  const footerProducts = FOOTER_PRODUCT_SLUGS.map((slug) => categories.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <footer className="bg-gray-900 pt-14 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <img src="/images/logo-white.png" alt={company.name} width="176" height="44" loading="lazy" decoding="async" className="mb-4 h-11 w-auto" />
            <p className="mb-5 text-sm leading-relaxed text-gray-300">
              {company.tagline} - {company.about.highlight.toLowerCase()}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-700 transition hover:bg-red-700"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="relative mb-5 pb-3 text-base font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-red-700">
              Quick Links
            </h2>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="flex min-h-11 items-center gap-2 text-sm text-gray-300 transition hover:text-red-300">
                    <span className="text-red-700">&rsaquo;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="relative mb-5 pb-3 text-base font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-red-700">
              Products
            </h2>
            <ul>
              {footerProducts.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/products/${cat.slug}`} className="flex min-h-11 items-center gap-2 text-sm text-gray-300 transition hover:text-red-300">
                    <span className="text-red-700">&rsaquo;</span> {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="flex min-h-11 items-center gap-2 text-sm text-gray-300 transition hover:text-red-300">
                  <span className="text-red-700">&rsaquo;</span> View all products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-gray-300 md:flex-row">
          <span>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</span>
          <span className="flex items-center gap-2">
            <Link to="/privacy-policy" className="inline-flex min-h-11 items-center transition hover:text-red-300">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms-and-conditions" className="inline-flex min-h-11 items-center transition hover:text-red-300">
              Terms &amp; Conditions
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

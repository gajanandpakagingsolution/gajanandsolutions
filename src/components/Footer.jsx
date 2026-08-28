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
    label: "Facebook",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    href: company.socials.instagram,
    label: "Instagram",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    href: company.socials.linkedin,
    label: "LinkedIn",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    key: "youtube",
    href: company.socials.youtube,
    label: "YouTube",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
];

const Footer = () => {
  const footerProducts = FOOTER_PRODUCT_SLUGS.map((slug) =>
    categories.find((c) => c.slug === slug)
  ).filter(Boolean);

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-red-800 via-red-600 to-red-800" />

      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <img
              src="/images/logo-white.png"
              alt={company.name}
              width="176"
              height="44"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              {company.tagline} — {company.about.highlight.toLowerCase()}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${company.name} on ${link.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-gray-400 border border-gray-800 transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-red-600" />
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-red-500"
                  >
                    <span className="text-red-600 font-bold">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Top Categories
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-red-600" />
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerProducts.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-red-500"
                  >
                    <span className="text-red-600 font-bold">&rsaquo;</span>
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 font-medium text-red-500 transition-colors duration-150 hover:text-red-400"
                >
                  <span className="font-bold">&rsaquo;</span> View all products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact (New Section) */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-red-600" />
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {company.phone && (
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{company.phone}</span>
                </li>
              )}
              {company.email && (
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{company.email}</span>
                </li>
              )}
              {company.address && (
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{company.address}</span>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 bg-black py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-gray-500 sm:px-6 md:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors duration-150 hover:text-gray-300">
              Privacy Policy
            </Link>
            <span className="text-gray-800">•</span>
            <Link to="/terms-and-conditions" className="transition-colors duration-150 hover:text-gray-300">
              Terms &amp; Conditions
            </Link>
            <span className="text-gray-800">•</span>
            <span>
              Made by{" "}
              <a
                href="https://www.bytebly.in/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 font-medium transition-colors duration-150 hover:text-red-500"
              >
                Bytebly.in
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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

const Footer = () => {
  const footerProducts = FOOTER_PRODUCT_SLUGS.map((slug) => categories.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">
          {/* Column 1: Logo & About */}
          <div>
            <img src="/images/logo-white.png" alt={company.name} className="h-11 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {company.tagline} — {company.about.highlight.toLowerCase()}
            </p>
            <div className="flex items-center gap-3">
              <a href={company.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-red-700 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href={company.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-red-700 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"></line>
                </svg>
              </a>
              <a href={company.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-red-700 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={company.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-red-700 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-red-700">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-400 text-sm transition flex items-center gap-2">
                    <span className="text-red-700">&rsaquo;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-red-700">
              Products
            </h4>
            <ul className="space-y-3">
              {footerProducts.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/products/${cat.slug}`} className="text-gray-400 hover:text-red-400 text-sm transition flex items-center gap-2">
                    <span className="text-red-700">&rsaquo;</span> {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-gray-400 hover:text-red-400 text-sm transition flex items-center gap-2">
                  <span className="text-red-700">&rsaquo;</span> & More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</span>
          <span className="flex items-center gap-2">
            <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-red-400 transition">Terms &amp; Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

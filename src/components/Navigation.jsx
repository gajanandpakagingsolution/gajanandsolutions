import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { company } from "../data/company";
import { useEnquiry } from "../context/EnquiryContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openEnquiry } = useEnquiry();

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo-red.svg" alt={company.name} className="h-11 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={
                isActive(link.href)
                  ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                  : "text-gray-700 hover:text-red-700 font-medium pb-1 border-b-2 border-transparent"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/products"
          aria-label="Search products"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:text-red-700 hover:bg-red-50 transition mr-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 114 10.5a6.5 6.5 0 0113 0z" />
          </svg>
        </Link>
        <button
          onClick={() => openEnquiry()}
          className="hidden md:flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded font-semibold hover:bg-red-800 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          GET A QUOTE
        </button>

        <div className="md:hidden flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
            className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button onClick={() => setOpen(!open)} className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={isActive(link.href) ? "text-red-700 font-semibold" : "text-gray-700 font-medium"}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openEnquiry();
            }}
            className="bg-red-700 text-white text-center px-5 py-2.5 rounded font-semibold"
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

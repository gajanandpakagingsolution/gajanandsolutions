import React from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

/**
 * Shared shell for all inner pages: top bar, nav, an optional page-title
 * banner (matches the red/charcoal hero style), page content, footer and
 * floating buttons.
 */
const PageShell = ({ title, breadcrumb, children }) => {
  return (
    <div id="top" className="bg-white font-sans">
      <TopBar />
      <Navigation />
      {title && (
        <div className="bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-90" style={{ background: "linear-gradient(120deg, #1f2937 55%, #BE1E2D 100%)" }} />
          <div className="max-w-7xl mx-auto px-4 py-12 relative">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h1>
            {breadcrumb && <p className="text-gray-300 text-sm mt-2">{breadcrumb}</p>}
          </div>
        </div>
      )}
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PageShell;

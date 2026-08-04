import React from "react";
import { company } from "../data/company";

const FloatingButtons = () => {
  return (
    <>
      <a
        href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-8 ring-green-500/10 transition hover:-translate-y-1 hover:bg-[#1fbd5a] hover:ring-green-500/20"
        style={{ boxShadow: "0 12px 34px rgba(37,211,102,0.38)" }}
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/25" />
        <svg xmlns="http://www.w3.org/2000/svg" className="relative h-8 w-8 text-white" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.04 3.2A12.7 12.7 0 003.33 15.86c0 2.23.59 4.4 1.72 6.31L3.2 28.8l6.79-1.78a12.68 12.68 0 006.05 1.54h.01A12.69 12.69 0 0016.04 3.2zm0 23.22h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.48 10.48 0 1119.49-5.58 10.49 10.49 0 01-10.49 10.56zm5.75-7.85c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.69.08-.31-.16-1.33-.49-2.54-1.56-.94-.84-1.57-1.87-1.75-2.19-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.39 4.76.75.32 1.34.52 1.8.67.76.24 1.44.21 1.98.13.6-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </a>
      <div
        className="fixed bottom-6 left-20 z-50 hidden md:block bg-white text-gray-700 text-sm px-3 py-1 rounded-full shadow"
        style={{ bottom: "28px" }}
      >
        Chat with us
      </div>
      <a
        href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
        className="fixed bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-red-700 hover:bg-red-800 flex items-center justify-center shadow-lg transition md:hidden"
        style={{ boxShadow: "0 4px 20px rgba(190,30,45,0.4)" }}
        aria-label="Call us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <a
        href="#top"
        className="fixed bottom-6 right-4 z-50 hidden md:flex w-12 h-12 rounded bg-red-700 hover:bg-red-800 items-center justify-center shadow-lg transition"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path></svg>
      </a>
    </>
  );
};

export default FloatingButtons;

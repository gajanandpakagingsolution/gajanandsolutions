import React, { useState } from "react";
import { company } from "../data/company";

const LINKS = [
  {
    key: "facebook",
    label: "Facebook",
    href: company.socials.facebook,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: company.socials.instagram,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.2.27 2.9.6a5.8 5.8 0 012.1 1.4 5.8 5.8 0 011.4 2.1c.3.7.5 1.7.6 2.9.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.27 2.2-.6 2.9a5.8 5.8 0 01-1.4 2.1 5.8 5.8 0 01-2.1 1.4c-.7.3-1.7.5-2.9.6-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.2-.27-2.9-.6a5.8 5.8 0 01-2.1-1.4 5.8 5.8 0 01-1.4-2.1c-.3-.7-.5-1.7-.6-2.9C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.27-2.2.6-2.9a5.8 5.8 0 011.4-2.1 5.8 5.8 0 012.1-1.4c.7-.3 1.7-.5 2.9-.6C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1 .04-1.55.21-1.9.35-.48.19-.82.41-1.18.77-.36.36-.58.7-.77 1.18-.14.36-.31.9-.35 1.9C3 9.28 3 9.65 3 12.8s0 3.52.07 4.76c.04 1 .21 1.55.35 1.9.19.48.41.82.77 1.18.36.36.7.58 1.18.77.36.14.9.31 1.9.35 1.24.06 1.6.07 4.76.07s3.52 0 4.76-.07c1-.04 1.55-.21 1.9-.35.48-.19.82-.41 1.18-.77.36-.36.58-.7.77-1.18.14-.36.31-.9.35-1.9.06-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.04-1-.21-1.55-.35-1.9a3.1 3.1 0 00-.77-1.18 3.1 3.1 0 00-1.18-.77c-.36-.14-.9-.31-1.9-.35C15.52 3 15.15 3 12 3zm0 3.9a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 1.8a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm5.3-2a1.19 1.19 0 110 2.38 1.19 1.19 0 010-2.38z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: company.socials.linkedin,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: company.socials.youtube,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
];

/**
 * Floating social bar, fixed to the left edge of every page.
 * - Desktop: hover over the tab to reveal the three icons; click one to open it.
 * - Mobile/touch (no hover): tap the tab to reveal the icons, tap again on
 *   the icon you want to open that link. Tapping the tab again hides them.
 */
const SocialFloatingBar = () => {
  const [open, setOpen] = useState(false);

  const revealClasses = () =>
    `transition-all duration-200 ${
      open
        ? "opacity-100 translate-x-0 pointer-events-auto"
        : "opacity-0 -translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
    }`;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group">
      <div className="flex items-center">
        {/* toggle tab */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle social links"
          aria-expanded={open}
          className="bg-gray-900 text-white w-11 h-16 rounded-r-md flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342a3 3 0 100-2.684m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 8a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>

        {/* icons */}
        <div className="flex flex-col gap-2.5 ml-2">
          {LINKS.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className={`w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-red-700 hover:text-white transition-colors ${revealClasses(i)}`}
              style={{ transitionDelay: open || undefined ? `${i * 40}ms` : "0ms" }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialFloatingBar;

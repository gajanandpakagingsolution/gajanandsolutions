import React from "react";
import { getImage } from "../data/imageMap";

/**
 * Renders a real image if one is available, otherwise a labeled placeholder
 * box so the layout stays correct until photography / renders are supplied.
 *
 * Image resolution order:
 *   1. explicit `src` prop (if you pass one directly)
 *   2. a lookup in src/data/imageMap.js by `refCode` — THIS is the file to
 *      edit to add real photos across the whole site, see the comment block
 *      at the top of imageMap.js for instructions.
 *   3. otherwise, the dashed placeholder box with the label + ref code.
 *
 * Sizing note: this component does NOT impose its own width/height/fit —
 * the caller's `className` fully controls size and fit (e.g. pass
 * `h-full w-full object-cover` to fill a fixed-size box and crop cleanly).
 */
const dimensionsForAspect = (aspect = "") => {
  if (aspect.includes("square") || aspect.includes("1/1")) return { width: 800, height: 800 };
  if (aspect.includes("16/10")) return { width: 1600, height: 1000 };
  if (aspect.includes("3/2")) return { width: 1200, height: 800 };
  return { width: 1200, height: 900 };
};

const PlaceholderImage = ({ src, alt, label, refCode, aspect = "", className = "", loading = "lazy", fetchPriority }) => {
  const resolvedSrc = src || getImage(refCode);
  const { width, height } = dimensionsForAspect(aspect);
  const sizingClass = `${aspect} ${className}`.trim();

  if (resolvedSrc) {
    return (
      <img
        src={resolvedSrc}
        alt={alt || label}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={`${sizingClass} block rounded-2xl shadow-md`}
      />
    );
  }
  return (
    <div
      className={`${sizingClass} flex flex-col items-center justify-center gap-1 bg-gray-100 border-2 border-dashed border-gray-300 text-center px-2`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[11px] font-medium text-gray-500 leading-tight">{label}</span>
      {refCode && <span className="text-[10px] text-gray-300">{refCode}</span>}
    </div>
  );
};

export default PlaceholderImage;

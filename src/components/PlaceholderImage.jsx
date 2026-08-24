import React, { useEffect, useState } from "react";
import { getImage, getProductImageCandidates } from "../data/imageMap";

/**
 * Renders a real image if one is available, otherwise a labeled placeholder
 * box so the layout stays correct until photography / renders are supplied.
 *
 * Image resolution order:
 *   1. explicit `src` prop (if you pass one directly)
 *   2. if a `product` object is passed, probes every real candidate file
 *      for that product (every extension / numbered slot from
 *      getProductImageCandidates in imageMap.js) and uses whichever one
 *      actually loads.
 *   3. otherwise, a lookup in src/data/imageMap.js by `refCode` — used for
 *      fixed site-wide slots (HERO-IMG-1, GAL-001, etc.) whose paths are
 *      already known-correct.
 *   4. otherwise, the dashed placeholder box with the label + ref code.
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

const PlaceholderImage = ({
  src,
  alt,
  label,
  refCode,
  product, // NEW — pass a product object to probe its real photo files
  aspect = "",
  className = "",
  loading = "lazy",
  fetchPriority,
}) => {
  const { width, height } = dimensionsForAspect(aspect);
  const sizingClass = `${aspect} ${className}`.trim();

  // undefined = still probing, null = none found (only relevant when `product` is passed)
  const [probedSrc, setProbedSrc] = useState(null);

  useEffect(() => {
    if (!product) {
      setProbedSrc(null);
      return;
    }
    let cancelled = false;
    setProbedSrc(undefined);

    const candidates = getProductImageCandidates(product);

    (async () => {
      for (const url of candidates) {
        if (cancelled) return;
        const ok = await new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
        if (cancelled) return;
        if (ok) {
          setProbedSrc(url);
          return;
        }
      }
      if (!cancelled) setProbedSrc(null);
    })();

    return () => {
      cancelled = true;
    };
  }, [product]);

  const resolvedSrc = src || (product ? probedSrc : getImage(refCode));

  // Still checking candidate files for a product image — avoid flashing
  // the placeholder box before the real photo has a chance to resolve.
  if (product && probedSrc === undefined) {
    return <div className={`${sizingClass} bg-gray-100 animate-pulse rounded-2xl`} />;
  }

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
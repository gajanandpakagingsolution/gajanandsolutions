import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { getProductImageCandidates } from "../data/imageMap";
import CursorZoomImage from "../features/CursorZoomImage";

const ProductImageSlider = ({ product }) => {
  const [validImages, setValidImages] = useState(null); // null = still checking
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({ transform: "scale(1)", transformOrigin: "center" });

  useEffect(() => {
    let cancelled = false;
    setValidImages(null);
    setActiveIndex(0);

    const candidates = getProductImageCandidates(product);
    Promise.all(
      candidates.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((results) => {
      if (cancelled) return;
      setValidImages(results.filter(Boolean));
    });

    return () => {
      cancelled = true;
    };
  }, [product]);

  const goTo = (i, e) => {
    e?.stopPropagation();
    if (!validImages?.length) return;
    setActiveIndex((i + validImages.length) % validImages.length);
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({ transform: "scale(1.8)", transformOrigin: `${x}% ${y}%` });
  };
  const handleMouseLeave = () => setZoomStyle({ transform: "scale(1)", transformOrigin: "center" });

  // Still checking which images exist, or none exist — show placeholder.
  if (validImages === null || validImages.length === 0) {
    return (
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
        <CursorZoomImage>
        <PlaceholderImage
          label={product.name}
          refCode={product.imageRef}
          aspect="aspect-square"
          className="w-full h-full object-cover"
        />
        </CursorZoomImage>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main image with cursor-zoom */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100"
      >
        <img
          src={validImages[activeIndex]}
          alt={`${product.name} - view ${activeIndex + 1}`}
          className="h-full w-full object-cover ease-out"
          style={{ ...zoomStyle, transition: "transform 150ms ease-out" }}
        />

        {validImages.length > 1 && (
          <>
            <button
              onClick={(e) => goTo(activeIndex - 1, e)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => goTo(activeIndex + 1, e)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {validImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => goTo(i, e)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? "w-5 bg-red-700" : "w-1.5 bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {validImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {validImages.map((src, i) => (
            <button
              key={src}
              onClick={(e) => goTo(i, e)}
              className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 transition ${
                i === activeIndex ? "border-red-700" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageSlider;
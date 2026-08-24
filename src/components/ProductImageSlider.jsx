import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { getProductImageCandidates } from "../data/imageMap";
import CursorZoomImage from "../features/CursorZoomImage";

const ProductImageSlider = ({ product }) => {
  const [validImages, setValidImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({ transform: "scale(1)", transformOrigin: "center" });
  
  // Touch swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  // Zoom feature enabled primarily for mouse devices to prevent touch conflicts
  const handleMouseMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // Skip on mobile touch
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({ transform: "scale(1.8)", transformOrigin: `${x}% ${y}%` });
  };

  const handleMouseLeave = () => setZoomStyle({ transform: "scale(1)", transformOrigin: "center" });

  // Swipe support for mobile view
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      goTo(activeIndex + 1); // Swipe left -> Next
    } else if (distance < -minSwipeDistance) {
      goTo(activeIndex - 1); // Swipe right -> Prev
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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
      {/* Main Image Slider Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 touch-pan-y"
      >
        <img
          src={validImages[activeIndex]}
          alt={`${product.name} - view ${activeIndex + 1}`}
          className="h-full w-full object-cover ease-out select-none"
          style={{ ...zoomStyle, transition: "transform 150ms ease-out" }}
        />

        {validImages.length > 1 && (
          <>
            {/* Previous Arrow Button */}
            <button
              onClick={(e) => goTo(activeIndex - 1, e)}
              aria-label="Previous image"
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md hover:bg-white active:scale-95 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={(e) => goTo(activeIndex + 1, e)}
              aria-label="Next image"
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md hover:bg-white active:scale-95 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2 rounded-full bg-black/20 px-2.5 py-1.5 backdrop-blur-sm">
              {validImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => goTo(i, e)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? "w-6 bg-red-600" : "w-2 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {validImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
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
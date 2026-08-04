import React, { useState } from "react";

const CursorZoomImage = ({ children }) => {
  const [origin, setOrigin] = useState("50% 50%");
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div
      className="w-full h-full overflow-hidden cursor-zoom-in"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setOrigin("50% 50%");
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: origin,
          transform: hovering ? "scale(2)" : "scale(1)",
          transition: hovering
            ? "transform 0.6s ease-out"      // slow zoom-in on entry
            : "transform 0.4s ease-out",     // smooth zoom-out on leave
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CursorZoomImage;
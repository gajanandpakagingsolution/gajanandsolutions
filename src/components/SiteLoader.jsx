import React, { useEffect, useState } from "react";

const SiteLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        <div className="absolute h-24 w-24 rounded-full border border-red-100" />
        <div className="h-20 w-20 rounded-full border-4 border-gray-100 border-t-red-700 animate-spin" />
        <img src="/images/logo-red.png" alt="Gajanand Packaging Solutions" className="absolute top-1/2 h-10 w-auto -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SiteLoader;

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const EnquiryContext = createContext(null);

export const EnquiryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productContext, setProductContext] = useState(null); // e.g. "Strapping Machine (HB-SP102H)"

  const openEnquiry = useCallback((product = null) => {
    setProductContext(product);
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const key = "gajanand-enquiry-popup-shown";
    if (sessionStorage.getItem(key)) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(key, "true");
      openEnquiry();
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [openEnquiry]);

  return (
    <EnquiryContext.Provider value={{ isOpen, productContext, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within an EnquiryProvider");
  return ctx;
};

import React, { useEffect } from "react";
import { useEnquiry } from "../context/EnquiryContext";
import { EnquiryForm } from "./EnquiryForm";

const EnquiryModal = () => {
  const { isOpen, productContext, closeEnquiry } = useEnquiry();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeEnquiry();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeEnquiry]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={closeEnquiry} />
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl md:p-8">
        <button
          onClick={closeEnquiry}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="mb-1 text-xl font-bold text-gray-800">Get a Quote</h3>
        {productContext ? (
          <p className="mb-5 text-sm text-gray-500">
            For <span className="font-medium text-red-700">{productContext}</span>
          </p>
        ) : (
          <p className="mb-5 text-sm text-gray-500">Tell us what you need and our team will get back to you.</p>
        )}

        <EnquiryForm initialProduct={productContext || ""} onSuccess={closeEnquiry} />
      </div>
    </div>
  );
};

export default EnquiryModal;
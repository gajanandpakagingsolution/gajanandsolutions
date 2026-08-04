import React, { useEffect, useState } from "react";
import { useEnquiry } from "../context/EnquiryContext";
import { company } from "../data/company";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  companyName: "",
  city: "",
  product: "",
  quantity: "",
  message: "",
};

const EnquiryModal = () => {
  const { isOpen, productContext, closeEnquiry } = useEnquiry();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, product: productContext || f.product }));
      setNotice("");
    }
  }, [isOpen, productContext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setForm(initialForm);
      setSubmitting(false);
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

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const sendToGoogleSheet = async (payload) => {
    const webhookUrl = company.integrations.googleSheetWebhookUrl?.trim();
    if (!webhookUrl) return false;

    const body = new FormData();
    Object.entries(payload).forEach(([key, value]) => body.append(key, value || ""));
    await fetch(webhookUrl, { method: "POST", mode: "no-cors", body });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      submittedAt: new Date().toISOString(),
      source: window.location.href,
      product: form.product.trim() || productContext || "General packaging enquiry",
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      companyName: form.companyName.trim(),
      city: form.city.trim(),
      quantity: form.quantity.trim(),
      message: form.message.trim(),
    };

    try {
      await sendToGoogleSheet(payload);
    } catch {
      setNotice("Sheet save could not be confirmed, but WhatsApp will still open.");
    }

    const lines = [
      "New enquiry from the website:",
      `Product: ${payload.product}`,
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      payload.email ? `Email: ${payload.email}` : null,
      payload.companyName ? `Company: ${payload.companyName}` : null,
      payload.city ? `City: ${payload.city}` : null,
      payload.quantity ? `Quantity: ${payload.quantity}` : null,
      payload.message ? `Message: ${payload.message}` : null,
      `Page: ${payload.source}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${text}`, "_blank");
    setSubmitting(false);
    closeEnquiry();
  };

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

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">Name</label>
            <input required type="text" value={form.name} onChange={update("name")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">Phone Number</label>
            <input required type="tel" value={form.phone} onChange={update("phone")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="+91 9XXXXXXXXX" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">Email</label>
            <input type="email" value={form.email} onChange={update("email")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">Company Name</label>
            <input type="text" value={form.companyName} onChange={update("companyName")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="Business name" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">City</label>
            <input required type="text" value={form.city} onChange={update("city")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="City / location" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">Product Required</label>
            <input required type="text" value={form.product} onChange={update("product")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="Machine or material name" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-500">Quantity / Requirement</label>
            <input type="text" value={form.quantity} onChange={update("quantity")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="1 machine, bulk order, etc." />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-semibold text-gray-500">Message</label>
            <textarea rows={3} value={form.message} onChange={update("message")} className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none" placeholder="Specs, packing size, timeline..." />
          </div>
          {notice && <p className="text-xs text-amber-700 md:col-span-2">{notice}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-400 md:col-span-2"
          >
            {submitting ? "Preparing Enquiry..." : "Send Enquiry to WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;

import React, { useState } from "react";
import { company } from "../data/company";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const sendToGoogleSheet = async (payload) => {
    const webhookUrl = company.integrations?.googleSheetWebhookUrl?.trim();
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
    product: "General Contact Page Enquiry",
    name: form.name.trim(),
    phone: form.phone.trim(),
    email: form.email.trim(),
    message: form.message.trim(),
  };

  // 1. Send to Google Sheets
  try {
    await sendToGoogleSheet(payload);
  } catch {
    setNotice("Sheet save could not be confirmed, but WhatsApp will open.");
  }

  // 2. Format message for WhatsApp
  const lines = [
    "New Contact Page Enquiry:",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.message ? `Message: ${payload.message}` : null,
    `Page: ${payload.source}`,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));

  // 3. Open WhatsApp in new tab with the pre-filled message
  window.open(`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${text}`, "_blank");

  setSubmitting(false);
  setForm(initialForm);
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a Message</h3>
      
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-500">Name *</label>
        <input
          required
          type="text"
          value={form.name}
          onChange={update("name")}
          className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-500">Phone Number *</label>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none"
          placeholder="+91 9XXXXXXXXX"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-500">Email (Optional)</label>
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-500">Message *</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="w-full rounded border px-4 py-2.5 text-sm focus:border-red-700 focus:outline-none"
          placeholder="Write your requirement or query here..."
        />
      </div>

      {notice && <p className="text-xs text-amber-700">{notice}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-400"
      >
        {submitting ? "Preparing Message..." : "Send Message via WhatsApp"}
      </button>
    </form>
  );
};
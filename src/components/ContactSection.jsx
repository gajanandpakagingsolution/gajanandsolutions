import React from "react";
import { company } from "../data/company";
import { useEnquiry } from "../context/EnquiryContext";
import MapEmbed from "./MapEmbed";

const ITEMS = [
  {
    title: "Address",
    content: company.address,
    icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Phone",
    content: `${company.whatsapp} (WhatsApp) / ${company.phone} (Call)`,
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    title: "Email",
    content: company.email,
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Timings",
    content: company.timings,
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const ContactSection = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile / tablet heading */}
        <div className="md:hidden mb-5">
          <h2 className="text-xl font-bold text-gray-800">Get In Touch</h2>
          <div className="h-1 w-10 bg-red-700 mt-2 rounded-full" />
        </div>

        {/* Desktop heading */}
        <div className="hidden md:block text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-12 bg-red-700"></div>
            <span className="text-red-700 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-red-700"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            {ITEMS.map((contact) => (
              <div key={contact.title} className="flex items-start gap-4 mb-5 md:mb-6">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={contact.icon} />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-0.5">{contact.title}</div>
                  <div className="text-gray-600 text-xs md:text-sm">{contact.content}</div>
                </div>
              </div>
            ))}
            <MapEmbed className="mb-5 h-[280px] md:hidden" />
            <button
              onClick={() => openEnquiry()}
              className="w-full md:w-auto text-center bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition"
            >
              SEND ENQUIRY
            </button>
          </div>
          <div className="hidden md:block">
            <MapEmbed className="h-full min-h-[360px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

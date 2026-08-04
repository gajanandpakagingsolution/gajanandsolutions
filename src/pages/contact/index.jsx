import React from "react";
import PageShell from "@/PageShell";
import MapEmbed from "@/MapEmbed";
import { company } from "../../data/company";
import { useEnquiry } from "../../context/EnquiryContext";

const ContactPage = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <PageShell title="Contact Us" breadcrumb="Home / Contact Us">
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700 font-bold">A</div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">Address</div>
                  <div className="text-gray-600 text-sm">{company.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700 font-bold">P</div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">Phone</div>
                  <div className="text-gray-600 text-sm">{company.whatsapp} (WhatsApp)</div>
                  <div className="text-gray-600 text-sm">{company.phone} (Call)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700 font-bold">E</div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">Email</div>
                  <div className="text-gray-600 text-sm">{company.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700 font-bold">T</div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">Timings</div>
                  <div className="text-gray-600 text-sm">{company.timings}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => openEnquiry()}
              className="inline-block bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition"
            >
              SEND ENQUIRY
            </button>
          </div>
          <div>
            <MapEmbed className="h-[340px]" />
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                openEnquiry();
              }}
            >
              <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none focus:border-red-700" />
              <input type="text" placeholder="Phone Number" className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none focus:border-red-700" />
              <textarea placeholder="Your Message" rows={4} className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none focus:border-red-700" />
              <button type="submit" className="bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition">
                OPEN ENQUIRY FORM
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;

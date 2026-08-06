import React from "react";
import PageShell from "@/PageShell";
import MapEmbed from "@/MapEmbed";
import { company } from "../../data/company";
import { ContactForm } from "../../components/ContactForm";

const CONTACT_ITEMS = [
  {
    label: "Address",
    value: company.address,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <circle cx="12" cy="11" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: (
      <>
        <div>{company.whatsapp} <span className="text-gray-400">· WhatsApp</span></div>
        <div>{company.phone} <span className="text-gray-400">· Call</span></div>
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: company.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Timings",
    value: company.timings,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5" />
      </svg>
    ),
  },
];

const ContactPage = () => {
  return (
    <PageShell title="Contact Us" breadcrumb="Home / Contact Us">
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 md:mb-12">
            <span className="inline-block text-xs font-bold tracking-widest text-red-700 uppercase mb-2">
              Get In Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Talk to our team
            </h2>
            <div className="h-1 w-12 bg-red-700 rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="space-y-6">
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white h-[280px]">
                <MapEmbed className="h-full w-full" />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
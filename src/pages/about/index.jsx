import React from "react";
import PageShell from "@/PageShell";
import PlaceholderImage from "@/PlaceholderImage";
import { company } from "../../data/company";
import ClientsSection from "../../components/ClientsSection";

const AboutPage = () => {
  return (
    <PageShell title="About Us" breadcrumb="Home / About Us">
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <PlaceholderImage label="Factory building photo" refCode="ABOUT-IMG" aspect="aspect-[3/2]" className="w-full rounded-2xl shadow-md" />
            <div className="bg-red-700 text-white rounded-2xl p-8 text-center font-bold text-xl">
              {company.about.highlight}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-red-700 mb-3">Company Brief</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-justify">{company.about.brief}</p>
          <p className="text-gray-600 leading-relaxed mb-10 text-justify">{company.about.commitment}</p>

          <h2 className="text-2xl font-bold text-red-700 mb-3">Why Choose Us?</h2>
          <p className="text-gray-600 leading-relaxed mb-10 text-justify">{company.about.whyChooseUs}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-700">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-red-700">&#9673;</span> Vision
              </h3>
              <p className="text-gray-600 text-sm text-justify">{company.about.vision}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-700">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-red-700">&#127919;</span> Mission
              </h3>
              <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                {company.about.mission.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ClientsSection />
    </PageShell>
  );
};

export default AboutPage;
import React from "react";
import PageShell from "@/PageShell";

const TermsAndConditionsPage = () => (
  <PageShell title="Terms & Conditions" breadcrumb="Home / Terms & Conditions">
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4">
        <div className="space-y-5 text-sm leading-relaxed text-gray-600">
          <p>
            Product information, specifications and images on this website are provided for general guidance and may
            change as machines are improved or customized.
          </p>
          <p>
            Quotations, delivery timelines, installation scope and warranty terms are confirmed directly by Gajanand
            Packaging Solutions for each order.
          </p>
          <p>
            For current pricing and machine suitability, please contact our team before placing an order.
          </p>
        </div>
      </div>
    </section>
  </PageShell>
);

export default TermsAndConditionsPage;

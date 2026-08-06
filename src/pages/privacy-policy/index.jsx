import React from "react";
import PageShell from "@/PageShell";

const PrivacyPolicyPage = () => (
  <PageShell title="Privacy Policy" breadcrumb="Home / Privacy Policy">
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4">
        <div className="space-y-5 text-sm leading-relaxed text-gray-600">
          <p>
            Gajanand Packaging Solutions uses enquiry details only to respond to product, service and support
            requests. We do not sell visitor information.
          </p>
          <p>
            Information shared through calls, WhatsApp, email or website forms may include your name, contact
            details, company name and machine requirements. This helps us prepare accurate quotations and follow up
            on service requests.
          </p>
          <p>
            To update or remove enquiry information, contact us at gajanandworld@gmail.com.
          </p>
        </div>
      </div>
    </section>
  </PageShell>
);

export default PrivacyPolicyPage;

import React from "react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import PlaceholderImage from "./PlaceholderImage";

const AboutUsSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile / tablet layout */}
        <div className="md:hidden">
          <h2 className="text-xl font-bold text-gray-800 mb-2">About Us</h2>
          <div className="h-1 w-10 bg-red-700 mb-5 rounded-full" />
          <PlaceholderImage
            label="Factory building photo"
            refCode="ABOUT-IMG"
            className="inline-block w-auto h-auto rounded-2xl shadow-md mb-5"
          />
          {/* Added text-justify */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5 text-justify">
            {company.name} is a leading manufacturer and supplier of premium quality packaging machines. We are
            committed to delivering innovative solutions with reliable service and support to our valuable
            customers.
          </p>
          <Link
            to="/about"
            aria-label="Read more about Gajanand Packaging Solutions"
            className="inline-block w-full text-center bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition"
          >
            READ ABOUT US
          </Link>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center gap-10">
          <div className="w-1/2 flex justify-center">
            <PlaceholderImage
              label="Factory building photo"
              refCode="ABOUT-IMG"
              className="inline-block w-auto h-auto max-w-full rounded-2xl shadow-md"
            />
          </div>
          <div className="w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-red-700"></div>
              <span className="text-red-700 font-semibold text-sm tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            {/* Added text-justify */}
            <p className="text-gray-600 text-base leading-relaxed mb-4 text-justify">
              {company.about.brief}
            </p>
            {/* Added text-justify */}
            <p className="text-gray-600 text-base leading-relaxed mb-6 text-justify">
              {company.about.commitment}
            </p>
            <Link
              to="/about"
              aria-label="Read more about Gajanand Packaging Solutions"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition"
            >
              READ ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
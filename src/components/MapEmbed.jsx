import React from "react";
import { company } from "../data/company";

const MapEmbed = ({ className = "" }) => (
  <div className={`overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-gray-100 ${className}`}>
    <iframe
      src={company.mapEmbedUrl}
      title={`${company.name} location map`}
      width="600"
      height="450"
      className="block h-full min-h-[280px] w-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
);

export default MapEmbed;

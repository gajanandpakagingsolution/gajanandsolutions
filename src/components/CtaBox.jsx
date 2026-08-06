import React from "react";
import { company } from "../data/company";

const CtaBox = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-red-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 overflow-hidden">
  {company.logo ? (
    <img
      src={company.logo}
      alt="Owner Logo"
      width="48"
      height="48"
      loading="lazy"
      decoding="async"
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 md:h-8 md:w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28..."
      />
    </svg>
  )}
</div>

            <div>
              <div className="text-white text-opacity-90 text-sm md:text-base">
                Need Help Choosing
              </div>
              <div className="text-white font-extrabold text-lg md:text-2xl">
                the Right Machine?
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col items-start md:items-center gap-3">
            <span className="text-white text-opacity-90 text-sm md:text-base font-medium">
              Our experts are here to help you find the perfect solution.
            </span>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-gray-800 px-6 py-3 rounded font-bold hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.528 5.857L.057 23.899c-.054.228.066.459.282.514a.4.4 0 00.107.014.4.4 0 00.302-.137l5.774-5.056A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path>
              </svg>
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBox;

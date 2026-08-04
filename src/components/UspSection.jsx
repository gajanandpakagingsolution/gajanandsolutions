import React from "react";

const USPS = [
  {
    key: "quality",
    shortTitle: "Premium Quality",
    mobileTitle: "Premium Quality Machines",
    desc: "Best in class machines built to last.",
    mobileDesc: "Built to last and deliver the best performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    key: "support",
    shortTitle: "Expert Support",
    mobileTitle: "Expert Support & Installation",
    desc: "Professional installation & after-sales support.",
    mobileDesc: "Professional team for installation & training.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: "reliable",
    shortTitle: "Reliable Service",
    mobileTitle: "Reliable Service Support",
    desc: "Quick response & dependable service.",
    mobileDesc: "Quick response & dependable service across India.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: "price",
    shortTitle: "Best Price",
    mobileTitle: "Best Price Guarantee",
    desc: "Competitive prices with great value.",
    mobileDesc: "Competitive prices with maximum value.",
    icon: <span className="text-red-700 font-bold text-xl">₹</span>,
  },
];

const UspSection = () => {
  return (
    <section className="bg-white py-8 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile / tablet: heading + 2-col card grid */}
        <div className="md:hidden">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-800">Why Choose Gajanand</h2>
            <div className="h-1 w-10 bg-red-700 mt-2 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {USPS.map((u) => (
              <div key={u.key} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center bg-white shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mb-3">
                  {u.icon}
                </div>
                <div className="font-bold text-gray-800 text-sm leading-snug">{u.mobileTitle}</div>
                <div className="text-gray-500 text-xs mt-1.5 leading-snug">{u.mobileDesc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: icon-left row, no heading (matches the wide hero-adjacent strip) */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {USPS.map((u) => (
            <div key={u.key} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                {u.icon}
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">{u.shortTitle}</div>
                <div className="text-gray-500 text-xs mt-0.5">{u.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspSection;

// Source of truth: gajanand_visiting_card.pdf (overrides catalog where they differ)
export const company = {
  name: "Gajanand Packaging Solutions",
  logo:"/images/logo-red.png",
  legalName: "Gajanand Packaging Solution",
  domain: "https://www.gajanandpakagingsolution.com",
  tagline: "Leading Manufacturer & Supplier of Packaging Machines",
 seoDescription:
  "Rajkot, Gujarat based manufacturer of bag sealers, strapping, shrink wrap, vacuum packing and conveyor machines. Get a quote today.",
  contactPerson: "Hitesh Bhai",
  whatsapp: "+91 93774 84042",
  phone: "+91 81283 23242",
  email: "gajanandworld@gmail.com",
  address:
    "80 feet Road, Satyam River View, Opposite Equity Hyundai Showroom, Aji Vasahat - 2, Rajkot - 360 002, Gujarat, India",
  timings: "Mon - Sat: 9:00 AM - 6:00 PM",
  geo: {
    latitude: 22.2848929,
    longitude: 70.8198778,
    locality: "Rajkot",
    region: "Gujarat",
    postalCode: "360002",
    country: "IN",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8177403217587!2d70.8198778!3d22.2848929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5f157412d4d%3A0x88d2f94b3046257f!2sGajanand%20Packaging%20Solutions!5e0!3m2!1sen!2sin!4v1785784713117!5m2!1sen!2sin",
  integrations: {
  // Paste your deployed Google Apps Script Web App URL here to write enquiries to Google Sheets.
  googleSheetWebhookUrl:
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL) || "",
  // googleSheetUrl: "",
},
  // TODO: paste your real profile URLs in here — the floating social bar
  // and footer icons read straight from this object.
  socials: {
    facebook: "https://www.facebook.com/share/1952BNCkmU/",
    instagram: "https://www.instagram.com/gajanandpakagingsolution?utm_source=qr&igsh=MTRuOTc1b2l1Mnp6dg==",
    linkedin: "https://www.linkedin.com/in/gajananad-packaging-solution-10b558427/",
    youtube: "https://www.youtube.com/@GajanandPackagingSolution",
  },
  manufactures: [
    "Continuous Bag Sealer Machine",
    "Conveyor Machine",
    "Shrink Wrapping Machine",
    "Stretch Wrapping Machine",
    "Box Strapping Machine",
    "Vacuum Packing Machine",
  ],
  about: {
    brief:
      "Gajanand Packaging Solution is the leading manufacturer and supplier of packaging material and machinery. We provide all types of solutions to problems related to packing of the products and machinery. We also strive to ensure that our customers are provided with the best quality of products at affordable prices and they are satisfied and content with our services/timely delivery of products. The highlight of our being is the excelsior & expertise which we bring in this area because we deal from manufacturing to retail.",
    commitment:
      "We are committed to deliver its orders within the stipulated time, as it plays a vital role in establishing a company as a reliable brand. Our wide distribution network and flexibility in production and workforce enable us to meet this objective.",
    whyChooseUs:
      "We here at Gajanand Packaging Solution believe in quality over quantity. Our team is quite thorough with our products which in turn ensures better customer support and relationship. Together we strive to deliver the orders within the stipulated time lines so that we remain a reliable brand and also attract more elite customers. All in all we have a client centric approach which in turn means- enabled to take bulk orders even for urgent requirements, maintains cordial relationship with the clients, Competitive pricing policy & Strictly follow Quality measures & parameters during production of our entire product range.",
    vision:
      "To become the premier player in the plastics industry through innovations that add value to the business of its clients.",
    mission: [
      "To continuously invest in innovation and product development.",
      "To continuously better the systems and processes.",
      "To offer an enabling environment to employees for their professional growth.",
    ],
    highlight: "ONE STOP SOLUTION FOR ALL PACKAGING MACHINES & MATERIALS.",
  },
};

// Client list for the "Our Clients" trust section on the About page.
// Only name + city are shown publicly — GST numbers, phone numbers and
// full addresses from the source documents are intentionally left out;
// they aren't needed to make the trust point and shouldn't be published
// about a client on our own site.
//
// To add a new client: add one line below. To add a real logo instead of
// the plain badge, drop the logo file into public/images/clients/ and set
// `logo` to that path (e.g. "/images/clients/acre-chemicals.png") — the
// component falls back to a text badge automatically when `logo` is null.

export const clients = [
  { name: "Meena Cast Pvt. Ltd.", city: "Rajkot", logo: "/images/clients/meena-cast.png" },
  { name: "Kaneriya Oil Industries", city: "Rajkot", logo: "/images/clients/kaneriya-oil-industries.png" },
  { name: "Crysenta Fertichem Pvt. Ltd.", city: "Junagadh", logo: "/images/clients/crysenta-fertichem.png" },
  { name: "Anmol Biotech Pvt. Ltd.", city: "Rajkot", logo: "/images/clients/anmol-biotech.png" },
  { name: "Amrutlal & Sons", city: "Rajkot", logo: "/images/clients/amrutlal-sons.png" },
  { name: "Future Fertilizer & Chemicals Pvt. Ltd.", city: "Dhoraji, Rajkot", logo: "/images/clients/future-fertilizer.png" },
  { name: "Kaival Plastopack LLP", city: "Vadodara", logo: "/images/clients/kaival-plastopack.png" },
  { name: "Jagdish Precision Cast Pvt. Ltd.", city: "Rajkot", logo: "/images/clients/jagdish-precision-cast.png" },
  { name: "Ayushi Crop Science Pvt. Ltd.", city: "Rajkot", logo: "/images/clients/ayushi-crop-science.png" },
  { name: "ACRE Chemicals Pvt. Ltd.", city: "Rajkot", logo: "/images/clients/acre-chemicals.png" },
  { name: "Spice Nest Impex Pvt. Ltd.", city: "Rajkot", logo: "/images/clients/spice-nest.png" },
  { name: "Bharat Essence", city: "Morbi", logo: null },
];
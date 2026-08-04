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
  { name: "Meena Cast Pvt. Ltd.", city: "Rajkot", logo: null },
  { name: "Kaneriya Oil Industries", city: "Rajkot", logo: null },
  { name: "Crysenta Fertichem Pvt. Ltd.", city: "Junagadh", logo: null },
  { name: "Anmol Biotech Pvt. Ltd.", city: "Rajkot", logo: null },
  { name: "Amrutlal & Sons", city: "Rajkot", logo: null },
  { name: "Future Fertilizer & Chemicals Pvt. Ltd.", city: "Dhoraji, Rajkot", logo: null },
  { name: "Kaival Plastopack LLP", city: "Vadodara", logo: null },
  { name: "Jagdish Precision Cast Pvt. Ltd.", city: "Rajkot", logo: null },
  { name: "Ayushi Crop Science Pvt. Ltd.", city: "Rajkot", logo: null },
  { name: "ACRE Chemicals Pvt. Ltd.", city: "Rajkot", logo: null },
  { name: "Spice Nest Impex Pvt. Ltd.", city: "Rajkot", logo: null },
  { name: "Bharat Essence", city: "Morbi", logo: null },
];
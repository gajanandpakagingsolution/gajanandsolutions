import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../data/company";
import { categories, allProductsFlat } from "../data/products";

const setMeta = (selector, attrs) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value));
};

const setLink = (rel, href) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const upsertJsonLd = (id, data) => {
  let tag = document.getElementById(id);
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = id;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
};

const removeJsonLd = (id) => {
  const tag = document.getElementById(id);
  if (tag) tag.remove();
};

// Static pages that aren't products/categories — add a row here any time you
// add a new top-level page (e.g. a future blog or FAQ page).
const STATIC_SEO = {
  "/": {
    title: `${company.name} | Packaging Machine Manufacturer in Rajkot`,
    description: company.seoDescription,
  },
  "/about": {
    title: `About Us | ${company.name} — Rajkot, Gujarat`,
    description: `${company.about.brief.slice(0, 150)}…`,
  },
  "/products": {
    title: `Packaging Machines Catalog | ${categories.length} Categories, ${allProductsFlat.length}+ Models | ${company.name}`,
    description: `Browse ${company.name}'s full range of packaging machines — band sealers, shrink wrapping, vacuum packing, strapping, conveyors and more. ${categories.length} categories, ${allProductsFlat.length}+ models.`,
  },
  "/gallery": {
    title: `Factory & Machine Gallery | ${company.name}`,
    description: `Photos and videos of ${company.name}'s packaging machines in action on the shop floor in Rajkot, Gujarat.`,
  },
  "/contact": {
    title: `Contact Us | ${company.name} — Rajkot, Gujarat`,
    description: `Get in touch with ${company.name} for a quote on packaging machines. Call ${company.phone} or visit us in Rajkot, Gujarat.`,
  },
};

// Figures out which page we're on and returns a unique title/description
// (+ optional extra JSON-LD) for it. This is what actually stops every page
// on the site from sharing one duplicate title/description.
const resolveSeo = (pathname) => {
  const productMatch = pathname.match(/^\/products\/([^/]+)\/([^/]+)$/);
  if (productMatch) {
    const [, categorySlug, productSlug] = productMatch;
    const category = categories.find((c) => c.slug === categorySlug);
    const product = allProductsFlat.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);
    if (product) {
      const modelBit = product.modelNo && product.modelNo !== "-" ? ` (${product.modelNo})` : "";
      return {
        title: `${product.name}${modelBit} | ${category?.name || "Packaging Machines"} | ${company.name}`,
        description: `${product.name}${modelBit} from ${company.name} — ${category?.name || "packaging machine"} manufacturer in Rajkot, Gujarat. Request pricing and specifications.`,
        breadcrumb: [
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category?.name || "Category", path: `/products/${categorySlug}` },
          { name: product.name, path: pathname },
        ],
        product: { name: product.name, category: category?.name, image: product.imageRef },
      };
    }
  }

  const categoryMatch = pathname.match(/^\/products\/([^/]+)$/);
  if (categoryMatch) {
    const category = categories.find((c) => c.slug === categoryMatch[1]);
    if (category) {
      return {
        title: `${category.name} Manufacturer in Rajkot | ${category.products.length} Models | ${company.name}`,
        description:
          category.blurb ||
          `${category.name} manufactured by ${company.name} in Rajkot, Gujarat — ${category.products.length} models available. Request a quote.`,
        breadcrumb: [
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category.name, path: pathname },
        ],
      };
    }
  }

  return STATIC_SEO[pathname] || STATIC_SEO["/"];
};

const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const url = `${company.domain}${location.pathname}`;
    const seo = resolveSeo(location.pathname);

    document.title = seo.title;
    setMeta('meta[name="description"]', { name: "description", content: seo.description });
    setMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    setMeta('meta[name="geo.region"]', { name: "geo.region", content: `IN-${company.geo.region}` });
    setMeta('meta[name="geo.placename"]', { name: "geo.placename", content: company.geo.locality });
    setMeta('meta[name="geo.position"]', { name: "geo.position", content: `${company.geo.latitude};${company.geo.longitude}` });
    setMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    setMeta('meta[property="og:image"]', { property: "og:image", content: `${company.domain}/images/og-cover.jpg` });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setLink("canonical", url);

    upsertJsonLd("local-business-schema", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: company.name,
      legalName: company.legalName,
      url: company.domain,
      image: `${company.domain}/images/logo-red.png`,
      description: company.seoDescription,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        addressLocality: company.geo.locality,
        addressRegion: company.geo.region,
        postalCode: company.geo.postalCode,
        addressCountry: company.geo.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: company.geo.latitude, longitude: company.geo.longitude },
      openingHours: "Mo-Sa 09:00-18:00",
      sameAs: Object.values(company.socials).filter((v) => v && v !== "#"),
      makesOffer: company.manufactures.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    });

    // Breadcrumb schema — only present on product/category pages.
    if (seo.breadcrumb) {
      upsertJsonLd("breadcrumb-schema", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: seo.breadcrumb.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${company.domain}${crumb.path}`,
        })),
      });
    } else {
      removeJsonLd("breadcrumb-schema");
    }
  }, [location.pathname]);

  return null;
};

export default Seo;
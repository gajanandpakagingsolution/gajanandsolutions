import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import PlaceholderImage from "../components/PlaceholderImage";
import { company } from "../data/company";
import { findCategory, findProduct } from "../data/products";
import { useEnquiry } from "../context/EnquiryContext";
import ProductImageSlider from "@/ProductImageSlider";

const ProductDetailPage = () => {
  const { categorySlug, productSlug } = useParams();
  const { openEnquiry } = useEnquiry();
  const category = findCategory(categorySlug);
  const product = category ? findProduct(categorySlug, productSlug) : null;

  if (!category || !product) return <Navigate to="/products" replace />;

  const specEntries = Object.entries(product.specs || {});

  return (
    <PageShell
      title={product.name}
      breadcrumb={
        <>
          <Link to="/products" className="hover:text-white">Products</Link> /{" "}
          <Link to={`/products/${category.slug}`} className="hover:text-white">{category.name}</Link> / {product.name}
        </>
      }
    >
      <section className="bg-white py-8 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Image Container - Adjusted aspect ratio handling */}
            <div className="w-full max-w-md md:max-w-none mx-auto aspect-square rounded-lg">
              <ProductImageSlider product={product} />
            </div>

            {/* Product Details */}
            <div>
              <div className="text-red-700 text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                {category.name}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
              {product.modelNo && product.modelNo !== "-" && (
                <div className="text-sm md:text-base text-gray-500 mb-6">
                  Model No: <span className="font-semibold text-gray-700">{product.modelNo}</span>
                </div>
              )}

              {/* Action Buttons - Stack full-width on mobile, side-by-side on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => openEnquiry(`${product.name}${product.modelNo && product.modelNo !== "-" ? ` (${product.modelNo})` : ""}`)}
                  className="w-full sm:w-auto justify-center flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded font-semibold hover:bg-red-800 transition active:scale-[0.98]"
                >
                  GET A QUOTE
                </button>
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full sm:w-auto justify-center flex items-center gap-2 border-2 border-red-700 text-red-700 px-6 py-3 rounded font-semibold hover:bg-red-50 transition active:scale-[0.98]"
                >
                  CALL NOW
                </a>
              </div>

              {/* Specifications Table */}
              {specEntries.length > 0 ? (
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Specifications</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-xs md:text-sm">
                      <tbody>
                        {specEntries.map(([label, value], i) => (
                          <tr key={label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="px-3 md:px-4 py-2.5 font-medium text-gray-600 w-5/12 align-top">{label}</td>
                            <td className="px-3 md:px-4 py-2.5 text-gray-800 w-7/12 break-words">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Specs extracted from the product catalog — please confirm exact figures before quoting.
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm border rounded-lg p-4 bg-gray-50">
                  Detailed specifications for this model weren't clearly legible in the source catalog scan — contact us for the full spec sheet.
                </p>
              )}
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-10 md:mt-14">
            <h3 className="font-bold text-gray-800 mb-4">More in {category.name}</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none touch-pan-x">
              {category.products
                .filter((p) => p.slug !== product.slug)
                .slice(0, 6)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${category.slug}/${p.slug}`}
                    className="flex-shrink-0 w-36 md:w-40 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
                  >
                    <PlaceholderImage product={p} label={p.name} refCode={p.imageRef} aspect="aspect-square" className="w-full" />
                    <div className="p-2.5 md:p-3 text-xs md:text-sm font-medium text-gray-700 truncate">{p.name}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ProductDetailPage;
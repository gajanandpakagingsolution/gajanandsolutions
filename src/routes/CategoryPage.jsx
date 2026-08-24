import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import PlaceholderImage from "../components/PlaceholderImage";
import { findCategory } from "../data/products";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = findCategory(categorySlug);

  if (!category) return <Navigate to="/products" replace />;

  return (
    <PageShell title={category.name} breadcrumb={`Home / Products / ${category.name}`}>
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          {category.blurb && <p className="text-gray-600 max-w-2xl mb-10">{category.blurb}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${category.slug}/${p.slug}`}
                className="flex flex-col bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group"
              >
                <PlaceholderImage product={p} label={p.name} refCode={p.imageRef} aspect="aspect-square" className="w-full" />
                <div className="p-4">
                  <div className="font-semibold text-gray-800 group-hover:text-red-700 transition">{p.name}</div>
                  {p.modelNo && p.modelNo !== "-" && (
                    <div className="text-xs text-gray-500 mt-1">Model: {p.modelNo}</div>
                  )}
                  <div className="text-red-700 text-sm font-medium mt-2 flex items-center gap-1">
                    View details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default CategoryPage;
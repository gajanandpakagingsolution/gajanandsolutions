import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "./index.css";
const CategoryPage = lazy(() => import("./routes/CategoryPage"));
const ProductDetailPage = lazy(() => import("./routes/ProductDetailPage"));
import { EnquiryProvider } from "./context/EnquiryContext";
import EnquiryModal from "./components/EnquiryModal";
import SocialFloatingBar from "./components/SocialFloatingBar";
import Seo from "./components/Seo";
import SiteLoader from "./components/SiteLoader";
import ScrollToTop from "./components/ScrollToTop";

// Load all static pages from src/pages/
const modules = import.meta.glob("./pages/**/*.jsx");

// Convert file paths into React Router routes
const fileRoutes = Object.keys(modules).map((path) => {
  const match = path.match(/\.\/pages\/(.*)\.jsx$/);
  const name = match ? match[1] : "";
  const Component = lazy(modules[path]);

  // Handle root index and sub-folder index files (e.g., "about/index" -> "/about")
  let routePath = name.toLowerCase();
  if (routePath === "index") {
    routePath = "";
  } else if (routePath.endsWith("/index")) {
    routePath = routePath.replace(/\/index$/, "");
  }

  return {
    path: `/${routePath}`,
    element: <Component />,
  };
});

// Dynamic routes (product category / individual product pages) can't be
// expressed as literal file paths, so they're registered explicitly here.
const dynamicRoutes = [
  { path: "/products/:categorySlug", element: <CategoryPage /> },
  { path: "/products/:categorySlug/:productSlug", element: <ProductDetailPage /> },
];

const routes = [...fileRoutes, ...dynamicRoutes];

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Seo />
      <SiteLoader />
      <ScrollToTop />
       <Suspense fallback={null}>{element}</Suspense>
      <SocialFloatingBar />
      <EnquiryModal />
    </>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <EnquiryProvider>
        <App />
      </EnquiryProvider>
    </BrowserRouter>
  );
}

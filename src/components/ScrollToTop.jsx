import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the browser's scroll position across client-side
// navigations (it's not a full page reload). Mounted once near the top of
// the app, this resets the scroll to the top of the page every time the
// URL path changes — clicking a nav link (Products, About, etc.) now always
// lands you at the top of the new page instead of wherever you scrolled to
// on the previous one.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
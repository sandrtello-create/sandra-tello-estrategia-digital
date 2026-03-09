import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const navbarHeight = 112; // h-28 = 7rem = 112px

    if (hash) {
      const scrollToHash = () => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: "instant",
          });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToHash()) {
        // Retry with requestAnimationFrame
        const rafId = requestAnimationFrame(() => {
          if (!scrollToHash()) {
            // Fallback with setTimeout
            setTimeout(scrollToHash, 100);
          }
        });
        return () => cancelAnimationFrame(rafId);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

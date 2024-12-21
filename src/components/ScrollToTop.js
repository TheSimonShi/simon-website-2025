// Filename - "./components/ScrollToTop.js"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "auto", // Adds smooth scrolling animation
      });
  }, [pathname]); // Runs every time the pathname changes

  return null;
};

export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let value = false;

export default function ScrollToTop() {
   const { pathname } = useLocation();

   useEffect(() => {
      if (value) {
         window.scrollTo(0, 0);
      }
      value = true;
   }, [pathname]);

   return null;
}
// hooks/usePwaMode.js
"use client";
import { useState, useEffect } from "react";

export default function usePwaMode() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true;
      setIsStandalone(standalone);

      const media = window.matchMedia("(display-mode: standalone)");
      const handler = (e) => setIsStandalone(e.matches);
      media.addEventListener("change", handler);

      return () => {
        media.removeEventListener("change", handler);
      };
    }
  }, []);

  return isStandalone;
}

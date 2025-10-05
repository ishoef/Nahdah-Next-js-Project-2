"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
   
  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full relative overflow-hidden cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Sun Icon */}
      <FaSun
        className={`h-6 w-6 transition-all duration-500 absolute 
        ${
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0" // rotate out
            : "rotate-0 scale-100 opacity-100"
        } // rotate in
        `}
      />

      {/* Moon Icon */}
      <FaMoon
        className={`h-6 w-6 transition-all duration-500 absolute
        ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100" // rotate in
            : "-rotate-90 scale-0 opacity-0"
        }   // rotate out
        `}
      />
    </Button>
  );
};

export default ThemeToggle;

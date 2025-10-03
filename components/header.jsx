"use client";

import ThemeToggle from "@/app/theme-toggle";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Islamic Knowledge", href: "/islamic-knowledge" },
  { name: "Skills", href: "/skills" },
  { name: "Instructors", href: "/instructors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  // Calculate mobile menu height for smooth animation
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#153151] dark:text-gray-100">
          An-Nahdah
        </div>

        {/* Desktop / Tablet Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base lg:text-lg"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle + CTA */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <ThemeToggle />
          <Button
            asChild
            className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base"
          >
            <Link href="/login">Login</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 text-2xl relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars
              className={`absolute transition-all duration-300 ${
                menuOpen
                  ? "opacity-0 scale-0 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />
            <FaTimes
              className={`absolute transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 -rotate-90"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-white dark:bg-gray-900 shadow-md`}
        style={{
          maxHeight: menuOpen ? `${menuHeight}px` : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="py-5 px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import ThemeToggle from "@/app/theme-toggle";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Islamic Knowledge", href: "/islamic-knowledge" },
  { name: "Skills", href: "/skills" },
  { name: "Donations", href: "/donations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  // Dynamically calculate height for smooth animation
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          An-Nahdah
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu (Dropdown) */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-white dark:bg-gray-900 shadow-md px-6`}
        style={{
          maxHeight: menuOpen ? `${menuHeight}px` : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

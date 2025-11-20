"use client";

import ThemeToggle from "@/app/theme-toggle";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";
import CustomLink from "./CustomLink";
import NetworkStatus from "./NetworkStatus";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Islamic Knowledge", href: "/islamic-knowledge" },
  { name: "Skills", href: "/skills" },
  { name: "Courses", href: "/courses" },
  { name: "Instructors", href: "/instructors" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const session = false;
  if (pathname.includes("login") || pathname.includes("register")) return null;

  const handleLogout = async () => {
    // await clientSignOut();
    // router.push("/");
    // setDrawerOpen(false);

    alert("clciked log out");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <NetworkStatus />
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#153151] dark:text-gray-100">
          <Link href="/">An-Nahdah</Link>
        </div>

        {/* Desktop / Tablet Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 font-medium items-center">
          {navItems.map((item) => (
            <CustomLink key={item.name} path={item.href}>
              {item.name}
            </CustomLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <ThemeToggle />

          {/* Desktop Login/Profile */}
          {session ? (
            <div className="hidden md:flex">
              {/* <ProfilePhoto /> */}
              <p>P</p>
            </div>
          ) : (
            <Button
              asChild
              className="hidden md:inline-flex text-white bg-[#2295b8] hover:bg-[#1f789b] dark:bg-[#1f789b] dark:hover:bg-[#206380] text-sm sm:text-base px-4 py-2 transition-colors duration-200"
            >
              <Link href="/login">Login</Link>
            </Button>
          )}

          {/* Mobile Drawer Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 text-2xl w-10 h-10 flex items-center justify-center relative"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Menu
          </h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-gray-700 dark:text-gray-200 text-xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col mt-4 space-y-3 px-4">
          {navItems.map((item) => (
            <CustomLink
              key={item.name}
              path={item.href}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setDrawerOpen(false)}
            >
              {item.name}
            </CustomLink>
          ))}

          {session ? (
            <>
              <Link
                href="/dashboard"
                className="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base transition-colors duration-200"
                onClick={() => setDrawerOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg text-center hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-sm sm:text-base transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base transition-colors duration-200"
              onClick={() => setDrawerOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

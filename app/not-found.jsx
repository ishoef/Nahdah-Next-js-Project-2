"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Home, Mail } from "lucide-react";
import animationData from "@/public/lottie/404-animation.json"; // keep your Lottie JSON here

export default function NotFound() {
  const suggested = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/contact", label: "Contact Support" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-12">
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-4xl w-full bg-white/80 dark:bg-gray-900/60 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        aria-labelledby="notfound-title"
        role="main"
      >
        {/* Visual / Lottie */}
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-transparent dark:to-gray-900 p-4 flex items-center justify-center">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1
            id="notfound-title"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100"
          >
            Oops — we can’t find that page
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
            The page you’re looking for may have moved, been removed, or never
            existed. Here are some quick ways to get back on track.
          </p>

          {/* Suggested links */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {suggested.map(function (s) {
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm py-2 px-3 rounded-md border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-gray-800/40"
                  aria-label={"Go to " + s.label}
                >
                  {s.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              style={{ backgroundColor: "#206380" }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-[#206380]"
              aria-label="Go home"
            >
              <Home className="h-4 w-4" />
              Go home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Contact support"
            >
              <Mail className="h-4 w-4" />
              Contact support
            </Link>

            <a
              href="mailto:hello@yourdomain.com?subject=Broken%20link%20report"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 transition"
              aria-label="Report this broken link"
            >
              Report
            </a>
          </div>

          {/* Small hint */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Tip: Check the navigation menu or use the links above to find what
            you need.
          </p>
        </div>
      </motion.main>

      
    </div>
  );
}

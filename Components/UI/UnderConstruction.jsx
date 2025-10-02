"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/underConstruction.json";

export default function UnderConstruction() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                    dark:bg-gray-900"
    >
      {/* Optional Animated Background Shapes */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 dark:bg-gray-700/20 rounded-full -top-32 -left-32 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/20 dark:bg-gray-600/30 rounded-full -bottom-32 -right-32 animate-pulse"></div>

      {/* Main Card */}
      <div
        className="relative z-10 flex flex-col items-center justify-center
                      bg-white/20 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl p-10
                      text-center shadow-xl max-w-md transition-colors duration-300"
      >
        {/* Lottie Animation */}
        <div className="w-72 h-72">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          We're Building Something New!
        </h2>

        {/* Message */}
        <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-sm transition-colors duration-300">
          This page is currently under construction. Hang tight, we're working
          hard to bring it to life!
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold
                        rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/20 dark:bg-gray-700/30 text-gray-900 dark:text-white
                        font-semibold rounded-xl shadow-lg border border-white/30 dark:border-gray-500/40
                        hover:bg-white/30 dark:hover:bg-gray-600/40 hover:scale-105 transform transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client"; // required because Lottie is client-side

import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/404-animation.json"; // put your Lottie JSON in public/lottie/

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-6 text-center transition-colors duration-300">
      {/* Error Code */}
      {/* <h1 className="text-9xl font-bold text-blue-500 dark:text-blue-400">
        404
      </h1> */}
      {/* Lottie Animation */}
      <div className="mt-10 w-72 h-72">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
        Oops! Page not found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track!
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

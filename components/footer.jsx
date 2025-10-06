"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const pathname = usePathname();
  if (
    !pathname.includes("login") &&
    !pathname.includes("register") &&
    !pathname.includes("dashboard")
  ) {
    return (
      <footer className="bg-gray-800 border-t border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-50 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-7xl  mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 dark:bg-gray-800 text-white p-2 rounded-md text-2xl">
                📖
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-50 dark:text-gray-100">
                  An-Nahdah
                </h1>
                <p className="text-sm text-gray-50 dark:text-gray-300">
                  Online Institute
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Blending authentic Islamic knowledge with practical skill
              development for the modern Muslim learner.
            </p>
            <div className="flex space-x-4 mt-4 text-xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-50 dark:text-gray-100">
              Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Islamic Knowledge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Skill Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Our Instructors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Institute */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-50 dark:text-gray-100">
              Institute
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 dark:hover:text-gray-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-50 dark:text-gray-100">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates on new courses and Islamic events.
            </p>
            <input
              type="email"
              id="email"
              className="border-2 w-full px-4 py-2 mb-3 rounded text-gray-50 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-400 text-sm dark:placeholder:text-gray-500"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-full bg-blue-500 dark:bg-gray-500 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-gray-800 transition">
              <span>📧</span>
              <span>Subscribe</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-50 dark:border-gray-700 mt-8 py-4 text-center text-sm text-gray-50 dark:text-gray-300 px-4">
          © 2025 An-Nahdah Online Institute. All rights reserved.
          <p className="mt-1">
            Empowering Muslims through knowledge and skills.
          </p>
        </div>
      </footer>
    );
  } else {
    return null;
  }
}

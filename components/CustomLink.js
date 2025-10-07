"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      href={path}
      className={`
        text-sm sm:text-base lg:text-lg
        transition-colors duration-200
        ${
          active
            ? "text-blue-500 dark:text-blue-400" // active
            : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" // default + hover
        }
      `}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

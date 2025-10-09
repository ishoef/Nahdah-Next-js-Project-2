"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div
      key={course.id}
      className="bg-white w-full dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />

        {/* Top Left: Level */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-sm">
          {course.level}
        </span>

        {/* Top Right: Status */}
        <span className="absolute top-2 right-2 bg-white/90 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm backdrop-blur-sm">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 11V3m0 0L8 7m4-4l4 4" />
          </svg>
          {course.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          {/* Category */}
          <span className="inline-block w-fit bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-medium mb-2">
            {course.category}
          </span>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
            {course.instructor}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Metadata */}
          <div className="flex items-center justify-between text-sm bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl px-3 py-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">⭐ {course.rating}</div>
            <div className="flex items-center gap-1">
              👥 {course.students.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">⏱ {course.duration}</div>
          </div>

          {/* Price & CTA */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              ${course.price}
            </span>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
              asChild
            >
              <Link href={`/courses/${course.id}`}>View Course</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

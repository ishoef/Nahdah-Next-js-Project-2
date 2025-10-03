import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const courses = [
  {
    id: "nahw101",
    title: "Arabic Grammar Fundamentals (Nahw)",
    instructor: "Dr. Fatima Hassan",
    description:
      "Master the basics of Arabic grammar to understand Quranic Arabic.",
    image: "/images/islamic.png",
    category: "Arabic Language",
    level: "Beginner",
    status: "Offline",
    rating: 4.8,
    students: 3200,
    duration: "8 weeks",
    price: 49,
  },
  {
    id: "sarf201",
    title: "Morphology Mastery (Sarf)",
    instructor: "Sheikh Ahmed Younis",
    description:
      "Understand Arabic word structure to deepen your Quranic comprehension.",
    image: "/images/islamic.png",
    category: "Arabic Language",
    level: "Intermediate",
    status: "Online",
    rating: 4.7,
    students: 2750,
    duration: "6 weeks",
    price: 59,
  },
  {
    id: "quran101",
    title: "Quranic Recitation Basics (Tajweed)",
    instructor: "Ustadha Amina Zahra",
    description:
      "Learn the correct pronunciation and rules of reciting the Quran.",
    image: "/images/islamic.png",
    category: "Quran Studies",
    level: "Beginner",
    status: "Online",
    rating: 4.9,
    students: 4100,
    duration: "4 weeks",
    price: 39,
  },
  {
    id: "aqeedah301",
    title: "Foundations of Islamic Belief (Aqeedah)",
    instructor: "Mufti Bilal Khan",
    description: "Explore the core tenets of Islamic faith and theology.",
    image: "/images/islamic.png",
    category: "Islamic Theology",
    level: "Advanced",
    status: "Offline",
    rating: 4.6,
    students: 1800,
    duration: "10 weeks",
    price: 69,
  },
  {
    id: "fiqh101",
    title: "Introduction to Islamic Jurisprudence (Fiqh)",
    instructor: "Dr. Layla Nasr",
    description:
      "Discover how Islamic rulings are derived and applied in daily life.",
    image: "/images/islamic.png",
    category: "Islamic Law",
    level: "Beginner",
    status: "Online",
    rating: 4.5,
    students: 2900,
    duration: "7 weeks",
    price: 45,
  },
  {
    id: "seerah102",
    title: "Life of the Prophet Muhammad (Seerah)",
    instructor: "Imam Kareem Said",
    description:
      "A chronological journey through the life and mission of the Prophet (SAW).",
    image: "/images/islamic.png",
    category: "Prophetic Biography",
    level: "Beginner",
    status: "Online",
    rating: 4.9,
    students: 5000,
    duration: "5 weeks",
    price: 35,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-gray-100">
            Featured Courses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore our most popular and highly-rated courses, handpicked for
            you.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 border sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white w-full dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image with badges */}
              <div className="relative h-44 sm:h-52 bg-gray-100 dark:bg-gray-700">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Top Left: Level */}
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  {course.level}
                </span>

                {/* Top Right: Status */}
                <span className="absolute top-2 right-2 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
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
                {/* Category */}
                <span className="inline-block w-fit bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-medium mb-2">
                  {course.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                  {course.instructor}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
                  {course.description}
                </p>

                {/* Metadata + Bottom Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  {/* Metadata */}
                  <div className="flex items-center justify-between text-sm bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl px-2 py-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      ⭐ {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      👥 {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      ⏱ {course.duration}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
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
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="w-fit mx-auto mt-6">
          <button className="cursor-pointer p-3 border text-white rounded-md bg-blue-600 dark:bg-gray-800 hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

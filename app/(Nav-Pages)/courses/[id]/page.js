import React from "react";
import CourseOutline from "@/components/courses-component/course-outline";
import allData from "../../../../jsons/courses.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function generateStaticParams() {
  return allData.allCourses.map((course) => ({
    id: course._id,
  }));
}

export default async function CourseDetails({ params }) {
  const allCourses = allData.allCourses;
  // const course = demoCourse;
  const { id } = await params;
  const course = allCourses.find((c) => c._id === id);
  console.log(course);

  const {
    title,
    shortDescription,
    category,
    level,
    thumbnail,
    price,
    currency,
    instructor,
    lessons,
  } = course;

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="min-h-screen max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative bg-[#206380] dark:bg-gray-800 text-white py-12 sm:py-20 rounded-b-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-12">
            {/* Thumbnail */}
            <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={thumbnail}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="md:w-1/2 space-y-4 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg leading-tight">
                {title}
              </h1>
              <p className="text-blue-100 dark:text-gray-300 text-base sm:text-lg">
                {shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 text-sm font-medium text-blue-100 dark:text-gray-300">
                <span className="flex items-center gap-1">📚 {category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">🎓 {level}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  🕒 {lessons?.length || 0} Lessons
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                <Link href={"/checkout"} className="cursor-pointer px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold bg-white text-[#206380] dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition shadow-md">
                  Enroll Now
                </Link>
                {price > 0 ? (
                  <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200">
                    ${price} {currency}
                  </span>
                ) : (
                  <span className="text-lg sm:text-xl font-semibold text-green-300">
                    Free Course
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-8 sm:gap-10 px-2 sm:px-0">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8 sm:space-y-10">
            {/* About */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#206380] dark:text-blue-300 mb-3 sm:mb-4">
                About this Course
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  This <strong>comprehensive beginner course</strong> is
                  designed to teach you how Arabic words and sentences are
                  formed. You’ll learn:
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>
                    How nouns, verbs, and particles function in a sentence
                  </li>
                  <li>The basic structure of Arabic sentences</li>
                  <li>Essential patterns of Arabic morphology (الصرف)</li>
                </ul>
                <p className="mt-2">
                  By the end, you'll be able to read and analyze simple Arabic
                  sentences from classical texts with confidence.
                </p>
              </div>
            </div>

            {/* Course Outline */}
            <CourseOutline course={course} />
          </div>

          {/* Instructor Sidebar */}
          <aside className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-6 md:p-8 sticky top-4 sm:top-22 h-fit">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-full overflow-hidden border-2 border-[#206380] dark:border-blue-400">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-md sm:text-lg font-bold text-[#206380] dark:text-blue-300">
                {instructor.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-2 text-center">
                {instructor.bio}
              </p>

              <Button className="mt-5 bg-[#1f789b] hover:bg-[#206380] dark:bg-blue-400  dark:text-white cursor-pointer">
                View Profile
              </Button>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}
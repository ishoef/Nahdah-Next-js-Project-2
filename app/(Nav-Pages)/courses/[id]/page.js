import React from "react";
import { Star, Users, Clock, Languages, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import allData from "../../../../jsons/courses.json";

import TabsSection from "@/components/courseDetails-components/TabsSection";

export function generateStaticParams() {
  return allData.allCourses.map((course) => ({
    courseId: course._id,
  }));
}

export default async function CourseDetails({ params }) {
  const allCourses = allData.allCourses;
  // const course = demoCourse;
  const { id } = await params;
  const course = allCourses.find((c) => c._id === id);

  const {
    title,
    shortDescription,
    fullDescription,
    category,
    subcategory,
    level,
    language,
    thumbnail,
    price,
    currency,
    students,
    rating,
    duration,
    instructor,
    lastUpdated,
    whatYouLearn,
    requirements,
    extraValues,
    features,
    curriculum,
  } = course;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* HERO */}
      <section className="bg-[#206380] dark:bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">
          {/* Left Content */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {category}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {level}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Offline Available
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl  font-bold leading-tight">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-white/90">
              {shortDescription}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span className="font-bold">4.9</span>
                  <span className="text-white/70">(342)</span>
                </div>

                {/* Students */}
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>
                    {" "}
                    <span className="font-bold">
                      {Number(students).toLocaleString()}
                    </span>{" "}
                    students
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{duration}</span>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  <span>{language}</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-2xl shadow-sm w-fit mt-5 bg-white dark:bg-slate-900 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                {/* Instructor Image */}
                <div className="w-16 h-16 rounded-full border overflow-hidden flex items-center justify-center bg-[#effbfc] dark:bg-slate-100">
                  <span className="text-2xl font-semibold text-gray-600">
                    Mr.
                  </span>
                </div>

                {/* Instructor Info */}
                <div>
                  <h1 className="text-lg text-[#102b3c] dark:text-white font-semibold">
                    {instructor.name}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {instructor.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD - enroll */}
          <aside className="bg-white dark:bg-slate-900 dark:border rounded-2xl p-4 shadow-lg md:sticky md:top-6">
            <img
              src={thumbnail}
              alt="course cover"
              className="w-full h-58 object-cover rounded-md mb-4"
            />
            <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {price === 0 ? "Free" : currency + price}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              lifetime access
            </div>

            <Link
              href={"/checkout"}
              className="cursor-pointer mt-4 w-full inline-flex items-center justify-center rounded-lg py-2 bg-[#206380] text-white hover:bg-[#225168]"
            >
              Enroll Now
            </Link>
            <button className="cursor-pointer text-[#102b3c] hover:bg-[#1f789b] hover:text-white dark:text-white mt-2 w-full inline-flex items-center justify-center rounded-lg py-2 border dark:border-slate-700">
              Add to Wishlist
            </button>

            <ul className="mt-4 text-sm space-y-2 text-slate-600 dark:text-slate-300">
              {extraValues?.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <CheckCircle2 className="h-4 w-4 text-[#1f789b] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Tabs */}

            <TabsSection course={course} />
            {/* Reviews */}
            <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-4 border dark:border-slate-700">
              <h3 className="font-semibold">Student Reviews</h3>
              <div className="mt-3 space-y-3">
                <div className="p-3 rounded-md bg-slate-50 dark:bg-slate-900 border dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Excellent course</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        By Ahmed · 5 stars
                      </div>
                    </div>
                    <div className="text-sm">⭐ 5.0</div>
                  </div>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    Great explanations and practical examples. Highly
                    recommended for serious students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR ON LARGE SCREENS */}
          <aside className="hidden lg:block">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border dark:border-slate-700">
              <h4 className="font-semibold">Course Info</h4>
              <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="font-medium">Intermediate</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Duration</span>
                  <span className="font-medium">12 weeks</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Language</span>
                  <span className="font-medium">English & Arabic</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Last Updated</span>
                  <span className="font-medium">January 2025</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Students</span>
                  <span className="font-medium">2,450</span>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href={"/checkout"}
                  className="cursor-pointer mt-4 w-full inline-flex items-center justify-center rounded-lg py-2 bg-[#206380] text-white hover:bg-[#225168]"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700">
              <h4 className="font-semibold">Share This Course</h4>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 py-2 rounded-md border hover:bg-[#1877f2] hover:text-white cursor-pointer transition-all ">
                  Facebook
                </button>
                <button className="flex-1 py-2 rounded-md border hover:bg-[#0088cc] hover:text-white cursor-pointer transition-all ">
                  Telegram
                </button>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 py-2 rounded-md border hover:bg-[#25d366] hover:text-white cursor-pointer transition-all ">
                  Whatsapp
                </button>
                <button className="flex-1 py-2 rounded-md border hover:bg-[#0a66c2] hover:text-white cursor-pointer transition-all ">
                  Linkedin
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import CourseOutline from "../courses-component/course-outline";

export default function TabsSection({ course }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm">
      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 gap-3 border p-1 bg-slate-200 dark:bg-slate-900 rounded-xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-4 space-y-6">
          {/* What You'll Learn */}
          <div className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
            <h3 className="font-semibold">What You'll Learn</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
              {course.whatYouLearn?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
            <h3 className="font-semibold">Requirements</h3>
            <ul className="mt-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
              {course.requirements?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Course Features */}
          <div className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
            <h3 className="font-semibold">Course Features</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
              {course.features?.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <CheckCircle2 className="h-4 w-4 text-[#3eb2d2] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* Curriculum Tab */}
        <TabsContent value="curriculum" className="mt-4 space-y-4">
          <CourseOutline course={course}/>
        </TabsContent>

        {/* Instructor Tab */}
        <TabsContent value="instructor" className="mt-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-lg border dark:border-slate-700">
            <img
              src={course.instructor?.avatar}
              alt={course.instructor?.name ?? "instructor"}
              loading="lazy"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-md object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <h4 className="font-semibold text-2xl mb-3 truncate">
                {course.instructor?.name}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed overflow-hidden">
                {course.instructor?.bio}
              </p>
              <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Courses:{" "}
                <span className="font-semibold break-words">
                  {course.title}
                </span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

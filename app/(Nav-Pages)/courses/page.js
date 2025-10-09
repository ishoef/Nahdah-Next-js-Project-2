import CourseSection from "@/components/courses-component/CourseSection";
import CourseHero from "@/components/courses-component/course-hero";
import React from "react";

const CoursesPage = () => {
  return (
    <div className="bg-blue-100 dark:bg-gray-800">
      <CourseHero />
      <CourseSection />
    </div>
  );
};

export default CoursesPage;

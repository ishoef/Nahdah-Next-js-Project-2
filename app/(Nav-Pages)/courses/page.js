import CourseSection from "@/components/courses-component/CourseSection";
import CourseHero from "@/components/courses-component/course-hero";
import React from "react";
import courseData from "../../../jsons/courses.json";
const allCourses = courseData.allCourses;
const CoursesPage = () => {
  return (
    <div className="bg-blue-100 dark:bg-gray-800">
      <CourseHero />
      <CourseSection courses={allCourses} tabs={true} />
    </div>
  );
};

export default CoursesPage;

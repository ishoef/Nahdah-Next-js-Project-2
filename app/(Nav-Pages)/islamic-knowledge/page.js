import CourseSection from "@/components/courses-component/CourseSection";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";

import React from "react";
import courseData from "../../../jsons/courses.json";

const Page = () => {
  const courses = courseData.allCourses;

  const islamicCourses = courses.filter(
    (course) => course.category === "Islamic Knowledge"
  );
  return (
    <div className="bg-blue-100 dark:bg-gray-800">
      <Section>
        <Title
          title1={"Islamic Knowledge"}
          title2={"Courses"}
          subTitle="A path to gaining sound Islamic understanding, step by step. Learn, grow, and strengthen your connection with knowledge."
        ></Title>
      </Section>
      <CourseSection courses={islamicCourses} />
    </div>
  );
};

export default Page;

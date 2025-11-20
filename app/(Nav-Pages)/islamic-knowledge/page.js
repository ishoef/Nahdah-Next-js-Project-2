import CourseHero from "@/components/courses-component/course-hero";
import CourseSection from "@/components/courses-component/CourseSection";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import UnderConstruction from "@/components/ui/UnderConstruction";
import React from "react";

const Page = () => {
  return (
    <div className="bg-blue-100 dark:bg-gray-800">
      {/* <Section>
        <Title
          title1={"Islamic Knowledge"}
          title2={"Courses"}
          subTitle="A path to gaining sound Islamic understanding, step by step. Learn, grow, and strengthen your connection with knowledge."
        ></Title>
      </Section> */}
      <CourseSection />
    </div>
  );
};

export default Page;

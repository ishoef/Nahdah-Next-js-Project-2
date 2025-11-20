import React from "react";
import { FaBookOpen } from "react-icons/fa";
import Title from "../ui/title";
import courseData from "../../jsons/courses.json";
import CourseCard from "../ui/CourseCard";
import { Filter } from "lucide-react";

const FeaturedCourses = () => {
  const allCourses = courseData.allCourses;

  return (
    <section className="py-16 lg:py-18 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Header */}
      <div className="flex w-fit mx-auto">
        <FaBookOpen className="text-[#206380] dark:text-gray-300 text-6xl mb-6" />
      </div>
      <Title
        title1={"Featured"}
        title2={"Courses"}
        subTitle={
          "Explore our most popular and highly-rated courses, handpicked for you."
        }
      />
      <section className="py-10 lg:py-12 ">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {allCourses.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default FeaturedCourses;

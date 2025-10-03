import Hero from "@/components/home-components/hero";
import CourseCategory from "@/components/home-components/course-category";
import FeaturedCourses from "@/components/home-components/featured-courses";
import Donation from "@/components/home-components/donation";
import TestimonialsSlider from "@/components/home-components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CourseCategory />
      <FeaturedCourses />
      <Donation />
      <TestimonialsSlider />
    </>
  );
}

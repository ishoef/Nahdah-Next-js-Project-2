import Hero from "@/components/home-components/hero";
import CourseCategory from "@/components/home-components/course-category";
import FeaturedCourses from "@/components/home-components/featured-courses";
import Donation from "@/components/home-components/donation";
import TestimonialsSlider from "@/components/home-components/testimonials";
import FAQ from "@/components/home-components/faq";
import NewsSection from "@/components/home-components/news";
import FounderSection from "@/components/home-components/founder";

export default function Home() {
  return (
    <>
      <Hero />
      <CourseCategory />
      <FeaturedCourses />
      <Donation />
      <TestimonialsSlider />
      <FAQ />
      <NewsSection />
      <FounderSection />
    </>
  );
}

import React from "react";
import { courses } from "@/components/home-components/featured-courses";

export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default function CourseDetails({ params }) {
  const { id } = params;
  console.log(id);

  return <div>CourseDetails for {id}</div>;
}

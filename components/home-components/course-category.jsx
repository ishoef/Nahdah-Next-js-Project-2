import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Title from "../ui/title";

const courses = [
  {
    id: 1,
    title: "Islamic Knowledge",
    description:
      "Learn from qualified scholars in Quran, Hadith, Fiqh, and more",
    icon: BookOpen,
    iconBg: "bg-blue-500/10 dark:bg-blue-500/30",
    iconColor: "text-[#206380] dark:text-blue-400",
    badge: "150+ Courses",
    image: "/images/islamic.png",
    highlights: [
      "Quranic Studies & Tafsir",
      "Hadith Sciences & Fiqh",
      "Arabic Language & Grammar",
      "Islamic History & Aqeedah",
    ],
    link: "/islamic-knowledge",
    accent:
      "bg-[#206380] hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
  },
  {
    id: 2,
    title: "Skill Development",
    description: "Master modern skills for career growth and entrepreneurship",
    icon: GraduationCap,
    iconBg: "bg-blue-500/20 dark:bg-gray-500/30",
    iconColor: "text-[#206380] dark:text-blue-400",
    badge: "80+ Courses",
    image: "/images/skill.png",
    highlights: [
      "Digital Skills & Coding",
      "Graphic Design & Marketing",
      "Leadership & Communication",
      "Entrepreneurship & Business",
    ],
    link: "/skills",
    accent:
      "bg-[#206380] hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
  },
];

const CourseCategory = () => {
  return (
    <section className="py-16 lg:py-20 border-b bg-background dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <Title
          title1={"Explore Our"}
          title2={"Learning Paths"}
          subTitle={
            "Choose from a variety of courses tailored to your learning needs."
          }
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card
                key={course.id}
                className="group relative border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-64 md:h-72 lg:h-80 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <CardContent className="p-6 sm:p-7 md:p-8">
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`${course.iconBg} flex items-center justify-center h-12 w-12 rounded-lg transition-colors `}
                    >
                      <Icon className={`h-6 w-6 ${course.iconColor}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      {course.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
                    {course.description}
                  </CardDescription>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    {course.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`h-5 w-5 ${course.iconColor} flex-shrink-0`}
                        />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full ${course.accent} text-white transition-colors`}
                    asChild
                  >
                    <Link
                      href={course.link}
                      className="flex items-center justify-center text-sm sm:text-base"
                    >
                      Explore {course.title}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseCategory;

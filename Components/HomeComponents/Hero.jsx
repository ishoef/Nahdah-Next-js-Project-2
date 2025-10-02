import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden 
      bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      py-16 sm:py-20 md:py-24 transition-colors duration-500"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20 dark:opacity-10"></div>

      <div className="container mx-auto relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <Badge className="mb-6 bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 shadow text-xs sm:text-sm md:text-base">
              <Download className="mr-2 h-4 w-4" />
              Install Our App for Offline Learning
            </Badge>

            {/* Title */}
            <h1
              className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-5xl 
              font-bold text-gray-900 dark:text-white mb-6 leading-snug sm:leading-tight"
            >
              Empower Your Journey with Islamic Knowledge & Modern Skills
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              An-Nahdah Online Institute blends authentic Islamic education with
              practical skill development. Learn from qualified scholars and
              expert instructors, anytime, anywhere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/register">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
                  dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                asChild
              >
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm sm:text-base">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm sm:text-base">200+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm sm:text-base">Certified Scholars</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.ibb.co.com/bjJfrJWx/Gemini-Generated-Image-jdax2gjdax2gjdax.png"
                alt="Students learning online"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

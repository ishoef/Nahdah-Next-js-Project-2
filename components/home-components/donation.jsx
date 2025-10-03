import React from "react";
import Section from "../ui/section";
import { FaHeart } from "react-icons/fa6";

const Donation = () => {
  return (
    <Section>
      <div className="flex justify-center items-center flex-col">
        <span className="text-8xl">
          <FaHeart className="animate-pulse text-red-500" />
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153151] dark:text-gray-100 text-center">
          Support Islamic Education
        </h1>
        <p className="mt-4 text-center max-w-2xl text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          Your donations help us provide free courses to students worldwide and
          support scholars in creating quality Islamic content. Every
          contribution makes a difference.
              </p>
              <div className="space-x-4 justify-center items-center">
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md transition-colors">
                  Donate Now
                </button>
                <button className="mt-6 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white text-lg rounded-md transition-colors">
                  See Our Impact
                </button>
              </div>
      </div>
    </Section>
  );
};

export default Donation;

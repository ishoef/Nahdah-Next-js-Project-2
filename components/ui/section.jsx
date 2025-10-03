import React from "react";

const Section = ({ children }) => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;

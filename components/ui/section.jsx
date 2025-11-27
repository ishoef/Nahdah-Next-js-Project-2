import React from "react";

const Section = ({ children }) => {
  return (
    <section className="border-t border-t-gray-200 dark:border-t-gray-700 py-16 lg:py-20 bg-gradient-to-r from-nhd-200 via-nhd-100 to-nhd-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;

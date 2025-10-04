"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. What is An-Nahdah?",
    answer:
      "An-Nahdah is a comprehensive online educational platform dedicated to providing authentic Islamic knowledge and practical skills. It focuses on structured learning based on the life of the Prophet ﷺ, his teachings, and the values of the Sahabah. The platform helps students not only understand Islamic principles but also implement them in daily life. Through interactive lessons, quizzes, assignments, and discussion sessions, learners can develop a balanced understanding of faith, character, and contemporary skills applicable in education, work, and social settings.",
  },
  {
    question: "2. What can I learn on this website?",
    answer:
      "An-Nahdah offers a wide range of courses covering the Prophet's Seerah, Islamic history, lives of the Sahabah, ethics, and character development. In addition to theoretical knowledge, learners gain practical guidance on applying these lessons in their daily lives. The platform also offers quizzes, assignments, and discussion forums that help reinforce learning, encourage critical thinking, and facilitate peer interaction. For those seeking professional skills, some courses provide training in areas like Arabic grammar, digital literacy, and ethical entrepreneurship.",
  },
  {
    question: "3. How do I earn certificates?",
    answer:
      "Certificates are awarded upon successful completion of the course requirements. Each course is divided into lessons that include learning material, examples, and quizzes. To earn a certificate, learners must achieve the required passing marks on quizzes and assessments, complete any assignments, and participate in discussion sessions if applicable. After successfully passing the final evaluation, learners receive a digital certificate that can be downloaded, shared on professional platforms, or included in resumes. Certificates serve as recognition of the learner's knowledge and effort.",
  },
  {
    question: "4. Is the website free?",
    answer:
      "Most of An-Nahdah's courses and content are completely free to ensure that authentic Islamic education is accessible to everyone. However, some premium courses, special workshops, or certificate programs may require a small subscription fee. This fee helps maintain high-quality content, support course instructors, and ensure continuous development of new resources. Even for premium courses, An-Nahdah provides detailed previews and trial lessons so learners can assess the content before subscribing.",
  },
  {
    question: "5. How does the learning process work?",
    answer:
      "The learning process on An-Nahdah is carefully structured to provide a smooth and effective experience. Each topic is presented as a lesson with clear explanations, real-life examples, and practical applications. Learners progress through lessons step by step, completing quizzes, assignments, and discussion sessions designed to reinforce understanding. This method ensures that knowledge is not only memorized but also internalized and applied in daily life. Learners can revisit lessons, track their progress, and engage in peer discussions to deepen comprehension.",
  },
  {
    question: "6. Can I learn using my mobile device?",
    answer:
      "Yes! An-Nahdah is fully responsive and optimized for mobile, tablet, and desktop devices. The platform allows you to learn anytime and anywhere, whether commuting, at home, or at work. The mobile interface is designed for readability and smooth navigation, with appropriately sized cards, text, and interactive elements. Video lessons, quizzes, and assignments are all mobile-friendly, ensuring that learners do not miss out on any content while on the go.",
  },
  {
    question: "7. Do I need to know English to learn?",
    answer:
      "No, English is not a requirement. Most courses are offered in English, but An-Nahdah also includes regional languages where applicable to ensure accessibility. The platform is designed to accommodate learners from diverse backgrounds, making it easier to understand complex Islamic concepts without language barriers. In addition, lessons include explanations, examples, and visuals to reinforce comprehension for learners who may not be fluent in English.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-t-gray-200 dark:border-t-gray-700 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#153151] dark:text-white">
            Frequently Asked{" "}
            <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Common questions about learning at An-Nahdah
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="cursor-pointer w-full flex justify-between items-center px-6 py-6 text-left"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] px-6 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 text-md leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

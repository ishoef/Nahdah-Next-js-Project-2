"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 md:p-10">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We’d love to hear from you. Send us a message and we’ll respond as
            soon as possible.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" size={20} />
              <span>contact@an-nahdah.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" size={20} />
              <span>+880 1234 567 890</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" size={20} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Section from "../ui/section";
import Title from "../ui/title";
import { FaWhatsapp, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
// import Image from "next/image";

const JoinOurCommunity = () => {
  return (
    <Section>
      <div className="text-center mb-8">
        <Title
          title1="Join"
          title2="Our Community"
          subTitle="Be a part of our vibrant community and connect with like-minded individuals."
        />
      </div>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        {/* QR + Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* QR Code */}
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/1RNXJ6By/Whats-App-Image-2025-10-05-at-10-46-32-76b95a31.jpg"
              alt="Community QR Code"
              width={140}
              height={140}
              className="rounded-lg border border-gray-200 shadow-sm"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Scan & Join Instantly
            </h3>
            <p className="text-gray-500 dark:text-gray-200 mb-4">
              Scan the QR code to instantly join our online community and stay
              connected with updates, events, and more.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-200 italic">
              *You can also use one of the buttons below to join directly.
            </p>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <FaWhatsapp size={20} />
            <span>Join WhatsApp</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/groups/your-community-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <FaFacebookF size={20} />
            <span>Join Facebook</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/your-channel-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <FaTelegramPlane size={20} />
            <span>Join Telegram</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default JoinOurCommunity;

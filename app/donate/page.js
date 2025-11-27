"use client";

import { useState } from "react";
import { Heart, TrendingUp, Users, Award, Share2, Check } from "lucide-react";

const runningCampaigns = [
  {
    id: 1,
    title: "Build a New Mosque",
    collected: 4500,
    goal: 10000,
    description: "Help us raise funds to build a new mosque for the community.",
    category: "Infrastructure",
    impact: "Serves 500+ community members",
  },
  {
    id: 2,
    title: "Educational Scholarships",
    collected: 3200,
    goal: 5000,
    description:
      "Support students to achieve their dreams through scholarships.",
    category: "Education",
    impact: "Helps 50+ students annually",
  },
];

const upcomingCampaigns = [
  {
    id: 1,
    title: "Water Wells Project",
    startDate: "2025-12-15",
    description: "Provide clean drinking water to villages in need.",
    category: "Humanitarian",
  },
  {
    id: 2,
    title: "Orphan Care Initiative",
    startDate: "2026-01-05",
    description: "Support orphans with food, education, and care.",
    category: "Social Welfare",
  },
];

const recentDonors = [
  { name: "Ahmed Khan", amount: 100, date: "2 hours ago" },
  { name: "Fatima Rahman", amount: 50, date: "5 hours ago" },
  { name: "Ali Hossain", amount: 200, date: "1 day ago" },
  { name: "Sara Islam", amount: 75, date: "2 days ago" },
  { name: "Mohammad Hassan", amount: 150, date: "3 days ago" },
  { name: "Zainab Ahmed", amount: 100, date: "4 days ago" },
];

const testimonials = [
  {
    name: "Hassan Ali",
    message:
      "Donating to An-Nahdah is so easy and satisfying. I love supporting their campaigns!",
    role: "Regular Donor",
  },
  {
    name: "Ayesha Karim",
    message:
      "I feel proud to be part of such meaningful initiatives. Every donation counts!",
    role: "Community Member",
  },
  {
    name: "Omar Faruk",
    message:
      "Transparent and impactful. Seeing the progress of campaigns motivates me to give more.",
    role: "Long-term Supporter",
  },
];

const impactMetrics = [
  { label: "Total Raised", value: "$15,240", icon: TrendingUp },
  { label: "Active Donors", value: "2,847", icon: Users },
  { label: "Campaigns Completed", value: "12", icon: Award },
  { label: "Lives Impacted", value: "5,000+", icon: Heart },
];

const fixedAmounts = [25, 50, 100, 200];

export default function DonationSection() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [recurringDonation, setRecurringDonation] = useState(false);

  const handleDonate = () => {
    const amount = selectedAmount || Number.parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#206380] to-blue-600 mb-6 mx-auto">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Make a Meaningful <span className="text-[#206380]">Impact</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-balance">
            Every donation helps us continue our community projects and
            transform lives. Together, we can create real, lasting change.
          </p>
        </div>

        {/* Donation Box */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-full sm:max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Donate Now
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">
            Select an amount or enter a custom amount. Every donation is 100%
            tax-deductible.
          </p>

          {/* Donation Type Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setRecurringDonation(false)}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                !recurringDonation
                  ? "bg-[#206380] text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              One-Time
            </button>
            <button
              onClick={() => setRecurringDonation(true)}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                recurringDonation
                  ? "bg-[#206380] text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Fixed Amount Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 w-full">
            {fixedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md w-full ${
                  selectedAmount === amount
                    ? "bg-[#206380] text-white scale-105"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6 w-full">
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#206380] focus:ring-2 focus:ring-[#206380]/20 dark:bg-slate-700 dark:text-white transition-all"
            />
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            className={`w-full px-6 py-4 bg-gradient-to-r from-[#206380] to-[#206380] text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 ${
              showSuccess ? "bg-green-500" : ""
            }`}
          >
            {showSuccess ? (
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                Donation Received!
              </div>
            ) : (
              `Donate ${selectedAmount ? `$${selectedAmount}` : "Now"}`
            )}
          </button>

          {/* Security Badge */}
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
            🔒 Your donation is secure and encrypted
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {impactMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow w-full"
              >
                <Icon className="w-8 h-8 text-[#206380] mx-auto mb-3" />
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {metric.label}
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {metric.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Running Campaigns */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Running Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {runningCampaigns.map((campaign) => {
              const progress = (campaign.collected / campaign.goal) * 100;
              return (
                <div
                  key={campaign.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group w-full"
                >
                  <div className="h-2 bg-gradient-to-r from-[#206380] to-[#206380]" />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2 sm:gap-0">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {campaign.title}
                      </h3>
                      <span className="px-3 py-1 bg-[#206380]/10 text-[#206380] dark:text-blue-300 text-xs font-semibold rounded-full">
                        {campaign.category}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-2 text-sm">
                      {campaign.impact}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {campaign.description}
                    </p>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#206380] to-nhd-700/50 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                          Progress
                        </p>
                        <p className="font-bold text-slate-900 dark:text-white">
                          ${campaign.collected.toLocaleString()} /{" "}
                          <span className="text-slate-500">
                            ${campaign.goal.toLocaleString()}
                          </span>
                        </p>
                      </div>
                      <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-[#206380] hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Campaigns */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Upcoming Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {upcomingCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden w-full"
              >
                <div className="h-2 bg-gradient-to-r from-nhd-700 to-nhd-700" />
                <div className="p-6 sm:p-8">
                  <span className="inline-block px-3 py-1 bg-nhd-100 dark:bg-blue-900/30 text-nhd-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-3">
                    Coming Soon
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {campaign.description}
                  </p>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <span className="text-sm font-semibold text-[#206380]">
                      Launches:{" "}
                      {new Date(campaign.startDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Donors */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Recent Donors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentDonors.map((donor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center group w-full"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#206380] to-nhd-700 flex items-center justify-center text-white font-bold text-lg">
                    {donor.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {donor.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {donor.date}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-[#206380] text-lg">
                  ${donor.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Donor Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col w-full"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 flex-1 leading-relaxed text-sm sm:text-base">
                  "{testi.message}"
                </p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {testi.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testi.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

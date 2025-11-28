"use client";

import TimelineSection from "@/components/impact-components/TimelineSection";
import {
  Heart,
  Users,
  Award,
  ChevronRight,
  Sparkles,
  Target,
  Globe,
  ArrowUp,
  BookOpen,
  Zap,
  CheckCircle,
  Share2,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

/* (your data arrays: impactMetrics, ongoingProjects, donorSpotlight, successStories,
   upcomingInitiatives, timelineEvents) — keep them unchanged (same as before) */

const impactMetrics = [
  {
    label: "Students Empowered",
    value: "15,240",
    icon: BookOpen,
    suffix: "+",
    change: "+34%",
    color: "from-emerald-500 to-teal-600",
  },
  {
    label: "Active Donors",
    value: "2,847",
    icon: Heart,
    suffix: "",
    change: "+28%",
    color: "from-rose-500 to-pink-600",
  },
  {
    label: "Scholarships Given",
    value: "847",
    icon: Award,
    change: "+56%",
    color: "from-amber-500 to-orange-600",
  },
  {
    label: "Communities Reached",
    value: "89",
    icon: Globe,
    change: "+15%",
    color: "from-blue-500 to-cyan-600",
  },
];

const ongoingProjects = [
  {
    id: 1,
    title: "Quran Memorization Scholarships",
    collected: 12500,
    goal: 20000,
    description:
      "Supporting dedicated Quranic scholars with full scholarships.",
    impact: "125+ students this year",
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1678558831016-4c5f45a84261?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UXVyYW4lMjBNZW1vcml6YXRpb258ZW58MHx8MHx8fDA%3D",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Islamic Sciences Institute",
    collected: 8200,
    goal: 15000,
    description: "Building centers for authentic Islamic knowledge.",
    impact: "50+ graduates annually",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1626553261684-68f25328988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SXNsYW1pYyUyMFNjaWVuY2VzJTIwSW5zdGl0dXRlfGVufDB8fDB8fHww",
    icon: Target,
  },
  {
    id: 3,
    title: "Women's Islamic Education",
    collected: 5600,
    goal: 10000,
    description: "Empowering Muslim women with advanced Islamic studies.",
    impact: "200+ women enrolled",
    category: "Empowerment",
    image:
      "https://images.unsplash.com/photo-1598723106415-862ab917eb7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMElzbGFtaWMlMjBFZHVjYXRpb24lMjB3aXRoJTIwbmlxYWJ8ZW58MHx8MHx8fDA%3D",
    icon: Users,
  },
  {
    id: 4,
    title: "Youth Leadership Program",
    collected: 3800,
    goal: 8000,
    description: "Developing next-generation Islamic leaders.",
    impact: "75+ youth trained",
    category: "Development",
    image:
      "https://plus.unsplash.com/premium_photo-1743827754663-4bfa8fd7fb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxMZWFkZXJzaGlwfGVufDB8fDB8fHww",
    icon: Zap,
  },
];

const donorSpotlight = [
  {
    name: "Fatima Al-Qassim",
    amount: "$45,000",
    badge: "Platinum Patron",
    avatar: "FA",
    contribution: "Funded 15 Quranic Scholars",
    impact: "Changed 15 lives",
    testimonial: "Supporting Islamic education is my life's purpose.",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Mohammed Hassan",
    amount: "$28,500",
    badge: "Gold Benefactor",
    avatar: "MH",
    contribution: "Established Women's Wing",
    impact: "200+ women empowered",
    testimonial: "Seeing women excel in Islamic studies brings me joy.",
    color: "from-yellow-300 to-yellow-500",
  },
  {
    name: "Zahra Noor",
    amount: "$18,750",
    badge: "Silver Supporter",
    avatar: "ZN",
    contribution: "Built Learning Center",
    impact: "1,200+ students benefited",
    testimonial: "Building the future of Islamic education together.",
    color: "from-slate-400 to-slate-500",
  },
  {
    name: "Ahmad Al-Rashid",
    amount: "$15,200",
    badge: "Bronze Champion",
    avatar: "AR",
    contribution: "Youth Mentorship Program",
    impact: "75 youth leaders trained",
    testimonial: "Youth are the future of our ummah.",
    color: "from-orange-600 to-amber-700",
  },
];

const successStories = [
  {
    name: "Hassan Ali",
    message:
      "Through the scholarship, I became a Hafiz and now teach others. Alhamdulillah!",
    role: "Quranic Scholar & Teacher",
    impact: "Teaching 50+ students",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1712249238970-27d98e5a1bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlzbGFtaWMlMjBzY2llbmNlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ayesha Karim",
    message:
      "I was the first woman in my family to study Islamic sciences formally. Thank you!",
    role: "Islamic Studies Graduate",
    impact: "Now mentoring women",
    rating: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1723924897550-1d88bf11e9c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW1pYyUyMHNjaWVuY2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Ahmed Hassan",
    message:
      "This organization is transforming how we approach Islamic education globally.",
    role: "Religious Scholar",
    impact: "Advisory board member",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWR2aXNvcnl8ZW58MHx8MHx8fDA%3D",
  },
];

const upcomingInitiatives = [
  {
    id: 1,
    title: "Global Islamic University Network",
    startDate: "2025-06-15",
    description:
      "Connecting Islamic scholars worldwide for collaborative learning.",
    fundingGoal: "$150,000",
    icon: Globe,
    beneficiaries: "10,000+ students",
  },
  {
    id: 2,
    title: "Orphan Education Fund",
    startDate: "2025-08-01",
    description: "Full scholarships for orphans pursuing Islamic education.",
    fundingGoal: "$200,000",
    icon: Heart,
    beneficiaries: "500+ orphans",
  },
];

const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const steps = 40;
    const increment = Math.max(1, Math.floor(target / steps));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span aria-hidden="true">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function ImpactPage() {
  const [hoveredDonor, setHoveredDonor] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#206380]/10 text-[#206380] font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            Building Tomorrow's Islamic Leaders
          </div>

          {/* toned down sizes for better responsiveness */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white leading-tight">
            Our{" "}
            <span className="bg-nhd-700 bg-clip-text text-transparent">
              Impact
            </span>{" "}
            on Islamic Education
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6">
            Transforming lives through authentic Islamic knowledge, empowering
            scholars, and building communities of faith and learning across the
            globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href={"/donate"}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#206380] text-white font-semibold rounded-lg hover:bg-[#1a4d63] transition-transform transform hover:scale-102 shadow-md inline-flex items-center justify-center gap-2"
              aria-label="Support Our Mission"
            >
              Support Our Mission
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="#story"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 text-[#206380] dark:text-blue-400 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-2 border-[#206380]/10"
              aria-label="Watch Our Story"
            >
              Watch Our Story
            </a>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {impactMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-6 shadow-md hover:shadow-xl transition-all duration-250 transform hover:-translate-y-1"
                role="figure"
                aria-label={metric.label}
              >
                <div
                  className={`w-11 h-11 rounded-lg bg-gradient-to-br ${metric.color} p-2 mb-4 flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1 font-semibold uppercase tracking-wider">
                  {metric.label}
                </p>

                <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  <AnimatedCounter
                    target={Number.parseInt(
                      metric.value.replace(/[^0-9]/g, "")
                    )}
                    suffix={metric.suffix || ""}
                  />
                </p>

                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  <ArrowUp className="w-4 h-4" />
                  <span>{metric.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active campaigns */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Active Campaigns Making Real Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every donation directly funds Islamic education initiatives that
              transform lives and build stronger communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects.map((project) => {
              const progress = (project.collected / project.goal) * 100;
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                  onMouseEnter={() => setExpandedProject(project.id)}
                  onMouseLeave={() => setExpandedProject(null)}
                >
                  <div className="relative h-44 sm:h-82 overflow-hidden bg-slate-200 dark:bg-slate-700">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-[#206380] text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#206380] font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {project.impact}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#206380] to-emerald-500 h-2.5 rounded-full transition-all duration-700"
                          style={{ width: `${progress}%` }}
                          aria-valuenow={Math.round(progress)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          role="progressbar"
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          ${project.collected.toLocaleString()}{" "}
                          <span className="text-slate-500">
                            / ${project.goal.toLocaleString()}
                          </span>
                        </p>
                        <p className="text-xs font-bold text-[#206380] px-2 py-1 rounded-full bg-[#206380]/10">
                          {Math.round(progress)}%
                        </p>
                      </div>

                      <button
                        className="w-full py-2.5 bg-[#206380] hover:bg-[#1a4d63] text-white font-semibold rounded-lg transition-transform transform hover:scale-102 flex items-center justify-center gap-2"
                        aria-label={`Donate to ${project.title}`}
                      >
                        Donate Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Donor Spotlight */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Our Generous Supporters
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Meet the visionary donors whose generosity is transforming Islamic
              education globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {donorSpotlight.map((donor, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredDonor(idx)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${donor.color} opacity-0 group-hover:opacity-8 transition-opacity`}
                />

                <div className="p-6 sm:p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${donor.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}
                      >
                        {donor.avatar}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {donor.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                          {donor.badge}
                        </p>
                      </div>
                    </div>
                    <Share2 className="w-5 h-5 text-slate-400 hover:text-[#206380] transition-colors" />
                  </div>

                  <div className="mb-4 pb-4 border-b border-slate-100 dark:border-slate-700">
                    <p className="text-2xl sm:text-3xl font-bold text-[#206380]">
                      {donor.amount}
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      ✓ {donor.contribution}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                    {donor.testimonial}
                  </p>

                  <button className="w-full mt-4 py-2 bg-[#206380]/10 hover:bg-[#206380] text-[#206380] hover:text-white font-semibold rounded-md transition-all text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-[#206380]/6 to-emerald-500/6 rounded-2xl border border-[#206380]/8">
            <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Become a Donor Spotlight Member
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Your generous contribution will be recognized and celebrated as we
              build the future of Islamic education.
            </p>
            <button className="px-6 py-2.5 bg-[#206380] text-white font-semibold rounded-md hover:bg-[#1a4d63] transition-transform transform hover:scale-102">
              Start Your Legacy
            </button>
          </div>
        </div>

        {/* Transformation Stories */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Transformation Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real stories of how Islamic education changed lives and created
              leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 hover:scale-102 transform flex flex-col"
              >
                <div className="mb-4 relative h-40 rounded-xl overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {story.name}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {story.role}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-base">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 italic leading-relaxed flex-1">
                  "{story.message}"
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-[#206380] font-semibold uppercase tracking-wide mb-1">
                    Impact
                  </p>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {story.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline & Upcoming */}
        <TimelineSection />

        {/* Upcoming Initiatives */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Next Phase of Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ambitious projects launching soon with transformative potential
              for Islamic education worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingInitiatives.map((initiative) => {
              const InitIcon = initiative.icon;
              return (
                <div
                  key={initiative.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border border-slate-100 dark:border-slate-700 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#206380] to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-md">
                      <InitIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {initiative.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-[#206380]" />
                      <div>
                        <p className="text-xs text-slate-600">Launch Date</p>
                        <p className="text-sm font-semibold">
                          {new Date(initiative.startDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" }
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Target className="w-4 h-4 text-emerald-600" />
                      <div>
                        <p className="text-xs text-slate-600">Funding Goal</p>
                        <p className="text-sm font-semibold text-[#206380]">
                          {initiative.fundingGoal}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-600">
                          Expected Impact
                        </p>
                        <p className="text-sm font-semibold">
                          {initiative.beneficiaries}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2.5 bg-[#206380] text-white font-semibold rounded-md hover:bg-[#1a4d63] transition-transform transform hover:scale-102 flex items-center justify-center gap-2">
                    Notify Me
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-nhd-700 via-nhd-800 to-nhd-700 rounded-2xl shadow-2xl p-8 sm:p-12 text-center text-white mb-12">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Be Part of the Islamic Education Revolution
          </h2>
          <p className="text-sm sm:text-base opacity-95 mb-6 max-w-2xl mx-auto">
            Your generous support directly transforms lives, empowers scholars,
            and builds thriving communities of authentic Islamic knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href={"/donate"}
              className="px-6 py-3 bg-white text-[#206380] font-semibold rounded-md hover:bg-slate-100 transition-transform transform hover:scale-102"
            >
              Donate Now
            </Link>
            <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-md hover:bg-white/30 transition-colors border border-white/30">
              Become a Patron
            </button>
          </div>

          <p className="mt-6 text-white/90 text-xs font-semibold">
            ✓ 100% Transparent • ✓ Tax-Deductible • ✓ Islamic Compliant
            (Shariah-Approved)
          </p>
        </div>
      </div>
    </div>
  );
}

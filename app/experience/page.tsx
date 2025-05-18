"use client";

import type React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaBriefcase, FaCalendar } from "react-icons/fa";
import Link from "next/link";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      company: "GetBeamer Pvt. Ltd. & Userflow",
      role: "Technical Solutions Engineer",
      duration: "August 2024 - Present",
      description:
        "Working with enterprise clients to implement and customize the GetBeamer notification system. Providing technical support and ensuring smooth integration with various platforms.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "REST API",
        "Webhooks",
        "Git",
        "Github",
        "Agile",
      ],
    },
    {
      company: "Freelancing",
      role: "Frontend Web Development",
      duration: "August 2022 - July 2024",
      description:
        "Designing and developing responsive, user-friendly websites and web applications for various clients across different industries. Focus on performance optimization and accessibility.",
      techStack: [
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
      ],
    },
    {
      company: "ToSpace Pvt. Ltd.",
      role: "Frontend Web Developer (Internship)",
      duration: "December 2021 - May 2022",
      description:
        "Contributed to the development of the company's main product, a space management platform for businesses and educational institutions.",
      techStack: ["HTML", "CSS", "JavaScript", "Git", "Github", "PHP"],
    },
  ];

  const getDurationLength = (duration: string): string => {
    const [startStr, endStr] = duration.split(" - ");
    const parseDate = (str: string): Date => {
      if (str.toLowerCase() === "present") return new Date();
      return new Date(`${str} 1`);
    };

    const start = parseDate(startStr);
    const end = parseDate(endStr);

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;

    if (months <= 0) return "Less than a month";

    if (months < 12) return `${months} month${months !== 1 ? "s" : ""}`;

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    if (remMonths === 0) return `${years} year${years !== 1 ? "s" : ""}`;

    return `${years} year${years !== 1 ? "s" : ""} ${remMonths} month${
      remMonths !== 1 ? "s" : ""
    }`;
  };

  const uniqueExperiences = experiences.filter(
    (exp, index, self) =>
      index ===
      self.findIndex((e) => e.company === exp.company && e.role === exp.role)
  );

  const timelineData = uniqueExperiences.map((exp) => ({
    title: exp.company,
    content: (
      <div className="space-y-5">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <FaBriefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-medium text-black dark:text-white">
              {exp.role}
            </h3>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <FaCalendar className="h-4 w-4" />
            <span>
              {exp.duration} &middot;{" "}
              <span className="italic">{getDurationLength(exp.duration)}</span>
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {exp.description}
        </p>

        <div className="pt-2">
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="font-manrope">
      <div className="pb-12">
        <h1 data-speed="1.2" className="text-6xl md:text-8xl lg:text-[15rem] font-light leading-none text-center my-12">
          Experience
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-16 mb-20">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg md:text-7xl mb-6 text-black dark:text-white max-w-4xl font-light tracking-tight">
            Steps in <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 font-medium">
              My Journey
            </span>{" "}
          </h2>
          <p className="text-black dark:text-white text-sm md:text-base max-w-lg leading-relaxed mt-14">
            Every role has been a step forward, here’s the journey that shaped
            who I am today.
          </p>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Over the years, I’ve had the privilege of contributing to diverse
            teams, scaling impactful projects, and growing through hands-on
            challenges across multiple domains. From collaborating with startups
            to refining strategies in mature product environments, each role has
            added a unique chapter to my professional journey. I approach every
            opportunity with a learner’s mindset, a builder’s passion, and a
            commitment to driving results. Below is a detailed timeline of the
            milestones, achievements, and roles that have shaped my career.
          </p>

          <div className="flex items-end justify-between mt-10">
            <Link href={"/contact"}>
              <button
                className="group relative bg-white dark:bg-slate-900 h-16 w-64 border-2 border-teal-600 text-black dark:text-white 
                          text-3xl font-light rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 
                          hover:border-emerald-400 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] 
                          before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg 
                          before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] 
                          after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 
                          hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
              >
                Hire Me
              </button>
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-1 underline-effect"
            >
              Projects +
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default ExperiencePage;

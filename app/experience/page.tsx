"use client";

import type React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaBriefcase, FaCalendar } from "react-icons/fa";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";

const ExperiencePage: React.FC = () => {
  const getDurationLength = (duration: string): string => {
    const [startStr, endStr] = duration.split(" - ");
    const parseDate = (str: string): Date => {
      if (str.toLowerCase() === "present") return new Date();
      return new Date(`${str} 1`);
    };

    const start = parseDate(startStr);
    const end = parseDate(endStr);

    const months =
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
          <div className="flex items-center gap-2">
            <FaBriefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-medium text-black dark:text-white">
              {exp.role}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaCalendar className="h-4 w-4" />
            <span>
              {exp.duration} &middot;{" "}
              <span className="italic">{getDurationLength(exp.duration)}</span>
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <ul className="list-disc ml-5">
            {exp.description.map((desp, i) => (
              <li key={i}>{desp}</li>
            ))}
          </ul>
        </div>

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
    <div className="font-manrope sm:px-6 lg:px-12">
      <div className="mb-4 lg:pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="text-6xl 2xxs:text-8xl md:text-9xl lg:text-[10rem] xl:text-[14rem] 1xl:text-[15rem] font-light leading-none mb-8 1xl:mb-12 mt-4">
            Experience
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-16 mb-12 1xl:mb-10 w-full max-w-[100rem] mx-auto px-4">
          <div className="w-full lg:w-1/3 1xl:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black dark:text-white font-light tracking-tight leading-tight">
              Steps in <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 font-medium">
                My Journey
              </span>
            </h2>
            <p className="text-sm sm:text-base text-black dark:text-white leading-relaxed my-6">
              Every role has been a step forward, here’s the journey that shaped
              who I am today.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Over the years, I’ve had the privilege of contributing to diverse
              teams, scaling impactful projects, and growing through hands-on
              challenges across multiple domains. From collaborating with
              startups to refining strategies in mature product environments,
              each role has added a unique chapter to my professional journey. I
              approach every opportunity with a learner’s mindset, a builder’s
              passion, and a commitment to driving results. Below is a detailed
              timeline of the milestones, achievements, and roles that have
              shaped my career.
            </p>

            <div className="flex flex-row items-end justify-between mt-10 gap-6">
              <Link href={"/contact"}>
                <button
                  className="group flex justify-start items-center relative h-12 w-36 text-lg sm:h-16 sm:w-64 sm:text-3xl bg-white dark:bg-slate-900
                          border-2 border-emerald-600 text-black dark:text-white font-light rounded-full overflow-hidden transition-all duration-500 
                          hover:scale-105 hover:border-emerald-400 p-3 pl-6 before:absolute before:w-8 before:h-8 sm:before:w-10 sm:before:h-10 
                          before:content-[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg 
                          before:transition-all before:duration-500 after:absolute after:z-10 after:w-12 after:h-12 sm:after:w-16 sm:after:h-16 
                          after:content-[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all 
                          after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:after:-right-6 hover:after:scale-110"
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
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default ExperiencePage;

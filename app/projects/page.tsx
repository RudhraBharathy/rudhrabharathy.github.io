"use client";

import React from "react";
import { HoverImageLinks } from "@/components/HoverImageLinks";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ProjectsPage: React.FC = () => {
  return (
    <div className="font-manrope">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h1 className="text-[5rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] xl:text-[16rem] 1xl:text-[18rem] font-manrope font-light leading-none text-center my-4 xl:mb-12">
          Projects
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {" "}
        <section className="px-4 1xl:px-20 md:p-8 my-4">
          <div className="flex flex-col md:flex-row lg:items-end justify-between w-full gap-12 lg:gap-16 lg:mb-20">
            <div className="flex items-center lg:items-start justify-center flex-col lg:w-5/6">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 mb-6 text-black dark:text-white max-w-4xl font-light tracking-tight">
                Things that
                <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-emerald-400 font-medium">
                  {" "}
                  I’ve Built
                </span>
              </span>
              <p className="text-black dark:text-white text-sm md:text-base max-w-lg leading-relaxed md:mt-10">
                A collection of projects I’ve developed with love, logic, and a
                lot of coffee. From tiny tools to complete apps, each build
                reflects a story, a lesson, and a bit of obsession.
              </p>
            </div>
          </div>
          <div className="flex justify-between my-8">
            <Link
              href="/about"
              className="flex items-center justify-end gap-1 underline-effect"
            >
              <BsArrowLeft /> About
            </Link>
            <Link
              href="/experience"
              className="flex items-center justify-end gap-1 underline-effect"
            >
              Experience <BsArrowRight />
            </Link>
          </div>
          <HoverImageLinks projects={projects} />
        </section>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;

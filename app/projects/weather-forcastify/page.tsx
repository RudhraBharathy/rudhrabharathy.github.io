"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";

const WeatherForcastify: React.FC = () => {
  const project = projects.find((p) => p.id === 2)!;

  return (
    <div className="min-h-screen font-manrope">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-8 lg:px-20 pt-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm md:text-base hover:gap-3 transition-all duration-300 underline-effect"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 md:px-8 lg:px-20 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-300"
            >
              <FiExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-muted rounded-lg transition-colors duration-300"
            >
              <FiGithub className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <div className="px-4 md:px-8 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ProjectCarousel
                images={project.images}
                projectName={project.name}
                video={project.video}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">
                  Overview
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-light mb-3 flex items-center gap-2">
                  <HiSparkles className="w-5 h-5 text-primary" />
                  Use Case
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.useCase}
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-light mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForcastify;

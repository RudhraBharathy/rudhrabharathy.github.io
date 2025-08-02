"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";

interface Project {
  id: number;
  name: string;
  techStack: string[];
  image: string;
  githubLink: string;
  externalLink: string;
}

interface HoverImageLinksProps {
  projects: Project[];
}

export const HoverImageLinks: React.FC<HoverImageLinksProps> = ({
  projects,
}) => {
  return (
    <div className="mx-auto space-y-6">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["90%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="relative flex items-center justify-between border-b-2 border-neutral-300 dark:border-neutral-700 py-6 transition-colors duration-500 hover:border-black dark:hover:border-neutral-50 cursor-pointer"
    >
      <div>
        <motion.h2
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-black dark:text-white transition-colors duration-500 group-hover:text-black dark:group-hover:text-neutral-50 md:text-6xl"
        >
          {project.name}
        </motion.h2>

        <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-3 py-[3px] text-black dark:text-white border border-neutral-500 dark:border-white rounded-md bg-transparent transition-all duration-300 z-10 overflow-hidden group"
            >
              <span className="flex items-center justify-center flex-row gap-2 relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                <FaGithub />
                GitHub
              </span>
              <span className="absolute inset-0 w-0 h-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 group-hover:w-full z-0 right-0"></span>
            </a>

            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-3 py-[3px] text-black dark:text-white border border-neutral-500 dark:border-white rounded-md bg-transparent transition-all duration-300 z-10 overflow-hidden group"
              >
                <span className="flex items-center justify-center flex-row gap-2 relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                  <GoLinkExternal />
                  View Page
                </span>
                <span className="absolute inset-0 w-0 h-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 group-hover:w-full z-0 right-0"></span>
              </a>
            )}
          </div>

          {project.techStack?.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, idx) => (
                <li
                  key={idx}
                  className="rounded-full border border-neutral-400 dark:border-neutral-500 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "0deg" },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{ type: "spring", mass: 0.5 }}
        className="absolute z-0 rounded-lg object-cover md:h-64 md:w-96 pointer-events-none"
      >
        <Image
          src={project.image}
          alt={`Image representing a link for ${project.name}`}
          className="rounded-lg object-cover"
          sizes="(min-width: 768px) 16rem, 8rem"
          width={300}
          height={100}
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
};

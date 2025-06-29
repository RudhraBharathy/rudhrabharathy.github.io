"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiMui,
  SiShadcnui,
  SiDocker,
} from "react-icons/si";

interface TechItem {
  icon: React.ReactNode;
  name: string;
  category: "Frontend" | "Backend" | "DevTools";
}

const categories = ["All", "Frontend", "Backend", "DevTools"] as const;
type Category = (typeof categories)[number];

function CategoryButton({
  label,
  selected,
  onClick,
}: {
  label: Category;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`border border-gray-400 py-1 px-4 rounded-3xl cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:shadow-md 
        ${selected ? "bg-white text-black shadow-md" : ""}`}
    >
      {label}
    </div>
  );
}

export default function TechStack() {
  const [skillCategory, setSkillCategory] = useState<Category>("All");

  const technologies: TechItem[] = [
    {
      icon: <SiHtml5 className="w-8 h-8 text-[#e34c26]" />,
      name: "HTML 5",
      category: "Frontend",
    },
    {
      icon: <SiCss3 className="w-8 h-8 text-[#264de4]" />,
      name: "CSS 3",
      category: "Frontend",
    },
    {
      icon: <SiJavascript className="w-8 h-8 text-[#f0db4f]" />,
      name: "JavaScript",
      category: "Frontend",
    },
    {
      icon: <SiTypescript className="w-8 h-8 text-[#3178c6]" />,
      name: "TypeScript",
      category: "Frontend",
    },
    {
      icon: <SiReact className="w-8 h-8 text-[#61dafb]" />,
      name: "React",
      category: "Frontend",
    },
    {
      icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
      name: "Next.js",
      category: "Frontend",
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 text-[#06b6d4]" />,
      name: "Tailwind CSS",
      category: "Frontend",
    },
    {
      icon: <SiMui className="w-8 h-8 text-[#007fff]" />,
      name: "MUI",
      category: "Frontend",
    },
    {
      icon: <SiShadcnui className="w-8 h-8 text-black dark:text-white" />,
      name: "Shadcn/ui",
      category: "Frontend",
    },
    {
      icon: (
        <img
          src="/svg/zustand.svg"
          alt="Zustand"
          className="w-8 h-8 object-contain"
        />
      ),
      name: "Zustand",
      category: "Frontend",
    },
    {
      icon: (
        <img
          src="/svg/java.svg"
          alt="Java"
          className="w-8 h-8 object-contain"
        />
      ),
      name: "Java",
      category: "Backend",
    },
    {
      icon: (
        <img
          src="/svg/mysql.svg"
          alt="MySQL"
          className="w-8 h-8 object-contain"
        />
      ),
      name: "MySQL",
      category: "Backend",
    },
    {
      icon: <SiNodedotjs className="w-8 h-8 text-[#3c873a]" />,
      name: "Node.js",
      category: "Backend",
    },
    {
      icon: <SiMongodb className="w-8 h-8 text-[#47a248]" />,
      name: "Mongo DB",
      category: "Backend",
    },
    {
      icon: <SiSupabase className="w-8 h-8 text-[#3ecf8e]" />,
      name: "Supabase",
      category: "Backend",
    },
    {
      icon: <SiGit className="w-8 h-8 text-[#f1502f]" />,
      name: "Git",
      category: "DevTools",
    },
    {
      icon: <SiGithub className="w-8 h-8 text-black dark:text-white" />,
      name: "GitHub",
      category: "DevTools",
    },
    {
      icon: <SiDocker className="w-8 h-8 text-[#2496ed]" />,
      name: "Docker",
      category: "DevTools",
    },
    {
      icon: (
        <img
          src="/svg/figma.svg"
          alt="Figma"
          className="w-8 h-8 object-contain"
        />
      ),
      name: "Figma",
      category: "DevTools",
    },
    {
      icon: (
        <img
          src="/svg/linux.svg"
          alt="Linux"
          className="w-8 h-8 object-contain"
        />
      ),
      name: "Linux",
      category: "DevTools",
    },
  ];

  const filteredTechnologies = useMemo(() => {
    return skillCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === skillCategory);
  }, [skillCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 my-4">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            selected={skillCategory === category}
            onClick={() => setSkillCategory(category)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6">
        <AnimatePresence>
          {filteredTechnologies.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-5 p-3 cursor-default rounded-xl border border-[#000000] dark:border-[#d4d4d4] bg-gray-200 dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-[#000000] dark:hover:border-dark-700 transition-colors duration-200"
            >
              <div className="transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-base font-manrope transition-opacity duration-300 text-black dark:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

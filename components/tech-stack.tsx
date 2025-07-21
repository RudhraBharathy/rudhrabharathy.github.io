"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologies } from "@/data/about";

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
              className="flex items-center gap-5 p-3 cursor-default rounded-xl border border-[#000000] dark:border-[#d4d4d4] bg-gray-200 dark:bg-gray-800 hover:bg-[#F2F2F2] 
              dark:hover:bg-gray-700 hover:border-[#000000] dark:hover:border-dark-700 transition-colors duration-200"
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

import type React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiLinux,
  SiMui,
  SiShadcnui,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

export default function TechStack() {
  const technologies: TechItem[] = [
    { icon: <SiHtml5 className="w-8 h-8 text-[#e34c26]" />, name: "HTML 5" },
    { icon: <SiCss3 className="w-8 h-8 text-[#264de4]" />, name: "CSS 3" },
    {
      icon: <SiJavascript className="w-8 h-8 text-[#f0db4f]" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript className="w-8 h-8 text-[#3178c6]" />,
      name: "TypeScript",
    },
    { icon: <SiReact className="w-8 h-8 text-[#61dafb]" />, name: "React" },
    {
      icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 text-[#06b6d4]" />,
      name: "Tailwind CSS",
    },
    { icon: <SiMui className="w-8 h-8 text-[#007fff]" />, name: "MUI" },
    {
      icon: <SiShadcnui className="w-8 h-8 text-black dark:text-white" />,
      name: "Shadcn/ui",
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
    },
    { icon: <FaJava className="w-8 h-8 text-[#007396]" />, name: "Java" },
    { icon: <SiMysql className="w-8 h-8 text-[#00758f]" />, name: "MySQL" },
    {
      icon: <SiNodedotjs className="w-8 h-8 text-[#3c873a]" />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb className="w-8 h-8 text-[#47a248]" />,
      name: "Mongo DB",
    },
    {
      icon: <SiSupabase className="w-8 h-8 text-[#3ecf8e]" />,
      name: "Supabase",
    },
    { icon: <SiGit className="w-8 h-8 text-[#f1502f]" />, name: "Git" },
    {
      icon: <SiGithub className="w-8 h-8 text-black dark:text-white" />,
      name: "GitHub",
    },
    { icon: <SiDocker className="w-8 h-8 text-[#2496ed]" />, name: "Docker" },
    { icon: <SiFigma className="w-8 h-8 text-[#f24e1e]" />, name: "Figma" },
    {
      icon: <SiLinux className="w-8 h-8 text-black dark:text-white" />,
      name: "Linux",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center justify-between gap-4 mb-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-5 p-3 cursor-default rounded-xl border border-[#FAFAFA] dark:border-dark-200 bg-gray-200 dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-[#000000] dark:hover:border-dark-700 transition-colors duration-200"
        >
          <div className="transition-transform duration-300">{tech.icon}</div>
          <span className="text-base font-manrope transition-opacity duration-300 text-black dark:text-white">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

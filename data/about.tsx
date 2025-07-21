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

export const technologies: TechItem[] = [
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
      <img src="/svg/java.svg" alt="Java" className="w-8 h-8 object-contain" />
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

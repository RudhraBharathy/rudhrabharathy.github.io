import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiMui,
  SiShadcnui,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

interface TechItem {
  icon: React.ReactNode;
  name: string;
  category: "Frontend" | "Backend" | "DevTools";
}

const iconClass = "w-8 h-8";
const imgClass = "w-8 h-8 object-contain";

const createTechItem = (
  icon: React.ReactNode,
  name: string,
  category: TechItem["category"]
): TechItem => ({
  icon,
  name,
  category,
});

export const technologies: TechItem[] = [
  // Frontend
  createTechItem(
    <SiHtml5 className={iconClass} style={{ color: "#e34c26" }} />,
    "HTML 5",
    "Frontend"
  ),
  createTechItem(
    <SiCss3 className={iconClass} style={{ color: "#264de4" }} />,
    "CSS 3",
    "Frontend"
  ),
  createTechItem(
    <SiJavascript className={iconClass} style={{ color: "#f0db4f" }} />,
    "JavaScript",
    "Frontend"
  ),
  createTechItem(
    <SiTypescript className={iconClass} style={{ color: "#3178c6" }} />,
    "TypeScript",
    "Frontend"
  ),
  createTechItem(
    <SiReact className={iconClass} style={{ color: "#61dafb" }} />,
    "React",
    "Frontend"
  ),
  createTechItem(
    <SiNextdotjs className={iconClass} style={{ color: "#ffffff" }} />,
    "Next.js",
    "Frontend"
  ),
  createTechItem(
    <SiTailwindcss className={iconClass} style={{ color: "#06b6d4" }} />,
    "Tailwind CSS",
    "Frontend"
  ),
  createTechItem(
    <SiMui className={iconClass} style={{ color: "#007fff" }} />,
    "MUI",
    "Frontend"
  ),
  createTechItem(
    <SiShadcnui className={iconClass} style={{ color: "#ffffff" }} />,
    "Shadcn/ui",
    "Frontend"
  ),
  createTechItem(
    <img src="/svg/zustand.svg" alt="Zustand" className={imgClass} />,
    "Zustand",
    "Frontend"
  ),

  // Backend
  createTechItem(
    <img src="/svg/java.svg" alt="Java" className={imgClass} />,
    "Java",
    "Backend"
  ),
  createTechItem(
    <RiFirebaseFill className={iconClass} style={{ color: "#FF9100" }} />,
    "Firebase",
    "Backend"
  ),
  createTechItem(
    <SiMongodb className={iconClass} style={{ color: "#47a248" }} />,
    "Mongo DB",
    "Backend"
  ),
  createTechItem(
    <SiPostgresql className={iconClass} style={{ color: "#008bb9" }} />,
    "PostgreSQL",
    "Backend"
  ),

  // DevTools
  createTechItem(
    <SiGit className={iconClass} style={{ color: "#f1502f" }} />,
    "Git",
    "DevTools"
  ),
  createTechItem(
    <SiGithub className={iconClass} style={{ color: "#ffffff" }} />,
    "GitHub",
    "DevTools"
  ),
  createTechItem(
    <SiDocker className={iconClass} style={{ color: "#2496ed" }} />,
    "Docker",
    "DevTools"
  ),
  createTechItem(
    <img src="/svg/figma.svg" alt="Figma" className={imgClass} />,
    "Figma",
    "DevTools"
  ),
  createTechItem(
    <img src="/svg/linux.svg" alt="Linux" className={imgClass} />,
    "Linux",
    "DevTools"
  ),
];

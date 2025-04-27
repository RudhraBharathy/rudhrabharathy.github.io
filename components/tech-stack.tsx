import type React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiIonic,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiWordpress,
  SiElementor,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

export default function TechStack() {
  const technologies: TechItem[] = [
    { icon: <SiJavascript className="w-8 h-8" />, name: "Javascript" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "Typescript" },
    { icon: <SiPhp className="w-8 h-8" />, name: "PHP" },
    { icon: <SiPython className="w-8 h-8" />, name: "Python" },
    { icon: <SiC className="w-8 h-8" />, name: "C" },
    { icon: <SiCplusplus className="w-8 h-8" />, name: "C++" },
    { icon: <SiReact className="w-8 h-8" />, name: "React" },
    { icon: <SiVuedotjs className="w-8 h-8" />, name: "Vue.JS" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.JS" },
    { icon: <SiIonic className="w-8 h-8" />, name: "Ionic" },
    { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.JS" },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS" },
    { icon: <SiMysql className="w-8 h-8" />, name: "MySQL" },
    { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB" },
    { icon: <SiSupabase className="w-8 h-8" />, name: "Supabase" },
    { icon: <SiGit className="w-8 h-8" />, name: "Git" },
    { icon: <SiGithub className="w-8 h-8" />, name: "GitHub" },
    { icon: <SiBitbucket className="w-8 h-8" />, name: "BitBucket" },
    { icon: <SiWordpress className="w-8 h-8" />, name: "Wordpress" },
    { icon: <SiElementor className="w-8 h-8" />, name: "Elementor" },
    { icon: <SiAdobephotoshop className="w-8 h-8" />, name: "Photoshop" },
    { icon: <SiAdobeillustrator className="w-8 h-8" />, name: "Illustrator" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center gap-3">
          {tech.icon}
          <span className="text-sm font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

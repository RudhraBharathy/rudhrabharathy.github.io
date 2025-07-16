import React from "react";
import { HoverImageLinks } from "@/components/HoverImageLinks";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Weather Forcastify",
    year: "2024",
    techStack: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    image: "/images/projects/weather-forcastify.png",
    githubLink: "https://github.com/RudhraBharathy/weather-forecastify",
    externalLink: "https://weather-forecastify-app.netlify.app/",
  },
  {
    id: 2,
    name: "ATM Card Validator",
    year: "2024",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    image: "/images/projects/ATMCardValidator.png",
    githubLink: "https://github.com/RudhraBharathy/ATM-Card-Validator-with-UI",
    externalLink: "https://atmcardvalidator.netlify.app/",
  },
  {
    id: 3,
    name: "ToDo",
    year: "2024",
    techStack: ["React", "JavaScript", "Node", "MongoDB", "CRUD"],
    image: "/images/projects/ToDo.png",
    githubLink: "https://github.com/RudhraBharathy/ToDo",
    externalLink: "",
  },
  {
    id: 4,
    name: "Login & Register Form",
    year: "2024",
    techStack: ["React", "JavaScript", "Node", "MySQL"],
    image: "/images/projects/login-register.png",
    githubLink: "https://github.com/RudhraBharathy/Login-and-Register-Form",
    externalLink: "",
  },
  {
    id: 5,
    name: "Collaborative Task Management",
    year: "2024",
    techStack: ["React", "Supabase", "Tailwind CSS", "Zustand"],
    image: "/images/projects/inprogress.png",
    githubLink:
      "https://github.com/RudhraBharathy/Collaborative-Task-Management-App",
    externalLink: "",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="font-manrope">
      <div className="pb-12">
        <h1 className="text-6xl md:text-8xl lg:text-[16rem] font-light leading-none text-center my-12">
          Projects
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-end justify-between w-full gap-16 mb-20">
        <div className="flex items-start flex-col w-5/6">
          <span className="text-lg md:text-7xl mb-6 text-black dark:text-white max-w-4xl font-light tracking-tight">
            Things that
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 font-medium">
              {" "}
              I’ve Built
            </span>
          </span>
          <p className="text-black dark:text-white text-sm md:text-base max-w-lg leading-relaxed mt-10">
            A collection of projects I’ve developed with love, logic, and a lot
            of coffee. From tiny tools to complete apps — each build reflects a
            story, a lesson, and a bit of obsession.
          </p>
        </div>
        <Link
          href="/experience"
          className="flex items-center justify-end gap-1 underline-effect"
        >
          Experience +
        </Link>
      </div>
      <HoverImageLinks projects={projects} />
    </div>
  );
};

export default ProjectsPage;

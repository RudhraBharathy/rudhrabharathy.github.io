"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

type ExperienceType = 'work' | 'education';

interface ExperienceItem {
  id: string;
  type: ExperienceType;
  organization: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  location?: string;
}

const experiences: ExperienceItem[] = [
  // Work Experience (chronological order - most recent first)
  {
    id: "work1",
    type: "work",
    organization: "Google",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Led the development of core user-facing features for Google Workspace applications. Improved performance optimizations resulting in 40% faster load times and enhanced user engagement metrics across all platforms.",
    skills: ["React", "TypeScript", "Next.js", "GSAP", "TailwindCSS"],
    location: "Mountain View, CA"
  },
  {
    id: "work2",
    type: "work",
    organization: "Microsoft",
    role: "UI/UX Engineer",
    period: "2019 - 2022",
    description: "Designed and implemented responsive interfaces for Microsoft Teams. Collaborated with product managers to refine user experiences across platforms.",
    skills: ["React", "Redux", "SCSS", "Figma", "Accessibility"],
    location: "Redmond, WA"
  },
  {
    id: "intern1",
    type: "work",
    organization: "Amazon",
    role: "Web Development Intern",
    period: "Summer 2019",
    description: "Developed and maintained e-commerce platforms with focus on performance and seamless user experience. Implemented A/B testing strategies.",
    skills: ["JavaScript", "Vue.js", "AWS", "Node.js", "GraphQL"],
    location: "Seattle, WA"
  },
  // Education (chronological order - most recent first)
  {
    id: "edu1",
    type: "education",
    organization: "Stanford University",
    role: "Master of Computer Science",
    period: "2017 - 2019",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Achieved Dean's List recognition for academic excellence.",
    skills: ["Algorithms", "UI/UX Design", "Machine Learning", "Web Development"],
    location: "Palo Alto, CA"
  },
  {
    id: "edu2",
    type: "education",
    organization: "University of California, Berkeley",
    role: "Bachelor of Science in Computer Science",
    period: "2013 - 2017",
    description: "Graduated with honors. Active member of the Web Development Club and participated in multiple hackathons.",
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
    location: "Berkeley, CA"
  },
  {
    id: "edu3",
    type: "education",
    organization: "Westlake High School",
    role: "High School Diploma",
    period: "2009 - 2013",
    description: "Graduated top of class with focus on STEM subjects. Led the coding club and participated in regional programming competitions.",
    skills: ["Mathematics", "Computer Science", "Physics", "Leadership"],
    location: "Los Angeles, CA"
  }
];

const ExperiencePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGSVGElement | null>(null);
  const expRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!svgPathRef.current) return;
    
    const svgPath = svgPathRef.current.querySelector("#svg-timeline");

    if (svgPath && containerRef.current) {
      // Make SVG path invisible initially
      gsap.set(svgPath, { drawSVG: "0%" });
      
      // Create main timeline for the path drawing
      const pathTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom bottom",
          scrub: 1,
          // pin: true,
          // pinSpacing: true,
          markers: true,
          anticipatePin: 1, // Helps prevent jumping
        },
      });
      
      // Draw the SVG path as we scroll
      pathTimeline.to(svgPath, { 
        drawSVG: "100%", 
        ease: "none",
        duration: 1
      });
      
      // Make the first experience visible immediately (without scrolling) and slightly bigger
      if (expRefs.current[0]) {
        gsap.set(expRefs.current[0], { 
          opacity: 1, 
          y: 0,
          scale: 1.05 // Make first card slightly bigger in animation
        });
      }
      
      // Animate each remaining experience section (starting from the second one)
      experiences.slice(1).forEach((exp, index) => {
        const realIndex = index + 1; // Because we're starting from the second item
        const progress = realIndex / (experiences.length + 1); // Add +1 to ensure proper spacing
        const ref = expRefs.current[realIndex];
        
        if (ref) {

          gsap.set(ref, { 
            opacity: 0,
            y: 50
          });
          
          pathTimeline.add(
            gsap.to(ref, { 
              opacity: 1, 
              y: 0,
              duration: 0.15,
              ease: "power2.out"
            }), 
            progress * 0.8
          );
        }
      });
    }
  }, []);

  const getTypeIcon = (type: ExperienceType): string => {
    return type === 'work' 
      ? '💼'
      : '🎓';
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 min-h-screen">
      <h1 className="md:text-[16rem] font-light leading-none text-center mb-20 text-black dark:text-white">
        Experience
      </h1>
      
      <div 
        ref={containerRef}
        className="w-full max-w-7xl relative min-h-[200vh]"
      >
        <svg
          ref={svgPathRef}
          className="w-full h-auto sticky top-0 pt-20"
          viewBox="0 0 1200 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="svg-timeline"
            d="M0 .5H671C697.264 1 723.272 6.1731 747.537 16.2246 771.802 26.276 793.85 41.007 812.421 59.5786 830.993 78.1502 845.725 100.198 855.776 124.463 865.827 148.728 871 174.736 871 201S865.827 253.272 855.776 277.537C845.725 301.802 830.993 323.85 812.421 342.421 793.85 360.993 771.802 375.725 747.537 385.776S697.264 401 671 401H227C200.736 401 174.728 406.173 150.463 416.224 126.198 426.275 104.15 441.007 85.5786 459.579 67.0069 478.15 52.275 500.198 42.2241 524.463S27 574.736 27 601 32.1732 653.272 42.2241 677.537 67.0069 723.85 85.5786 742.421C104.15 760.993 126.198 775.725 150.463 785.776 174.728 795.827 200.736 801 227 801H1110C1136.26 801 1162.27 806.173 1186.54 816.224 1210.8 826.275 1232.85 841.007 1251.42 859.579 1269.99 878.15 1284.72 900.198 1294.78 924.463 1304.83 948.728 1310 974.736 1310 1001 1310 1027.26 1304.83 1053.27 1294.78 1077.54 1284.72 1101.8 1269.99 1123.85 1251.42 1142.42 1232.85 1160.99 1210.8 1175.72 1186.54 1185.78 1162.27 1195.83 1136.26 1201 1110 1201H449C422.736 1201 396.728 1206.17 372.463 1216.22 348.198 1226.28 326.15 1241.01 307.579 1259.58 289.007 1278.15 274.275 1300.2 264.224 1324.46 254.173 1348.73 249 1374.74 249 1401S254.173 1453.27 264.224 1477.54C274.275 1501.8 289.007 1523.85 307.579 1542.42 326.15 1560.99 348.198 1575.72 372.463 1585.78 396.728 1595.83 422.736 1601 449 1601H1110"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const topPosition = 150 + index * 300;
            const isFirst = index === 0;
            
            return (
              <div
                key={exp.id}
                ref={(el: HTMLDivElement | null) => { expRefs.current[index] = el }}
                className={`absolute pointer-events-auto ${isFirst ? 'w-80 md:w-[450px] p-8' : 'w-72 md:w-96 p-6'} bg-white dark:bg-gray-800 rounded-lg shadow-lg ${
                  isEven ? 'left-8 md:left-16' : 'right-8 md:right-16'
                }`}
                style={{ top: `${topPosition}px` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">{getTypeIcon(exp.type)}</span>
                  <h3 className="text-xl font-bold text-black dark:text-white">{exp.organization}</h3>
                </div>
                <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400">{exp.role}</p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                  {exp.location && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                  )}
                </div>
                <p className="text-black dark:text-white mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-white text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
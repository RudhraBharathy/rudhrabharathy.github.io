export const person = {
  name: "Rudhra Bharathy",
  email: "bharathyganeshan@gmail.com",
  github: "https://github.com/RudhraBharathy",
  linkedin: "https://linkedin.com/in/rudhrabharathy",
  twitter: "https://x.com/rudhrabharathy",
  devdotto: "https://dev.to/rudhrabharathy",
  photography: "https://www.instagram.com/_fhoto.holic_/",
  whatsapp: "https://wa.me/918870562981",
  locationLink: "https://maps.app.goo.gl/eKgY4A5dxVDRKj9U9",
};

export const experience = [
  {
    period: "2024 – present",
    dates: "August 2024 – present",
    role: "Technical Solutions Engineer",
    company: "Beamer × Userflow",
    highlights: [
      "Investigate issues in customer environments, including DOM conflicts, dynamic selectors, and flow behavior in single-page applications.",
      "Build and maintain Userflow interface components and in-app experiences.",
      "Turn customer feedback into product improvements, custom solutions, and developer tools with the product and engineering teams.",
    ],
    technologies: ["JavaScript", "React", "REST APIs", "Webhooks", "Git"],
  },
  {
    period: "2022 – 2024",
    dates: "August 2022 – July 2024",
    role: "Frontend developer",
    company: "Freelance",
    highlights: [
      "Designed and developed responsive websites and landing pages with an emphasis on performance and accessibility.",
      "Worked directly with clients to understand their goals and deliver tailored frontend solutions.",
      "Delivered projects through clear communication, practical scope, and reliable handoff.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    period: "2021 – 2022",
    dates: "December 2021 – May 2022",
    role: "Frontend developer intern",
    company: "ToSpace",
    highlights: [
      "Developed and deployed responsive websites and static landing pages.",
      "Applied lazy loading, accessibility practices, and performance improvements to production pages.",
      "Added measured interface motion while keeping media loading efficient.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git", "PHP"],
  },
];

export const stack = [
  {
    label: "Languages",
    items: [
      { label: "Python", icon: "simple-icons:python" },
      { label: "JavaScript", icon: "simple-icons:javascript" },
      { label: "TypeScript", icon: "simple-icons:typescript" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { label: "HTML", icon: "simple-icons:html5" },
      { label: "CSS", icon: "simple-icons:css3" },
      { label: "React", icon: "simple-icons:react" },
      { label: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { label: "shadcn/ui", icon: "simple-icons:shadcnui" },
      { label: "Motion", icon: "simple-icons:framer" },
    ],
  },
  {
    label: "Backend",
    items: [
      { label: "PostgreSQL", icon: "simple-icons:postgresql" },
      { label: "REST APIs", icon: "lucide:braces" },
      { label: "Webhooks", icon: "lucide:webhook" },
      { label: "Firebase", icon: "simple-icons:firebase" },
    ],
  },
  {
    label: "Workflow & AI",
    items: [
      { label: "Claude", icon: "simple-icons:claude" },
      { label: "Cursor", icon: "simple-icons:cursor" },
      { label: "Gemini", icon: "simple-icons:googlegemini" },
      { label: "ChatGPT", icon: "simple-icons:openai" },
      { label: "Zapier", icon: "simple-icons:zapier" },
      { label: "Chrome DevTools MCP", icon: "simple-icons:googlechrome" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { label: "Git", icon: "simple-icons:git" },
      { label: "GitHub", icon: "simple-icons:github" },
      { label: "GitHub Actions", icon: "simple-icons:githubactions" },
      { label: "Docker", icon: "simple-icons:docker" },
      { label: "AWS", icon: "simple-icons:amazonwebservices" },
      { label: "Vercel", icon: "simple-icons:vercel" },
    ],
  },
  {
    label: "Design",
    items: [
      { label: "Figma", icon: "simple-icons:figma" },
      { label: "Canva", icon: "simple-icons:canva" },
      { label: "Photoshop", icon: "simple-icons:adobephotoshop" },
    ],
  },
];

export function projectPath(id: string) {
  return `/projects/${id}/`;
}

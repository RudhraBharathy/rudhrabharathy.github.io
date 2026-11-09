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
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Astro", "Tailwind CSS", "Motion"],
  },
  {
    label: "Platforms & APIs",
    items: ["REST APIs", "Webhooks", "Firebase", "Browser extensions"],
  },
  {
    label: "Workflow",
    items: ["Git", "GitHub", "Figma"],
  },
];

export function projectPath(id: string) {
  return `/projects/${id}/`;
}

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
    start: "2025-02",
    end: null,
    role: "Technical Solutions Engineer",
    company: "Beamer × Userflow",
    highlights: [
      [
        "Built and maintain Userflow’s ",
        {
          text: "AI Skills Library",
          href: "https://github.com/userflow/ai-skills-library",
        },
        ", with 15+ skills that work in Claude Code, Cursor, Codex and more.",
      ],
      [
        "Contributed to Userflow product features that solve customer problems, and built internal AI tools such as an ",
        { text: "AI Summary Bot" },
        " that auto-summarizes support conversations.",
      ],
      [
        "Resolved backline escalations by finding root causes and handing engineering bugs they could reproduce.",
      ],
      [
        "Helped customers fix userflow product issues and setup problems on both technical and non-technical calls.",
      ],
      [
        "Led research on the element selector tool that informed Product’s Q3 roadmap, and built a ",
        { text: "React Native SDK" },
        " and won the internal hackathon.",
      ],
    ],
    technologies: [
      "JavaScript",
      "React",
      "REST APIs",
      "Cloudflare Workers",
      "Webhooks",
      "Git",
      "Jira",
      "Figma",
    ],
    previousRole: {
      start: "2024-08",
      end: "2025-01",
      role: "Intern",
      highlights: [
        "Built and maintained Userflow interface components and in-app experiences.",
        "Handled Userflow customer issues and debugged customer userflow.js setups",
      ],
      technologies: ["JavaScript", "React", "Git", "Intercom"],
    },
  },
  {
    start: "2022-08",
    end: "2024-07",
    role: "Frontend developer",
    company: "Freelance",
    highlights: [
      [
        "Designed and developed ",
        { text: "responsive websites " },
        "and landing pages with an emphasis on ",
        { text: "performance" },
        " and ",
        { text: "accessibility" },
        ".",
      ],
      [
        "Worked directly with clients to understand their goals and deliver tailored frontend solutions.",
      ],
      [
        "Delivered projects through ",
        { text: "clear communication " },
        "practical scope, and ",
        { text: "reliable handoff" },
        ".",
      ],
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Git",
      "GitHub",
      "Vercel",
    ],
    work: {
      label: "Sri Guru Associate",
      href: "https://sriguruassociate.com/",
    },
  },
  {
    start: "2021-12",
    end: "2022-05",
    role: "Frontend developer intern",
    company: "ToSpace",
    highlights: [
      [
        "Developed and ",
        { text: "deployed" },
        " responsive websites and static landing pages.",
      ],
      [
        "Applied lazy loading, accessibility practices, and performance improvements to ",
        { text: "production" },
        " pages.",
      ],
      [
        "Added measured interface ",
        { text: "animations" },
        " while keeping media loading efficient.",
      ],
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "jQuery",
      "AOS.js",
      "Git",
      "GitHub",
    ],
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
      { label: "Vite", icon: "simple-icons:vite" },
      { label: "Framer Motion", icon: "simple-icons:framer" },
      { label: "Posthog", icon: "simple-icons:posthog" },
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

const galleryAssets = import.meta.glob<ImageMetadata>(
  "./assets/gallery/*.{jpg,jpeg}",
  { eager: true, import: "default" },
);

const galleryPosts = [
  {
    file: "18074505103822355.jpeg",
    title: "The luck of the Irish ☘️🍃",
    alt: "Close-up of clover leaves",
  },
  {
    file: "18112210285496731.jpeg",
    title: "Next stop: wherever life takes me 🚉✨",
    alt: "Train stopped at a railway platform",
  },
  {
    file: "18055816730214873.jpeg",
    title: "Kodai Diaries 🏞️",
    alt: "Landscape in Kodaikanal",
  },
  {
    file: "18085980139727135.jpeg",
    title: "Sunset by the sea 🌅🌊",
    alt: "Sunset over the sea",
  },
  {
    file: "18026853176365265.jpeg",
    title: "Gangaikonda Cholapuram ✨",
    alt: "Gangaikonda Cholapuram temple",
  },
  {
    file: "17955758576776913.jpeg",
    title: "Luna 🌑🌙",
    alt: "The moon in a dark sky",
  },
  {
    file: "18071007544768405.jpeg",
    title: "Infinity Above ✨🌌",
    alt: "Star-filled midnight sky",
  },
  {
    file: "18057480641009772.jpeg",
    title: "Thanjavur Big Temple ✨",
    alt: "Brihadeeswarar Temple in Thanjavur",
  },
  {
    file: "18059089033587427.jpeg",
    title: "Arabian Sea coast 🌊🌴",
    alt: "Arabian Sea coastline",
  },
  {
    file: "18317056009146486.jpeg",
    title: "Kookal Eco Farms 🍃🍂",
    alt: "Landscape at Kookal Eco Farms",
  },
  {
    file: "17897204879939199.jpeg",
    title: "Green Iguana 💫",
    alt: "Green iguana",
  },
  {
    file: "17868739958973079.jpg",
    title: "China rose 🌺",
    alt: "China rose flower",
  },
  {
    file: "17902802132829496.jpg",
    title: "Myna ✨",
    alt: "Myna bird",
  },
  {
    file: "18153027004292782.jpg",
    title: "Roses 🌹🍃",
    alt: "Rose flowers",
  },
  {
    file: "17984497672877956.jpeg",
    title: "Mexican Sphagneticola 💛",
    alt: "Mexican Sphagneticola flower",
  },
  {
    file: "17968129490483042.jpeg",
    title: "Flower Rooftop ✨",
    alt: "Flowers in a rooftop garden",
  },
  {
    file: "17963547965161530.jpeg",
    title: "Puppy 🐾🐕",
    alt: "Puppy",
  },
  {
    file: "18253531138126450.jpeg",
    title: "Plants 🍂🍃",
    alt: "Green plant leaves",
  },
  {
    file: "18004598689592181.jpeg",
    title: "Tree-lined road 🌳🛣️🌳",
    alt: "Tree-lined road",
  },
  {
    file: "17950206659325210.jpeg",
    title: "Vernonia Cinerea 🌷",
    alt: "Vernonia Cinerea flower",
  },
  {
    file: "17928926525636496.jpeg",
    title: "Blue skies ☁️⛅💙",
    alt: "Clouds in a blue sky",
  },
];

export const gallery = galleryPosts.map(({ file, ...post }) => ({
  ...post,
  src: galleryAssets[`./assets/gallery/${file}`]!,
}));

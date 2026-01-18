export interface ProjectData {
  id: number;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  images: string[];
  video?: string;
  useCase: string;
  image: string;
  githubLink: string;
  externalLink: string;
  projectPageLink: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    name: "FocusWhileAI",
    tagline: "Stay Focused While AI Thinks",
    description:
      "A smart Chrome extension that fills AI response waiting time with personalized micro-content. Instead of switching to distracting apps during the 20-second AI generation gap, engage with curated productivity tips, tech news, mindfulness prompts, or quick games that keep you in flow.",
    techStack: ["React", "TypeScript", "REST API", "Tailwind CSS", "CRXJS", "Firebase"],
    images: [
      "/images/projects/focuswhileai-1.jpg",
      "/images/projects/focuswhileai-2.jpg",
    ],
    video: "/images/projects/focuswhileai.mp4",
    useCase:
      "Perfect for professionals and students who frequently use AI chatbots and want to maintain focus instead of falling into the distraction trap during AI response generation.",
    image: "/images/projects/focuswhileai.jpg",
    githubLink: "https://github.com/RudhraBharathy/focuswhileai",
    externalLink: "https://focuswhileai.web.app/",
    projectPageLink: "/projects/focuswhileai",
  },
  {
    id: 2,
    name: "Weather Forcastify",
    tagline: "Your 5-Day Weather Companion",
    description:
      "A clean and intuitive weather application that provides current weather conditions and accurate 5-day forecasts. Built with modern web technologies, it delivers essential weather information in a beautiful, easy-to-read interface.",
    techStack: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    images: [
      "/images/projects/weather-forcastify.png",
    ],
    useCase:
      "Ideal for anyone who needs quick, reliable weather information for planning their day or week ahead. Simple enough for casual users, detailed enough for weather enthusiasts.",
    image: "/images/projects/weather-forcastify.png",
    githubLink: "https://github.com/RudhraBharathy/weather-forecastify",
    externalLink: "https://weather-forecastify-app.netlify.app/",
    projectPageLink: "/projects/weather-forcastify",
  },
  {
    id: 3,
    name: "ATM Card Validator",
    tagline: "Validate Cards with Visual Feedback",
    description:
      "An educational tool that validates ATM/credit card numbers using the Luhn algorithm. Features a beautiful UI with step-by-step validation visualization, making it perfect for learning how card validation works or quickly checking card number validity.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    images: [
      "/images/projects/ATMCardValidator.png",
    ],
    useCase:
      "Great for developers learning about payment card validation, students studying algorithms, or anyone who wants to understand how card number validation works behind the scenes.",
    image: "/images/projects/ATMCardValidator.png",
    githubLink: "https://github.com/RudhraBharathy/ATM-Card-Validator-with-UI",
    externalLink: "https://atmcardvalidator.netlify.app/",
    projectPageLink: "/projects/atm-card-validator",
  },
];

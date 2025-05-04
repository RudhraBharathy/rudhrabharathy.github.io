import type React from "react";
import {
  FaArrowRight,
  FaLinkedin,
  FaSquareInstagram,
  FaGithub,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  labelParts?: string[];
}

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:bharathyganeshan@gmail.com",
    icon: <SiGmail />,
    labelParts: ["Email\u00A0", "", "e"],
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rudhrabharathy",
    icon: <FaLinkedin />,
    labelParts: ["Linked", "", ""],
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaSquareInstagram />,
    labelParts: ["Inst", "", "gram"],
  },
  {
    name: "Github",
    url: "https://github.com/rudhrabharathy",
    icon: <FaGithub />,
    labelParts: ["", "", "ithub"],
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaXTwitter />,
    labelParts: ["Twitter\u00A0", "", ""],
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebook />,
    labelParts: ["", "", "acebook"],
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      {socialLinks.map(({ url, icon, labelParts }, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center group cursor-pointer border-b border-gray-300 dark:border-gray-700 pb-5 mb-5"
        >
          <div className=" text-4xl md:text-[12rem] font-normal hover:translate-x-8 transition-transform duration-500">
            <span className="flex items-center gap-2">
              {labelParts?.[0]}
              {icon}
              {labelParts?.[2]}
            </span>
          </div>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black dark:bg-white text-white dark:text-black group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400 rounded-full p-7 transition-all duration-300"
          >
            <FaArrowRight
              size={50}
              className="transform transition-all duration-500 group-hover:rotate-[-40deg] rounded-full"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

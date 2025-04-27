import type React from "react"
import { FaArrowRight } from "react-icons/fa6"
import Link from "next/link"

interface SocialLink {
  name: string
  url: string
  icon?: React.ReactNode
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "Email",
      url: "mailto:bharathyganeshan@gmail.com",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rudhrabharathy",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
    {
      name: "Github",
      url: "https://github.com/rudhrabharathy",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
    },
  ]

  return (
    <div className="space-y-6">
      {socialLinks.map((link) => (
        <div key={link.name} className="flex justify-between items-center">
          <div className="text-4xl md:text-5xl font-normal">
            {link.name === "Email" && "Email"}
            {link.name === "LinkedIn" && "LinkedIn"}
            {link.name === "Instagram" && "Instagram"}
            {link.name === "Github" && "Github"}
            {link.name === "Twitter" && "Twitter"}
            {link.name === "Facebook" && "Facebook"}
          </div>
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black rounded-full p-3 hover:opacity-80 transition-opacity"
          >
            <FaArrowRight size={24} />
          </Link>
        </div>
      ))}
    </div>
  )
}

"use client";

import { usePathname } from "next/navigation";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/rudhrabharathy" },
  { name: "Instagram", url: "https://www.instagram.com/ig_rudhrabharathy" },
  { name: "Github", url: "https://github.com/rudhrabharathy" },
  { name: "Twitter", url: "https://x.com/RudhraBharathy" },
  { name: "Facebook", url: "https://www.facebook.com/bharathyganeshan/" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return (
    <footer className="relative w-full pb-6 pt-12 text-center bg-transparent font-manrope border-t-2 border-gray-200 dark:border-gray-700">
      <div className="z-10 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 px-6 md:px-20">
          <div className="flex flex-col items-start text-left">
            <Link
              href="/"
              className="text-5xl md:text-6xl font-inter italic font-normal text-slate-800 dark:text-white"
            >
              -RB-
            </Link>
            <p className="text-xl md:text-2xl pb-4 pt-5 md:pt-10 text-slate-800 dark:text-slate-300">
              bharathyganeshan@gmail.com
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <Link
                target="_blank"
                href={"https://maps.app.goo.gl/eKgY4A5dxVDRKj9U9"}
              >
                📍 Coimbatore, Tamil Nadu, India
              </Link>
            </p>
          </div>

          <div className="flex flex-col items-start text-left w-full md:w-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <div key={href} className="group flex items-center gap-1">
                  <Link
                    href={href}
                    className="underline-effect text-slate-800 dark:text-slate-200"
                  >
                    {label}
                  </Link>
                  <HiArrowRight className="opacity-0 transform transition duration-200 group-hover:opacity-100 group-hover:translate-x-1 text-slate-800 dark:text-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href={"/contact"}>
          <div className="flex items-center justify-center pt-6">
            <TextHoverEffect text="Let us connect!" />
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 pb-6">
          {socialLinks.map(({ name, url }) => (
            <div
              key={name}
              className="group flex items-center gap-1 text-slate-800 dark:text-slate-200"
            >
              <Link
                href={url}
                className="text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
              >
                {name}
              </Link>
              <HiMiniArrowUpRight className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </div>
          ))}
        </div>

        <div className="text-center font-manrope font-bold py-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Made with ❤️ by <Link href="/">Rudhra Bharathy</Link>
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  );
}

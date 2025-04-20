"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isLight = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen"></div>;
  }

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaFacebookF className="w-6 h-6" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:contact@example.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <main
      className={cn(
        "min-h-screen w-full transition-colors duration-300",
        "px-4 md:px-12 lg:px-16 py-6"
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-inter italic font-normal">-RB-</div>

          <div className="flex items-center justify-center z-10">
            <motion.div
              className="relative w-16 h-8 rounded-full cursor-pointer flex items-center p-1"
              onClick={toggleTheme}
              animate={{
                backgroundColor: isLight
                  ? "rgba(96, 165, 250, 1)"
                  : "rgba(31, 41, 55, 1)",
                boxShadow: isLight
                  ? "0 0 8px rgba(96, 165, 250, 0.5)"
                  : "0 0 8px rgba(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute w-6 h-6 rounded-full flex items-center justify-center"
                animate={{
                  x: isLight ? 0 : 32,
                  backgroundColor: isLight
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(17, 24, 39, 1)",
                  boxShadow: isLight
                    ? "0 0 2px rgba(0, 0, 0, 0.2)"
                    : "0 0 4px rgba(255, 255, 255, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {isLight ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-yellow-400"
                  >
                    <FiSun size={14} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-yellow-200"
                  >
                    <BsMoonFill size={14} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <motion.div
            className="mt-6 md:sticky md:top-24 md:w-1/2 lg:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="w-full flex flex-row items-center justify-start gap-6">
                <div
                  className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden select-none"
                  style={{ boxShadow: "-7px 7px 14px 2px rgba(0,0,0,0.3)" }}
                >
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-slate-950 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-evenly">
                <motion.h1
                  className="text-5xl md:text-[7rem] font-normal mt-4 mb-2 font-manrope"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Hi, I&apos;m
                  <br />
                  Rudhra
                  <br />
                  Bhararthy
                </motion.h1>
                <motion.p
                  className="w-[14rem] pb-4 pl-8 text-sm md:text-left text-slate-700 dark:text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Specialized in Web Design, UX / UI, Webflow, and Front End
                  Development.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="m-auto"
          >
            <nav className="flex flex-col items-center mb-8">
              <ul className="space-y-4 md:space-y-8 text-center font-space_grotesk tracking-tighter">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl md:text-5xl lg:text-[5rem] !leading-[0.7] font-black hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>

        <div className="mt-auto pt-8 pb-4 text-center w-full md:absolute md:bottom-6 lg:right-16 md:text-right md:w-auto font-manrope font-bold">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Made with ❤️
          </p>
        </div>
      </div>
    </main>
  );
}

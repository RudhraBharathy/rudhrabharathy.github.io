"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Github,
  Twitter,
  Facebook,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen"></div>;
  }

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Mail className="w-6 h-6" />,
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
        "flex flex-col md:flex-row md:items-start md:justify-between",
        "px-4 md:px-12 lg:px-20 py-6"
      )}
    >
      <div className="absolute top-6 left-4 md:left-12 lg:left-20 text-lg font-medium">
        -RB-
      </div>

      <div className="absolute top-6 right-4 md:right-12 lg:right-20">
        <button
          onClick={toggleTheme}
          type="button"
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-slate-700" />
          )}
        </button>
      </div>

      <motion.div
        className="mt-16 md:mt-24 md:sticky md:top-24 md:w-1/2 lg:w-2/5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row">
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-4 mt-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mt-4 mb-2"
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
            className="text-sm text-center md:text-left text-slate-700 dark:text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Specialized in Web Design, UX / UI,
            <br />
            Webflow, and Front End Development.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2 lg:w-2/5 mt-8 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <nav className="flex flex-col items-center md:items-end">
          <ul className="space-y-4 md:space-y-8 text-center md:text-right">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + 0.1 * index, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <div className="mt-auto pt-8 pb-4 text-center w-full md:absolute md:bottom-6 md:right-12 lg:right-20 md:text-right md:w-auto">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Made with ❤️
        </p>
      </div>
    </main>
  );
}

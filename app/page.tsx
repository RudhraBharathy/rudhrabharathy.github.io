"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";
import RollingText from "@/components/RollingText";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const calculateMyAge = new Date().getFullYear() - 2002;

  if (!mounted) {
    return <div className="min-h-screen"></div>;
  }

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-6 h-6" />,
      href: "https://linkedin.com/in/rudhrabharathy",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/ig_rudhrabharathy",
      label: "Instagram",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/RudhraBharathy",
      label: "GitHub",
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      href: "https://x.com/RudhraBharathy",
      label: "Twitter",
    },
    {
      icon: <FaFacebookF className="w-6 h-6" />,
      href: "https://www.facebook.com/bharathyganeshan/",
      label: "Facebook",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:bharathyganeshan@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "EXPERIENCE", href: "/experience" },
    { name: "PROJECTS", href: "/projects" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  const hoverContent = {
    ABOUT: {
      text: `😎\u00A0\u00A0${calculateMyAge} years old!`,
      image: "/images/about.jpg",
    },
    EXPERIENCE: {
      text: "💼\u00A0\u00A0Working @ Beamer x Userflow",
      image: "/images/experience.jpg",
    },
    PROJECTS: {
      text: "🛠️\u00A0\u00A0Crafting ideas into reality",
      image: "/images/projects.jpg",
    },
    GALLERY: {
      text: "📸\u00A0\u00A0Capturing moments",
      image: "/images/gallery.jpg",
    },
    CONTACT: {
      text: "✉️\u00A0\u00A0Reach me anytime",
      image: "/images/contact.jpg",
    },
  };

  const hoverPositions = {
    ABOUT: "left-[-50px] top-[-30px]",
    EXPERIENCE: "left-[-170px] top-[-60px]",
    PROJECTS: "left-[-180px] top-[-10px]",
    GALLERY: "left-[-140px] top-[-20px]",
    CONTACT: "left-[-120px] top-[-30px]",
  };

  const hoverImagePositions = {
    ABOUT: "right-[-80px] top-[-20px]",
    EXPERIENCE: "right-[-100px] top-[-80px]",
    PROJECTS: "right-[-90px] top-[-60px]",
    GALLERY: "right-[-110px] top-[-90px]",
    CONTACT: "right-[-110px] top-[-30px]",
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <motion.div
          className="mt-5 md:sticky md:top-24 md:w-1/2 lg:w-2/5"
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
                    className="text-black dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors transition-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-evenly mt-3">
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
                Specialized in Front End Development, Web Design, UX / UI.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="m-auto z-30"
        >
          <nav className="flex flex-col items-center mb-10">
            <ul className="space-y-6 text-center font-space_grotesk tracking-tighter relative">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + 0.1 * index, duration: 0.3 }}
                >
                  <div className="relative group">
                    <Link
                      href={link.href}
                      className="text-4xl md:text-5xl lg:text-[5rem] !leading-[0.8] font-black !cursor-pointer"
                      onMouseEnter={() => setHoveredNav(link.name)}
                      onMouseLeave={() => setHoveredNav(null)}
                    >
                      <RollingText
                        staggerDelay={0.02}
                        normalColor="text-black dark:text-white"
                        hoverColor="text-emerald-600 dark:text-emerald-400"
                      >
                        {link.name}
                      </RollingText>
                    </Link>
                    <AnimatePresence>
                      {hoveredNav === link.name && (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute ${
                            hoverPositions[
                              link.name as keyof typeof hoverPositions
                            ]
                          } transform translate-y-1/2 mt-3 text-xs md:text-sm bg-slate-800 text-white dark:bg-white dark:text-slate-800 py-2 px-4 rounded-xl shadow-md whitespace-nowrap z-10`}
                        >
                          <p>
                            {
                              hoverContent[
                                link.name as keyof typeof hoverContent
                              ].text
                            }
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {hoveredNav === link.name && (
                        <motion.div
                          key={link.name + "-image"}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className={`absolute ${
                            hoverImagePositions[
                              link.name as keyof typeof hoverImagePositions
                            ]
                          } transform translate-y-1/2 mt-3 z-[-10]`}
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="relative"
                          >
                            <div
                              className={`relative ${
                                link.name === "GALLERY"
                                  ? "w-[150px] h-[220px]"
                                  : "w-[150px] h-[100px]"
                              }`}
                            >
                              <Image
                                src={
                                  hoverContent[
                                    link.name as keyof typeof hoverContent
                                  ].image
                                }
                                alt="hover image"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                                loading="eager"
                              />
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";
import RollingText from "@/components/RollingText";
import LoadingScreen from "@/components/LoadingScreen";
import { toast } from "sonner";

type NavKey = "ABOUT" | "EXPERIENCE" | "PROJECTS" | "GALLERY" | "CONTACT";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // if (!mounted) {
  //   return <LoadingScreen onFinish={() => setMounted(true)} />;
  // }

  const iconClasses =
    "w-5 h-5 xs:w-6 xs:h-6 2xl:w-8 2xl:h-8 custom1xl:!w-8 custom1xl:!h-8";

  const socialLinks = [
    {
      icon: <FaLinkedinIn className={iconClasses} />,
      href: "https://linkedin.com/in/rudhrabharathy",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram className={iconClasses} />,
      href: "https://www.instagram.com/ig_rudhrabharathy",
      label: "Instagram",
    },
    {
      icon: <FaGithub className={iconClasses} />,
      href: "https://github.com/RudhraBharathy",
      label: "GitHub",
    },
    {
      icon: <FaXTwitter className={iconClasses} />,
      href: "https://x.com/RudhraBharathy",
      label: "Twitter",
    },
    {
      icon: <FaFacebookF className={iconClasses} />,
      href: "https://www.facebook.com/bharathyganeshan/",
      label: "Facebook",
    },
    {
      icon: <FaEnvelope className={iconClasses} />,
      href: "bharathyganeshan@gmail.com",
      label: "Email",
    },
  ];

  const navLinks: { name: NavKey; href: string }[] = [
    "ABOUT",
    "EXPERIENCE",
    "PROJECTS",
    "GALLERY",
    "CONTACT",
  ].map((name) => ({ name: name as NavKey, href: `/${name.toLowerCase()}` }));

  const navigationLinks = (href: string) => {
    if (href && !href.includes("@gmail.com")) {
      window.open(href, "_blank");
    } else {
      navigator.clipboard.writeText(href).then(() => {
        toast.message("Email copied! 🤍 Feel free to reach out!");
      });
    }
  };

  return (
    <div className="flex items-center xl:items-stretch flex-col w-full">
      <div className="flex items-center justify-between flex-col xl:flex-row">
        <motion.div
          className="mt-4 lg:mt-5 2xl:mt-10 custom1xl:!mt-10 md:sticky md:top-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start custom1xl:!w-[42rem]">
            <div className="w-full flex flex-row items-center justify-start gap-6 md:gap-8 2xl:gap-9 custom1xl:!gap-9">
              <div
                className="relative w-44 h-44 xs:w-52 xs:h-52 md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem] custom1xl:!w-[22rem] custom1xl:!h-[22rem] rounded-3xl overflow-hidden select-none"
                style={{ boxShadow: "-7px 7px 14px 2px rgba(0,0,0,0.3)" }}
              >
                <Image
                  src="/images/home/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-6 xs:gap-10 md:flex md:flex-col md:gap-6 cursor-pointer">
                {socialLinks.map(({ icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    onClick={() => navigationLinks(href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-black dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-start md:items-end justify-evenly flex-col md:flex-row">
              <motion.h1
                className="text-4xl xs:text-6xl lg:text-8xl 1xl:text-[6.5rem] 2xl:text-[9rem] custom1xl:!text-[8rem] font-normal mt-4 2xl:mt-6 mb-2 font-manrope"
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
                className="w-[14rem] py-1 xs:py-4 md:pb-4 md:pl-8 text-sm 2xl:text-lg custom1xl:!text-lg md:text-left text-slate-700 dark:text-slate-300"
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
          className="m-auto z-30 mt-4"
        >
          <nav className="flex flex-col items-center my-4 md:my-6 md:mt-14 xl:mb-32 xl:mr-32 custom1xl:!mb-40">
            <ul className="space-y-3 md:space-y-6 text-center font-space_grotesk tracking-tighter relative">
              {navLinks.map(({ name, href }, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + 0.1 * index, duration: 0.3 }}
                >
                  <div className="relative group">
                    <Link
                      href={href}
                      className="text-4xl xxs:text-5xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem] custom1xl:!text-[6rem] !leading-[0.8] font-black !cursor-pointer"
                    >
                      <RollingText
                        staggerDelay={0.02}
                        normalColor="text-black dark:text-white"
                        hoverColor="text-emerald-600 dark:text-emerald-400"
                      >
                        {name}
                      </RollingText>
                    </Link>
                  </div>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>

      <div className="mt-auto text-center w-full md:absolute md:bottom-6 xl:right-16 xl:text-right md:w-auto font-manrope font-bold">
        <p className="text-sm 2xl:text-lg custom1xl:!text-lg text-slate-600 dark:text-slate-400">
          Made with ❤️
        </p>
      </div>
    </div>
  );
}

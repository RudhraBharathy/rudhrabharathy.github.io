"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RollingText from "@/components/RollingText";
import LoadingScreen from "@/components/LoadingScreen";
import { toast } from "sonner";
import { writeText } from "@/utils/clipboard-helper";
import { navLinks } from "@/data/home";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";

const iconClass =
  "w-5 h-5 xs:w-6 xs:h-6 2xl:w-8 2xl:h-8 custom1xl:!w-8 custom1xl:!h-8";

const socialLinks = [
  {
    icon: <FaLinkedinIn className={iconClass} />,
    href: "https://linkedin.com/in/rudhrabharathy",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram className={iconClass} />,
    href: "https://www.instagram.com/ig_rudhrabharathy",
    label: "Instagram",
  },
  {
    icon: <FaGithub className={iconClass} />,
    href: "https://github.com/RudhraBharathy",
    label: "GitHub",
  },
  {
    icon: <FaXTwitter className={iconClass} />,
    href: "https://x.com/RudhraBharathy",
    label: "Twitter",
  },
  {
    icon: <FaFacebookF className={iconClass} />,
    href: "https://www.facebook.com/bharathyganeshan/",
    label: "Facebook",
  },
  {
    icon: <FaEnvelope className={iconClass} />,
    href: "bharathyganeshan@gmail.com",
    label: "Email",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("hasLoaded");

    if (alreadyLoaded) {
      setMounted(true);
    } else {
      sessionStorage.setItem("hasLoaded", "true");
      setMounted(false);
    }
  }, []);

  if (!mounted) {
    return <LoadingScreen onFinish={() => setMounted(true)} />;
  }

  const navigationLinks = (href: string) => {
    if (!href) return;

    if (!href.includes("@gmail.com")) {
      window.open(href, "_blank");
    } else {
      const copyText = async () => {
        try {
          if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(href);
          } else {
            await writeText(href);
          }

          toast.message("Email copied! 🤍 Feel free to reach out!");
        } catch (err) {
          console.error("Clipboard copy failed:", err);
          toast.error("Could not copy email. Please copy it in the Footer.");
        }
      };

      copyText();
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
                className="relative w-44 h-44 xs:w-52 xs:h-52 md:w-80 md:h-80 2xl:w-88 2xl:h-88 custom1xl:!w-[22rem] custom1xl:!h-[22rem] rounded-3xl overflow-hidden select-none"
                style={{ boxShadow: "-7px 7px 14px 2px rgba(0,0,0,0.3)" }}
              >
                <Image
                  src="/images/home/RB-image1.jpg"
                  alt="Profile"
                  fill
                  className="object-cover scale-[1.5] translate-y-10"
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
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-start md:items-end justify-evenly flex-col md:flex-row">
              <div className="text-4xl xs:text-6xl lg:text-8xl 1xl:text-[6.5rem] 2xl:text-[9rem] custom1xl:!text-[8rem] font-normal mt-4 2xl:mt-6 mb-2 font-manrope">
                {["Hi, I'm", "Rudhra", "Bharathy"].map((text, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden ${index === 2 ? "leading-[1.2] min-h-[1em]" : ""
                      }`}
                  >
                    <div className="relative inline-block">
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          delay: 0.3 + index * 0,
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <p className="block">{text}</p>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              <motion.p
                className="w-[20rem] py-1 xs:py-4 md:pb-4 md:pl-8 text-sm 2xl:text-lg custom1xl:!text-lg md:text-left text-slate-700 dark:text-slate-300"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.3,
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Specialized in full stack web development - building beautiful interfaces, and turning ideas into solutions!
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div className="m-auto z-30 mt-4 xl:mt-8">
          <nav className="flex flex-col items-center my-4 md:my-6 md:mt-14 xl:mb-32 xl:mr-32 custom1xl:!mb-40">
            <ul className="space-y-3 md:space-y-6 text-center font-space_grotesk tracking-tighter relative">
              {navLinks.map(({ name, href }, index) => (
                <li key={name}>
                  <div className="overflow-hidden relative inline-block">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        delay: 0.3 + index * 0,
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={href}
                        className="text-4xl xxs:text-5xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem] custom1xl:!text-[6rem] leading-[0.8]! font-black cursor-pointer! inline-block"
                      >
                        <RollingText
                          staggerDelay={0.02}
                          normalColor="text-black dark:text-white"
                          hoverColor="text-emerald-600 dark:text-emerald-400"
                        >
                          {name}
                        </RollingText>
                      </Link>
                    </motion.div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>

      <div className="mt-auto text-center w-full md:absolute md:bottom-8 xl:right-16 xl:text-right md:w-auto font-manrope font-bold">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-row gap-3 items-center justify-center  text-sm 2xl:text-lg custom1xl:!text-lg text-slate-600 dark:text-slate-400"
        >
          <p>📍 Coimbatore, India</p>
          <p>{"•"}</p>
          <p>Made with ❤️</p>
        </motion.div>
      </div>
    </div>
  );
}

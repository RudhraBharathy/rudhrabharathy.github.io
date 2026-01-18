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
  FaDev,
  FaEnvelope,
} from "react-icons/fa6";

const iconClass =
  "w-7 h-7 lg:w-5 lg:h-5 xl:w-8 xl:h-8 custom1xl:w-8 custom1xl:h-8";
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
    icon: <FaDev className={iconClass} />,
    href: "https://dev.to/rudhrabharathy",
    label: "Dev.to",
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
    <main className="flex items-center lg:items-stretch flex-col w-full relative pt-6">
      <div className="flex items-center lg:items-center justify-between flex-col lg:flex-row w-full grow lg:h-full">
        <motion.div
          className="mt-4 lg:mt-0 w-full lg:w-2/3 flex flex-col items-start justify-center max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex flex-row items-center justify-center lg:justify-start gap-10 custom1xl:gap-12!">
            <div
              className="relative w-44 h-44 xs:w-52 xs:h-52 md:w-80 md:h-80 lg:w-64 lg:h-64 xl:w-80 xl:h-80 custom1xl:w-88! custom1xl:h-88! rounded-3xl overflow-hidden select-none shrink-0"
              style={{ boxShadow: "-7px 7px 14px 2px rgba(0,0,0,0.3)" }}
            >
              <Image
                src="/images/home/RB-image1.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-6 xs:gap-10 md:flex md:flex-col md:gap-5 cursor-pointer">
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

          <div className="flex items-start md:items-end justify-evenly flex-col md:flex-row mt-6 lg:mt-3 xl:mt-4 w-full px-10 lg:px-0">
            <div className="text-4xl xs:text-6xl lg:text-5xl xl:text-8xl 1xl:text-[6.5rem] custom1xl:text-[8rem]! font-normal mb-2 font-manrope lg:leading-[0.85]">
              {["Hi, I'm", "Rudhra", "Bharathy"].map((text, index) => (
                <div
                  key={index}
                  className={`overflow-hidden relative inline-block ${index === 2 ? "lg:leading-[1.2] lg:min-h-[1em]" : ""}`}
                >
                  <motion.p
                    className="block pr-2 lg:pr-0"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      delay: 0.3 + index * 0,
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {text}
                  </motion.p>
                </div>
              ))}
            </div>
            <motion.p
              className="w-full md:max-w-[20rem] py-1 xs:py-4 md:pb-4 md:pl-8 text-sm custom1xl:text-lg! md:text-left text-slate-700 dark:text-slate-300"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.3,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Specialized in full stack web development - building beautiful
              interfaces, and turning ideas into solutions!
            </motion.p>
          </div>
        </motion.div>

        <motion.nav
          className="w-full lg:w-1/2 flex flex-col items-center justify-center z-30 mt-8 lg:mt-0 lg:mr-8 xl:mr-16 my-4 md:my-6 lg:my-0 lg:mb-24"
        >
          <ul className="space-y-3 md:space-y-6 lg:space-y-3 xl:space-y-6 text-center font-space_grotesk tracking-tighter relative">
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
                      className="text-4xl xxs:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[5rem] custom1xl:text-[6rem]! leading-[0.8]! font-black cursor-pointer! inline-block"
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
        </motion.nav>
      </div>

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="lg:absolute lg:bottom-4 lg:right-8 text-right font-manrope font-bold flex flex-row gap-3 items-center justify-center lg:justify-end
        text-sm custom1xl:text-lg! text-slate-600 dark:text-slate-400"
      >
        <p>📍 Coimbatore, India</p>
        <p>{"•"}</p>
        <p>Made with ❤️</p>
      </motion.div>
    </main>
  );
}
"use client";

import TechStack from "@/components/tech-stack";
import { DotPattern } from "@/components/ui/DotPattern";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="mx-auto 1xl:mx-16 px-2 font-manrope">
      <div className="relative">
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="text-[5rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-light leading-none text-center my-2 1xl:my-4 xl:mb-12">
              About
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center flex-col bg-gray-200 dark:bg-gray-800 px-4 md:px-10 pt-6 md:pt-10 md:pb-10 rounded-lg max-w-7xl w-full overflow-hidden">
              <DotPattern
                width={20}
                height={20}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mask-[radial-gradient(300px_circle_at_center,white,transparent)] pointer-events-none z-1"
              />

              <div className="flex justify-around gap-4 2xl:mb-6 w-full">
                <div>
                  <p className="uppercase text-xs sm:text-sm font-medium mb-1">
                    CURRENTLY SOLVING PROBLEMS
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-base">
                    @ Beamer x Userflow
                  </p>
                </div>
                <p className="text-xs sm:text-sm 2xl:text-base">
                  (2024 – Present)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 w-full 1xl:px-12">
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h2 className="text-7xl md:text-8xl font-light my-6 font-space_grotesk">
                    Hey!
                  </h2>
                  <div className="text-sm sm:text-base 2xl:text-2xl leading-relaxed mt-6">
                    <p>
                      I love building things that are useful and look good. I enjoy projects that force me to learn something new,
                      whether that means designing a new layout or solving a tricky logic problem.
                    </p>
                  </div>
                </div>

                <div className="relative -bottom-4 md:-bottom-16 lg:left-16 w-72 h-72 sm:w-96 sm:h-96 2xl:w-120 2xl:h-120 rounded-3xl overflow-hidden select-none mx-auto z-10">
                  <Image
                    src="/images/home/RB-image2.png"
                    alt="Profile silhouette"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-between items-center my-8 md:my-12 gap-4 sm:gap-0">
        <Link
          href="/experience"
          className="flex items-center gap-2 underline-effect"
        >
          Experience +
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 underline-effect"
        >
          Contact +
        </Link>
      </div>

      <section>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-10">
          Tech Stack
        </h2>
        <TechStack />
      </section>
    </section>
  );
}

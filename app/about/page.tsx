"use client";

import Image from "next/image";
import TechStack from "@/components/tech-stack";
import { DotPattern } from "@/components/ui/DotPattern";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-[110rem] mx-auto 1xl:mx-16 px-4">
      <div className="relative min-h-[680px] mb-36 xxs:mb-28 xs:mb-24 2xs:mb-8 sm:mb-28 md:mb-12 lg:mb-16 xl:mb-24 2xl:mb-32">
        <h1 className="text-[5rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-manrope font-light leading-none text-center">
          About
        </h1>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-72 sm:-translate-y-[15rem] md:-translate-y-[13rem] lg:-translate-y-[11rem] xl:-translate-y-36 z-[-1] bg-gray-200 
                      dark:bg-gray-800 p-6 rounded-lg w-full max-w-7xl pt-20 md:pt-24 lg:pt-32 xl:pt-40"
        >
          <div className="2xl:mb-6 px-2 sm:px-0 font-manrope relative bottom-9">
            <div className="flex justify-around items-start sm:items-center gap-4">
              <div>
                <p className="uppercase text-xs sm:text-sm font-medium mb-1">
                  CURRENTLY SOLVING PROBLEMS
                </p>
                <p className="text-xs sm:text-sm">@ Beamer x Userflow</p>
              </div>
              <p className="text-xs sm:text-sm">(2024 – Present)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-10 1xl:px-8">
            <div className="flex items-center justify-center">
              <div>
                <h2 className="text-6xl md:text-8xl font-light mb-6 font-space_grotesk text-center md:text-left">
                  Hey!
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed font-manrope text-center md:text-left">
                  <p>
                    I'm passionate about creating things that are useful,
                    beautiful, and make a difference. I enjoy working on
                    projects that challenge me to learn and grow, whether it's
                    designing, building, or problem-solving.
                  </p>
                  <p>
                    I focus on delivering quality work, paying attention to
                    detail, and always looking for better ways to do things. I'm
                    a quick learner, a good team player, and someone who loves
                    what they do.
                  </p>
                </div>
                <DotPattern
                  width={20}
                  height={20}
                  className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                />
              </div>
            </div>

            <div className="flex justify-center items-end">
              <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-64 md:h-80">
                <Image
                  src="/images/home/profile.png"
                  alt="Profile silhouette"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-12 gap-4 sm:gap-0">
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Tech Stack
        </h2>
        <TechStack />
      </section>
    </section>
  );
}

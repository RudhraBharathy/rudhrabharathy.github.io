"use client";

import Image from "next/image";
import TechStack from "@/components/tech-stack";
import { DotPattern } from "@/components/ui/DotPattern";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="relative min-h-[700px] mb-40">
        <h1 className="text-[8rem] md:text-[20rem] z-5 font-manrope font-light leading-none text-center">
          About
        </h1>

        <div
          className="absolute !pt-40 z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-36 bg-gray-200 dark:bg-gray-800 p-6 md:p-10 rounded-lg w-full max-w-7xl"
        >
          <div className="mb-2 relative bottom-9 font-manrope">
            <div className="flex justify-around items-center">
              <div>
                <p className="uppercase text-sm font-medium mb-1">
                  CURRENTLY SOLVING PROBLEMS
                </p>
                <p className="text-sm">@ Beamer x Userflow</p>
              </div>
              <p className="text-sm">(2024 – Present)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-center">
                <div>
                  <h2 className="text-8xl font-light mb-6 font-space_grotesk">
                    Hey!
                  </h2>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed font-manrope">
                    <p>
                      I'm passionate about creating things that are useful,
                      beautiful, and make a difference. I enjoy working on
                      projects that challenge me to learn and grow, whether it's
                      designing, building, or problem-solving.
                    </p>
                    <p>
                      I focus on delivering quality work, paying attention to
                      detail, and always looking for better ways to do things.
                      I'm a quick learner, a good team player, and someone who
                      loves what they do.
                    </p>
                  </div>
                  <DotPattern
                    width={20}
                    height={20}
                    className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-end">
              <div className="relative w-48 h-64 md:w-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=256"
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

      <div className="flex justify-between items-center mb-12">
        <Link href={'/'} className="flex items-center gap-2 underline-effect">Home +</Link>
        <Link href={'/contact'} className="flex items-center gap-2 underline-effect">Contact +</Link>
      </div>

      <section>
        <h2 className="text-5xl font-bold mb-10">Tech Stack</h2>
        <TechStack />
      </section>
    </section>
  );
}

"use client";

import Image from "next/image";
import TechStack from "@/components/tech-stack";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="relative min-h-[700px] mb-44">
        <h1 className="text-[8rem] md:text-[20rem] z-5 font-manrope font-light leading-none text-center pointer-events-none select-none">
          About
        </h1>

        <div
          data-speed="0.9"
          className="absolute !pt-40 z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-32 bg-gray-200 dark:bg-gray-800 p-6 md:p-10 rounded-lg w-full max-w-7xl shadow-lg"
        >
          <div className="mb-2 relative bottom-9">
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
                  <h2 className="text-5xl font-bold mb-6">Hey!</h2>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed">
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
        <button className="flex items-center gap-2 hover:underline">
          Scroll <span className="text-xl">↓</span>
        </button>
        <button className="flex items-center gap-2 hover:underline">
          Contact <span className="text-xl">+</span>
        </button>
      </div>

      <section>
        <h2 className="text-5xl font-bold mb-10">Tech Stack</h2>
        <TechStack />
      </section>
    </section>
  );
}

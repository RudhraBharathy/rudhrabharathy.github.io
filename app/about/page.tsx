import Image from "next/image";
import TechStack from "@/components/tech-stack";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white p-4 md:p-6">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none">
          About
        </h1>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 md:p-10 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <p className="uppercase text-sm font-medium mb-1">
                  CURRENTLY SOLVING PROBLEMS
                </p>
                <p className="text-sm">@ Beamer x Userflow</p>
              </div>

              <h2 className="text-5xl font-bold mb-6">Hey!</h2>

              <div className="space-y-4">
                <p>
                  I&apos;m Rudhra Bharathy. I&apos;m passionate about creating
                  things that are useful, beautiful, and make a difference. I
                  enjoy working on projects that challenge me to learn and grow,
                  whether it&apos;s designing, building, or problem-solving.
                </p>
                <p>
                  I focus on delivering quality work, paying attention to
                  detail, and always looking for better ways to do things.
                  I&apos;m a quick learner, a good team player, and someone who
                  loves what they do.
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="relative w-48 h-64 md:w-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=256"
                  alt="Profile silhouette"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute right-8 md:right-16">
                <p className="text-sm">(2024 - Present)</p>
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
      </main>
    </div>
  );
}

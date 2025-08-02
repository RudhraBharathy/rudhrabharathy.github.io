"use client";
import { useScroll, useTransform, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { FaBriefcase } from "react-icons/fa";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1.08], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans lg:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 lg:pt-20 lg:gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="z-50 h-12 absolute left-3 lg:left-3 w-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <motion.div
                  className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center text-white"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <FaBriefcase className="h-4 w-4" />
                </motion.div>
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 tracking-tight">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-2xl mb-4 text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
                {item.title}
              </h3>
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute lg:left-8 left-8 top-0 overflow-hidden w-[6px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="z-0 absolute inset-x-0 top-0 w-[6px] bg-gradient-to-t from-emerald-600 via-emerald-400 to-transparent from-[0%] via-[50%] rounded-full shadow-[0_0_10px_rgba(5,150,105,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

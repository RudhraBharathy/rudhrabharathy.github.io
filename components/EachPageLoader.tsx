"use client";

import { motion, Variants } from "framer-motion";

const barVariants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

export default function EachPageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent text-white">
      <span
        className="font-black text-center pointer-events-none"
        style={{
          fontSize: "clamp(3rem, 12vw, 10rem)",
        }}
      >
        Loading...
      </span>

      <motion.div
        transition={{ staggerChildren: 0.25 }}
        initial="initial"
        animate="animate"
        className="flex gap-1 mt-6"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            variants={barVariants}
            className="h-12 w-2 bg-white"
          />
        ))}
      </motion.div>
    </div>
  );
}

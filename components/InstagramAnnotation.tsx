"use client";

import { motion } from "framer-motion";

interface InstagramAnnotationProps {
  text: string;
  className?: string;
}

const InstagramAnnotation: React.FC<InstagramAnnotationProps> = ({ text, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative scale-[0.7] sm:scale-90 lg:scale-100 z-10 ${className}`}
    >
      <svg
        className="absolute 
          w-16 h-16 
          -top-6 -left-23 
          sm:w-16 sm:h-16
          sm:-top-14 sm:-left-20 
          lg:w-22 lg:h-22
          lg:-top-20 lg:-left-25
          pointer-events-none overflow-visible rotate-6"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 20.926 5.523 C 120.309 5.801 19.784 55.856 95.926 74.5"
          stroke="currentColor"
          className="text-slate-800 dark:text-white"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 85 78 L 98 76 L 92 65"
          stroke="currentColor"
          className="text-slate-800 dark:text-white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.3,
          }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
        }}
        className="
          absolute 
          -top-10 -left-38 
          sm:-top-18 sm:-left-40 
          lg:-top-25 lg:-left-50
          text-slate-800 dark:text-white 
          font-handwriting 
          text-lg sm:text-2xl lg:text-3xl 
          whitespace-nowrap"
        style={{
          fontFamily: "var(--font-caveat)",
          transform: "rotate(-8deg)",
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default InstagramAnnotation;

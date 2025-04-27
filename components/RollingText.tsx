"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface RollingTextProps {
  children: ReactNode;
  className?: string;
}

export default function RollingText({
  children,
  className = "",
}: RollingTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="inline-block"
        style={{ transformOrigin: "50% 50% 0px" }}
        animate={{
          transform: isHovered ? "translateY(-100%)" : "none",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute top-0 left-0 inline-block"
        style={{ transformOrigin: "50% 50% 0px" }}
        initial={{
          transform: "translateY(100%)",
        }}
        animate={{
          transform: isHovered ? "none" : "translateY(100%)",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";

interface RollingTextProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  hoverColor?: string; // For custom hover color
  normalColor?: string; // For normal state color
}

export default function RollingText({
  children,
  className = "",
  staggerDelay = 0.03,
  hoverColor = "text-slate-600 dark:text-slate-300", // Default hover color classes
  normalColor = "", // Default to inherit from parent
}: RollingTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [characters, setCharacters] = useState<string[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Convert children to string for SplitType
  const textContent = typeof children === "string" ? children : String(children);
  
  useEffect(() => {
    // Split the text into characters when component mounts
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: "chars" });
      if (text.chars) {
        setCharacters(Array.from(text.chars.map(char => char.textContent || "")));
      }
    }
  }, [textContent]);

  // Determine which color class to use
  const colorClass = isHovered ? hoverColor : normalColor;
  
  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden div used only for SplitType text processing */}
      <div ref={textRef} className="absolute opacity-0 pointer-events-none">
        {children}
      </div>
      
      {/* Visible animated text */}
      <div className="inline-flex">
        {characters.map((char, index) => (
          <div key={`top-${index}`} className="relative overflow-hidden">
            <motion.span
              className={`inline-block transition-colors duration-300 ${colorClass}`}
              style={{ transformOrigin: "50% 50% 0px" }}
              animate={{
                transform: isHovered ? "translateY(-100%)" : "none",
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * staggerDelay,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            <motion.span
              aria-hidden="true"
              className={`absolute top-0 left-0 inline-block transition-colors duration-300 ${colorClass}`}
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
                delay: index * staggerDelay,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import React, { useRef, useState, useMemo, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface RollingTextProps {
  children: string;
  className?: string;
  staggerDelay?: number;
  hoverColor?: string;
  normalColor?: string;
}

export default function RollingText({
  children,
  className = "",
  staggerDelay = 0.03,
  hoverColor = "text-slate-600 dark:text-slate-300",
  normalColor = "",
}: RollingTextProps) {
  const charsTopRef = useRef<HTMLSpanElement[]>([]);
  const charsBottomRef = useRef<HTMLSpanElement[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const characters = useMemo(
    () => children.split("").map((char) => (char === " " ? "\u00A0" : char)),
    [children]
  );

  const animateChars = useCallback(() => {
    const topChars = charsTopRef.current;
    const bottomChars = charsBottomRef.current;

    const toTop = {
      y: "-100%",
      duration: 0.4,
      ease: "power2.out",
      stagger: staggerDelay,
    };

    const toBottom = {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
      stagger: staggerDelay,
    };

    const resetTop = {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
      stagger: staggerDelay,
    };

    const resetBottom = {
      y: "100%",
      duration: 0.4,
      ease: "power2.out",
      stagger: staggerDelay,
    };

    gsap.to(topChars, isHovered ? toTop : resetTop);
    gsap.to(bottomChars, isHovered ? toBottom : resetBottom);
  }, [isHovered, staggerDelay]);

  useGSAP(animateChars, [isHovered, characters]);

  const colorClass = isHovered ? hoverColor : normalColor;

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inline-flex">
        {characters.map((char, index) => (
          <div key={index} className="relative overflow-hidden">
            <span
              ref={(el) => {
                if (el) charsTopRef.current[index] = el;
              }}
              className={`inline-block transition-colors duration-300 ${colorClass}`}
            >
              {char}
            </span>
            <span
              ref={(el) => {
                if (el) charsBottomRef.current[index] = el;
              }}
              aria-hidden="true"
              className={`absolute top-0 left-0 inline-block transition-colors duration-300 ${colorClass}`}
            >
              {char}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

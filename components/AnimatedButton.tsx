"use client";

import React, { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaTelegramPlane } from "react-icons/fa";

interface AnimatedButtonProps {
  className?: string;
  value: string;
  children?: ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  className = "",
  value = "",
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!buttonRef.current || !flairRef.current) return;

      const xSet = gsap.quickSetter(flairRef.current, "xPercent");
      const ySet = gsap.quickSetter(flairRef.current, "yPercent");

      const getXY = (e: MouseEvent) => {
        const { left, top, width, height } =
          buttonRef.current!.getBoundingClientRect();
        const xTransformer = gsap.utils.pipe(
          gsap.utils.mapRange(0, width, 0, 100),
          gsap.utils.clamp(0, 100)
        );
        const yTransformer = gsap.utils.pipe(
          gsap.utils.mapRange(0, height, 0, 100),
          gsap.utils.clamp(0, 100)
        );
        return {
          x: xTransformer(e.clientX - left),
          y: yTransformer(e.clientY - top),
        };
      };

      const handleMouseEnter = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        xSet(x);
        ySet(y);
        gsap.to(flairRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.killTweensOf(flairRef.current);
        gsap.to(flairRef.current, {
          xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
          yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.to(flairRef.current, {
          xPercent: x,
          yPercent: y,
          duration: 0.4,
          ease: "power2",
        });
      };

      const button = buttonRef.current;
      button.addEventListener("mouseenter", handleMouseEnter as EventListener);
      button.addEventListener("mouseleave", handleMouseLeave as EventListener);
      button.addEventListener("mousemove", handleMouseMove as EventListener);

      return () => {
        button.removeEventListener(
          "mouseenter",
          handleMouseEnter as EventListener
        );
        button.removeEventListener(
          "mouseleave",
          handleMouseLeave as EventListener
        );
        button.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
      };
    },
    { scope: buttonRef }
  );

  return (
    <div
      ref={buttonRef}
      className={`w-1/4 relative group overflow-hidden rounded-full py-2 pl-6 pr-2 font-semibold text-white bg-transparent cursor-pointer ${className}`}
      style={
        {
          "--ease-in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        } as React.CSSProperties
      }
    >
      <span
        ref={flairRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: "scale(0)",
          transformOrigin: "0 0",
          willChange: "transform",
        }}
      >
        <span className="absolute block w-[180%] aspect-square bg-black dark:bg-white rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></span>
      </span>

      <span className="absolute inset-0 rounded-full pointer-events-none"></span>

      <span
        className="flex items-center justify-between text-2xl w-full z-10 text-black group-hover:text-white dark:text-white dark:group-hover:text-black transition-colors duration-150"
        style={{
          transitionTimingFunction: "var(--ease-in-out-quart)",
        }}
      >
        {value}{" "}
        <div
          className="inline-flex items-center justify-center 
                rounded-full p-3
                bg-black text-white 
                group-hover:bg-white group-hover:text-black
                dark:bg-white dark:text-black 
                dark:group-hover:bg-slate-900 dark:group-hover:text-white
                transition-colors duration-150"
        >
          <FaTelegramPlane size={30} />
        </div>
      </span>
    </div>
  );
};

export default AnimatedButton;

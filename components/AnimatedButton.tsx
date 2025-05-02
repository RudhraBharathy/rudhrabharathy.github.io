"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

interface GSAPButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

const GSAPButton: React.FC<GSAPButtonProps> = ({
  label = "Get GSAP",
  href = "#",
  className = "",
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
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
    <Link
      href={href}
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full py-4 px-6 text-lg font-semibold text-white bg-transparent cursor-pointer ${className}`}
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
        <span className="absolute block w-[170%] aspect-square bg-white rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></span>
      </span>

      <span className="absolute inset-0 border-2 border-white rounded-full pointer-events-none"></span>

      <span
        className="relative text-center z-10 transition-colors duration-50"
        style={{
          transitionTimingFunction: "var(--ease-in-out-quart)",
        }}
      >
        {label}
      </span>
    </Link>
  );
};

export default GSAPButton;

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function AnimatedButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const scale = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  const getXY = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return { x: 50, y: 50 };
    const rect = buttonRef.current.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width) * 100;
    const yPos = ((e.clientY - rect.top) / rect.height) * 100;
    return {
      x: Math.min(Math.max(xPos, 0), 100),
      y: Math.min(Math.max(yPos, 0), 100),
    };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { x: newX, y: newY } = getXY(e);
    x.set(newX);
    y.set(newY);
    scale.set(1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { x: newX, y: newY } = getXY(e);
    x.set(newX);
    y.set(newY);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { x: newX, y: newY } = getXY(e);
    x.set(newX > 90 ? newX + 20 : newX < 10 ? newX - 20 : newX);
    y.set(newY > 90 ? newY + 20 : newY < 10 ? newY - 20 : newY);
    scale.set(0);
  };

  return (
    <a
      href="#"
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-semibold text-lg tracking-tight overflow-hidden cursor-pointer hover:text-black transition-colors duration-300 ease-in-out"
    >
      <motion.span
        className="absolute top-0 left-0 w-[170%] aspect-square bg-white rounded-full pointer-events-none"
        style={{
          x: xSpring,
          y: ySpring,
          scale: scaleSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <span className="relative z-10">Get GSAP</span>
    </a>
  );
}

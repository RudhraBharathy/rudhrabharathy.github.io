"use client";

import React, {
  ReactNode,
  useRef,
  useEffect,
  HTMLAttributes,
  useState,
} from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { FaTelegramPlane } from "react-icons/fa";

interface AnimatedButtonProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children?: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  value,
  onClick,
  className = "",
  padding = 100,
  disabled = false,
  magnetStrength = 13,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const { left, top, width, height } =
        buttonRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

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

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={buttonRef}
      onClick={onClick}
      className={`w-2/3 2xxs:w-1/2 lg:w-2/5 xl:w-1/4 relative group overflow-hidden rounded-full py-2 pl-4 lg:pl-6 pr-2 font-semibold text-white bg-transparent cursor-pointer ${className}`}
      style={
        {
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
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
                rounded-full p-2 lg:p-3
                bg-black text-white 
                group-hover:bg-white group-hover:text-black
                dark:bg-white dark:text-black 
                dark:group-hover:bg-slate-900 dark:group-hover:text-white
                transition-colors duration-150"
        >
          <FaTelegramPlane className="text-2xl md:text-3xl" />
        </div>
      </span>
    </div>
  );
};

export default AnimatedButton;

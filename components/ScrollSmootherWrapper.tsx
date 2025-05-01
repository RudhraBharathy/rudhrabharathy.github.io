"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function ScrollSmootherWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const smootherRef = useRef(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    },
    { scope: smootherRef }
  );

  return (
    <div id="smooth-wrapper" ref={smootherRef}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}

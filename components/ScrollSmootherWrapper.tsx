"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

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

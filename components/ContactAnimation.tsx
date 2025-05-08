"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function ContactAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!svgRef.current) return;

      const tl = gsap.timeline({
        repeat: 0,
        defaults: { ease: "power2.inOut" },
      });

      tl.fromTo(
        ".plane",
        { scale: 0.3 },
        {
          duration: 4,
          scale: 0.6,
          motionPath: {
            path: ".mp",
            align: ".mp",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        },
        0
      )
        .to(svgRef.current, { duration: 0.7, opacity: 1 }, 0.25)
        .from(".mp", { duration: 3.8, drawSVG: 0 }, 0.28)
        .to(".mp", { duration: 2, drawSVG: "94% 94%", ease: "power2" }, "-=2")
        .to(svgRef.current, { duration: 0.7, opacity: 0 }, "-=0.9");
    },
    { scope: svgRef }
  );

  return (
    <div className="w-screen h-screen overflow-hidden fixed inset-0 z-[-1]">
      <svg
        ref={svgRef}
        className="w-full h-full opacity-0"
        viewBox="-40 -180 1350 1200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className="mp stroke-black dark:stroke-white"
          fill="none"
          strokeWidth={4}
          d="M-484-46C-349 222 99 391 329 423c282.949 31.386 335-44 411-152C800.034 144.906 751.343 15.746 632.649 3.576 513.956-8.596 424.381 102.473 401 188 328 514 719 873 939 596S559 78 638 593q18 94 104 175c182 153 608 177 860 84"
        />

        <g className="plane fill-black dark:fill-white">
          <path opacity="0.3" d="m82.8 35 215.9 94.6L79 92l3.8-57Z" />
          <path d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
          <path opacity="0.3" d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z" />
          <path d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z" />
        </g>
      </svg>
    </div>
  );
}

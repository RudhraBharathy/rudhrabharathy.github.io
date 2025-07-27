"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  animate,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const [displayValue, setDisplayValue] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3.5,
      ease: "easeInOut",
    });
    return () => controls.stop();
  });

  useMotionValueEvent(rounded, "change", (v) => {
    setDisplayValue(v);
    if (v >= 100) {
      setTimeout(() => {
        setShow(false);
        onFinish();
      }, 600);
    }
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 w-full h-screen bg-black flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-8xl text-white font-bold tabular-nums"
          >
            <p
              style={{ ...exampleStyle, fontSize: "8rem" }}
              className="2xl:text-[10rem]"
            >
              {displayValue}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const exampleStyle = {
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  fontWeight: 800,
};

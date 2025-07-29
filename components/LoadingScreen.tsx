"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 1500; // total duration in ms
    const steps = 100;
    const intervalTime = duration / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setDisplayValue(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          onFinish();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 w-full h-screen bg-black flex flex-col items-center justify-center gap-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ ...exampleStyle, fontSize: "8rem" }}
            className="text-white font-bold tabular-nums 2xl:text-[10rem]"
          >
            {displayValue}%
          </motion.p>
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

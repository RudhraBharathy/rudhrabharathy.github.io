"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="flex items-center justify-center h-scree"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-2xl font-semibold tracking-widest"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Loading About...
      </motion.div>
    </motion.div>
  );
}

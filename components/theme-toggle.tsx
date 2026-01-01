"use client";

import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      {resolvedTheme === "dark" ? (
        <FiSun className="text-yellow-500" />
      ) : (
        <BsMoonFill className="text-slate-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

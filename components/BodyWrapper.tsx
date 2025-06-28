"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface BodyWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function BodyWrapper({ children, className }: BodyWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <body
      className={cn(
        className,
        isHomePage && "overflow-y-hidden"
      )}
    >
      {children}
    </body>
  );
} 
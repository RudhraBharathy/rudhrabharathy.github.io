"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

interface BodyWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function BodyWrapper({ children, className }: BodyWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isMobile = useMobile();

  return (
    <body
      className={cn(
        className,
        isHomePage && !isMobile && "overflow-y-hidden"
      )}
    >
      {children}
    </body>
  );
} 
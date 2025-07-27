import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "My Projects",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

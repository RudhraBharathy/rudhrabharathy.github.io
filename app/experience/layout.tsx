import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Portfolio",
  description: "My Experience as a story!!",
};

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

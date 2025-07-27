import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Rudhra Bharathy",
  description: "My Experience",
};

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

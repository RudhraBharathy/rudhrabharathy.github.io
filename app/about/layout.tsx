import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rudhra Bharathy",
  description: "About me and my tech stack",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

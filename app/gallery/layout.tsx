import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Portfolio",
  description: "My Gallery!!",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

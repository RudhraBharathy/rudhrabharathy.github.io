import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

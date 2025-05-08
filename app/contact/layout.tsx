import React from "react";
import type { Metadata } from "next";
import { Toaster } from "sonner";

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
      <Toaster
        position="top-center"
        expand={false}
        closeButton
        toastOptions={{
          className: "!bg-black !text-white dark:!bg-white dark:!text-black",
        }}
      />
    </React.Fragment>
  );
}

import type React from "react";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

export const metadata: Metadata = {
  title: "Rudhra Bhararthy - Portfolio",
  description: "Web Design, UX/UI, Webflow, and Front End Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <BodyWrapper
        className={`${inter.variable} ${manrope.variable} ${space_grotesk.variable} flex flex-col min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950`}
      >
        <ScrollToTop />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          <main
            className={cn(
              "min-h-screen w-full transition-colors duration-300",
              "px-4 md:px-12 lg:px-16 py-2 lg:py-5"
            )}
          >
            <Navbar />
            {children}
          </main>
          <Footer />
          <Toaster
            position="top-center"
            expand={false}
            closeButton
            duration={3000}
            toastOptions={{
              className:
                "!bg-black !text-white dark:!bg-white dark:!text-black",
            }}
          />
        </ThemeProvider>
      </BodyWrapper>
    </html>
  );
}

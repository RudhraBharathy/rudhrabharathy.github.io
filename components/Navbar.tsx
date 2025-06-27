import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="text-2xl 2xl:text-3xl custom1xl:text-3xl font-inter italic font-normal">
        -RB-
      </Link>

      <div className="flex items-center justify-center z-10">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

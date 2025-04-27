import React from "react";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl font-inter italic font-normal">-RB-</div>

      <div className="flex items-center justify-center z-10">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

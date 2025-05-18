"use client";

import type React from "react";

const GalleryPage: React.FC = () => {
  return (
    <div className="font-manrope">
      <div className="pb-12">
        <h1
          data-speed="1.2"
          className="text-6xl md:text-8xl lg:text-[15rem] font-light leading-none text-center my-12"
        >
          Gallery
        </h1>
      </div>
      <div>
        <p>
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;

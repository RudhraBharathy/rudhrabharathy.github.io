"use client";

import InstagramPortfolio from "@/components/InstagramPortfolio";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GalleryPage: React.FC = () => {
  return (
    <div className="font-manrope">
      <div className="pb-12">
        <h1
          data-speed="1.2"
          className="text-6xl md:text-8xl lg:text-[16rem] font-light leading-none text-center my-12"
        >
          My Gallery
        </h1>
      </div>
      <InstagramPortfolio />
    </div>
  );
};
export default GalleryPage;

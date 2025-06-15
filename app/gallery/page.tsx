"use client";

import InstagramPortfolio from "@/components/InstagramPortfolio";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const GalleryPage: React.FC = () => {
  return (
    <div className="font-manrope px-4 sm:px-6 md:px-8 py-6">
      <div className="xl:pb-6">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[15rem] 2xl:text-[16rem] font-light leading-none text-center mt-6 mb-4 sm:mb-6 md:mb-10">
          My Gallery
        </h1>
      </div>

      <div className="my-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-sm sm:text-base gap-2 sm:gap-4 text-center md:text-left">
          <Link
            className="inline-flex justify-center items-center gap-2"
            href="https://www.instagram.com/_fhoto.holic_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl sm:text-2xl" />
            <span>_fhoto.holic_</span>
          </Link>
          <p className="max-w-md">
            Light, shadow, silence — captured forever!
          </p>
        </div>
      </div>

      <InstagramPortfolio />
    </div>
  );
};

export default GalleryPage;

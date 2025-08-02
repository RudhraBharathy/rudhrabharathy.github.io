"use client";

import InstagramPortfolio from "@/components/InstagramPortfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const GalleryPage: React.FC = () => {
  return (
    <div className="font-manrope px-4 sm:px-6 md:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h1 className="text-[5rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] xl:text-[16rem] 1xl:text-[18rem] font-light leading-none text-center mt-2 xl:mt-6 mb-4 xl:pb-6 sm:mb-6 md:mb-10">
          Gallery
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="my-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-sm sm:text-base gap-2 sm:gap-4 text-center md:text-left">
            <Link
              className="inline-flex justify-center items-center gap-2"
              href="https://www.instagram.com/_fhoto.holic_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl sm:text-2xl my-6" />
              <span>_fhoto.holic_</span>
            </Link>
            <p className="max-w-md">Light, shadow, silence captured forever!</p>
          </div>
        </div>

      <InstagramPortfolio />
      </motion.div>
    </div>
  );
};

export default GalleryPage;

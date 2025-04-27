import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SocialLinks from "@/components/social-links";

export default function ContactPage() {
  return (
    <div className="">
      <h1 className="text-[5rem] md:text-[8rem] font-normal leading-none mb-12">
        Contact
      </h1>

      <form className="">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-b border-gray-300 dark:border-gray-700 pb-2 outline-none bg-transparent text-black dark:text-white placeholder-gray-500"
          />
        </div>

        <div className="mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-b border-gray-300 dark:border-gray-700 pb-2 outline-none bg-transparent text-black dark:text-white placeholder-gray-500"
          />
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter your message"
            className="w-full border-b border-gray-300 dark:border-gray-700 pb-2 outline-none bg-transparent text-black dark:text-white placeholder-gray-500"
          />
        </div>

        <div className="flex justify-between items-center mb-12">
          <button
            type="submit"
            className="flex items-center gap-2 border border-black dark:border-white rounded-full px-6 py-2"
          >
            Submit
            <span className="bg-black dark:bg-white text-white dark:text-black rounded-full p-1">
              <FaArrowRight size={16} />
            </span>
          </button>

          <Link href="/" className="flex items-center gap-1 hover:underline">
            Home <span>+</span>
          </Link>
        </div>
      </form>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4 mb-8">
        <div className="text-lg mb-4">Social Media</div>
        <SocialLinks />
      </div>
    </div>
  );
}

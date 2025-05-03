"use client";

import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { useState } from "react";
import Input from "@/components/ui/input";
import AnimatedButton from "@/components/AnimatedButton";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div>
      <h1 className="text-[8rem] md:text-[18rem] z-5 font-manrope font-light leading-none text-center mb-4">
        Contact
      </h1>

      <form className="font-manrope">
        <div className="mb-12">
          <Input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="nameInput"
            className="text-4xl"
          />
        </div>

        <div className="mb-16">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="emailInput"
            className="text-4xl"
          />
        </div>

        <div className="mb-12">
          <Input
            type="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="messageInput"
            className="text-4xl"
          />
        </div>

        <div className="flex justify-between items-center mb-12">
          <AnimatedButton
            className="flex items-center gap-2 border border-black dark:border-white rounded-full px-6 py-2"
            value="Submit"
          >
          </AnimatedButton>

          <Link href="/" className="flex items-center gap-1 underline-effect">
            Home +
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

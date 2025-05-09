"use client";

import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { useState } from "react";
import Input from "@/components/ui/input";
import AnimatedButton from "@/components/AnimatedButton";
import ContactAnimation from "@/components/ContactAnimation";
import { toast } from "sonner";
import axios from "axios";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

  const handleSubmit = async () => {
    if (!name.trim() && !email.trim()) {
      setFormState("error");
      toast.error("Please enter either your name or email!");
      return;
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setFormState("error");
        toast.error("Please enter a valid email address!");
        return;
      }
    }

    if (!message.trim()) {
      setFormState("error");
      toast.error("Please enter your message!");
      return;
    }

    setFormState("submitting");

    const submittedAt = new Date().toISOString();

    const submitPromise = axios.post(webhookUrl!, {
      name,
      email,
      message,
      submittedAt,
    });

    toast.promise(submitPromise, {
      loading: "Sending your message...",
      success: () => {
        setFormState("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setFormState("idle"), 3000);
        return "Your message has been sent successfully!";
      },
      error: () => {
        setFormState("error");
        return "Something went wrong. Please try again.";
      },
    });
  };

  return (
    <div className="relative font-manrope">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ContactAnimation />
      </div>

      <div className="relative">
        <h1 className="text-[8rem] md:text-[18rem] font-light leading-none text-center mb-4">
          Contact
        </h1>

        <div>
          <div className="mb-12">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="nameInput"
              className="text-4xl"
              required
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
              required
            />
          </div>

          <div className="mb-10">
            <Input
              type="text"
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
              onClick={handleSubmit}
              className="flex items-center gap-2 border border-black dark:border-white rounded-full px-6 py-2"
              value={
                formState === "submitting"
                  ? "Sending..."
                  : formState === "success"
                  ? "Sent!"
                  : "Submit"
              }
              disabled={formState === "submitting"}
            />

            <Link href="/" className="flex items-center gap-1 underline-effect">
              Home +
            </Link>
          </div>
        </div>

        <div className="pt-4 mb-8">
          <h2 className="text-5xl font-medium pb-5 border-b border-gray-300 dark:border-gray-700">
            Social Media
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

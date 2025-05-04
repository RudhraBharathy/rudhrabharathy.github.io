"use client";

import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { useState } from "react";
import Input from "@/components/ui/input";
import AnimatedButton from "@/components/AnimatedButton";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

  const handleSubmit = async () => {
    console.log("form submitted");
    setFormState("submitting");

    const submittedAt = new Date().toISOString();

    try {
      const res = await fetch(webhookUrl!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, submittedAt }),
      });

      if (!res.ok) throw new Error("Failed");

      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setFormState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-[8rem] md:text-[18rem] z-5 font-manrope font-light leading-none text-center mb-4">
        Contact
      </h1>

      <div className="font-manrope">
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

        {formState === "error" && (
          <p className="text-red-600 text-xl mt-4">{errorMessage}</p>
        )}
        {formState === "success" && (
          <p className="text-green-600 text-xl mt-4">
            Your message has been sent successfully!
          </p>
        )}
      </div>

      <div className="pt-4 mb-8">
        <h2 className="text-5xl font-bold pb-5 mb-5 border-b border-gray-300 dark:border-gray-700">
          Tech Stack
        </h2>
        <SocialLinks />
      </div>
    </div>
  );
}

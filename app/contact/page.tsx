"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import axios from "axios";
import { z } from "zod";
import { toast } from "sonner";

import SocialLinks from "@/components/social-links";
import Input from "@/components/ui/input";
import AnimatedButton from "@/components/AnimatedButton";
import ContactAnimation from "@/components/ContactAnimation";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Oops! Forgot to tell me your name? 😅"),
  email: z
    .string()
    .optional()
    .refine((val) => !val || val.length > 0, { message: "Enter your email" })
    .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Hmm... that doesn’t look like a real email 🧐",
    }),
  message: z.string().min(1, "Tell me something cool! I'm all ears 🎧"),
});

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    const validation = ContactFormSchema.safeParse(formData);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setFormState("submitting");

    try {
      await toast.promise(
        axios.post(process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL || "", {
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
        {
          loading: "Sending your message...",
          success: "Your message has been sent successfully!",
          error: "Something went wrong. Please try again.",
        }
      );

      setFormState("success");
      window.umami?.track("contact-form-submitted");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    } finally {
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <div className="relative font-manrope mx-2 2xl:mx-20">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ContactAnimation />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="text-[5rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] xl:text-[16rem] 1xl:text-[18rem] font-light leading-none text-center my-4 xl:mb-12">
            Contact
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-12"
          >
            <Input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              id="nameInput"
              required
              className="mt-6!"
            />

            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              id="emailInput"
              required
            />

            <Input
              type="text"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              name="message"
              id="messageInput"
              required
              className="mt-8! mb-0! lg:my-10!"
            />

            <div className="flex justify-between items-center my-12!">
              <AnimatedButton
                onClick={handleSubmit}
                className="flex items-center gap-2 border border-black dark:border-white rounded-full px-6 py-2 cursor-pointer"
                value={
                  formState === "submitting"
                    ? "Sending..."
                    : formState === "success"
                      ? "Sent!"
                      : "Submit"
                }
                disabled={formState === "submitting"}
              />

              <Link
                href="/"
                className="flex items-center gap-1 underline-effect"
              >
                Home <BsArrowRight />
              </Link>
            </div>
          </form>

          <div className="xl:pt-4 mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium pb-5 border-b border-gray-300 dark:border-gray-700">
              Social Media
            </h2>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

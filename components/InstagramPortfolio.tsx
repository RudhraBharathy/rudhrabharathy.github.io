"use client";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { STATIC_POSTS } from "@/data/gallery";

export default function InstagramPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (api && isModalOpen) {
      api.scrollTo(selectedIndex, true);
    }
  }, [api, isModalOpen, selectedIndex]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {STATIC_POSTS.map((post, index) => (
            <div
              key={post.id}
              onClick={() => openModal(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram image"}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2 text-white"
          >
            <FiX size={24} />
          </button>

          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {STATIC_POSTS.map((post, index) => (
                <CarouselItem key={post.id}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative h-[70vh] w-full">
                      <Image
                        src={post.media_url}
                        alt={post.caption || "Instagram image"}
                        fill
                        className="object-contain"
                        priority={index === selectedIndex}
                        unoptimized
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm md:text-base lg:text-base text-gray-300 mt-6">
                      <span className="inline-flex items-center gap-1">
                        <HiOutlineHeart size={18} />
                        {post.like_count}
                      </span>
                      <span>•</span>
                      <span>
                        {post.timestamp
                          ? new Date(post.timestamp).toLocaleDateString()
                          : null}
                      </span>
                      <span>•</span>
                      <span>
                        {index + 1} of {STATIC_POSTS.length}
                      </span>
                      <span>•</span>
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 transition hover:text-blue-300"
                      >
                        View on Instagram
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-4 bg-black/60 text-white hover:bg-black/80">
              <FiChevronLeft size={22} />
            </CarouselPrevious>

            <CarouselNext className="right-4 bg-black/60 text-white hover:bg-black/80">
              <FiChevronRight size={22} />
            </CarouselNext>
          </Carousel>
        </div>
      )}
    </>
  );
}

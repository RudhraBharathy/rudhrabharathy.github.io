"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[];
  projectName: string;
  video?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  projectName,
  video,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Combine video and images into a single media array
  const mediaItems = React.useMemo(() => {
    const items: Array<{ type: 'video' | 'image'; src: string }> = [];
    if (video) {
      items.push({ type: 'video', src: video });
    }
    images.forEach(img => {
      items.push({ type: 'image', src: img });
    });
    return items;
  }, [video, images]);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {mediaItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-3/2 bg-muted rounded-lg overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={`${projectName} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0 && !video}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {mediaItems.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/30 text-white border-0" />
            <CarouselNext className="right-4 bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/30 text-white border-0" />
          </>
        )}

        {/* Slide Indicator */}
        {mediaItems.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {mediaItems.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-white" : "w-1.5 bg-white/50"
                  }`}
              />
            ))}
          </div>
        )}
      </Carousel>

      {/* Thumbnail Navigation */}
      {mediaItems.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto p-2">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-md overflow-hidden transition-all duration-300 ${index === current
                  ? "ring-1 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
                }`}
              aria-label={`Go to ${item.type === 'video' ? 'video' : `screenshot ${index + 1}`}`}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={`${projectName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

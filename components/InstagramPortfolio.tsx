"use client";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useFetchInstapost from "@/hooks/usefetchInstapost";

export default function InstagramPortfolio() {
  const { posts, error } = useFetchInstapost();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "Escape":
          setIsModalOpen(false);
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    }),
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md p-6 bg-red-50 rounded-lg border border-red-200">
          <h2 className="text-xl font-bold text-red-700 mb-2">
            Error Loading Instagram Feed
          </h2>
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-700">
            This usually happens when your access token is invalid or expired.
            Please check your Instagram API configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="pb-4 md:pb-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover="hover"
              layout
            >
              <motion.div
                className="block relative group cursor-pointer focus:outline-none focus:ring-0"
                onClick={() => openModal(index)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full aspect-square relative">
                  <Image
                    src={post.media_url || "/placeholder.svg"}
                    alt={post.caption?.slice(0, 50) || "Instagram photo"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 rounded-sm"
                    loading="lazy"
                  />
                </div>
                <motion.div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center hover:bg-[rgba(0,0,0,0.2)]"></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && posts.length > 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-90"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative w-full h-full flex items-center justify-center p-8 z-10"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ maxWidth: "95vw", maxHeight: "95vh" }}
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 p-2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full cursor-pointer"
                aria-label="Close modal"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiX className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full cursor-pointer"
                aria-label="Previous image"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full cursor-pointer"
                aria-label="Next image"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>

              <div className="w-full h-full flex flex-col items-center justify-center gap-8 space-y-4">
                <div className="relative w-full max-w-4xl flex items-center justify-center">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentImageIndex}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="relative w-full h-full flex items-center justify-center"
                      style={{ minHeight: "400px", maxHeight: "70vh" }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={
                            posts[currentImageIndex].media_url ||
                            "/placeholder.svg"
                          }
                          alt={
                            posts[currentImageIndex].caption?.slice(0, 50) ||
                            "Instagram photo"
                          }
                          fill
                          className="object-contain rounded-lg"
                          sizes="(max-width: 768px) 95vw, 80vw"
                          priority
                          unoptimized={
                            posts[currentImageIndex].media_url?.includes(
                              "cdninstagram"
                            ) || false
                          }
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.div
                  className="w-full max-w-xl text-center text-white px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.p
                    className="text-sm mb-2 line-clamp-3"
                    key={`caption-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {posts[currentImageIndex].caption || "No caption available"}
                  </motion.p>
                  <motion.div
                    className="flex justify-center items-center gap-4 text-xs text-gray-300 flex-wrap"
                    key={`details-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-flex justify-center items-center gap-2">
                      <HiOutlineHeart size={20} />
                      {posts[currentImageIndex].like_count || null}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(
                        posts[currentImageIndex].timestamp
                      ).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>
                      {currentImageIndex + 1} of {posts.length}
                    </span>
                    <span>•</span>
                    <motion.a
                      href={posts[currentImageIndex].permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View on Instagram
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

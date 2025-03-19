"use client";
import React, { useState, useEffect } from "react";
import { Layers, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import HeroVideoDialog from "../../../../components/magicui/hero-video-dialog";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const hoverEffect = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

const CellTherapySection = () => {
  const [mounted, setMounted] = useState(false);
  const [isHoveredTopCard1, setIsHoveredTopCard1] = useState(false);
  const [isHoveredTopCard2, setIsHoveredTopCard2] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-0 md:px-6 lg:px-8">
      <main className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Left column with 2 cards - takes 2/5 of the space */}
          <div className="lg:col-span-2 flex flex-col space-y-4 md:space-y-6">
            {/* Card 1 */}
            <motion.div
              className="bg-black relative group rounded-tr-[30px] rounded-bl-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
            >
              <div className="absolute inset-0 rounded-tl-2xl rounded-br-2xl transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative bg-white/85 backdrop-blur-xl rounded-tr-[30px] rounded-bl-[30px] p-6 transition-all duration-600 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 roboto-font">
                    Our Pipeline
                  </h2>
                  <motion.button
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm bg-black text-white overflow-hidden"
                    onHoverStart={() => setIsHoveredTopCard1(true)}
                    onHoverEnd={() => setIsHoveredTopCard1(false)}
                    animate={{
                      width: isHoveredTopCard1 ? 80 : 32,
                      padding: isHoveredTopCard1 ? "0 8px" : "0",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                    {isHoveredTopCard1 && (
                      <motion.span
                        className="ml-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        More
                      </motion.span>
                    )}
                  </motion.button>
                </div>
                <img
                  src="/assets/sections/CellTherapySection/Our_Pipeline.jpg"
                  alt="Our Pipeline"
                  className="w-full h-auto mb-4 rounded-lg"
                  loading="lazy"
                />
                <p className="text-gray-600">
                  Learn more about our therapies in development and their
                  potential indications.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-black relative group rounded-tr-[30px] rounded-bl-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
            >
              <div className="absolute inset-0 rounded-tl-2xl rounded-br-2xl  transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative bg-white/85 backdrop-blur-xl rounded-tr-[30px] rounded-bl-[30px] p-6 transition-all duration-600 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 roboto-font">
                    Our Platform
                  </h2>
                  <motion.button
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm bg-black text-white overflow-hidden"
                    onHoverStart={() => setIsHoveredTopCard2(true)}
                    onHoverEnd={() => setIsHoveredTopCard2(false)}
                    animate={{
                      width: isHoveredTopCard2 ? 80 : 32,
                      padding: isHoveredTopCard2 ? "0 8px" : "0",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                    {isHoveredTopCard2 && (
                      <motion.span
                        className="ml-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        More
                      </motion.span>
                    )}
                  </motion.button>
                </div>
                <p className="text-gray-600">
                  Learn more about our process and explore partnership
                  opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column with 1 tall card - takes 3/5 of the space */}
          <div className="lg:col-span-3">
            <div className="bg-[#f4d6cc] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                  Our Patient Journey
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed mb-4">
                Understanding CAR-T therapy is crucial in supporting your loved
                one's treatment journey. We provide resources, guidance, and
                support to help you navigate this path together.
              </p>
              <div className="relative flex justify-center mb-6 flex-shrink-0">
                <HeroVideoDialog
                  className="block dark:hidden"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/Ve90D82fEL0?si=LGyLKdCbeWdUOke6"
                  thumbnailSrc="/assets/sections/CellTherapySection/Patient_Journey.png"
                  thumbnailAlt="Hero Video"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                To advance the research and development of our innovative
                gene-modified cell therapies, we are fostering relationships
                across academia, healthcare institutions, and strategic
                partnerships with the intent to equitize access.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CellTherapySection;

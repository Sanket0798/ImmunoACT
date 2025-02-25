"use client";
import React, { useState } from "react";
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
  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-4 h-auto"
        >
          {/* Left Column Cards */}
          <div className="flex flex-col gap-4 col-span-1">
            {/* Top Left Card */}
            <motion.div
              className="bg-black relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
            >
              <div className="absolute inset-0 rounded-tl-2xl rounded-br-2xl border-2 border-black transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative bg-white/85 backdrop-blur-xl rounded-tr-3xl rounded-bl-3xl border-2 border-black p-6 transition-all duration-600 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 roboto-font">
                    Our Pipeline
                  </h2>
                  <motion.span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm bg-black text-white overflow-hidden"
                    onHoverStart={() => setIsHoveredTop(true)}
                    onHoverEnd={() => setIsHoveredTop(false)}
                    animate={{
                      width: isHoveredTop ? 80 : 32,
                      padding: isHoveredTop ? "0 8px" : "0",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                    {isHoveredTop && (
                      <motion.span
                        className="ml-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        More
                      </motion.span>
                    )}
                  </motion.span>
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

            {/* Bottom Left Card */}
            <motion.div
              className="bg-black relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
            >
              <div className="absolute inset-0 rounded-tl-2xl rounded-br-2xl border-2 border-black transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative bg-white/85 backdrop-blur-xl rounded-tr-3xl rounded-bl-3xl border-2 border-black p-6 transition-all duration-600 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 roboto-font">
                    Our Pipeline
                  </h2>
                  <motion.span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm bg-black text-white overflow-hidden"
                    onHoverStart={() => setIsHoveredTop(true)}
                    onHoverEnd={() => setIsHoveredTop(false)}
                    animate={{
                      width: isHoveredTop ? 80 : 32,
                      padding: isHoveredTop ? "0 8px" : "0",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                    {isHoveredTop && (
                      <motion.span
                        className="ml-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        More
                      </motion.span>
                    )}
                  </motion.span>
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
          </div>

          {/* Right Card - Video */}
          <div className="col-span-2 relative bg-[#f4d6cc] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden flex flex-col">
            <div className="space-y-2 mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                Our Patient Journey
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                Understanding CAR-T therapy is crucial in supporting your loved
                one's treatment journey. We provide resources, guidance, and
                support to help you navigate this path together.
              </p>
            </div>
            <div className="relative flex justify-center mb-6 flex-shrink-0">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/Ve90D82fEL0?si=LGyLKdCbeWdUOke6"
                thumbnailSrc="/assets/sections/CellTherapySection/Patient_Journey.png"
                thumbnailAlt="Hero Video"
              />
            </div>
            <div className="space-y-2 flex-grow">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Real Stories of Hope
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To advance the research and development of our innovative
                gene-modified cell therapies, we are fostering relationships
                across academia, healthcare institutions, and strategic
                partnerships with the intent to equitize access.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CellTherapySection;

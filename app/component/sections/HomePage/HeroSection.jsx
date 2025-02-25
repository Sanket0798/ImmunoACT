"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SplitText from "../../../../animations/SplitText/SplitText";
import CountUp from "@/animations/CountUp/CountUp";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  useEffect(() => {
    console.log("All letters have animated!");
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          <motion.div
            className="flex-start-between-col"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <SplitText
              text="Personalized CAR-T cell Therapy for Aggressive Cancer Cell"
              className="text-3xl sm:text-4xl md:text-4xl lg:text-[40px] font-bold font-astro-futuristic mt-12 md:mt-0"
              delay={60}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={() => {}}
            />
            <p className="text-gray-600 text-base sm:text-lg max-w-md mt-4 md:mt-0">
              Pioneering breakthrough treatments in cancer immunotherapy through
              innovative CART-T cell technology.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 lg:space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/sections/HeroSection/1.mp4"
                autoPlay
                loop
                muted
              />

              {/* Overlay for Better Text Visibility */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 flex-start-between-col text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                  Transform Cancer Treatment
                </h3>
                <p className="mt-7 sm:mt-9 text-sm sm:text-base">
                  Our Personalized CAR-T cell therapy represents a revolutionary
                  approach to fighting aggressive cancers.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-[#e8efff] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-light-fourSides"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <span className="bg-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                    Technology
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="pt-1 rounded-full cursor-pointer"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-8">
                  Advanced Platform
                </h3>
                <p className="text-xs sm:text-sm">
                  State-of-the-art CAR-T cell engineering platform for optimal
                  efficacy.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#f0d2e7] p-4 sm:p-6 rounded-2xl sm:rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <span className="bg-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                    Clinical Trials
                  </span>
                </div>
                <CountUp
                  from={0}
                  to={4}
                  separator=","
                  direction="up"
                  duration={3}
                  className="count-up-text text-4xl sm:text-5xl lg:text-5xl font-bold mb-2"
                />
                <p className="text-xs sm:text-sm mt-5">
                  Ongoing trials showing promising results in treating
                  aggressive cancers
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

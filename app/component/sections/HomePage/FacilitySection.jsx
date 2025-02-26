import React, { memo } from "react";
import HeroVideoDialog from "../../../../components/magicui/hero-video-dialog";
import { motion } from "framer-motion";
import { StaticStep } from "../../../../components/eldoraui/staticstepper";
import { dataSteps } from "@/app/data/sharedData";

const FacilitySection = memo(() => (
  <section className="container mx-auto py-10 md:py-0 lg:py-10 px-4 sm:px-6 lg:px-8">
    {/* FacilitySection Tag */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="flex items-center gap-3 sm:gap-4 mb-3"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="h-[1px] bg-black"
      ></motion.div>
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold text-[#232e24] sm:text-4xl font-outfit"
      >
        Manufacturing Facility
      </motion.span>
    </motion.div>

    {/* FacilitySection Heading */}
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className="text-lg font-medium text-[#232e24] font-outfit"
    >
      ImmunoACT's new state-of-the-art GMP Facility that can cater to the best
      quality cell and gene therapy products and treat up to 1500 patients per
      year.
    </motion.span>

    {/* Stepper Points */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-4">
      <div className="md:w-1/2 lg:w-1/2 px-4 md:p-4">
        {dataSteps.map(({ title, code }) => (
          <StaticStep key={title} title={title}></StaticStep>
        ))}
      </div>

      {/* Video Card */}
      <div className="relative flex justify-center w-full md:w-1/2 lg:w-1/2">
        <HeroVideoDialog
          className="block dark:hidden w-full h-auto"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/AwroDnmW-Ds?si=orhVhi6bUqdqfb0P"
          thumbnailSrc="/assets/sections/FacilitySection/FacilityThumbnail.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  </section>
));

export default FacilitySection;

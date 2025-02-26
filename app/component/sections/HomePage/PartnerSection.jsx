"use client";
import React, { useMemo } from "react";
import { cn } from "../../../lib/utils";
import { Marquee } from "../../../../components/magicui/marquee";
import { partners } from "../../../data/sharedData";
import { motion } from "framer-motion";

const PartnerLogo = React.memo(({ img, name }) => (
  <motion.div
    className={cn(
      "relative w-[150px] h-[80px] sm:w-[200px] sm:h-[120px] mx-2 sm:mx-4 flex items-center justify-center",
      "transition-all duration-300 ease-in-out"
    )}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <img
      src={img}
      alt={`${name} logo`}
      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
    />
  </motion.div>
));

PartnerLogo.displayName = "PartnerLogo";

const PartnerSection = React.memo(() => {
  const partnersList = useMemo(() => partners, []);

  return (
    <section className="relative w-full py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="h-[1px] bg-black"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-[#232e24] sm:text-4xl font-outfit"
            >
              Our Partners
            </motion.span>
          </motion.div>
          <p className="mt-3 text-sm md:text-base leading-6 font-normal text-gray-600 font-outfit">
            To advance the research and development of our innovative
            gene-modified cell therapies, we are fostering relationships across
            academia, healthcare institutions, and strategic partnerships with
            the intent to equitize access.
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee className="[--duration:30s] sm:[--duration:25s] md:[--duration:20s]">
          {partnersList.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] sm:w-[15%] md:w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] sm:w-[15%] md:w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
});

export default PartnerSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { CobeDraggableAuto } from "../../../../components/eldoraui/cobeglobeautodraggable";

const HospitalSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          ></motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-3xl font-bold text-[#232e24] sm:text-4xl font-outfit"
          >
            Our Partner Hospitals
          </motion.span>
        </motion.div>
        <div className="w-full relative overflow-hidden h-full md:h-[44rem] px-4 md:px-0">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          ></motion.div>
          <div className="relative z-10 h-auto w-full overflow-hidden rounded-lg border bg-background">
            <CobeDraggableAuto />
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mt-4 md:mt-0">
            Our strong association with over 80 leading cancer treatment
            hospitals in India ensures hassle-free treatment with our CAR-T cell
            therapies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HospitalSection;

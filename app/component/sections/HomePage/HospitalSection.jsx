"use client";
import React from "react";
// import { motion } from "framer-motion";
import { CobeDraggableAuto } from "../../../../components/eldoraui/cobeglobeautodraggable";
// import BlurText from "../../../../animations/BlurText/BlurText";
import { motion, stagger } from "framer-motion";
import { useEffect, useState } from "react";

// const handleAnimationComplete = () => {
//   console.log("Animation completed!");
// };

const HospitalSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const text =
    "Our strong association with over 80 leading cancer treatment hospitals in India ensures hassle-free treatment with our CAR-T cell therapies.";
  const words = text.split(" ");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    // <section className="w-full py-4">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.8 }}
    //       whileInView={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    //       className="flex items-center gap-3 sm:gap-4"
    //     >
    //       <motion.div
    //         initial={{ width: 0 }}
    //         whileInView={{ width: "3rem" }}
    //         transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    //         className="h-[1px] bg-black"
    //       ></motion.div>
    //       <motion.span
    //         initial={{ opacity: 0, y: 30 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
    //         className="text-2xl md:text-4xl font-bold text-[#232e24] sm:text-4xl font-outfit"
    //       >
    //         Partner Hospitals
    //       </motion.span>
    //     </motion.div>
    //     <div className="w-full relative overflow-hidden h-full md:h-auto px-4 md:px-0">
    //       <motion.div
    //         initial={{
    //           opacity: 0,
    //           y: 20,
    //         }}
    //         animate={{
    //           opacity: 1,
    //           y: 0,
    //         }}
    //         transition={{
    //           duration: 1,
    //         }}
    //         className="div"
    //       ></motion.div>
    //       <div className="relative z-10 h-auto w-full overflow-hidden rounded-lg border bg-background">
    //         <CobeDraggableAuto />
    //       </div>
    //       {/* <BlurText
    //         text={`Our strong association with over\n80 leading cancer treatment hospitals in India ensures\nhassle-free treatment with our CAR-T cell therapies.`}
    //         delay={150}
    //         animateBy="words"
    //         direction="top"
    //         onAnimationComplete={handleAnimationComplete}
    //         className="text-right text-3xl font-semibold font-pockota"
    //       /> */}
    //       {/* <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4"> */}
    //       <motion.div
    //         className="max-w-3xl ml-auto"
    //         variants={container}
    //         initial="hidden"
    //         animate={isVisible ? "visible" : "hidden"}
    //       >
    //         <p className="text-3xl font-semibold font-pockota flex flex-wrap justify-end gap-x-2 text-[#26081c] leading-10 md:leading-12">
    //           {words.map((word, i) => (
    //             <motion.span
    //               key={i}
    //               variants={child}
    //               className={
    //                 word.includes("80")
    //                   ? "text-pink-400"
    //                   : word.includes("CAR-T")
    //                   ? "text-[#3ba99c]"
    //                   : ""
    //               }
    //               style={{ display: "inline-block" }}
    //             >
    //               {word}
    //             </motion.span>
    //           ))}
    //         </p>
    //       </motion.div>
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </section>

    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* For small screens - original layout */}
        <div className="block md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="absolute left-0 z-20 flex items-center gap-3 sm:gap-4"
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
              className="text-2xl font-bold text-[#232e24] sm:text-4xl font-outfit"
            >
              Partner Hospitals
            </motion.span>
          </motion.div>

          <div className="mt-8 mb-8">
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
          </div>

          <motion.div
            className=" max-w-3xl ml-auto"
            variants={container}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <p className="text-xl sm:text-2xl font-semibold font-pockota flex flex-wrap justify-end gap-x-2 text-[#26081c]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={child}
                  className={
                    word.includes("80")
                      ? "text-pink-400"
                      : word.includes("CAR-T")
                      ? "text-[#3ba99c]"
                      : ""
                  }
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>

        {/* For medium and large screens - new layout with absolute positioning */}
        <div className="hidden md:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="absolute top-10 left-0 z-20 flex items-center gap-3 sm:gap-4"
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
              className="text-4xl font-bold text-[#232e24] font-outfit"
            >
              Partner Hospitals
            </motion.span>
          </motion.div>

          <div className="relative z-10 mt-16 mb-16">
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
          </div>

          <motion.div
            className="absolute -bottom-20 right-0 z-20 max-w-3xl"
            variants={container}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <p className="text-3xl font-semibold font-pockota flex flex-wrap justify-end gap-x-2 text-[#26081c]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={child}
                  className={
                    word.includes("80")
                      ? "text-pink-400"
                      : word.includes("CAR-T")
                      ? "text-[#3ba99c]"
                      : ""
                  }
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HospitalSection;

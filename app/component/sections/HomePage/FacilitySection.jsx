import React from "react";
import HeroVideoDialog from "../../../../components/magicui/hero-video-dialog";
import { motion } from "framer-motion";
import {
  CodeContainer,
  StaticStep,
} from "../../../../components/eldoraui/staticstepper";

const dataSteps = [
  {
    title: "End to end cell and gene therapy solutions",
    code: "npx create-react-app my-app",
  },
  {
    title: "Expertise in novel therapeutic design and plasmid DNA production",
    code: "cd my-app",
  },
  {
    title:
      "Expertise in GMP grade viral vectors manufacturing & advanced ex-VIVO genetic engineering",
    code: "npm start",
  },
  {
    title:
      "Maintaining global standards of cell therapy products with a dedicated quality control facility",
    code: "npm run build",
  },
  {
    title:
      "Trained teams for clinical trials, regulatory compliances, Marketing and customer support",
  },
];

const FacilitySection = () => {
  return (
    <section className="container mx-auto py-10">
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
          Our Manufacturing Facility
        </motion.span>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full max-w-2xl p-4">
          {dataSteps.map((step, index) => (
            <StaticStep key={step.title} title={step.title}>
              {/* <CodeContainer>{step.code}</CodeContainer> */}
            </StaticStep>
          ))}
        </div>

        <div className="relative flex justify-center">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/AwroDnmW-Ds?si=orhVhi6bUqdqfb0P"
            thumbnailSrc="/assets/sections/FacilitySection/FacilityThumbnail.jpg"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;

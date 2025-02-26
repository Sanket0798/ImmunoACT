"use client";
import React from "react";
import Link from "next/link";
import { Accordion, Content, Tab, Trigger } from "../../ui/Accordion";
import { questions } from "@/app/data/sharedData";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3 md:pt-4 lg:pt-0 2xl:pt-4">
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
        />
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold text-[#232e24] sm:text-4xl font-outfit"
        >
          FAQs
        </motion.span>
      </motion.div>

      <div className="w-full h-auto">
        <Accordion>
          {questions.slice(0, 5).map(({ id, question, answer }, index) => (
            <Tab key={id || index}>
              <Trigger>{question}</Trigger>
              <Content>{answer}</Content>
            </Tab>
          ))}
        </Accordion>
        <div className="mt-5 flex justify-center">
          <Link href="/more-faqs">
            <motion.button
              className="px-6 py-2 bg-black text-white h-full rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View More FAQs
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

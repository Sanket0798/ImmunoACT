"use client";
import React from "react";
import Link from "next/link";
import { Accordion, Content, Tab, Trigger } from "../../ui/Accordion";
import { questions } from "@/app/data/sharedData";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full h-auto">
        <Accordion>
          {questions.slice(0, 5).map((question, index) => (
            <React.Fragment key={question.id || index}>
              <Tab>
                <Trigger>{question.question}</Trigger>
                <Content>{question.answer}</Content>
              </Tab>
            </React.Fragment>
          ))}
        </Accordion>
        <div className="mt-5 flex justify-center">
          <Link href="/more-faqs">
            <motion.button
              className="px-6 py-2 bg-black text-white h-full rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View More FAQs{" "}
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

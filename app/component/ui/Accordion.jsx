"use client";
import { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

export const Accordion = ({ children, className }) => {
  return (
    <dl
      className={`flex flex-col items-start justify-start ${className || ""}`}
    >
      {children}
    </dl>
  );
};

const TabContext = createContext(null);

export const Tab = ({ children, className }) => {
  const [isOpen, setOpenState] = useState(false);

  return (
    <TabContext.Provider value={{ isOpen, setOpenState }}>
      <div className={`bg-bg w-full py-4 md:py-4 lg:py-6 px-4 md:px-0 ${className || ""}`}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

export const Trigger = ({ children, className }) => {
  const { setOpenState, isOpen } = useContext(TabContext);

  return (
    <dt>
      <button
        aria-expanded={isOpen}
        onClick={() => setOpenState((prev) => !prev)}
        className={`flex w-full items-center justify-between gap-2 text-start text-base md:text-[16px] font-medium ${
          className || ""
        }`}
      >
        <span>{children}</span>
        <IconChevronDown
          size={20}
          className={twMerge(
            isOpen ? "rotate-180" : "rotate-0",
            "min-w-[20px] transition-all duration-300"
          )}
        />
      </button>
    </dt>
  );
};

export const Content = ({ children, className }) => {
  const { isOpen } = useContext(TabContext);

  return (
    <motion.dd
      layout
      aria-hidden={!isOpen}
      className={`overflow-hidden text-black ${className || ""}`}
      initial={{ height: 0, pointerEvents: "none" }}
      animate={
        isOpen
          ? { height: "fit-content", pointerEvents: "auto", marginTop: "1rem" }
          : { height: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.dd>
  );
};

// import React from "react";
// import Image from "next/image";
// // import "../../../styles/InvertedRadius.css";

// const HeroSection = () => {
//   return (
//     // <div class="house-info">
//     //   <div className="house-image">
//     //     <img
//     //       src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3NTgzNDU&ixlib=rb-4.0.3&q=80&w=400"
//     //       alt="House exterior"
//     //     />
//     //   </div>

//     //   <div class="house-price">
//     //     <span> $500,000</span>
//     //   </div>

//     //   <ul class="house-meta">
//     //     <li>Somewhere</li>
//     //     <li>
//     //       158m<sup>2</sup>
//     //     </li>
//     //     <li>Big house</li>
//     //   </ul>
//     // </div>

//     <p>HeroSection</p>
//   );
// };

// export default HeroSection;

"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-[#EEF1FF] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="bg-pink-200 w-24 h-8 rounded-full" />
            <h2 className="text-5xl md:text-6xl font-bold leading-tight font-aboro">
              Personalized CAR-T cell Therapy for Aggressive Cancers
            </h2>
            {/* <button className="flex items-center gap-2 border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all">
              <Play size={20} />
              How do we work
            </button>
            <div className="flex items-center gap-4">
              <button className="bg-blue-200 text-blue-800 px-6 py-3 rounded-full hover:bg-blue-300 transition-colors flex items-center gap-2">
                Contact us
                <ArrowUpRight size={20} />
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Request a call
              </button>
            </div> */}
            <p className="text-gray-600 max-w-md">
              Pioneering breakthrough treatments in cancer immunotherapy through
              innovative CART-T cell technology.
            </p>
            {/* <div className="flex items-center gap-8">
              <img
                src="https://via.placeholder.com/100x40"
                alt="Headway"
                className="h-10"
              />
              <img
                src="https://via.placeholder.com/100x40"
                alt="Brightline"
                className="h-10"
              />
              <img
                src="https://via.placeholder.com/100x40"
                alt="Hazel"
                className="h-10"
              />
              <img
                src="https://via.placeholder.com/100x40"
                alt="G&STC"
                className="h-10"
              />
            </div> */}
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="bg-violet-400 p-8 rounded-3xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-3xl font-bold mb-4">
                If you're ready to build your bioventure, let's get in touch.
              </h3>
              <p className="mb-8">
                Our goal is to promote the creation of innovative enterprises in
                the life sciences.
              </p>
              <ArrowUpRight size={24} className="ml-auto" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-blue-200 p-6 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="bg-white px-4 py-1 rounded-full text-sm">
                    locations
                  </span>
                  <ArrowUpRight size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  United bio-entrepreneurs
                </h3>
                <p className="text-sm">
                  Bionova unites bio-entrepreneurs globally through its
                  worldwide chapters.
                </p>
              </motion.div>

              <motion.div
                className="bg-pink-200 p-6 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="bg-white px-4 py-1 rounded-full text-sm">
                    scientists
                  </span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <div className="w-8 h-8 rounded-full bg-gray-400" />
                    <div className="w-8 h-8 rounded-full bg-gray-500" />
                  </div>
                </div>
                <h3 className="text-6xl font-bold mb-2">34</h3>
                <p className="text-sm">
                  Our advisors include visionary scientists, pioneering
                  investors, and iconic founders
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

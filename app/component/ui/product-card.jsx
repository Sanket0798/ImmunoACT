"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// interface ProductCardProps {
//   title: string
//   subtitle: string
//   price: number
//   imageUrl: string
// }

export default function ProductCard({
  title,
  subtitle,
  price,
  imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d03d499a274fe84c6a9c8c4a057a8560.jpg-F5JgyoqGpIgwHZP5n1rfwFNioi9fZN.jpeg",
}) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-[300px] bg-white rounded-3xl p-4 shadow-lg cursor-pointer"
      whileHover={{ y: -5 }}
    >
      <div className="space-y-1 mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div className="relative h-[200px] bg-[#2A2B25] rounded-2xl overflow-hidden mb-3">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-[80%] h-auto transform -rotate-12"
            whileHover={{ scale: 1.05, rotate: -8 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-3 left-3 text-white text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          ${price}
        </motion.div>

        <motion.div
          className="absolute top-3 right-3 bg-white rounded-full p-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

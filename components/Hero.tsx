"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-max">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Brand Manager <span className="text-gradient">In a Box</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your AI-powered creative assistant that proves ownership of every asset, protects your IP, and works completely offline. Just plug in. No setup required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-gradient px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group">
                Reserve Your Device
                <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="border-2 border-beetoo-orange text-beetoo-orange hover:bg-beetoo-orange hover:text-white px-8 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Available in Midnight Blue, Sunset Orange, Forest Green
            </p>
          </motion.div>

          {/* Right Column - Device Visual */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="bg-gradient-beetoo rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center relative">
                  <div className="text-7xl">🤖</div>
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full text-xs font-semibold text-beetoo-orange border border-beetoo-orange shadow-lg">
                    Plug & Play
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-beetoo opacity-20 blur-3xl -z-10 rounded-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

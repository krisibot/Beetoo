"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Plug In",
    description: "Connect BEETOO to power and your WiFi. It's ready in seconds.",
  },
  {
    number: "2",
    title: "Upload Assets",
    description:
      "Drag your images, videos, and documents into BEETOO. They stay on your device.",
  },
  {
    number: "3",
    title: "Get Insights",
    description:
      "AI analyzes your assets, generates descriptions, suggests tags. Learn what you have.",
  },
  {
    number: "4",
    title: "Protect Forever",
    description:
      "Cryptographic proof goes on blockchain. You own the record. Forever.",
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-beetoo text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="how">
            How It Works
          </h2>
          <p className="text-xl opacity-90">
            Four simple steps to protect your creative assets forever
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 h-full">
                <div className="text-5xl font-bold mb-4 opacity-80">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="opacity-90 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10"
                >
                  <ArrowRight size={24} className="text-white/60" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

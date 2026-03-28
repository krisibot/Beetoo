"use client";

import { AlertCircle, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Lock,
    title: "No Proof of Ownership",
    description:
      "Where's the proof you created this first? Centralized platforms can't guarantee it.",
  },
  {
    icon: Zap,
    title: "AI Training Without Permission",
    description:
      "Your images, your videos—being used to train models you never agreed to.",
  },
  {
    icon: AlertCircle,
    title: "Locked Into Expensive Software",
    description:
      "Paying thousands per year for tools that don't understand your brand.",
  },
];

export default function Problem() {
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
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Assets Aren't Safe
          </h2>
          <p className="text-xl text-gray-600">
            The problem with traditional digital asset management
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border-l-4 border-beetoo-orange shadow-sm hover:shadow-lg transition group cursor-pointer"
              >
                <div className="text-beetoo-orange mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

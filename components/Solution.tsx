"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Cpu,
  HardDrive,
  Smartphone,
  Globe,
  DollarSign,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Immutable Ownership Proof",
    description:
      "Every asset gets a cryptographic fingerprint stored on blockchain. You own the proof.",
  },
  {
    icon: Cpu,
    title: "AI Brand Manager",
    description:
      "Your own AI assistant that tags, describes, and organizes assets the way you think.",
  },
  {
    icon: HardDrive,
    title: "Works Offline",
    description:
      "Everything lives on your device. No cloud. No subscription tracking. Pure privacy.",
  },
  {
    icon: Smartphone,
    title: "Plug & Play",
    description:
      "Unbox it. Plug it in. Start protecting assets. No tech skills required.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Share assets with your team while keeping full control. Permissioning is built-in.",
  },
  {
    icon: DollarSign,
    title: "Pay Per Use",
    description: "No subscriptions. Only pay for assets you actually protect.",
  },
];

export default function Solution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="features">
            Meet BEETOO
          </h2>
          <p className="text-xl text-gray-600">
            Cryptographic proof. AI assistance. Complete privacy. All built in.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-xl bg-gradient-to-br from-beetoo-orange/10 to-beetoo-orange/5 border border-beetoo-orange/20 hover:border-beetoo-orange/50 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-beetoo-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

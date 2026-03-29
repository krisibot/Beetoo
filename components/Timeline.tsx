"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    phase: "Week 1-2",
    title: "Core Skeleton",
    description:
      "Electron app + wallet integration + AssetRegistry.sol on Polygon testnet",
  },
  {
    phase: "Week 3-4",
    title: "Generative Metadata",
    description: "Claude + local Ollama inference layer + multi-asset UI",
  },
  {
    phase: "Week 5-6",
    title: "Seeding Phase",
    description:
      "Arweave integration live. Pre-load 15-20 colored Mac minis with NOWATCH + Sealand Gear pilots",
  },
  {
    phase: "Week 7-8",
    title: "Showcase Network",
    description: "Usage metrics collection. Network mesh testing. Ready for scary prototype demo.",
  },
  {
    phase: "Week 9",
    title: "Force THL Choice",
    description:
      "Showcase network with real adoption. Force THL to negotiate buyout or fund separately.",
  },
];

export default function Timeline() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="timeline">
            9-Week MVP Timeline
          </h2>
          <p className="text-xl text-gray-600">
            From skeleton to scary prototype to market disruption
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-3 gap-8 pb-6 md:pb-12 border-l-2 md:border-l-0 md:border-t-2 border-beetoo-orange md:pt-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 md:relative md:col-span-1">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-beetoo-orange rounded-full border-4 border-white shadow-lg md:static md:left-auto md:-top-4"></div>
              </div>

              {/* Phase Label */}
              <div className="md:text-right">
                <span className="text-sm font-bold text-beetoo-orange uppercase tracking-wider">
                  {event.phase}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Launch Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-beetoo text-white px-6 py-3 rounded-full font-bold">
            Ready for Q2 2026 Launch
          </div>
        </motion.div>
      </div>
    </section>
  );
}

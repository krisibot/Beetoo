"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    subtitle: "100 assets/year",
    description: "Get started with BEETOO",
    features: ["100 assets protected", "AI organization", "Basic sharing"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$50",
    period: "/mo",
    subtitle: "Up to 1,000 assets",
    description: "For active creators",
    features: [
      "1,000 assets protected",
      "Team collaboration",
      "Advanced AI insights",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Brand",
    price: "$200",
    period: "/mo",
    subtitle: "Unlimited assets",
    description: "For enterprises",
    features: [
      "Unlimited assets",
      "Enterprise team access",
      "Custom AI workflows",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
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
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="pricing">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pay only for what you protect. Scale as you grow.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`rounded-2xl p-8 transition ${
                tier.highlight
                  ? "bg-white border-2 border-beetoo-orange shadow-xl scale-105 md:scale-110"
                  : "bg-white border border-gray-200 hover:border-beetoo-orange shadow-sm"
              }`}
            >
              {/* Badge */}
              {tier.highlight && (
                <div className="text-xs font-bold text-beetoo-orange mb-4 uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-600 mb-6">{tier.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-beetoo-orange">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-600">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">{tier.subtitle}</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  tier.highlight
                    ? "btn-gradient"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tier.cta}
              </button>

              <ul className="space-y-4">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check size={20} className="text-beetoo-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

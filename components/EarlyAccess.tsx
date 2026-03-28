"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Early Access Starts Now
          </h2>
          <p className="text-xl opacity-90 mb-4">
            First 50 BEETOO devices ship in Q2 2026.
          </p>
          <p className="text-beetoo-orange font-semibold mb-8 flex items-center justify-center gap-2">
            <Heart size={20} fill="currentColor" />
            Limited edition colors. Reserve yours.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-beetoo-orange"
              />
              <button
                type="submit"
                className="btn-gradient px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                {submitted ? "✓ Added!" : "Reserve"}
              </button>
            </div>
          </form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 max-w-md mx-auto"
          >
            <h3 className="font-bold mb-4 text-lg">Early Backer Benefits:</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>✓ Lifetime 20% discount on all tiers</li>
              <li>✓ First 20 reservations get custom color</li>
              <li>✓ Exclusive beta access to new features</li>
              <li>✓ Direct line to the team</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

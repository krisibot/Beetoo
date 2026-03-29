'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Copy, Zap } from 'lucide-react';

export default function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const problems = [
    {
      icon: Copy,
      title: 'Files Have No Signature',
      description: 'A JPEG is just pixels. Anyone can copy it, claim they made it. No proof of origin. AI training steals freely.',
      stat: '1000s of copies everywhere',
    },
    {
      icon: AlertCircle,
      title: 'AI Floods the Market',
      description: 'Midjourney, DALL-E, Stable Diffusion generate infinite unsigned copies. Your original gets buried. Impossible to prove you made it first.',
      stat: 'Copyright collapse imminent',
    },
    {
      icon: Zap,
      title: 'No Royalty Layer',
      description: 'Your work gets used globally. You earn zero. No way to track usage, no automatic licensing, no revenue when others profit.',
      stat: 'Creators disappear',
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Problem: <span className="text-red-400">Unsigned</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Files with no proof of origin. AI stealing freely. Creators earning nothing.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-red-900/20 to-slate-900/50 border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="relative">
                  <Icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{problem.description}</p>
                  <div className="pt-4 border-t border-red-500/20">
                    <p className="text-sm font-bold text-red-300">🚨 {problem.stat}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-red-950/30 border border-red-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">The Result</h3>
          <p className="text-slate-200 text-lg leading-relaxed">
            Creators can't prove they made something. AI can't be held accountable. Work gets stolen because <span className="text-red-300 font-bold">files have no legal standing.</span> An image is just data until someone proves they created it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

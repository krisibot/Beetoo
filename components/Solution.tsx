'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Lock, DollarSign, Shield } from 'lucide-react';

export default function Solution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const solutions = [
    {
      icon: Shield,
      title: 'Files Sign Themselves',
      description: 'Cryptographic proof embedded in metadata. You created it + when. Immutable record on blockchain. AI can\'t forge this.',
      benefit: 'Proof of creation (forever)',
    },
    {
      icon: Lock,
      title: 'One File, Infinite Shares',
      description: 'No copying needed. Share via smart contract (wallet permissions). Every use is tracked. One canonical version lives on Arweave.',
      benefit: 'Zero duplication (saves planet)',
    },
    {
      icon: DollarSign,
      title: 'Automatic Royalties',
      description: 'License your file via contract. When others use it, royalties flow back to you—instantly, on-chain. No middleman.',
      benefit: 'Earn on every use',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Solution: <span className="text-orange-400">Self-Signed</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Files that prove they're real. Files that earn. Files that can't be stolen because they're legally signed.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-orange-900/20 to-slate-900/50 border border-orange-500/20 rounded-xl p-8 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="relative">
                  <Icon className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="pt-4 border-t border-orange-500/20">
                    <p className="text-sm text-orange-300 font-semibold flex items-center gap-2">
                      <CheckCircle size={16} /> {solution.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How It Works */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Creator Workflow</h3>
          
          <div className="grid md:grid-cols-5 gap-4 items-center mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-6 mb-4">
                <p className="text-3xl mb-2">📁</p>
                <p className="text-sm font-bold text-white">Create</p>
              </div>
              <p className="text-xs text-slate-400">Your design, photo, or algorithm</p>
            </div>

            <div className="flex justify-center text-2xl text-orange-400">→</div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-6 mb-4">
                <p className="text-3xl mb-2">🔐</p>
                <p className="text-sm font-bold text-white">Sign</p>
              </div>
              <p className="text-xs text-slate-400">BEETOO embeds proof + metadata</p>
            </div>

            <div className="flex justify-center text-2xl text-orange-400">→</div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-6 mb-4">
                <p className="text-3xl mb-2">⛓️</p>
                <p className="text-sm font-bold text-white">Publish</p>
              </div>
              <p className="text-xs text-slate-400">Lives forever on Arweave</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="border border-green-500/30 bg-green-950/20 rounded-lg p-4">
              <p className="text-green-300 font-bold mb-2">Creators Share</p>
              <p className="text-sm text-slate-300">Grant wallet permission via contract</p>
            </div>
            <div className="border border-blue-500/30 bg-blue-950/20 rounded-lg p-4">
              <p className="text-blue-300 font-bold mb-2">Users Get License</p>
              <p className="text-sm text-slate-300">Smart contract enforces rights</p>
            </div>
            <div className="border border-yellow-500/30 bg-yellow-950/20 rounded-lg p-4">
              <p className="text-yellow-300 font-bold mb-2">Royalties Flow</p>
              <p className="text-sm text-slate-300">Automatic payment on every use</p>
            </div>
          </div>
        </motion.div>

        {/* Why Blockchain */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">Why Blockchain?</h3>
          <p className="text-slate-300 leading-relaxed">
            Blockchain isn't trendy—it's essential. It's the only way to create <span className="text-orange-300 font-bold">legally binding proof</span> that lives outside any company's servers. Your file's ownership record can never be deleted, edited, or disputed.
          </p>
          <p className="text-slate-400 text-sm mt-4">When AI floods the world with unsigned copies, a blockchain signature is the only thing that matters legally.</p>
        </motion.div>
      </div>
    </section>
  );
}

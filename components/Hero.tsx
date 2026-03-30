'use client';

import { ChevronRight, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
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
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30">
              <Zap size={14} className="text-orange-400" />
              <span className="text-xs font-semibold text-orange-300">Stack in a Box</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Creator Protection, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Complete</span>
            </h1>

            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Your file. Your proof. Your royalties. One stack, total ownership. Sign, prove, earn—everything you need to protect your work in the AI era.
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Proof of creation. Automatic licensing. Transparent royalties. No intermediaries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group transition-all hover:scale-105">
                Get Early Access
                <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="border-2 border-slate-600 hover:border-orange-400 text-white px-8 py-3 rounded-lg font-semibold transition">
                How It Works
              </button>
            </div>

            {/* Key Points */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-orange-400 font-bold">✓</span> Sign your work (proof of creation)
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-orange-400 font-bold">✓</span> License automatically (no middleman)
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-orange-400 font-bold">✓</span> Earn royalties (every use tracked)
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-orange-400 font-bold">✓</span> Own your identity (on-chain proof)
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div variants={itemVariants} className="relative">
            <img 
              src="/images/beetoo-branded-macmini.jpg"
              alt="Designer using BEETOO on Mac mini"
              className="w-full rounded-lg shadow-2xl"
            />

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 bg-slate-800/80 backdrop-blur border border-orange-500/30 rounded-lg p-3 text-sm max-w-xs"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-orange-300 font-bold">AI Tries to Clone</p>
              <p className="text-xs text-red-400 mt-1">❌ Can't—file is signed</p>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-10 bg-slate-800/80 backdrop-blur border border-green-500/30 rounded-lg p-3 text-sm max-w-xs"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-green-300 font-bold">Creator Earns</p>
              <p className="text-xs text-slate-300 mt-1">✓ Royalty on every use</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

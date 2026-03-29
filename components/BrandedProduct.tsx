'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Zap } from 'lucide-react';

export default function BrandedProduct() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container-max">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Images - Two skin options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Gradient Skin */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/images/beetoo-skin-mockup.jpg"
                alt="BEETOO Gradient skin - Black to Orange"
                className="relative w-full rounded-2xl shadow-2xl group-hover:shadow-orange-500/30 transition-shadow duration-300"
              />
              <p className="text-center text-sm text-slate-400 mt-2">Gradient Design</p>
            </div>

            {/* Carbon Fiber Skin */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-700/20 blur-3xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/images/beetoo-carbon-skin.jpg"
                alt="BEETOO Carbon Fiber skin"
                className="relative w-full rounded-2xl shadow-2xl group-hover:shadow-slate-500/30 transition-shadow duration-300"
              />
              <p className="text-center text-sm text-slate-400 mt-2">Carbon Fiber Design</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 mb-4">
                <Zap size={14} className="text-orange-400" />
                <span className="text-xs font-semibold text-orange-300">Coming Soon</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                BEETOO Branded <span className="text-gradient">Mac mini</span>
              </h2>
            </div>

            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              The all-in-one creator protection device. Pre-configured with BEETOO software, custom black-to-orange gradient skin, and ready to sign your first file.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-orange-400 mt-1">✓</div>
                <div>
                  <p className="font-bold text-white">Mac mini M4</p>
                  <p className="text-sm text-slate-400">Pre-loaded with BEETOO software</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-orange-400 mt-1">✓</div>
                <div>
                  <p className="font-bold text-white">Custom SlickWraps Skin</p>
                  <p className="text-sm text-slate-400">Choose: Gradient or Carbon Fiber finish</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-orange-400 mt-1">✓</div>
                <div>
                  <p className="font-bold text-white">Lifetime BEETOO License</p>
                  <p className="text-sm text-slate-400">Full Creator tier included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-orange-400 mt-1">✓</div>
                <div>
                  <p className="font-bold text-white">Priority Support</p>
                  <p className="text-sm text-slate-400">Direct access to the team</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group transition-all hover:scale-105">
                <ShoppingCart size={20} />
                Notify Me
              </button>
              <button className="border-2 border-slate-600 hover:border-orange-400 text-white px-8 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-6">
              Limited edition. First 50 units ship Q2 2026.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

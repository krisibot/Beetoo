import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Brands That Own Their IP
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how forward-thinking brands use BEETOO to reclaim control of their assets, data, and narrative.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SEALAND GEAR Case Study */}
          <div className="group relative bg-gradient-to-br from-amber-600/10 to-orange-600/5 border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-300" />
            <div className="relative p-8">
              {/* Logo/Brand */}
              <div className="mb-6">
                <div className="inline-block bg-amber-900/30 px-4 py-2 rounded-lg border border-amber-700/30">
                  <p className="text-amber-300 font-bold text-lg">SEALAND GEAR</p>
                </div>
              </div>

              {/* Description */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Upcycled Goods, Owned Data
              </h3>
              <p className="text-slate-300 mb-6">
                Cape Town-based maker of handmade, upcycled outdoor bags and apparel. 100% made in Africa using recycled materials and ethical supply chains.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-700/20">
                  <p className="text-amber-200 text-sm font-semibold">Design Control</p>
                  <p className="text-white text-lg font-bold">100%</p>
                </div>
                <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-700/20">
                  <p className="text-amber-200 text-sm font-semibold">Data Ownership</p>
                  <p className="text-white text-lg font-bold">On-Chain</p>
                </div>
              </div>

              {/* The Play */}
              <div className="bg-amber-950/30 border border-amber-700/20 rounded-lg p-4 mb-6">
                <p className="text-amber-200 text-sm font-semibold mb-2">✓ The BEETOO Advantage</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Brand manager in a box: design, catalog, supply chain visibility</li>
                  <li>• Fingerprint every design → immutable IP record on-chain</li>
                  <li>• Generate new designs with AI, retain 100% ownership</li>
                  <li>• Earn FP tokens as founder equity in BEETOO ecosystem</li>
                </ul>
              </div>

              <a href="https://sealandgear.com" className="inline-flex items-center text-amber-300 hover:text-amber-200 font-semibold transition-colors">
                Visit Sealand <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* NOWATCH Case Study */}
          <div className="group relative bg-gradient-to-br from-purple-600/10 to-pink-600/5 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
            <div className="relative p-8">
              {/* Logo/Brand */}
              <div className="mb-6">
                <div className="inline-block bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-700/30">
                  <p className="text-purple-300 font-bold text-lg">NOWATCH</p>
                </div>
              </div>

              {/* Description */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Nervous System Health, IP Sovereignty
              </h3>
              <p className="text-slate-300 mb-6">
                Amsterdam-based screenless wearable that tracks stress, sleep, and recovery via EDA (Electrodermal Activity). Predicts cognitive state 60 minutes in advance.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/20">
                  <p className="text-purple-200 text-sm font-semibold">Algorithm IP</p>
                  <p className="text-white text-lg font-bold">Owned</p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/20">
                  <p className="text-purple-200 text-sm font-semibold">User Data</p>
                  <p className="text-white text-lg font-bold">Private</p>
                </div>
              </div>

              {/* The Play */}
              <div className="bg-purple-950/30 border border-purple-700/20 rounded-lg p-4 mb-6">
                <p className="text-purple-200 text-sm font-semibold mb-2">✓ The BEETOO Advantage</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Fingerprint wearable algorithms → cryptographic proof of invention</li>
                  <li>• Generative AI refines NOWATCH experience without losing IP</li>
                  <li>• On-chain provenance for research partnerships & licensing</li>
                  <li>• FP token governance: NOWATCH community owns feature decisions</li>
                </ul>
              </div>

              <a href="https://nowatch.com" className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold transition-colors">
                Visit NOWATCH <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6">
            Building on BEETOO? Join the IP revolution.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
}

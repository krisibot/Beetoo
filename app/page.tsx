'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">The Matrix</div>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-slate-600 hover:text-slate-900">For Users</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">For Creators</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Docs</a>
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                SaaS Laid You Off.
                <br />
                <span className="text-orange-400">We're Hiring You Back.</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                The platform where SaaS creators build the alternative.
                <br />
                Free runtime. Free distribution. You set the price. You own it forever.
              </p>

              <div className="flex gap-4 mb-12 flex-wrap">
                <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg">
                  Get Started as Creator
                </button>
                <button className="px-8 py-3 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 font-bold rounded-lg">
                  Browse 500+ Templates
                </button>
              </div>

              <p className="text-sm text-slate-400">
                ✨ 10,000+ creators · 500+ templates · 500,000+ users
              </p>
            </div>

            {/* Right: Stats */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-orange-400/30">
                <div className="text-4xl font-bold text-orange-400">10,000+</div>
                <p className="text-slate-300">Creators</p>
                <p className="text-xs text-slate-400 mt-2">Ex-SaaS engineers building the future</p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-green-400/30">
                <div className="text-4xl font-bold text-green-400">€50k-500k</div>
                <p className="text-slate-300">Monthly Revenue</p>
                <p className="text-xs text-slate-400 mt-2">Year 1 realistic range per creator</p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-blue-400/30">
                <div className="text-4xl font-bold text-blue-400">100% Ownership</div>
                <p className="text-slate-300">Your Work Forever</p>
                <p className="text-xs text-slate-400 mt-2">No VC, no cap table, no dilution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATOR TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Meet The Matrix Creators
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            These aren't clones. These are the original architects building their masterpiece again.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Sarah Chen',
                title: 'Former Notion PM',
                template: 'Community Notion',
                quote: 'I spent 5 years understanding what users need. Now I build it. 15,000 people use my version. I make €150,000/month. I own it.',
                avatar: '👩‍💻',
                color: 'border-blue-500',
              },
              {
                name: 'James Rodriguez',
                title: 'Former HubSpot Engineer',
                template: 'Community CRM',
                quote: 'We built it once. Now I build it better, locally, on user machines. No cloud. No data extraction. Pure product.',
                avatar: '👨‍💼',
                color: 'border-green-500',
              },
              {
                name: 'Maria Nakamura',
                title: 'Former Figma Designer',
                template: 'Community Figma',
                quote: 'Design collaboration without vendor lock-in. 5,000 teams use my version. Total cost: €10/month for them. I set the price.',
                avatar: '🎨',
                color: 'border-purple-500',
              },
              {
                name: 'Avery Kim',
                title: 'Former Airtable Architect',
                template: 'Community Database',
                quote: 'Built the database at Airtable. Now users own their data. Fully encrypted. Zero vendor control. €80k/month recurring.',
                avatar: '🗄️',
                color: 'border-orange-500',
              },
            ].map((creator) => (
              <div
                key={creator.name}
                className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${creator.color} hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{creator.avatar}</div>
                  <div>
                    <h3 className="font-bold text-slate-900">{creator.name}</h3>
                    <p className="text-sm text-slate-600">{creator.title}</p>
                    <p className="text-xs text-orange-600 font-semibold mt-1">Built: {creator.template}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{creator.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            SaaS vs. The Matrix
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-900">SaaS (Notion)</th>
                  <th className="text-left py-3 px-4 font-bold text-orange-600">The Matrix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Annual Cost', saas: '€15,000', matrix: '€0-600' },
                  { feature: 'Data Location', saas: 'Their servers', matrix: 'Your machine' },
                  { feature: 'Switching Cost', saas: 'High (lock-in)', matrix: 'Zero' },
                  { feature: 'Product Control', saas: 'Them', matrix: 'You' },
                  { feature: 'Can Shut Down', saas: 'Yes, no warning', matrix: 'No, it\'s local' },
                  { feature: 'Who Profits', saas: 'Venture Investors', matrix: 'The Creator' },
                  { feature: 'Can Modify', saas: 'No (SaaS)', matrix: 'Yes (local)' },
                  { feature: 'Long-term Ownership', saas: 'Rent forever', matrix: 'Own forever' },
                ].map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-200 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-slate-900">{row.feature}</td>
                    <td className="py-3 px-4 text-slate-700">{row.saas}</td>
                    <td className="py-3 px-4 text-orange-600 font-semibold">{row.matrix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            You Built It Before. Build It Again.
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            This time, it's yours. No VC. No cap table. No approval committees.
            Just you and users who value what you build.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50">
              Get Started as Creator
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10">
              Browse Templates
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">The Matrix</h3>
              <p className="text-sm">The platform where SaaS creators build the alternative.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Users</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Install Stack in a Box</a></li>
                <li><a href="#" className="hover:text-white">Browse Templates</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Creators</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Get Started</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex justify-between items-center text-sm">
            <p>&copy; 2026 The Matrix. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Discord</a>
              <a href="#" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

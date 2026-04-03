'use client';

import React, { useState } from 'react';
import { Search, Download, Code, Users, TrendingUp, Star, Filter } from 'lucide-react';

export default function MatrixMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'productivity' | 'crm' | 'design' | 'data'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const templates = [
    {
      id: 1,
      name: 'Community Notion',
      original: 'Notion',
      creator: 'Sarah Chen',
      price: '€10/mo',
      users: 15200,
      rating: 4.9,
      downloads: 3420,
      category: 'productivity',
      revenue: '€152k/mo',
      status: 'Live',
      features: ['Databases', 'Block Editing', 'Templates', 'Sharing', 'API'],
      description: 'Full-featured note-taking and database platform. Run locally.',
      builderLink: 'Sarah spent 5 years at Notion building this core product.',
    },
    {
      id: 2,
      name: 'Community CRM',
      original: 'HubSpot',
      creator: 'James Rodriguez',
      price: '€15/mo',
      users: 8400,
      rating: 4.7,
      downloads: 1890,
      category: 'crm',
      revenue: '€126k/mo',
      status: 'Live',
      features: ['Contacts', 'Deals', 'Pipelines', 'Emails', 'Reports'],
      description: 'CRM for sales teams. No cloud, no extraction.',
      builderLink: 'James was HubSpot Sr. Engineer. Built this better.',
    },
    {
      id: 3,
      name: 'Community Figma',
      original: 'Figma',
      creator: 'Maria Nakamura',
      price: '€20/mo',
      users: 5100,
      rating: 4.8,
      downloads: 1240,
      category: 'design',
      revenue: '€102k/mo',
      status: 'Live',
      features: ['Design Editor', 'Collaboration', 'Components', 'Prototyping', 'Export'],
      description: 'Web-based design collaboration without vendor lock-in.',
      builderLink: 'Maria designed at Figma for 4 years.',
    },
    {
      id: 4,
      name: 'Community Airtable',
      original: 'Airtable',
      creator: 'Avery Kim',
      price: '€12/mo',
      users: 6800,
      rating: 4.6,
      downloads: 1560,
      category: 'data',
      revenue: '€81.6k/mo',
      status: 'Live',
      features: ['Spreadsheet + Database', 'Relations', 'Formulas', 'Automation', 'Integrations'],
      description: 'Hybrid spreadsheet-database. Your data, your machine.',
      builderLink: 'Avery built Airtable\'s data layer architecture.',
    },
    {
      id: 5,
      name: 'Community Slack',
      original: 'Slack',
      creator: 'David Park',
      price: '€8/mo',
      users: 4200,
      rating: 4.5,
      downloads: 890,
      category: 'productivity',
      revenue: '€33.6k/mo',
      status: 'Beta',
      features: ['Channels', 'Direct Messages', 'Threading', 'File Sharing', 'Integrations'],
      description: 'Team communication platform. Self-hosted.',
      builderLink: 'David was Slack infrastructure engineer.',
    },
    {
      id: 6,
      name: 'Community HubSpot (Marketing)',
      original: 'HubSpot',
      creator: 'Lisa Chen',
      price: '€18/mo',
      users: 3100,
      rating: 4.4,
      downloads: 420,
      category: 'crm',
      revenue: '€55.8k/mo',
      status: 'Beta',
      features: ['Email Campaigns', 'Landing Pages', 'Analytics', 'Lead Scoring', 'Forms'],
      description: 'Marketing automation. Built by HubSpot\'s marketing team.',
      builderLink: 'Lisa built HubSpot\'s marketing suite.',
    },
    {
      id: 7,
      name: 'Community Linear',
      original: 'Linear',
      creator: 'Alex Chen',
      price: '€9/mo',
      users: 2800,
      rating: 4.7,
      downloads: 650,
      category: 'productivity',
      revenue: '€25.2k/mo',
      status: 'Beta',
      features: ['Issues', 'Cycles', 'Projects', 'Workflows', 'Team Collaboration'],
      description: 'Issue tracking for teams. Fast, local-first.',
      builderLink: 'Alex was Linear\'s first engineer.',
    },
    {
      id: 8,
      name: 'Community Stripe',
      original: 'Stripe',
      creator: 'Marcus Johnson',
      price: '€25/mo',
      users: 1200,
      rating: 4.3,
      downloads: 180,
      category: 'data',
      revenue: '€30k/mo',
      status: 'Alpha',
      features: ['Payment Processing', 'Subscriptions', 'Webhooks', 'Testing', 'Analytics'],
      description: 'Payment processing infrastructure. Self-hosted.',
      builderLink: 'Marcus built Stripe\'s payment engine.',
    },
  ];

  const filteredTemplates = templates.filter(t => {
    const matchCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       t.original.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       t.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const stats = {
    totalCreators: 47,
    totalTemplates: 8,
    totalUsers: 47300,
    totalRevenue: '€606.2k/mo',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* HEADER */}
      <div className="bg-black/50 border-b border-orange-600/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold">The Matrix Marketplace</h1>
              <p className="text-slate-400">Community clones of expensive SaaS. Built by the architects.</p>
            </div>
            <div className="text-right">
              <a href="/clone-agent" className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold inline-block">
                → Clone Agent
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Creators</p>
              <p className="text-2xl font-bold text-orange-400">{stats.totalCreators}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Templates</p>
              <p className="text-2xl font-bold text-green-400">{stats.totalTemplates}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-blue-400">{stats.totalUsers.toLocaleString()}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Creator Revenue</p>
              <p className="text-2xl font-bold text-purple-400">{stats.totalRevenue}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY BROWSE SECTION */}
      <div className="bg-slate-900/30 border-b border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { value: 'all', label: 'All Templates', emoji: '📚', count: 8 },
              { value: 'productivity', label: 'Productivity', emoji: '📝', count: 3 },
              { value: 'crm', label: 'CRM & Sales', emoji: '🎯', count: 2 },
              { value: 'design', label: 'Design', emoji: '🎨', count: 1 },
              { value: 'data', label: 'Data & Analytics', emoji: '📊', count: 2 },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as any)}
                className={`p-6 rounded-lg border-2 transition-all text-center ${
                  selectedCategory === cat.value
                    ? 'bg-orange-600/20 border-orange-600 shadow-lg shadow-orange-600/20'
                    : 'bg-slate-800/50 border-slate-700 hover:border-orange-600/50 hover:bg-slate-800'
                }`}
              >
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <p className="font-bold text-white mb-1">{cat.label}</p>
                <p className="text-sm text-slate-400">{cat.count} template{cat.count !== 1 ? 's' : ''}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SEARCH & FILTER */}
      <div className="bg-slate-900/50 border-b border-slate-700 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search templates, creators, originals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY RESULTS HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {selectedCategory === 'all' 
                ? 'All Templates' 
                : selectedCategory === 'productivity' ? '📝 Productivity Tools'
                : selectedCategory === 'crm' ? '🎯 CRM & Sales'
                : selectedCategory === 'design' ? '🎨 Design Tools'
                : '📊 Data & Analytics'}
            </h2>
            <p className="text-slate-400">
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} available
            </p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-orange-400">€{(filteredTemplates.reduce((sum, t) => {
              const revenue = parseInt(t.revenue.replace('€', '').replace('k/mo', '')) * 1000;
              return sum + revenue;
            }, 0) / 1000).toFixed(0)}k/mo</p>
            <p className="text-sm text-slate-400">Creator Revenue</p>
          </div>
        </div>
      </div>

      {/* TEMPLATES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-600/50 transition-all group"
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-orange-400">{template.name}</h3>
                  <p className="text-sm text-slate-300">Originally: {template.original}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  template.status === 'Live' ? 'bg-green-900/50 text-green-400' :
                  template.status === 'Beta' ? 'bg-blue-900/50 text-blue-400' :
                  'bg-yellow-900/50 text-yellow-400'
                }`}>
                  {template.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-4">
                {/* CREATOR */}
                <div className="border-b border-slate-700/50 pb-3">
                  <p className="text-xs text-slate-400 mb-1">Built by</p>
                  <p className="font-semibold text-slate-200">{template.creator}</p>
                  <p className="text-xs text-slate-500 mt-1 italic">{template.builderLink}</p>
                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-300 text-sm">{template.description}</p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-1">
                  {template.features.slice(0, 3).map((f) => (
                    <span key={f} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      {f}
                    </span>
                  ))}
                  {template.features.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                      +{template.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-700/50">
                  <div>
                    <p className="text-xs text-slate-400">Users</p>
                    <p className="text-lg font-bold text-blue-400">{(template.users / 1000).toFixed(1)}k</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Rating</p>
                    <p className="text-lg font-bold text-yellow-400 flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      {template.rating}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Price</p>
                    <p className="text-lg font-bold text-green-400">{template.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Creator Rev</p>
                    <p className="text-lg font-bold text-purple-400">{template.revenue}</p>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-sm flex items-center justify-center gap-2">
                    <Download size={16} />
                    Install
                  </button>
                  <button className="flex-1 px-3 py-2 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold text-sm flex items-center justify-center gap-2">
                    <Code size={16} />
                    Source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No templates found matching your search.</p>
          </div>
        )}
      </div>

      {/* BECOME A CREATOR CTA */}
      <div className="bg-gradient-to-r from-orange-600/20 to-orange-700/20 border-y border-orange-600/30 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">You Built It Before. Build It Again.</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            If you were laid off from Notion, HubSpot, Figma, Slack, or any SaaS company, you have the exact skills to build a Community version.
          </p>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Use the Clone Agent to get a complete blueprint. Build it. Earn €25k-€150k/month. Own it forever.
          </p>
          <a href="/creators" className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg inline-block">
            Become a Creator
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black/50 border-t border-slate-700 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
          <p>The Matrix: Where SaaS creators build the future. Decentralized. Sovereign. Profitable.</p>
        </div>
      </footer>
    </div>
  );
}

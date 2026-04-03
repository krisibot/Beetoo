'use client';

import React, { useState } from 'react';
import { Copy, Zap, CheckCircle, AlertCircle, Download, Play, Pause } from 'lucide-react';

export default function CloneAgentUI() {
  const [step, setStep] = useState<'input' | 'processing' | 'results'>('input');
  const [saasUrl, setSaasUrl] = useState('https://notion.so');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mock results
  const mockResults = {
    name: 'Community Notion',
    features: [
      { name: 'Database Creation', type: 'core', complexity: 'high', estimated: '40h' },
      { name: 'Block Editing', type: 'core', complexity: 'high', estimated: '35h' },
      { name: 'Sharing & Permissions', type: 'core', complexity: 'medium', estimated: '20h' },
      { name: 'Templates', type: 'feature', complexity: 'medium', estimated: '15h' },
      { name: 'Full-text Search', type: 'feature', complexity: 'medium', estimated: '18h' },
      { name: 'Export to PDF/Markdown', type: 'feature', complexity: 'low', estimated: '12h' },
      { name: 'Synced Database Relations', type: 'advanced', complexity: 'high', estimated: '30h' },
      { name: 'API Integration Layer', type: 'advanced', complexity: 'high', estimated: '25h' },
    ],
    dataModel: {
      User: ['id', 'email', 'name', 'avatar', 'preferences', 'created_at'],
      Workspace: ['id', 'name', 'owner_id', 'members', 'settings', 'created_at'],
      Database: ['id', 'workspace_id', 'name', 'schema', 'rows', 'created_at'],
      Block: ['id', 'page_id', 'type', 'content', 'properties', 'position'],
      Share: ['id', 'resource_id', 'user_id', 'permission_level', 'created_at'],
    },
    estimatedHours: 195,
    estimatedCost: 9750,
  };

  const handleStartScan = () => {
    setIsProcessing(true);
    setStep('processing');
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 20;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setStep('results');
        }, 1000);
      } else {
        setProgress(Math.min(currentProgress, 99));
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* HEADER */}
      <div className="bg-black/50 border-b border-orange-600/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">🤖 Clone Agent</h1>
            <p className="text-slate-400 text-sm">Map any SaaS. Generate a build blueprint.</p>
          </div>
          <div className="text-right">
            <p className="text-slate-300">Status: <span className={isProcessing ? 'text-yellow-400 animate-pulse' : step === 'results' ? 'text-green-400' : 'text-slate-400'}>{isProcessing ? 'Scanning...' : step === 'results' ? 'Complete' : 'Ready'}</span></p>
          </div>
        </div>
      </div>

      {/* INPUT STEP */}
      {step === 'input' && (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Enter SaaS Login Details</h2>
            <p className="text-slate-300 mb-8">The agent will:</p>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-12">
              <li>Log in to the SaaS</li>
              <li>Crawl every feature and UI</li>
              <li>Map the data model</li>
              <li>Extract API endpoints</li>
              <li>Generate a complete build blueprint</li>
            </ol>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">SaaS URL (e.g., https://notion.so, https://hubspot.com)</label>
                <input
                  type="url"
                  value={saasUrl}
                  onChange={(e) => setSaasUrl(e.target.value)}
                  placeholder="https://notion.so"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-600"
                />
                <p className="text-xs text-slate-500 mt-2">⚠️ Credentials never stored. Only used for this scan.</p>
              </div>
            </div>

            <button
              onClick={handleStartScan}
              disabled={!saasUrl || !email || !password}
              className="w-full px-6 py-4 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Zap size={20} />
              Start Scanning {saasUrl}
            </button>
          </div>

          {/* SECURITY NOTE */}
          <div className="bg-slate-800/30 border border-blue-500/30 rounded-lg p-6">
            <h3 className="font-semibold text-blue-400 mb-2">🔒 How This Works</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>✓ Agent runs in isolated environment</li>
              <li>✓ Credentials transmitted encrypted (TLS 1.3)</li>
              <li>✓ No credentials stored or logged</li>
              <li>✓ Session destroyed after scan completes</li>
              <li>✓ Only feature mappings exported (no user data)</li>
            </ul>
          </div>
        </div>
      )}

      {/* PROCESSING STEP */}
      {step === 'processing' && (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12 text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-orange-400 animate-pulse" />
            <h2 className="text-2xl font-bold mb-4">Scanning {saasUrl}</h2>
            
            {/* PROGRESS STAGES */}
            <div className="space-y-4 mb-12 text-left max-w-2xl mx-auto">
              <div className={`p-3 rounded-lg ${progress > 15 ? 'bg-green-900/30 border border-green-500' : 'bg-slate-700/50 border border-slate-600'}`}>
                <p className={progress > 15 ? 'text-green-400' : 'text-slate-400'}>
                  {progress > 15 ? '✓' : '⟳'} Authenticating...
                </p>
              </div>

              <div className={`p-3 rounded-lg ${progress > 35 ? 'bg-green-900/30 border border-green-500' : progress > 15 ? 'bg-orange-900/30 border border-orange-500' : 'bg-slate-700/50 border border-slate-600'}`}>
                <p className={progress > 35 ? 'text-green-400' : progress > 15 ? 'text-orange-400' : 'text-slate-400'}>
                  {progress > 35 ? '✓' : progress > 15 ? '⟳' : '—'} Crawling Features
                </p>
              </div>

              <div className={`p-3 rounded-lg ${progress > 55 ? 'bg-green-900/30 border border-green-500' : progress > 35 ? 'bg-orange-900/30 border border-orange-500' : 'bg-slate-700/50 border border-slate-600'}`}>
                <p className={progress > 55 ? 'text-green-400' : progress > 35 ? 'text-orange-400' : 'text-slate-400'}>
                  {progress > 55 ? '✓' : progress > 35 ? '⟳' : '—'} Mapping Data Model
                </p>
              </div>

              <div className={`p-3 rounded-lg ${progress > 75 ? 'bg-green-900/30 border border-green-500' : progress > 55 ? 'bg-orange-900/30 border border-orange-500' : 'bg-slate-700/50 border border-slate-600'}`}>
                <p className={progress > 75 ? 'text-green-400' : progress > 55 ? 'text-orange-400' : 'text-slate-400'}>
                  {progress > 75 ? '✓' : progress > 55 ? '⟳' : '—'} Extracting APIs
                </p>
              </div>

              <div className={`p-3 rounded-lg ${progress > 90 ? 'bg-green-900/30 border border-green-500' : progress > 75 ? 'bg-orange-900/30 border border-orange-500' : 'bg-slate-700/50 border border-slate-600'}`}>
                <p className={progress > 90 ? 'text-green-400' : progress > 75 ? 'text-orange-400' : 'text-slate-400'}>
                  {progress > 90 ? '✓' : progress > 75 ? '⟳' : '—'} Generating Blueprint
                </p>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mb-6">
              <div className="bg-slate-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-orange-600 to-orange-400 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-slate-400 text-sm mt-2">{Math.round(progress)}% complete</p>
            </div>
          </div>
        </div>
      )}

      {/* RESULTS STEP */}
      {step === 'results' && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* HEADER RESULTS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-green-500/30">
              <p className="text-slate-400 text-sm mb-2">Clone Name</p>
              <p className="text-2xl font-bold text-green-400">{mockResults.name}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/30">
              <p className="text-slate-400 text-sm mb-2">Total Features</p>
              <p className="text-2xl font-bold text-blue-400">{mockResults.features.length}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-orange-500/30">
              <p className="text-slate-400 text-sm mb-2">Est. Build Time</p>
              <p className="text-2xl font-bold text-orange-400">{mockResults.estimatedHours}h</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-purple-500/30">
              <p className="text-slate-400 text-sm mb-2">Est. Cost (@ €50/h)</p>
              <p className="text-2xl font-bold text-purple-400">€{mockResults.estimatedCost.toLocaleString()}</p>
            </div>
          </div>

          {/* FEATURES TABLE */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Mapped Features</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Complexity</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Est. Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {mockResults.features.map((feature, idx) => (
                    <tr key={idx} className={`border-b border-slate-700/50 ${idx % 2 === 0 ? 'bg-slate-800/30' : ''}`}>
                      <td className="py-3 px-4 text-slate-100">{feature.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          feature.type === 'core' ? 'bg-red-900/30 text-red-400' :
                          feature.type === 'feature' ? 'bg-blue-900/30 text-blue-400' :
                          'bg-purple-900/30 text-purple-400'
                        }`}>
                          {feature.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-xs font-semibold ${
                          feature.complexity === 'high' ? 'text-orange-400' :
                          feature.complexity === 'medium' ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>
                          {feature.complexity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-300">{feature.estimated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DATA MODEL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Data Model</h3>
              <div className="space-y-4">
                {Object.entries(mockResults.dataModel).map(([entity, fields]) => (
                  <div key={entity} className="p-3 bg-slate-700/30 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">{entity}</p>
                    <div className="flex flex-wrap gap-2">
                      {fields.map((field) => (
                        <span key={field} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">API Endpoints (Extracted)</h3>
              <div className="space-y-2 text-sm font-mono text-slate-300">
                <p className="text-green-400">GET /api/workspaces</p>
                <p className="text-green-400">POST /api/databases</p>
                <p className="text-blue-400">PUT /api/databases/:id</p>
                <p className="text-blue-400">PATCH /api/blocks/:id</p>
                <p className="text-red-400">DELETE /api/shares/:id</p>
                <p className="text-yellow-400">GET /api/search (Full-text)</p>
                <p className="text-purple-400">GET /api/export/:id (PDF/Markdown)</p>
                <p className="text-slate-400 mt-4 text-xs">... and 12 more endpoints</p>
              </div>
            </div>
          </div>

          {/* DOWNLOAD BLUEPRINT */}
          <div className="bg-orange-600/20 border border-orange-600/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">📦 Build Blueprint Ready</h3>
            <p className="text-slate-300 mb-4">
              A 200+ page specification has been generated. Download and share with creators.
            </p>
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg flex items-center gap-2">
              <Download size={18} />
              Download Blueprint (PDF)
            </button>
          </div>

          {/* CTA */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Build?</h3>
            <p className="text-slate-300 mb-6">
              Post this blueprint to The Matrix Creator Network. Creators claim and build.
            </p>
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
              Publish to Matrix
            </button>
          </div>

          {/* START OVER */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setStep('input');
                setProgress(0);
                setSaasUrl('https://notion.so');
              }}
              className="px-6 py-2 text-orange-400 hover:text-orange-300 underline"
            >
              Scan Another SaaS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

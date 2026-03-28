"use client";

import Link from "next/link";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐝</span>
              <span className="font-bold text-white">BEETOO</span>
            </div>
            <p className="text-sm opacity-80">
              Cryptographic proof of ownership. AI-powered brand management.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-beetoo-orange transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-beetoo-orange transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-beetoo-orange transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-beetoo-orange transition">
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-beetoo-orange transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-beetoo-orange transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-beetoo-orange transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Follow</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-beetoo-orange transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-beetoo-orange transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-beetoo-orange transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@beetoo.app"
                className="hover:text-beetoo-orange transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; 2026 BEETOO. Built for creators who own their work.</p>
          <p>Powered by Next.js • Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}

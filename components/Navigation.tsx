"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🐝</span>
            <span className="text-xl font-bold text-gradient hidden sm:inline">
              BEETOO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-beetoo-orange transition">
              Features
            </a>
            <a href="#how" className="text-gray-700 hover:text-beetoo-orange transition">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-beetoo-orange transition">
              Pricing
            </a>
            <a href="#timeline" className="text-gray-700 hover:text-beetoo-orange transition">
              Timeline
            </a>
            <button className="btn-gradient px-6 py-2 rounded-lg font-semibold text-sm">
              Reserve Device
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 pt-4">
            <a href="#features" className="block text-gray-700 hover:text-beetoo-orange py-2">
              Features
            </a>
            <a href="#how" className="block text-gray-700 hover:text-beetoo-orange py-2">
              How It Works
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-beetoo-orange py-2">
              Pricing
            </a>
            <a href="#timeline" className="block text-gray-700 hover:text-beetoo-orange py-2">
              Timeline
            </a>
            <button className="w-full btn-gradient px-4 py-2 rounded-lg font-semibold">
              Reserve Device
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

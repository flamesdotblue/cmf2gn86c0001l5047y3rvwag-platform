import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
          <nav className="h-14 flex items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-black"><Rocket className="h-4 w-4" /></span>
              <span>NovaMotion</span>
            </a>

            <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#how" className="hover:text-white">How it works</a>
              <a href="#cta" className="hover:text-white">Get access</a>
            </div>

            <div className="flex items-center gap-2">
              <a href="#cta" className="hidden sm:inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition">
                Try for free
              </a>
              <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-sm text-white/80" aria-label="Open Menu">
                Menu
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

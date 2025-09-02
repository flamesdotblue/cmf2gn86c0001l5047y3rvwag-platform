import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Star, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full h-[640px] md:h-[720px]">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
      </div>

      <div className="container mx-auto px-6 -mt-64 md:-mt-72 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur-xl">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-xs md:text-sm text-white/90">Mind-blowing AI Video Generator</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Turn ideas into cinematic videos in seconds
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
            Generate, edit, and stylize videos from text prompts, references, or audio. Lightning fast, studio quality, made for creators and teams.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition"
            >
              <Rocket className="w-5 h-5" />
              Start Creating Free
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

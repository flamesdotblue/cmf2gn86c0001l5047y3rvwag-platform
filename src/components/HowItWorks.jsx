import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Mic, Film } from 'lucide-react';

const steps = [
  {
    icon: Wand2,
    title: 'Describe your idea',
    desc: 'Write a prompt or paste a script. Add style hints like "cyberpunk, neon, anamorphic".'
  },
  {
    icon: Mic,
    title: 'Add voice & sound',
    desc: 'Choose an AI voice or upload your own. Auto-mix with music and sound effects.'
  },
  {
    icon: Film,
    title: 'Generate & refine',
    desc: 'Preview in seconds. Tweak motion, camera, color, and export in HD or 4K.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Create in 3 simple steps</h2>
          <p className="text-white/70 mt-4">Designed for flow. No timelines or complexity—just pure creativity.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{s.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{s.desc}</p>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

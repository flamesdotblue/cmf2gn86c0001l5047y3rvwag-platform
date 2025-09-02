import React from 'react';
import { motion } from 'framer-motion';
import { Film, Mic, Wand2, Zap, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Text-to-Video Magic',
    desc: 'Type your vision. Our multimodal model crafts scenes, motion, lighting, and style instantly.'
  },
  {
    icon: Film,
    title: 'Reference & Style Control',
    desc: 'Upload images or clips to lock style, characters, and motion for perfect continuity.'
  },
  {
    icon: Mic,
    title: 'Voice & Sound',
    desc: 'Generate voiceover, add sound effects, and auto-sync subtitles in one click.'
  },
  {
    icon: Zap,
    title: 'Lightning Render',
    desc: 'GPU-accelerated pipeline delivers HD exports in seconds, not hours.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Ready',
    desc: 'Private workspaces, SSO, watermarking, and audit logs for teams and studios.'
  },
  {
    icon: Clock,
    title: 'Iterate in Real-time',
    desc: 'Live previews and version history keep your creative loop fast and fearless.'
  }
];

export default function Features() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-6xl blur-3xl opacity-30" style={{ background: 'radial-gradient(600px 200px at 50% 0%, rgba(124, 58, 237, 0.25), transparent 60%)' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Everything you need to create jaw-dropping videos</h2>
          <p className="text-white/70 mt-4">
            From concept to export in one seamless flow. Powerful, intuitive, and built for speed.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.06] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

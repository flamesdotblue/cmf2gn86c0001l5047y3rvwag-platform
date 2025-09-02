import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-6xl blur-3xl opacity-30" style={{ background: 'radial-gradient(600px 200px at 50% 50%, rgba(99, 102, 241, 0.3), transparent 60%)' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold">Create your first AI video today</h3>
          <p className="text-white/70 mt-3">
            No credit card required. Unlimited previews. Export when you love it.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="w-full sm:w-[360px] px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition"
            >
              <Rocket className="w-5 h-5" />
              Get Early Access
            </button>
          </form>

          <div className="mt-4 text-xs text-white/60">By continuing, you agree to our Terms and Privacy Policy.</div>
        </motion.div>
      </div>
    </section>
  );
}

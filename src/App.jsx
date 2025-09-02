import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
}

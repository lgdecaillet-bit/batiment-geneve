"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { processConfig, processSteps } from "@/lib/config";
import { revealUp, stagger, viewportConfig } from "@/lib/animations";

function StepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={stagger((index + 1) * 0.1)}
      className={`step-line ${inView ? "in-view" : ""}`}
    >
      <div className="font-serif text-[48px] text-gold opacity-30 leading-none mb-4 transition-opacity duration-500 hover:opacity-60">
        {step.number}
      </div>
      <h3 className="text-lg font-semibold mb-2.5 tracking-[-0.3px]">
        {step.title}
      </h3>
      <p className="text-sm leading-[1.7] text-cream/50">{step.description}</p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="orb-gold py-20 md:py-[120px] px-6 md:px-[60px] bg-charcoal text-cream"
    >
      {/* Header */}
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        transition={stagger(0)}
        className="text-center mb-20"
      >
        <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
          {processConfig.tag}
        </span>
        <div className="w-[60px] h-[3px] bg-gold mx-auto mb-5 rounded-sm" />
        <h2 className="font-serif text-[clamp(36px,4vw,52px)] tracking-[-1px] leading-[1.1] text-cream whitespace-pre-line">
          {processConfig.title}
        </h2>
        <p className="text-[17px] text-cream/50 max-w-[560px] mx-auto mt-5 leading-[1.7]">
          {processConfig.subtitle}
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto">
        {processSteps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}

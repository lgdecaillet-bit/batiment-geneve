"use client";

import { motion } from "framer-motion";
import { testimonialsConfig, testimonials } from "@/lib/config";
import { revealUp, stagger, viewportConfig } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section
      id="avis"
      className="py-20 md:py-[120px] px-6 md:px-[60px] bg-light-stone"
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
        <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent mb-5">
          {testimonialsConfig.tag}
        </span>
        <div className="w-[60px] h-[3px] bg-accent mx-auto mb-5 rounded-sm" />
        <h2 className="font-serif text-[clamp(36px,4vw,52px)] tracking-[-1px] leading-[1.1]">
          {testimonialsConfig.title}
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={stagger((i + 1) * 0.1)}
            className="bg-off-white p-10 rounded-lg transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border border-transparent hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-accent/[0.15]"
          >
            {/* Stars */}
            <div className="text-gold text-lg mb-5 tracking-[3px]">
              ★★★★★
            </div>

            {/* Text */}
            <p className="text-[15px] leading-[1.8] text-charcoal mb-6 italic">
              &laquo; {t.text} &raquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center font-bold text-sm text-accent">
                {t.initials}
              </div>
              <div>
                <strong className="block text-sm">{t.author}</strong>
                <span className="text-xs text-warm-gray">{t.project}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

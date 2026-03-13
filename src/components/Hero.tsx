"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroConfig } from "@/lib/config";
import { ease } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="top"
      className="orb-accent min-h-screen flex items-center px-6 md:px-[60px] pt-[140px] pb-20 relative"
    >
      <div className="max-w-[680px] relative z-[2]">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2.5 bg-charcoal text-cream px-[18px] py-2 rounded-full text-xs font-semibold tracking-[2px] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
          {heroConfig.tag}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-serif text-[clamp(48px,6vw,80px)] leading-[1.05] tracking-[-2px] mb-7"
        >
          {heroConfig.titleLine1}
          <br />
          {heroConfig.titleLine2}{" "}
          <motion.em
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
            className="italic text-accent"
          >
            {heroConfig.titleAccent}
          </motion.em>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="text-lg leading-[1.7] text-warm-gray max-w-[520px] mb-11"
        >
          {heroConfig.description}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="flex gap-4 flex-col md:flex-row"
        >
          <a
            href="#contact"
            className="btn-shine inline-flex items-center gap-2.5 bg-accent text-white px-9 py-4 text-sm font-semibold tracking-[1px] uppercase no-underline rounded transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-dark hover:-translate-y-[3px] hover:shadow-[0_12px_35px_rgba(196,80,42,0.35)] group"
          >
            {heroConfig.ctaPrimary}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#realisations"
            className="inline-flex items-center gap-2.5 bg-transparent text-charcoal px-9 py-4 text-sm font-semibold tracking-[1px] uppercase no-underline rounded border-2 border-charcoal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-charcoal hover:text-cream hover:-translate-y-[3px] hover:shadow-[0_12px_35px_rgba(26,26,26,0.15)]"
          >
            {heroConfig.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Hero Visual */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.4 }}
        className="hidden lg:block absolute right-[60px] top-[140px] w-[500px] h-[600px]"
      >
        <div className="hero-img-overlay w-full h-full rounded-lg overflow-hidden">
          <img
            src={heroConfig.image}
            alt="Bâtiment Genève"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-[30px] -left-10 bg-off-white px-8 py-6 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] animate-[statFloat_3s_ease-in-out_infinite]">
          <div className="font-serif text-[42px] text-accent leading-none">
            {heroConfig.statNumber}
          </div>
          <div className="text-[13px] text-warm-gray uppercase tracking-[1px] mt-1">
            {heroConfig.statLabel}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

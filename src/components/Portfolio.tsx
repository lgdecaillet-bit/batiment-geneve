"use client";

import { motion } from "framer-motion";
import { portfolioConfig, portfolioItems } from "@/lib/config";
import { revealUp, revealScale, stagger, viewportConfig } from "@/lib/animations";

export default function Portfolio() {
  return (
    <section
      id="realisations"
      className="py-20 md:py-[120px] px-6 md:px-[60px]"
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
          {portfolioConfig.tag}
        </span>
        <div className="w-[60px] h-[3px] bg-accent mx-auto mb-5 rounded-sm" />
        <h2 className="font-serif text-[clamp(36px,4vw,52px)] tracking-[-1px] leading-[1.1]">
          {portfolioConfig.title}
        </h2>
        <p className="text-[17px] text-warm-gray max-w-[560px] mx-auto mt-5 leading-[1.7]">
          {portfolioConfig.subtitle}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.title}
            variants={revealScale}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={stagger((i + 1) * 0.1)}
            className={`portfolio-item-hover relative bg-light-stone rounded-lg overflow-hidden cursor-pointer flex items-center justify-center ${
              i === 0
                ? "lg:row-span-2 aspect-auto min-h-[300px] lg:min-h-0"
                : "aspect-[4/3]"
            }`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-warm-gray uppercase tracking-[2px] text-center">
                Photo
                <br />
                Chantier {i + 1}
              </span>
            )}
            <div className="portfolio-overlay">
              <div className="overlay-text-slide transform translate-y-2.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <h4 className="text-white text-base font-semibold">
                  {item.title}
                </h4>
                <span className="text-white/60 text-[13px]">
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

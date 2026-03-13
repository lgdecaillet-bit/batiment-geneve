"use client";

import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/config";
import { revealUp, stagger, viewport } from "@/lib/animations";

export default function Portfolio() {
  return (
    <section id="realisations" className="py-12 md:py-[100px] px-4 md:px-[60px] bg-concrete">
      <motion.div
        variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(0)}
        className="text-center mb-12"
      >
        <span className="text-red text-[11px] font-bold tracking-[3px] uppercase">Réalisations</span>
        <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] mt-3 font-normal">Nos derniers chantiers</h2>
      </motion.div>

      <div className="port-scroll flex gap-4 overflow-x-auto pb-5 scroll-snap-type-x-mandatory max-w-[1200px] mx-auto">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.title}
            variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={stagger(i + 1)}
            className="port-card-hover min-w-[260px] md:min-w-[320px] aspect-[4/3] bg-white border border-slate/[0.08] rounded-[10px] overflow-hidden relative scroll-snap-align-start flex-shrink-0 cursor-pointer flex items-center justify-center"
          >
            {item.image ? (
              <img src={item.image} alt={`${item.title} — ${item.location}`} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <span className="text-[11px] text-steel uppercase tracking-[2px] text-center">Chantier {i + 1}</span>
            )}
            <div className="port-overlay absolute inset-0 bg-gradient-to-t from-slate/90 via-transparent to-transparent opacity-0 transition-opacity duration-400 flex items-end p-5">
              <div className="port-ov-text transform translate-y-2 transition-transform duration-400">
                <h4 className="text-white text-[15px] font-bold">{item.title}</h4>
                <span className="text-white/50 text-xs">{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-4 text-xs text-steel tracking-[1px]">← Glissez pour voir plus →</p>
    </section>
  );
}

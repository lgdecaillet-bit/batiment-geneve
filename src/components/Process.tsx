"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/config";
import { revealUp, stagger, viewport } from "@/lib/animations";

export default function Process() {
  return (
    <section id="process" className="proc-orb py-12 md:py-[100px] px-5 md:px-[60px] bg-slate text-white">
      <motion.div
        variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(0)}
        className="text-center"
      >
        <span className="text-red text-[11px] font-bold tracking-[3px] uppercase">Notre Processus</span>
        <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] mt-3 text-white font-normal">De votre appel à la réception</h2>
      </motion.div>

      {/* Timeline */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto mt-[60px] relative gap-7 md:gap-0">
        {/* Line */}
        <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-white/10" />

        {processSteps.map((s, i) => (
          <motion.div
            key={s.num}
            variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={stagger(i + 1)}
            className="flex-1 md:pr-8 relative group"
          >
            <div className="w-3.5 h-3.5 border-[3px] border-red bg-slate rounded-full mb-7 relative z-[2] transition-all duration-300 group-hover:bg-red group-hover:shadow-[0_0_16px_rgba(185,28,28,0.4)]" />
            <div className="font-serif text-[13px] text-red mb-2.5 tracking-[1px]">Étape {s.num}</div>
            <h3 className="text-base font-bold mb-2">{s.title}</h3>
            <p className="text-[13.5px] leading-[1.7] text-white/45">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { servicesHeader, services } from "@/lib/config";
import { revealUp, stagger, viewport } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-[100px] px-4 md:px-[60px]">
      {/* Header */}
      <motion.div
        variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(0)}
        className="text-center mb-14"
      >
        <span className="text-red text-[11px] font-bold tracking-[3px] uppercase">{servicesHeader.tag}</span>
        <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] mt-3 font-normal">{servicesHeader.title}</h2>
      </motion.div>

      {/* Rows */}
      <div className="max-w-[1200px] mx-auto space-y-0.5">
        {services.map((s, i) => {
          const even = i % 2 === 1;
          return (
            <motion.div
              key={s.num}
              variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}
              transition={stagger((i % 3 + 1))}
              className={`srv-row-wrap grid grid-cols-1 lg:grid-cols-2 bg-white border border-slate/[0.08] rounded-[10px] overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-slate/[0.12] ${
                even ? "srv-row-even" : ""
              }`}
            >
              {/* Image */}
              <div className="h-[200px] md:h-[280px] lg:h-full bg-concrete flex items-center justify-center overflow-hidden">
                {s.image ? (
                  <img src={s.image} alt={`${s.title} — Genève`} className="srv-img-zoom w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(.22,1,.36,1)]" />
                ) : (
                  <span className="text-[11px] text-steel uppercase tracking-[2px] text-center">Photo<br />{s.title}</span>
                )}
              </div>
              {/* Body */}
              <div className="p-5 md:p-11 flex flex-col justify-center">
                <div className="font-serif text-[40px] md:text-[56px] text-red opacity-[.15] leading-none mb-2">{s.num}</div>
                <h3 className="font-serif text-[22px] md:text-[28px] mb-2 md:mb-3 font-normal">{s.title}</h3>
                <p className="text-[13.5px] md:text-[14.5px] leading-[1.7] text-steel mb-4 md:mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="bg-red-soft text-red text-xs font-bold px-3 py-[5px] rounded tracking-[.3px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

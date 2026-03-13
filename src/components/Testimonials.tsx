"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/config";
import { revealUp, stagger, viewport } from "@/lib/animations";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[active];

  return (
    <section id="avis" className="py-12 md:py-[100px] px-5 md:px-[60px]">
      <motion.div
        variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(0)}
        className="text-center mb-12"
      >
        <span className="text-red text-[11px] font-bold tracking-[3px] uppercase">Témoignages</span>
        <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] mt-3 font-normal">La confiance de nos clients</h2>
      </motion.div>

      <motion.div
        variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(1)}
        className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center"
      >
        {/* Quote mark */}
        <div className="hidden lg:block font-serif text-[160px] text-red opacity-[.15] leading-none select-none">
          &ldquo;
        </div>

        {/* Slider */}
        <div>
          <blockquote className="font-serif text-[18px] md:text-[clamp(22px,2.5vw,30px)] leading-[1.5] text-slate mb-6 font-normal italic">
            {t.text}
          </blockquote>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-red-soft flex items-center justify-center font-extrabold text-sm text-red">
              {t.initials}
            </div>
            <div>
              <strong className="block text-sm text-slate">{t.author}</strong>
              <span className="text-xs text-steel">{t.project}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-7">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Avis ${i + 1} — ${testimonials[i].author}`}
                aria-current={i === active ? "true" : undefined}
                className={`h-[3px] rounded-sm border-none p-0 cursor-pointer transition-all duration-300 ${
                  i === active ? "bg-red w-12" : "bg-slate/[0.12] w-8"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

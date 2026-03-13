"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, CheckCircle } from "lucide-react";
import { aboutFeatures } from "@/lib/config";
import { revealUp, stagger, viewport } from "@/lib/animations";

const icons = { Shield, Clock, Users, CheckCircle } as const;

export default function About() {
  return (
    <section id="equipe" className="py-12 md:py-[100px] px-4 md:px-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] max-w-[1200px] mx-auto bg-white border border-slate/[0.08] rounded-xl overflow-hidden">
        {/* Left — Dark */}
        <motion.div
          variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(0)}
          className="bg-slate p-6 md:p-14 flex flex-col justify-center text-white"
        >
          <span className="text-red text-[11px] font-bold tracking-[3px] uppercase">Qui sommes-nous</span>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-normal leading-[1.15] mt-3 mb-5">
            (Nom Entreprise),<br />votre partenaire bâtiment à Genève
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/55 mb-3">
            Entreprise genevoise spécialisée dans les métiers du second œuvre, nous intervenons sur l&apos;ensemble du canton pour des travaux de plâtrerie, peinture, gypserie, isolation et rénovation complète.
          </p>
          <p className="text-[15px] leading-[1.8] text-white/55">
            Nous privilégions la qualité d&apos;exécution, le respect des délais et une communication transparente — pour particuliers, régies et entreprises.
          </p>
        </motion.div>

        {/* Right — Features */}
        <motion.div
          variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} transition={stagger(2)}
          className="p-5 md:p-14 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutFeatures.map((f) => {
              const Icon = icons[f.icon];
              return (
                <div
                  key={f.title}
                  className="p-5 bg-off-white rounded-lg border border-slate/[0.08] transition-all duration-300 hover:border-red hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 bg-red-soft rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-[18px] h-[18px] text-red" />
                  </div>
                  <h4 className="text-sm font-bold mb-1">{f.title}</h4>
                  <p className="text-[12.5px] text-steel leading-[1.6]">{f.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

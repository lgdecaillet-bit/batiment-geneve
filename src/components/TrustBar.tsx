"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, Users } from "lucide-react";
import { trustItems, type TrustIcon } from "@/lib/config";
import { revealUp, stagger, viewportConfig } from "@/lib/animations";

const iconMap: Record<TrustIcon, React.ComponentType<{ className?: string }>> =
  {
    Shield,
    Clock,
    CheckCircle,
    Users,
  };

export default function TrustBar() {
  return (
    <div className="flex justify-center flex-wrap gap-6 md:gap-[60px] px-6 md:px-[60px] py-8 md:py-12 border-t border-b border-charcoal/[0.06]">
      {trustItems.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <motion.div
            key={item.text}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={stagger((i + 1) * 0.1)}
            className="flex items-center gap-3.5 text-sm text-warm-gray font-medium transition-all duration-300 hover:text-charcoal hover:-translate-y-0.5 group"
          >
            <div className="w-10 h-10 bg-light-stone rounded-full flex items-center justify-center transition-all duration-400 group-hover:bg-accent">
              <Icon className="w-5 h-5 text-accent transition-colors duration-400 group-hover:text-white" />
            </div>
            {item.text}
          </motion.div>
        );
      })}
    </div>
  );
}

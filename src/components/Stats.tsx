"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/config";
import { revealUp, stagger, viewportConfig } from "@/lib/animations";

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const duration = 2000;
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
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
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto px-6 md:px-[60px] pb-20 md:pb-[120px]"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={stagger((i + 1) * 0.1)}
          className={`text-center py-10 px-5 transition-transform duration-400 hover:-translate-y-1 ${
            i < stats.length - 1 ? "border-r border-charcoal/[0.08]" : ""
          } ${i === 1 ? "max-lg:border-r-0" : ""}`}
        >
          <div className="font-serif text-[52px] text-accent leading-none">
            <AnimatedCounter
              target={stat.target}
              suffix={stat.suffix}
              inView={inView}
            />
          </div>
          <div className="text-sm text-warm-gray uppercase tracking-[1px] mt-2">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

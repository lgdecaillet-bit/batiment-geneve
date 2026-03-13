"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { site, heroData, heroStats } from "@/lib/config";

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let st: number | null = null;
    function step(ts: number) {
      if (!st) st = ts;
      const p = Math.min((ts - st) / 1800, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, target]);
  return <>{val}{suffix}</>;
}

export default function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [stripInView, setStripInView] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStripInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite obtenir un devis.")}`;

  return (
    <section id="top" aria-label="Plâtrerie, peinture et rénovation à Genève" className="relative min-h-[100svh] md:h-[85vh] md:min-h-[560px] md:max-h-[800px] overflow-hidden flex items-end">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-[center_30%]"
        role="img"
        aria-label="Chantier de rénovation à Genève"
        style={{ backgroundImage: `url(${heroData.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate/[0.92] via-slate/40 to-slate/[0.15]" />

      {/* Content */}
      <div className="relative z-[2] px-5 md:px-[60px] pb-40 md:pb-36 w-full max-w-[760px]">
        <div className="inline-flex items-center gap-2 bg-red text-white px-4 py-1.5 rounded text-[11px] font-extrabold tracking-[2px] uppercase mb-6">
          {heroData.label}
        </div>
        <h1 className="font-serif text-[32px] md:text-[clamp(40px,5.5vw,68px)] leading-[1.12] text-white mb-4 font-normal">
          {heroData.titleStart}<br />{heroData.titleEnd}{" "}
          <i className="italic text-white/55">{heroData.titleItalic}</i>
        </h1>
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/60 max-w-[520px] mb-6 md:mb-8">
          {heroData.description}
        </p>
        <div className="flex gap-3 flex-col md:flex-row flex-wrap">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-slate px-7 py-3.5 rounded-md text-sm font-bold no-underline transition-all duration-300 tracking-[.2px] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          >
            <Phone className="w-4 h-4 text-red" />
            {site.phone}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-white/25 text-white px-7 py-3.5 rounded-md text-sm font-bold no-underline transition-all duration-300 hover:border-white hover:bg-white/[0.08] hover:-translate-y-0.5"
          >
            Demander un Devis →
          </a>
        </div>
      </div>

      {/* Stats Strip */}
      <div
        ref={stripRef}
        className="absolute bottom-0 left-0 right-0 z-[3] bg-off-white grid grid-cols-2 lg:grid-cols-4 border-t-[3px] border-red"
      >
        {heroStats.map((s, i) => (
          <div
            key={s.label}
            className={`py-4 px-4 md:py-6 md:px-8 text-center transition-colors duration-300 hover:bg-concrete ${
              i < heroStats.length - 1 ? "border-r border-slate/[0.08]" : ""
            } ${i === 1 ? "max-lg:border-r-0" : ""}`}
          >
            <div className="font-serif text-2xl md:text-4xl text-red leading-none">
              <Counter target={s.target} suffix={s.suffix} inView={stripInView} />
            </div>
            <div className="text-[10px] md:text-xs text-steel uppercase tracking-[1px] mt-1 font-semibold">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

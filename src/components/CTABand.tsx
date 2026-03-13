"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/config";

export default function CTABand() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite obtenir un devis.")}`;

  return (
    <section id="contact" className="cta-pattern bg-red py-12 md:py-20 px-5 md:px-[60px] text-center">
      <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-white mb-3.5 relative font-normal">
        Vous avez un projet ?
      </h2>
      <p className="text-[17px] text-white/75 mb-9 relative">
        Devis gratuit sous 48h, sans engagement. Nous intervenons dans tout le canton de Genève.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 relative items-center">
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 bg-white text-slate px-8 py-4 rounded-md text-sm font-bold no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)]"
        >
          <Phone className="w-[18px] h-[18px] text-red" />
          {site.phone}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-white/35 text-white px-8 py-3.5 rounded-md text-sm font-bold no-underline transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
        >
          Envoyer un Message →
        </a>
      </div>
    </section>
  );
}

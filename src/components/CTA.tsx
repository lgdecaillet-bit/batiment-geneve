"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { ctaConfig, siteConfig } from "@/lib/config";
import { revealUp, stagger, viewportConfig } from "@/lib/animations";

export default function CTA() {
  const whatsappUrl = `https://wa.me/41763944218?text=${encodeURIComponent(
    "Bonjour, je suis intéressé(e) par vos services. Pourriez-vous me donner plus d'informations ?"
  )}`;

  return (
    <section
      id="contact"
      className="orb-center py-20 md:py-[120px] px-6 md:px-[60px] text-center"
    >
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        transition={stagger(0)}
      >
        <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent mb-5">
          {ctaConfig.tag}
        </span>
        <div className="w-[60px] h-[3px] bg-accent mx-auto mb-5 rounded-sm" />
        <h2 className="font-serif text-[clamp(36px,5vw,56px)] tracking-[-1px] mb-5 relative whitespace-pre-line">
          {ctaConfig.title}
        </h2>
        <p className="text-lg text-warm-gray mb-10 relative">
          {ctaConfig.subtitle}
        </p>

        {/* CTA Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine inline-flex items-center gap-2.5 bg-accent text-white px-9 py-4 text-sm font-semibold tracking-[1px] uppercase no-underline rounded transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-dark hover:-translate-y-[3px] hover:shadow-[0_12px_35px_rgba(196,80,42,0.35)] group relative"
        >
          {ctaConfig.cta}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Contact Methods */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-12 relative">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-3 text-[15px] text-warm-gray no-underline transition-all duration-300 hover:text-charcoal hover:-translate-y-0.5"
          >
            <Phone className="w-[18px] h-[18px] text-accent" />
            <strong className="text-charcoal">{siteConfig.phone}</strong>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-[15px] text-warm-gray no-underline transition-all duration-300 hover:text-charcoal hover:-translate-y-0.5"
          >
            <Mail className="w-[18px] h-[18px] text-accent" />
            <strong className="text-charcoal">{siteConfig.emailDisplay}</strong>
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[15px] text-warm-gray no-underline transition-all duration-300 hover:text-charcoal hover:-translate-y-0.5"
          >
            <MapPin className="w-[18px] h-[18px] text-accent" />
            <strong className="text-charcoal">{siteConfig.address}</strong>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

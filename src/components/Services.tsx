"use client";

import { motion } from "framer-motion";
import { Box, RectangleHorizontal, Flag } from "lucide-react";
import {
  servicesConfig,
  services,
  type ServiceIcon,
} from "@/lib/config";
import { revealUp, stagger, viewportConfig } from "@/lib/animations";

const iconMap: Record<
  ServiceIcon,
  React.ComponentType<{ className?: string }>
> = {
  Box,
  RectangleHorizontal,
  Flag,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-[120px] px-6 md:px-[60px]">
      {/* Header */}
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        transition={stagger(0)}
        className="text-center mb-20"
      >
        <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent mb-5">
          {servicesConfig.tag}
        </span>
        <div className="w-[60px] h-[3px] bg-accent mx-auto mb-5 rounded-sm" />
        <h2 className="font-serif text-[clamp(36px,4vw,52px)] tracking-[-1px] leading-[1.1] whitespace-pre-line">
          {servicesConfig.title}
        </h2>
        <p className="text-[17px] text-warm-gray max-w-[560px] mx-auto mt-5 leading-[1.7]">
          {servicesConfig.subtitle}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {services.map((service, i) => {
          const Icon = service.icon ? iconMap[service.icon] : null;
          const staggerIndex = (i % 3) + 1;

          return (
            <motion.div
              key={service.title}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={stagger(staggerIndex * 0.1)}
              className="service-card-hover bg-off-white p-[36px] pt-[44px] rounded-lg border border-charcoal/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              {/* Image or Icon */}
              {service.image ? (
                <div className="w-[calc(100%+72px)] -mx-[36px] -mt-[44px] mb-6 h-[200px] overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-img w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
              ) : Icon ? (
                <div className="service-icon-box w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6 transition-all duration-400">
                  <Icon className="w-7 h-7 text-accent transition-colors duration-400" />
                </div>
              ) : null}

              <h3 className="font-serif text-[22px] mb-3 tracking-[-0.3px]">
                {service.title}
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-warm-gray">
                {service.description}
              </p>

              {/* Service List */}
              <ul className="mt-[18px] pt-[18px] border-t border-charcoal/[0.06] list-none">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="service-list-arrow text-[13.5px] text-warm-gray py-[5px] transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

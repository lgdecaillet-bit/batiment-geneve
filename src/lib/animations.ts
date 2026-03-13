import type { Variants, Transition } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = {
  duration: 0.8,
  ease: ease,
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const stagger = (delay: number): Transition => ({
  ...transition,
  delay,
});

export const viewportConfig = {
  once: true,
  margin: "0px 0px -40px 0px" as const,
};

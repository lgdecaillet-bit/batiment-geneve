import type { Variants, Transition } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const transition: Transition = { duration: 0.7, ease };

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = (i: number): Transition => ({
  ...transition,
  delay: i * 0.08,
});

export const viewport = { once: true, margin: "0px 0px -30px 0px" as const };

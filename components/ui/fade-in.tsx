"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "motion/react";

type FadeInDirection = "up" | "left" | "right" | "scale" | "none";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: FadeInDirection;
}

const variants: Record<FadeInDirection, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  up:    { initial: { opacity: 0, y: 20 },      animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -28 },     animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 28 },      animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 } },
  none:  { initial: { opacity: 0 },             animate: { opacity: 1 } },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const { initial, animate } = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : variants[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

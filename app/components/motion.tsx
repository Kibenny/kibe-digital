"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 24 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
      <span className="h-2 w-2 rounded-full bg-orange-burst" />
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}

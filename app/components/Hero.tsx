"use client";

import { motion } from "motion/react";
import { STATS, TAGS, WHATSAPP } from "@/app/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grid-bg flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-muted"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-3" />
          Eldoret, Kenya · Available for projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mx-auto max-w-5xl text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.98] font-semibold tracking-tight"
        >
          Websites &amp; Graphics{" "}
          <span className="text-gradient">That Grow</span> Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Kibet Web &amp; Graphic Studio delivers modern websites, standout
          visual designs, and strategic ads — built to convert visitors into
          loyal customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#flagship"
            className="w-full rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105 sm:w-auto"
          >
            See Flagship App
          </a>
          <a
            href="#portfolio"
            className="w-full rounded-full border border-line bg-surface px-8 py-4 text-base font-semibold transition-colors hover:border-accent sm:w-auto"
          >
            View Portfolio
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-line px-8 py-4 text-base font-semibold text-muted transition-colors hover:border-accent hover:text-ink sm:w-auto"
          >
            WhatsApp Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-line pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-line py-4">
        <div className="animate-marquee flex w-max gap-0">
          {[...TAGS, ...TAGS, ...TAGS, ...TAGS].map((t, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-3 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-muted"
            >
              <span className="text-accent">✦</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

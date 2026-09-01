"use client";

import { motion } from "motion/react";
import { WHATSAPP } from "@/app/lib/site";

export default function Contact() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          Ready to Grow{" "}
          <span className="text-gradient">Your Business Online?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Let&rsquo;s build something great together. Reach out via WhatsApp — I
          typically respond within hours.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-9 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
        >
          Start a Project →
        </a>
      </motion.div>
    </section>
  );
}

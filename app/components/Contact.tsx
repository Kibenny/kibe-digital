"use client";

import { motion } from "motion/react";
import { EMAIL, PHONE, PHONE_TEL, WHATSAPP } from "@/app/lib/site";

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-t-2 border-ink px-6 pt-32 pb-28 lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-10 hidden h-24 w-24 rotate-12 rounded-2xl border-2 border-ink bg-orange-burst/30 shadow-[4px_4px_0_0_rgba(17,17,17,1)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-10 hidden h-20 w-20 -rotate-6 rounded-full border-2 border-ink bg-butter/50 shadow-[4px_4px_0_0_rgba(17,17,17,1)] lg:block"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
          <span className="h-2.5 w-2.5 rounded-full bg-sage" />
          Available for new projects
        </span>

        <h2 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Ready to Grow{" "}
          <span className="text-gradient">Your Business Online?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-ink-soft">
          Let&rsquo;s build something great together. Reach out via WhatsApp — I
          typically respond within hours.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-orange-burst px-9 py-4 text-lg font-bold text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Start a Project →
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-4 text-base font-bold text-ink shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            📞 {PHONE}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-4 text-base font-bold text-ink shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            ✉️ {EMAIL}
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 border-t-2 border-ink pt-8">
          <div>
            <div className="text-3xl font-bold">24h</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              Response Time
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">Free</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              Consultation
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">Local</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              Eldoret, Kenya
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

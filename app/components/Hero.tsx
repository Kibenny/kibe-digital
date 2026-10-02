"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { STATS, HERO_FEATURES, WHATSAPP } from "@/app/lib/site";
import Typewriter from "./Typewriter";

function CheckIcon() {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg border-2 border-ink bg-sage/20">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b-2 border-ink bg-warm-100 px-6 pt-28 pb-16 lg:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-20 hidden h-40 w-40 rotate-12 rounded-3xl border-2 border-ink bg-butter shadow-[6px_6px_0_0_rgba(17,17,17,1)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-40 hidden h-28 w-28 -rotate-6 rounded-full border-2 border-ink bg-sage shadow-[5px_5px_0_0_rgba(17,17,17,1)] lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
              <span className="h-2.5 w-2.5 rounded-full bg-sage" />
              Full Stack Developer · Eldoret, Kenya · Available for projects
            </span>

            <h1 className="mt-7 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-tight">
              Websites &amp; Graphics{" "}
              <span className="text-gradient">That Grow</span> Your Business
            </h1>

            <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-ink-soft">
              Kibe-Digital delivers modern websites, standout
              visual designs, and strategic ads — built to convert visitors
              into loyal customers.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-orange-burst px-8 py-3.5 text-base font-bold text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                View Portfolio
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-white px-8 py-3.5 text-base font-bold text-ink shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                WhatsApp Me
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-warm-50 px-8 py-3.5 text-base font-bold text-ink-soft shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border-2 border-ink bg-white p-5 shadow-[8px_8px_0_0_rgba(17,17,17,1)] sm:p-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Site Features
              </span>

              <div className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-burst">
                  Standard in every build
                </p>
                <ul className="mt-2 divide-y-2 divide-ink border-y-2 border-ink">
                  {HERO_FEATURES.standard.map((f) => (
                    <li key={f} className="flex items-center gap-3 py-2.5">
                      <CheckIcon />
                      <span className="text-sm font-bold sm:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-sage">
                  Available on request
                </p>
                <ul className="mt-2 divide-y-2 divide-ink border-y-2 border-ink">
                  {HERO_FEATURES.onRequest.map((f) => (
                    <li key={f} className="flex items-center gap-3 py-2.5">
                      <CheckIcon />
                      <span className="text-sm font-bold sm:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-warm-50 px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              >
                See the work ↗
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t-2 border-ink pt-8"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-16 border-y-2 border-ink bg-ink py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            <Typewriter
              words={[
                "Web Design",
                "Graphic Design",
                "Ads Management",
                "Google Business",
                "Brand Identity",
                "Social Media",
              ]}
              prefix="Services: "
              className="uppercase tracking-[0.2em]"
            />
          </span>
        </div>
      </div>
    </section>
  );
}

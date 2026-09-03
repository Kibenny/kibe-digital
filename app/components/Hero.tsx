"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { STATS, WHATSAPP } from "@/app/lib/site";
import Typewriter from "./Typewriter";

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
              Eldoret, Kenya · Available for projects
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
            className="relative hidden lg:block"
          >
            <div className="rounded-3xl border-2 border-ink bg-white p-8 shadow-[8px_8px_0_0_rgba(17,17,17,1)]">
              <div className="flex items-center justify-between border-b-2 border-ink pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-ink bg-orange-burst" />
                  <span className="h-3 w-3 rounded-full border border-ink bg-butter" />
                  <span className="h-3 w-3 rounded-full border border-ink bg-sage" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  kibe-digital.co.ke
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: "Big Idea", w: "w-full", c: "bg-warm-100" },
                  { label: "Smart Build", w: "w-11/12", c: "bg-sage/20" },
                  { label: "Brand Power", w: "w-4/5", c: "bg-orange-burst/10" },
                ].map((row) => (
                  <div key={row.label} className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {row.label}
                    </div>
                    <div className={`h-3 rounded-full border border-ink ${row.w} ${row.c}`} />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border-2 border-ink bg-butter/20 px-4 py-3">
                <span className="text-sm font-bold">Conversion Rate</span>
                <span className="rounded-full border-2 border-ink bg-sage px-3 py-1 text-sm font-bold text-white">
                  UP ↑
                </span>
              </div>
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

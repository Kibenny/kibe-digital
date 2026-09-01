"use client";

import { Reveal, SectionLabel, SectionTitle } from "./motion";
import { PROCESS } from "@/app/lib/site";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-line px-6 py-24 lg:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[520px] rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle className="mt-5">
            My Simple <span className="text-gradient">Process</span>
          </SectionTitle>
          <p className="mt-5 text-lg text-muted">
            From first conversation to final delivery — here&rsquo;s how I work with
            you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="glow-card group relative h-full p-8">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">
                  {p.step}
                </span>
                <h3 className="font-display mt-4 text-2xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
                <span className="font-display absolute right-6 top-6 text-6xl font-semibold text-line/50 transition-colors group-hover:text-accent/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}

          <Reveal delay={PROCESS.length * 0.06}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-accent to-accent-2 p-8 text-white">
              <div>
                <p className="font-display text-2xl font-semibold leading-snug">
                  Have an idea?
                </p>
                <p className="mt-2 text-sm opacity-90">
                  Jump straight in — your project starts with one message.
                </p>
              </div>
              <a
                href="https://wa.me/254740796763"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-bg transition-transform hover:scale-105"
              >
                Start Now →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

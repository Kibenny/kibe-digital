"use client";

import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { PROCESS, WHATSAPP } from "@/app/lib/site";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t-2 border-ink bg-warm-100 px-6 py-24 lg:px-10"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle className="mt-5">
            My Simple <span className="text-gradient">Process</span>
          </SectionTitle>
          <p className="mt-5 text-lg font-medium text-ink-soft">
            From first conversation to final delivery — here&rsquo;s how I work with
            you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06} className="h-full">
              <div className="relative flex h-full flex-col rounded-3xl border-2 border-ink bg-white p-8 shadow-[4px_4px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(17,17,17,1)]">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-burst">
                  {p.step}
                </span>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
                <span className="absolute right-6 top-6 text-6xl font-bold text-ink/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}

          <Reveal delay={PROCESS.length * 0.06} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-ink bg-sage p-8 text-white shadow-[6px_6px_0_0_rgba(17,17,17,1)]">
              <div>
                <p className="text-2xl font-bold leading-snug">
                  Have an idea?
                </p>
                <p className="mt-2 text-sm font-medium opacity-90">
                  Jump straight in — your project starts with one message.
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 text-sm font-bold text-ink shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
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
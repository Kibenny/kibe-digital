"use client";

import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { SERVICES } from "@/app/lib/site";

const CARD_STYLES = [
  "border-2 border-ink bg-white shadow-[4px_4px_0_0_rgba(17,17,17,1)]",
  "border-2 border-ink bg-butter/30 shadow-[4px_4px_0_0_rgba(17,17,17,1)]",
  "border-2 border-ink bg-sage/20 shadow-[4px_4px_0_0_rgba(17,17,17,1)]",
  "border-2 border-ink bg-orange-burst/10 shadow-[4px_4px_0_0_rgba(17,17,17,1)]",
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>What I Do</Eyebrow>
          <SectionTitle className="mt-5">
            Services Built for <span className="text-gradient">Real Results</span>
          </SectionTitle>
          <p className="mt-5 text-lg font-medium text-ink-soft">
            Tailored digital solutions for businesses and institutions looking
            to stand out and grow online.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <div
                className={`group flex h-full flex-col rounded-3xl p-7 transition-all hover:-translate-y-1 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_rgba(17,17,17,1)] ${CARD_STYLES[i]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-white text-3xl shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                    {s.icon}
                  </span>
                  <span className="text-4xl font-bold text-ink/20">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
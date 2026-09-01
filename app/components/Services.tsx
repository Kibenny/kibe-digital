"use client";

import { Reveal, SectionLabel, SectionTitle } from "./motion";
import { SERVICES } from "@/app/lib/site";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>What I Do</SectionLabel>
          <SectionTitle className="mt-5">
            Services Built for <span className="text-gradient">Real Results</span>
          </SectionTitle>
          <p className="mt-5 text-lg text-muted">
            Tailored digital solutions for businesses and institutions looking
            to stand out and grow online.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <div className="glow-card group flex h-full flex-col p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-raised text-3xl transition-transform group-hover:scale-110">
                    {s.icon}
                  </span>
                  <span className="font-display text-5xl font-semibold text-line/60">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display mt-8 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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

"use client";

import { Reveal, SectionLabel, SectionTitle } from "./motion";
import { APP_FEATURES, APP_POINTS, APP_STATS } from "@/app/lib/site";

export default function Flagship() {
  return (
    <section
      id="flagship"
      className="relative overflow-hidden border-t border-line px-6 py-24 lg:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[560px] rounded-full bg-accent-2/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>Flagship Product</SectionLabel>
          <SectionTitle className="mt-5">
            Built by a Kenyan teacher,{" "}
            <span className="text-gradient">for Kenyan teachers</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="glow-card flex h-full flex-col justify-between p-8 sm:p-10">
              <h3 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
                Mwalimu Briefcase Is More Than an App.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                This is a full digital workspace designed around the real
                day-to-day life of teachers. Timetables, lesson plans,
                attendance, TPAD, documents, and AI support all live in one
                focused system built from classroom experience.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-8">
                {APP_STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mwalimu-briefcase.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-center text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Launch The App
                </a>
                <a
                  href="https://github.com/Kibenny/mwalimu-briefcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line bg-surface px-7 py-3.5 text-center text-sm font-semibold transition-colors hover:border-accent"
                >
                  View Build Details
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-line bg-raised p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-3">
                  Mwalimu Briefcase
                </p>
                <h4 className="font-display mt-2 text-2xl font-semibold">
                  A teacher operating system
                </h4>
                <p className="mt-1 text-sm text-muted">
                  for planning, organizing, tracking, and teaching with less
                  friction.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-line rounded-2xl border border-line bg-surface">
                {APP_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-display text-lg font-semibold">
                      {f.title}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
                      {f.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row items-start justify-between rounded-2xl border border-accent/40 bg-accent/5 p-6">
                <p className="text-base font-semibold">Studio Signal</p>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  If you need a serious digital product for your business, this
                  is the level I build at.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {APP_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-display mt-3 text-base font-semibold">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

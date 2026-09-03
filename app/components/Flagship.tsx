"use client";

import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { APP_FEATURES, APP_POINTS, APP_STATS } from "@/app/lib/site";

export default function Flagship() {
  return (
    <section
      id="flagship"
      className="relative overflow-hidden border-t-2 border-ink bg-warm-100 px-6 py-24 lg:px-10"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Flagship Product</Eyebrow>
          <SectionTitle className="mt-5">
            Built by a Kenyan teacher,{" "}
            <span className="text-gradient">for Kenyan teachers</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-ink bg-white p-8 shadow-[6px_6px_0_0_rgba(17,17,17,1)] sm:p-10">
              <div>
                <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Mwalimu Briefcase Is More Than an App.
                </h3>
                <p className="mt-6 text-lg font-medium leading-relaxed text-ink-soft">
                  This is a full digital workspace designed around the real
                  day-to-day life of teachers. Timetables, lesson plans,
                  attendance, TPAD, documents, and AI support all live in one
                  focused system built from classroom experience.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-ink pt-8">
                {APP_STATS.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold sm:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mwalimu-briefcase.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ink bg-orange-burst px-7 py-3.5 text-center text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Launch The App
                </a>
                <a
                  href="https://github.com/Kibenny/mwalimu-briefcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ink bg-white px-7 py-3.5 text-center text-sm font-bold shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  View Build Details
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border-2 border-ink bg-butter/30 p-7 shadow-[4px_4px_0_0_rgba(17,17,17,1)]">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink-soft">
                  Mwalimu Briefcase
                </p>
                <h4 className="mt-2 text-2xl font-bold">
                  A teacher operating system
                </h4>
                <p className="mt-1 text-sm font-medium text-ink-soft">
                  for planning, organizing, tracking, and teaching with less
                  friction.
                </p>
              </div>

              <div className="flex flex-col divide-y-2 divide-ink rounded-2xl border-2 border-ink bg-white shadow-[4px_4px_0_0_rgba(17,17,17,1)]">
                {APP_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-lg font-bold">{f.title}</span>
                    <span className="w-fit rounded-full border-2 border-ink bg-sage/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {f.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-3 rounded-2xl border-2 border-ink bg-orange-burst/10 p-6 shadow-[4px_4px_0_0_rgba(17,17,17,1)] sm:flex-row sm:items-center sm:justify-between">
                <p className="text-base font-bold">Studio Signal</p>
                <p className="max-w-md text-sm font-medium leading-relaxed text-ink-soft">
                  If you need a serious digital product for your business, this
                  is the level I build at.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {APP_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border-2 border-ink bg-white p-6 shadow-[3px_3px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_0_rgba(17,17,17,1)]">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-burst">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-3 text-base font-bold">{p.title}</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink-soft">
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
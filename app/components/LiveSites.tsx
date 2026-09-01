"use client";

import { Reveal, SectionLabel, SectionTitle } from "./motion";
import { LIVE_SITES } from "@/app/lib/site";

export default function LiveSites() {
  return (
    <section
      id="live-sites"
      className="border-t border-line px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>Live &amp; Online</SectionLabel>
          <SectionTitle className="mt-5">
            Live <span className="text-gradient">Websites</span>
          </SectionTitle>
          <p className="mt-5 text-lg text-muted">
            Real websites built and deployed for clients — click to visit them
            live.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LIVE_SITES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card group flex h-full items-center gap-5 p-6"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-raised text-2xl transition-transform group-hover:scale-110">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display truncate text-lg font-semibold">
                    {s.name}
                  </h3>
                  <p className="mt-1 truncate text-sm text-accent-2">
                    {s.url.replace("https://www.", "")}
                  </p>
                </div>
                <span className="ml-auto shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

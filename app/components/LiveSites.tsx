"use client";

import Image from "next/image";
import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { LIVE_SITES } from "@/app/lib/site";

const SITE_SCREENSHOTS: Record<string, string> = {
  "Edward Limo Educational Centre": "/portfolio/site-edward-limo.png",
  "Tindinyo Falls Resort": "/portfolio/site-tindinyo-falls.png",
  "Elite Media Creations Kenya": "/portfolio/site-elite-media.png",
  "Living Water Tabernacle Church": "/portfolio/site-living-water.png",
  "Sychar Farm Homestay": "/portfolio/site-sychar-farm.png",
};

export default function LiveSites() {
  return (
    <section
      id="live-sites"
      className="border-t-2 border-ink bg-warm-100 px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Live &amp; Online</Eyebrow>
          <SectionTitle className="mt-5">
            Live <span className="text-gradient">Websites</span>
          </SectionTitle>
          <p className="mt-5 text-lg font-medium text-ink-soft">
            Real websites built and deployed for clients — click to visit them
            live.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LIVE_SITES.map((s, i) => {
            const shot = SITE_SCREENSHOTS[s.name];
            return (
              <Reveal key={s.name} delay={i * 0.06} className="h-full">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-[4px_4px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(17,17,17,1)]"
                >
                  <div className="relative h-[200px] w-full bg-warm-50">
                    {shot ? (
                      <Image
                        src={shot}
                        alt={s.name}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-white text-2xl shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                          {s.icon}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold">{s.name}</h3>
                      <p className="mt-1 truncate text-sm font-semibold text-sage">
                        {s.url.replace("https://www.", "")}
                      </p>
                    </div>
                    <span className="ml-3 shrink-0 text-lg font-bold text-orange-burst opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

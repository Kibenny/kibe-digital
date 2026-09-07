"use client";

import { useState, useEffect } from "react";
import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { LIVE_SITES, WHATSAPP } from "@/app/lib/site";

const SITE_SHOTS: Record<string, string> = {
  "SHED Foundation": "/portfolio/site-shed-foundation.png",
  "Edward Limo Educational Centre": "/portfolio/site-edward-limo.png",
  "Tindinyo Falls Resort": "/portfolio/site-tindinyo-falls.png",
  "Elite Media Creations Kenya": "/portfolio/site-elite-media.png",
  "Sychar Farm Homestay": "/portfolio/site-sychar-farm.png",
};

type GraphicItem = { title: string; src: string; span: string };

const GRAPHIC_ITEMS: GraphicItem[] = [
  { title: "Feature Poster", src: "/portfolio/graphic-01.jpg", span: "col-span-1 row-span-2" },
  { title: "Social Ad", src: "/portfolio/graphic-02.jpg", span: "col-span-1 row-span-2" },
  { title: "Brand Design", src: "/portfolio/graphic-03.jpg", span: "col-span-1 row-span-1" },
  { title: "Social Ad", src: "/portfolio/graphic-04.jpg", span: "col-span-1 row-span-1" },
  { title: "Social Ad", src: "/portfolio/graphic-05.jpg", span: "col-span-1 row-span-1" },
  { title: "Promo Poster", src: "/portfolio/graphic-06.jpg", span: "col-span-1 row-span-2" },
  { title: "Wide Banner", src: "/portfolio/graphic-07.jpg", span: "col-span-2 row-span-1" },
  { title: "Poster", src: "/portfolio/graphic-08.jpg", span: "col-span-1 row-span-2" },
  { title: "Brand Design", src: "/portfolio/graphic-09.jpg", span: "col-span-1 row-span-1" },
  { title: "Social Ad", src: "/portfolio/graphic-10.jpg", span: "col-span-1 row-span-1" },
  { title: "Flyer", src: "/portfolio/graphic-11.jpg", span: "col-span-1 row-span-2" },
  { title: "Social Ad", src: "/portfolio/graphic-12.jpg", span: "col-span-1 row-span-1" },
  { title: "Brand Design", src: "/portfolio/graphic-13.jpg", span: "col-span-1 row-span-1" },
  { title: "Flyer", src: "/portfolio/graphic-14.jpg", span: "col-span-1 row-span-2" },
  { title: "Poster", src: "/portfolio/graphic-15.jpg", span: "col-span-1 row-span-2" },
  { title: "Promo Poster", src: "/portfolio/graphic-16.jpg", span: "col-span-1 row-span-2" },
  { title: "Flyer", src: "/portfolio/graphic-17.jpg", span: "col-span-1 row-span-2" },
  { title: "Logo & Branding", src: "/portfolio/graphic-00.jpg", span: "col-span-1 row-span-1" },
];

function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-ink text-xl font-bold text-white transition-colors hover:bg-white hover:text-ink"
      >
        ✕
      </button>
      <div className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl border-2 border-white object-contain shadow-2xl"
        />
        <p className="text-sm font-bold uppercase tracking-widest text-white">{title}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section
      id="portfolio"
      className="border-t-2 border-ink px-6 pt-32 pb-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Selected Work</Eyebrow>
          <SectionTitle className="mt-5">
            Portfolio <span className="text-gradient">Highlights</span>
          </SectionTitle>
          <p className="mt-5 text-lg font-medium text-ink-soft">
            A selection of websites, brand designs, and ad campaigns created for
            clients across various industries.
          </p>
        </Reveal>

        {/* ── Websites ── */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-bold">
              Websites <span className="text-gradient">Live Now</span>
            </h2>
            <p className="mt-2 text-base font-medium text-ink-soft">
              Real sites built and deployed for clients — click to visit.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIVE_SITES.map((s, i) => {
              const shot = SITE_SHOTS[s.name];
              return (
                <Reveal key={s.name} delay={i * 0.06}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-[340px] flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-[4px_4px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(17,17,17,1)]"
                  >
                    <div className="relative h-[230px] w-full overflow-hidden bg-warm-100">
                      {shot ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={shot}
                          alt={s.name}
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-white text-2xl shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                            {s.icon}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <h4 className="text-base font-bold leading-snug">{s.name}</h4>
                      <span className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-burst">
                        View Live Site <span className="text-ink">→</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── Graphics — Collage ── */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold">
              Graphic <span className="text-gradient">Design Work</span>
            </h2>
            <p className="mt-2 text-base font-medium text-ink-soft">
              Posters, flyers, social ads, and brand materials — click any image
              to view it full size.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4 auto-rows-[220px] sm:auto-rows-[260px] lg:grid-cols-4 lg:auto-rows-[280px]">
            {GRAPHIC_ITEMS.map((item, i) => (
              <Reveal key={item.title + i} delay={i * 0.04}>
                <button
                  onClick={() => setLightbox({ src: item.src, title: item.title })}
                  className={`group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-2xl border-2 border-ink bg-warm-100 text-left shadow-[3px_3px_0_0_rgba(17,17,17,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_rgba(17,17,17,1)] ${item.span}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  {/* magnify badge — always visible */}
                  <span className="absolute right-3 top-3 grid h-9 w-9 translate-x-1 -translate-y-1 place-items-center rounded-full border-2 border-ink bg-warm shadow-[2px_2px_0_0_rgba(17,17,17,1)] text-sm font-black text-ink opacity-100 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-orange-burst group-hover:text-white">
                    ⤢
                  </span>
                  {/* caption — slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-orange-burst" />
                      {item.title}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Ads ── */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold">
              Ad <span className="text-gradient">Campaigns</span>
            </h2>
            <p className="mt-2 text-base font-medium text-ink-soft">
              Strategic ad creatives for Meta platforms.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border-2 border-ink bg-white p-7 shadow-[4px_4px_0_0_rgba(17,17,17,1)] sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-warm-50 text-xl shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                  📈
                </span>
                <div>
                  <p className="text-base font-bold">
                    Campaign case studies are coming soon.
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    Reach out to discuss measurable results from your Meta ads.
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border-2 border-ink bg-orange-burst px-5 py-2.5 text-sm font-bold text-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              >
                Ask About Ads →
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Live Sites ── */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold">
              Live <span className="text-gradient">Client Sites</span>
            </h2>
            <p className="mt-2 text-base font-medium text-ink-soft">
              Deployed websites live in production — click to visit.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LIVE_SITES.map((s, i) => {
              const shot = SITE_SHOTS[s.name];
              return (
                <Reveal key={s.name} delay={i * 0.06}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border-2 border-ink bg-white px-5 py-4 shadow-[3px_3px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_rgba(17,17,17,1)]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-warm-50 text-xl shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                      {s.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-bold">{s.name}</h4>
                      <p className="truncate text-xs font-semibold text-sage">
                        {s.url.replace("https://www.", "")}
                      </p>
                    </div>
                    <span className="ml-auto shrink-0 text-base font-bold text-orange-burst opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

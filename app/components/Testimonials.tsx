"use client";

import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { TESTIMONIALS } from "@/app/lib/site";

const CARD_STYLES = [
  "bg-white",
  "bg-butter/30",
  "bg-sage/20",
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-t-2 border-ink px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Testimonials</Eyebrow>
          <SectionTitle className="mt-5">
            What clients <span className="text-gradient">say</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure
                className={`flex h-full flex-col rounded-2xl border-2 border-ink p-6 shadow-[4px_4px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(17,17,17,1)] ${CARD_STYLES[i % CARD_STYLES.length]}`}
              >
                <span
                  aria-hidden
                  className="text-5xl leading-none text-orange-burst"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-base font-medium leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t-2 border-ink pt-4">
                  <div className="text-base font-bold">{t.name}</div>
                  <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t.role}
                  </div>
                  {t.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-white px-3 py-1 text-[11px] font-bold shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
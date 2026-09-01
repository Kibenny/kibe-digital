"use client";

import { Reveal, SectionLabel, SectionTitle } from "./motion";
import { EMAIL, PHONE, PHONE_TEL, SKILLS, WHATSAPP } from "@/app/lib/site";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <SectionTitle className="mt-5">
            Hi, I&rsquo;m <span className="text-gradient">Benny Kibet</span>
          </SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Founder of Kibet Web &amp; Graphic Studio — a creative digital
            studio based in Kenya. I help businesses and institutions build a
            strong online presence through beautiful websites, compelling
            graphics, and smart advertising.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Every project I take on is treated with care, strategy, and
            creative passion. Whether             you&rsquo;re a startup needing your first
            website or an established business looking to refresh your brand, I
            deliver work that looks great and drives real results.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              📞 {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              ✉️ {EMAIL}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              💬 WhatsApp — Quick Response
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-8 rounded-3xl border border-line bg-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Capabilities
            </p>
            {SKILLS.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-lg font-semibold">
                    {s.name}
                  </span>
                  <span className="text-sm font-semibold text-accent-2">
                    {s.level}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-raised">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

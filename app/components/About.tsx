"use client";

import { Reveal, Eyebrow, SectionTitle } from "./motion";
import { EMAIL, PHONE, PHONE_TEL, SKILLS, WHATSAPP } from "@/app/lib/site";

export default function About() {
  return (
    <section id="about" className="border-t-2 border-ink px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="h-52 w-44 shrink-0 overflow-hidden rounded-3xl border-2 border-ink bg-warm-100 shadow-[6px_6px_0_0_rgba(17,17,17,1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/kibet.png"
                alt="Benny Kibet"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div>
              <Eyebrow>About</Eyebrow>
              <SectionTitle className="mt-5">
                Hi, I&rsquo;m <span className="text-gradient">Benny Kibet</span>
              </SectionTitle>
            </div>
          </div>

          <p className="mt-6 text-lg font-medium leading-relaxed text-ink-soft">
            Founder of Kibe-Digital — a creative digital
            studio based in Kenya. I help businesses and institutions build a
            strong online presence through beautiful websites, compelling
            graphics, and smart advertising.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-ink-soft">
            Every project I take on is treated with care, strategy, and
            creative passion. Whether you&rsquo;re a startup needing your first
            website or an established business looking to refresh your brand, I
            deliver work that looks great and drives real results.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-ink-soft">
            Before Kibe-Digital, I was a teacher — a background that still
            shapes how I build. Mwalimu Briefcase, my flagship platform, grew
            directly out of classroom experience, so I understand schools,
            institutions, and NGOs on a first-name basis and can speak their
            language.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-bold text-ink shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            >
              📞 {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-bold text-ink shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            >
              ✉️ {EMAIL}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-orange-burst px-5 py-3 text-sm font-bold text-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            >
              💬 WhatsApp — Quick Response
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-8 rounded-3xl border-2 border-ink bg-white p-8 shadow-[6px_6px_0_0_rgba(17,17,17,1)] sm:p-10">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Experience
              </span>
              <span className="h-2 w-2 rounded-full bg-sage" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {SKILLS.map((s, i) => (
                <div
                  key={s.name}
                  className={`flex items-center gap-4 rounded-2xl border-2 border-ink p-5 shadow-[3px_3px_0_0_rgba(17,17,17,1)] sm:block sm:gap-0 ${
                    i === 1 ? "bg-sage/10" : "bg-warm-50"
                  }`}
                >
                  <div className="text-5xl font-bold tracking-tight text-ink">
                    {s.years}
                    <span className="text-2xl font-bold text-orange-burst">
                      yrs
                    </span>
                  </div>
                  <div className="mt-0 text-sm font-bold leading-snug sm:mt-2">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

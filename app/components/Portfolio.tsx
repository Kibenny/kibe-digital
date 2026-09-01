"use client";

import { useState } from "react";
import { Reveal, SectionLabel, SectionTitle } from "./motion";
import { PORTFOLIO_GRAPHICS, PORTFOLIO_WEBSITES } from "@/app/lib/site";

const TABS = [
  { id: "websites", label: "Websites", icon: "🌐" },
  { id: "graphics", label: "Graphics", icon: "🎨" },
  { id: "ads", label: "Ads", icon: "📢" },
] as const;

type Tab = (typeof TABS)[number]["id"];

function Card({ title, index }: { title: string; index: number }) {
  return (
    <div className="glow-card flex h-44 w-72 shrink-0 flex-col justify-between p-6 sm:w-80">
      <span className="font-display text-5xl font-semibold text-line/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h4 className="font-display text-lg font-semibold leading-snug">
        {title}
      </h4>
      <span className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-2">
        Design Work <span className="text-accent">→</span>
      </span>
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("websites");

  const websites = [...PORTFOLIO_WEBSITES, ...PORTFOLIO_WEBSITES];
  const graphics = [...PORTFOLIO_GRAPHICS, ...PORTFOLIO_GRAPHICS];
  const ads = ["Ads coming soon", "Ads coming soon", "Ads coming soon"];
  const adsRow = [...ads, ...ads];

  return (
    <section
      id="portfolio"
      className="border-t border-line px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>Selected Work</SectionLabel>
          <SectionTitle className="mt-5">
            Portfolio <span className="text-gradient">Highlights</span>
          </SectionTitle>
          <p className="mt-5 text-lg text-muted">
            A selection of websites, brand designs, and ads created for clients
            across various industries.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                tab === t.id
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="mt-12">
        <div className="relative">
          {tab === "websites" && (
            <div className="animate-marquee flex w-max gap-6 pr-6">
              {websites.map((t, i) => (
                <Card key={`${t}-${i}`} title={t} index={i} />
              ))}
            </div>
          )}
          {tab === "graphics" && (
            <div className="animate-marquee-rev flex w-max gap-6 pr-6">
              {graphics.map((t, i) => (
                <Card key={`${t}-${i}`} title={t} index={i} />
              ))}
            </div>
          )}
          {tab === "ads" && (
            <div className="animate-marquee flex w-max gap-6 pr-6">
              {adsRow.map((t, i) => (
                <Card key={`${t}-${i}`} title={t} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {tab === "ads" && (
        <p className="mx-auto mt-8 max-w-7xl px-6 text-sm text-muted lg:px-10">
          Ads portfolio coming soon — new campaign creatives are added here as
          they ship.
        </p>
      )}
    </section>
  );
}

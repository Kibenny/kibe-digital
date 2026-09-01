"use client";

import { EMAIL, PHONE, PHONE_TEL, SOCIALS } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 font-display text-base font-bold text-white">
              K
            </span>
            <span className="font-display text-lg font-semibold">
              Kibet Web &amp; Graphic Studio
            </span>
          </a>

          <div className="flex items-center gap-6 text-sm text-muted">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-2"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} Kibet Web &amp; Graphic Studio ·
            Eldoret, Kenya
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-ink"
            >
              {EMAIL}
            </a>
            <a href={PHONE_TEL} className="transition-colors hover:text-ink">
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

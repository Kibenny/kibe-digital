"use client";

import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE, PHONE_TEL, NAV_LINKS, SOCIALS } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink px-6 py-14 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Kibe-Digital"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-xl border-2 border-white/80 object-cover"
            />
            <span className="text-lg font-bold">
              Kibe-Digital
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm font-semibold text-white/70">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-white/70">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-burst"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/20 pt-8 text-sm font-medium text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} Kibe-Digital ·
            Eldoret, Kenya
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
            <a href={PHONE_TEL} className="transition-colors hover:text-white">
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

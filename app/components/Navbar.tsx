"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { NAV_LINKS, WHATSAPP } from "@/app/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-all duration-300 ${
        scrolled
          ? "border-ink bg-warm-50/95 shadow-[0_2px_0_0_rgba(17,17,17,1)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        <Link href="/" onClick={scrollTop} className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Kibe-Digital"
            className="h-10 w-10 rounded-xl border-2 border-ink object-cover shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
          />
          <span className="text-lg font-bold tracking-tight">
            Kibe<span className="text-orange-burst">-</span>Digital
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={
                pathname === l.href
                  ? (e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  : undefined
              }
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border-2 border-ink bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] lg:hidden"
          >
            <div className="flex flex-col items-center gap-1">
              <span
                className={`h-0.5 w-4 bg-ink transition-all ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-ink transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-ink transition-all ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t-2 border-ink bg-warm-50 lg:hidden"
        >
          <div className="flex flex-col gap-2 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => {
                  setOpen(false);
                  if (pathname === l.href) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="rounded-2xl border-2 border-ink bg-white px-4 py-3 text-base font-semibold shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full bg-ink px-5 py-3 text-center text-base font-bold text-white"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

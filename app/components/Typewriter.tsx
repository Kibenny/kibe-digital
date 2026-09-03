"use client";

import { useEffect, useState } from "react";

const SEPARATOR = "✦";

export default function Typewriter({
  words,
  prefix = "",
  typeSpeed = 60,
  deleteSpeed = 30,
  holdTime = 1600,
  className = "",
}: {
  words: string[];
  prefix?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
  className?: string;
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdTime);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  const currentWord = words[wordIndex % words.length] ?? "";
  const settled = !deleting && text === currentWord;

  return (
    <span className={className}>
      {prefix}
      <span className="text-orange-burst">{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] animate-pulse rounded-full bg-current"
      />
      {settled && <span className="mx-3 text-sage">{SEPARATOR}</span>}
    </span>
  );
}

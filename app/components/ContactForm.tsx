"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  const inputCls =
    "w-full rounded-xl border-2 border-ink bg-warm-50 px-4 py-3 text-base font-medium text-ink placeholder:text-muted-foreground outline-none transition-colors focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-bold">
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-bold">
            Your Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-bold">
          How can I help?
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a bit about your project..."
          className={`${inputCls} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-orange-burst px-8 py-3.5 text-base font-bold text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
      {status === "sent" && (
        <p className="rounded-xl border-2 border-sage bg-warm-50 px-4 py-3 text-sm font-bold text-ink">
          ✓ Message sent. Thanks for reaching out — I&apos;ll get back to you
          soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border-2 border-red-400 bg-warm-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}

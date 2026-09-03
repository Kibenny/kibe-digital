import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Reveal, Eyebrow } from "../components/motion";
import { EMAIL, PHONE, PHONE_TEL, WHATSAPP } from "../lib/site";

export const metadata = {
  title: "Contact | Kibe-Digital",
  description:
    "Get in touch with Kibe-Digital (Eldoret, Kenya). Start a website, graphic design, or ads project — reach out via the form, WhatsApp, phone, or email.",
};

const CHANNELS = [
  {
    icon: "💬",
    title: "WhatsApp",
    desc: "Fastest response — typically within hours.",
    action: "Message on WhatsApp",
    href: WHATSAPP,
    external: true,
    accent: true,
  },
  {
    icon: "📞",
    title: "Phone",
    desc: `${PHONE} · Eldoret, Kenya`,
    action: "Call me",
    href: PHONE_TEL,
    external: false,
    accent: false,
  },
  {
    icon: "✉️",
    title: "Email",
    desc: "For detailed briefs, quotes & files.",
    action: "Email me",
    href: `mailto:${EMAIL}`,
    external: false,
    accent: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b-2 border-ink px-6 pt-32 pb-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <Eyebrow>Get in Touch</Eyebrow>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Let&rsquo;s Build Something{" "}
                <span className="text-gradient">Great Together</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-ink-soft">
                Whether you need a website, brand graphics, or ads that convert
                — I&rsquo;d love to hear about it. Send a message and
                I&rsquo;ll get back to you quickly.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex h-full flex-col justify-between rounded-3xl border-2 border-ink p-7 shadow-[4px_4px_0_0_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(17,17,17,1)] ${
                      c.accent ? "bg-orange-burst text-white" : "bg-white"
                    }`}
                  >
                    <div>
                      <span className={`grid h-12 w-12 place-items-center rounded-xl border-2 border-ink text-2xl shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] ${c.accent ? "bg-white" : "bg-warm-50"}`}>
                        {c.icon}
                      </span>
                      <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                      <p className={`mt-1 text-sm font-medium ${c.accent ? "text-white/85" : "text-ink-soft"}`}>
                        {c.desc}
                      </p>
                    </div>
                    <span className={`mt-6 flex items-center gap-2 text-sm font-bold ${c.accent ? "text-white" : "text-orange-burst"}`}>
                      {c.action} <span className={c.accent ? "text-white" : "text-ink"}>→</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <h2 className="text-3xl font-bold leading-tight">
                Or send me a <span className="text-gradient">message</span>
              </h2>
              <p className="mt-4 text-base font-medium text-ink-soft">
                Fill in the form and it opens your email app with everything
                pre-filled — no account or signup needed.
              </p>
              <p className="mt-6 text-sm font-medium text-ink-soft">
                📍 Eldoret, Kenya · 🕐 Open for new projects
              </p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-3">
              <div className="rounded-3xl border-2 border-ink bg-white p-7 shadow-[6px_6px_0_0_rgba(17,17,17,1)] sm:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

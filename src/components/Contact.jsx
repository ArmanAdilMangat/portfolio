import { LINKS } from "../data/metrics.js";
import FadeIn from "./FadeIn.jsx";

const CONTACTS = [
  ["Email", `mailto:${LINKS.email}`, LINKS.email],
  ["GitHub", LINKS.github, "github.com/ArmanAdilMangat"],
  ["LinkedIn", LINKS.linkedin, "linkedin.com/in/armanadilmangat"],
  ["HuggingFace", LINKS.huggingface, "huggingface.co/ArmanXAI"],
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 dotgrid">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-3">// 06 — CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="gradient-text">build something</span>
          </h2>
          <p className="mt-4 text-mute max-w-2xl">
            Open to remote AI/ML internships and roles in Europe, Australia and New
            Zealand — and on-site or hybrid opportunities in Lahore.
          </p>
        </FadeIn>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACTS.map(([label, href, display], i) => (
            <FadeIn key={label} delay={i * 0.06}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="block p-4 rounded-lg border border-edge bg-card glow-card h-full"
              >
                <div className="font-mono text-xs text-signal">{label}</div>
                <div className="mt-1 text-sm text-mute break-all">{display}</div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

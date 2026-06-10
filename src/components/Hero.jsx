import { LINKS } from "../data/metrics.js";
import useTypewriter from "../hooks/useTypewriter.js";
import FadeIn from "./FadeIn.jsx";
import NeuralField from "./NeuralField.jsx";

const LINES = [
  "I train transformers.",
  "I solder the boards they run on.",
  "I ship both.",
];

export default function Hero() {
  const typed = useTypewriter(LINES);

  return (
    <section id="top" className="relative pt-36 pb-24 px-5 dotgrid overflow-hidden">
      <NeuralField />
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-4">// AI/ML ENGINEER — EMBEDDED AI · NLP · DEEP LEARNING</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Arman Adil Mangat</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-mono text-lg md:text-2xl mt-6 min-h-[2.5rem] caret">
            <span className="gradient-text">{typed}</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-7 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-edge bg-card text-sm">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            <span className="text-mute">Open to remote roles — EU · AU · NZ</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded bg-signal text-bg font-medium hover:opacity-90 transition-opacity">
              View Work
            </a>
            <button type="button" data-open-chat className="px-5 py-2.5 rounded border border-signal/60 text-signal hover:bg-signal/10 transition-colors">
              Talk to my AI
            </button>
            <a href={LINKS.resume} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded border border-edge text-mute hover:text-ink transition-colors">
              Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

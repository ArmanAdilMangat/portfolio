import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn.jsx";
import useCountUp from "../hooks/useCountUp.js";

const GAUGES = [
  { value: 94.74, label: "BERT — AG News", sub: "Fine-tuned news classification" },
  { value: 99.82, label: "DistilBERT tagger", sub: "Support tickets · 11 classes" },
  { value: 99.93, label: "Random Forest IDS", sub: "CICIDS-2017 · beat the deep models" },
];

const BARS = [
  { label: "Zero-shot · BART-MNLI", rel: 0.473, note: "47.3%", color: "#8B97A4" },
  { label: "Few-shot · SetFit, 8 per class", rel: 0.982, note: "98.2%", color: "#8B97A4" },
  { label: "Fine-tuned · DistilBERT", rel: 0.9982, note: "99.82%", color: "#22D3EE" },
];

function Gauge({ g, i }) {
  const reduce = useReducedMotion();
  const [ref, shown] = useCountUp(g.value, { decimals: 2, duration: 1500 + i * 120 });
  const R = 52;
  const C = 2 * Math.PI * R;
  return (
    <div ref={ref} className="p-6 rounded-lg border border-edge bg-card glow-card text-center">
      <div className="relative w-32 h-32 mx-auto">
        <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
          <circle cx="64" cy="64" r={R} stroke="#1F2937" strokeWidth="8" fill="none" />
          <motion.circle
            cx="64" cy="64" r={R}
            stroke="#22D3EE" strokeWidth="8" fill="none" strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: C * (1 - g.value / 100) }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduce ? 0 : 1.4, delay: i * 0.1, ease: [0.22, 0.8, 0.3, 1] }}
            style={{ filter: "drop-shadow(0 0 7px rgba(34,211,238,0.55))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold text-signal">
          {shown}%
        </div>
      </div>
      <div className="mt-4 font-semibold">{g.label}</div>
      <div className="text-xs text-mute mt-1">{g.sub}</div>
    </div>
  );
}

export default function Benchmarks() {
  const reduce = useReducedMotion();
  return (
    <section id="benchmarks" className="px-5 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-3">// 02 — BENCHMARKS</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The numbers, <span className="gradient-text">plotted</span>
          </h2>
        </FadeIn>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {GAUGES.map((g, i) => (
            <FadeIn key={g.label} delay={i * 0.08}>
              <Gauge g={g} i={i} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-6 p-6 rounded-lg border border-edge bg-card glow-card">
            <div className="font-mono text-sm text-solder">
              Support-ticket tagger — top-1 accuracy on 550 held-out tickets
            </div>
            <div className="mt-4 space-y-4">
              {BARS.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs font-mono text-mute mb-1.5">
                    <span>{b.label}</span>
                    <span style={{ color: b.color }}>{b.note}</span>
                  </div>
                  <div className="h-3 rounded bg-bg overflow-hidden">
                    <motion.div
                      className="h-full rounded origin-left"
                      style={{
                        width: `${b.rel * 100}%`,
                        background: b.color,
                        boxShadow: b.color === "#22D3EE" ? "0 0 12px rgba(34,211,238,0.6)" : "none",
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 0.8, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-mute mt-4">
              Eight labelled examples per class closed most of the gap; full fine-tuning added the last 1.6 points.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

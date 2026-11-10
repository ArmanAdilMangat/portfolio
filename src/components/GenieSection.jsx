import GenieDiagram from "./GenieDiagram.jsx";
import FadeIn from "./FadeIn.jsx";
import { LINKS } from "../data/metrics.js";

const PROBLEMS = [
  { title: "Ghost-voice distortion", fix: "Eliminated robotic doubled audio by resampling 22050 Hz → 16 kHz with audioop.ratecv() before playback." },
  { title: "Dual I2S bus management", fix: "Mic on I2S_NUM_0 and speaker on I2S_NUM_1 running simultaneously on one ESP32-S3 without bus contention." },
  { title: "PSRAM buffer overflow", fix: "Stabilized long recordings with 480KB audio buffers allocated in external PSRAM." },
  { title: "INMP441 signal tuning", fix: "Swept bit-shift values on the 32-bit I2S frames — >>13 found optimal for clean levels without clipping." },
];

const PHASES = [
  { tag: "T+1 · PHASE 1", status: "SHIPPED", color: "text-signal", d: "16/16 user stories delivered · 10/10 critical bugs resolved." },
  { tag: "T+2 · PHASE 2", status: "SHIPPED", color: "text-signal", d: "Six-node system · \"Hey Genie\" wake word · Faster-Whisper + AIML + Mistral-7B fallback + Piper · on-device handling classifier · laser-cut enclosure. Released as v2.0.0, Sep 2026." },
  { tag: "T+3 · PHASE 3", status: "PLANNED", color: "text-mute", d: "Multi-language support · sign-in web dashboard · battery power." },
];

export default function GenieSection() {
  return (
    <section id="genie" className="px-5 py-24 dotgrid">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-3">// 01 — FLAGSHIP</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            GENIE — a voice assistant that{" "}
            <span className="gradient-text">never phones home</span>
          </h2>
          <p className="mt-5 text-mute max-w-3xl leading-relaxed">
            GENIE (Generate, Engage, Navigate Intelligent Environments) is a{" "}
            <span className="text-ink">fully offline</span> voice assistant and home-safety
            monitor built from <span className="text-ink">six ESP32-S3 nodes and one laptop</span>.
            Wake word, speech recognition, intent routing and speech synthesis all run locally;
            gas, flame and fall are confirmed on the microcontroller and never pass through the
            language model. Built for physically impaired users. Final Year Project at UMT Lahore;
            I led the 4-person team as Lead Developer — sensor nodes, firmware, display driver and enclosure.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 p-5 rounded-lg border border-edge bg-card overflow-x-auto glow-card">
            <GenieDiagram />
            <p className="font-mono text-xs text-mute mt-3">
              Voice loop 8–15 s end-to-end · safety path 50–150 ms for flame and fall · 232-parameter classifier running on the face board
            </p>
            <a href={LINKS.genieRepo} target="_blank" rel="noreferrer" className="inline-block mt-4 px-4 py-2 rounded bg-signal text-bg text-sm font-medium hover:opacity-90 transition-opacity">
              View the code on GitHub →
            </a>
          </div>
        </FadeIn>


        <FadeIn>
          <h3 className="mt-14 text-xl font-semibold">Hard problems solved</h3>
        </FadeIn>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {PROBLEMS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className="p-5 rounded-lg border border-edge bg-card glow-card h-full">
                <div className="font-mono text-sm text-solder">{p.title}</div>
                <p className="mt-2 text-sm text-mute leading-relaxed">{p.fix}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 className="mt-14 text-xl font-semibold">The build, instrumented</h3>
        </FadeIn>
        <div className="mt-5 space-y-4">
          {PHASES.map((ph, i) => (
            <FadeIn key={ph.tag} delay={i * 0.08}>
              <div className="p-4 rounded-lg border border-edge bg-card glow-card sm:flex items-baseline gap-4">
                <div className={`font-mono text-xs shrink-0 w-40 ${ph.color}`}>
                  {ph.tag} — {ph.status}
                </div>
                <p className="text-sm text-mute mt-1 sm:mt-0">{ph.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

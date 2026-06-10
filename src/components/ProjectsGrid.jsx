import { PROJECTS } from "../data/projects.js";
import FadeIn from "./FadeIn.jsx";

function ProjectCard({ p }) {
  return (
    <div className="p-5 rounded-lg border border-edge bg-card flex flex-col h-full glow-card">
      <div className="font-mono text-xs text-signal">{p.metric}</div>
      <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
      <p className="mt-2 text-sm text-mute leading-relaxed flex-1">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded border border-edge text-xs font-mono text-mute">
            {t}
          </span>
        ))}
      </div>
      <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 text-sm text-signal hover:text-solder transition-colors">
        {p.linkLabel}
      </a>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-3">// 03 — PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
        </FadeIn>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 3) * 0.08}>
              <ProjectCard p={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

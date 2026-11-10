import FadeIn from "./FadeIn.jsx";

const ITEMS = [
  {
    when: "Mar 2026 — Apr 2026",
    title: "AI/ML Engineering Intern (Advanced Track)",
    org: "DevelopersHub Corporation · remote",
    desc: "Selected for the advanced phase. Delivered three production-grade projects: BERT AG-News fine-tune (94.74%), IBM Telco churn pipeline, and a support-ticket auto-tagger (DistilBERT, 99.82%).",
  },
  {
    when: "2024 — Present",
    title: "Freelance Data & Lead-Generation Specialist",
    org: "Upwork",
    desc: "B2B lead generation, web scraping and AI-assisted enrichment workflows for international SMB clients.",
  },
  {
    when: "2022 — 2026",
    title: "BS Artificial Intelligence",
    org: "University of Management and Technology (UMT), Lahore",
    desc: "Graduated 2026. Coursework: Deep Learning, Computer Vision, NLP, Parallel & Distributed Computing, Information Security, Data Mining. FYP: GENIE.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-3">// 04 — EXPERIENCE & EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold">Timeline</h2>
        </FadeIn>
        <div className="mt-8 space-y-6 border-l border-edge pl-6">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-signal" style={{ boxShadow: "0 0 10px rgba(34,211,238,0.7)" }} />
                <div className="font-mono text-xs text-mute">{it.when}</div>
                <h3 className="mt-1 font-semibold">{it.title}</h3>
                <div className="text-sm text-signal">{it.org}</div>
                <p className="mt-1 text-sm text-mute leading-relaxed max-w-2xl">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

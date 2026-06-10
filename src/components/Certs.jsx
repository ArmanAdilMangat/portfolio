import FadeIn from "./FadeIn.jsx";

const CERTS = [
  "IBM Generative AI Professional Certificate (Coursera)",
  "Machine Learning & Deep Learning Specializations (Coursera — HEC Pakistan Scholarship)",
  "NVIDIA — AI Infrastructure & Operations / Data Centers",
  "DevelopersHub AI/ML Engineering Internship — Advanced Track Completion",
];

export default function Certs() {
  return (
    <section id="certs" className="px-5 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="silkscreen mb-3">// 05 — CERTIFICATIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Credentials</h2>
        </FadeIn>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          {CERTS.map((c, i) => (
            <FadeIn key={c} delay={(i % 2) * 0.08}>
              <li className="p-4 rounded-lg border border-edge bg-card text-sm text-mute glow-card h-full list-none">
                {c}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

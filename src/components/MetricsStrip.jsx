import { METRICS } from "../data/metrics.js";
import useCountUp from "../hooks/useCountUp.js";

function Metric({ m, i }) {
  const [ref, value] = useCountUp(m.value, { decimals: m.decimals ?? 0, duration: 1300 + i * 150 });
  return (
    <div ref={ref}>
      <div
        className="font-mono text-2xl md:text-3xl font-bold text-signal"
        style={{ textShadow: "0 0 18px rgba(34,211,238,0.45)" }}
      >
        {m.prefix || ""}
        {value}
        {m.suffix || ""}
      </div>
      <div className="text-sm text-mute mt-1">{m.label}</div>
    </div>
  );
}

export default function MetricsStrip() {
  return (
    <section className="px-5 py-12 border-y border-edge bg-card/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {METRICS.map((m, i) => (
          <Metric key={m.label} m={m} i={i} />
        ))}
      </div>
    </section>
  );
}

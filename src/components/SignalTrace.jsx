import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/*
 * The signature element: a PCB-style signal trace routed down the whole page
 * with 45° bends, drawing itself as the visitor scrolls. The faint base path
 * is the unpowered copper; the glowing cyan path is the live signal.
 * Coordinate space: 100 × 1000, stretched to the page (non-scaling stroke).
 */
const TRACE =
  "M 8 0 L 8 96 L 22 110 L 90 110 L 90 200 L 56 200 L 56 248 " +
  "L 40 262 L 40 458 L 82 458 L 82 510 L 13 510 L 13 692 " +
  "L 87 692 L 87 752 L 50 752 L 50 836 L 34 850 L 34 924 L 50 938 L 50 1000";

/* solder pads at section joints (x, y in the same 100×1000 space) */
const PADS = [
  [8, 96],
  [90, 200],
  [40, 458],
  [13, 510],
  [87, 692],
  [50, 836],
];

export default function SignalTrace() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 55, damping: 18 });
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* unpowered copper */}
        <path d={TRACE} stroke="#1F2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        {PADS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.6" fill="#1F2937" />
        ))}
        {/* live signal */}
        <motion.path
          d={TRACE}
          stroke="#22D3EE"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{
            pathLength: reduce ? 1 : pathLength,
            opacity: 0.55,
            filter: "drop-shadow(0 0 6px rgba(34,211,238,0.9))",
          }}
        />
      </svg>
    </div>
  );
}

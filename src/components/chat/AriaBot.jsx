import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/* ARIA's body: floating robot, blinking eyes that track the cursor,
   pulsing antenna. Pure SVG + framer-motion (transform/opacity only). */
export default function AriaBot({ size = 64, float = true, track = true }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 130, damping: 14 });
  const sy = useSpring(py, { stiffness: 130, damping: 14 });

  useEffect(() => {
    if (reduce || !track) return;
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const m = (Math.min(d, 180) / 180) * 2.6;
      px.set((dx / d) * m);
      py.set((dy / d) * m);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, track, px, py]);

  return (
    <motion.svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      animate={float && !reduce ? { y: [0, -5, 0] } : undefined}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* antenna */}
      <line x1="32" y1="7" x2="32" y2="14" stroke="#22D3EE" strokeWidth="2" />
      <motion.circle
        cx="32" cy="6" r="3" fill="#22D3EE"
        animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ filter: "drop-shadow(0 0 5px #22D3EE)" }}
      />
      {/* head */}
      <rect x="12" y="14" width="40" height="30" rx="9" fill="#151B23" stroke="#22D3EE" strokeWidth="2" />
      {/* eyes — blink + cursor tracking */}
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={reduce ? undefined : { scaleY: [1, 1, 0.08, 1] }}
        transition={{ duration: 0.5, times: [0, 0.7, 0.85, 1], repeat: Infinity, repeatDelay: 3.6 }}
      >
        <motion.g style={{ x: sx, y: sy }}>
          <circle cx="24" cy="29" r="4.4" fill="#22D3EE" />
          <circle cx="40" cy="29" r="4.4" fill="#22D3EE" />
        </motion.g>
      </motion.g>
      {/* mouth */}
      <path d="M26 38 Q32 42 38 38" stroke="#8B97A4" strokeWidth="2" strokeLinecap="round" />
      {/* body */}
      <rect x="20" y="46" width="24" height="12" rx="5" fill="#151B23" stroke="#1F2937" strokeWidth="2" />
      <circle cx="32" cy="52" r="2.2" fill="#F59E0B" />
    </motion.svg>
  );
}

import { motion, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="max-w-6xl mx-auto px-5">
      <motion.div
        className="h-px origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, #22D3EE 30%, #F59E0B 70%, transparent)",
          opacity: 0.5,
        }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 0.8, 0.3, 1] }}
      />
    </div>
  );
}

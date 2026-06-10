import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function useTypewriter(lines, { speed = 48, pause = 1600 } = {}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [text, setText] = useState(reduce ? lines[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = lines[i];
    let t;
    if (!deleting && text === full) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((i + 1) % lines.length);
    } else {
      t = setTimeout(
        () => setText(full.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, lines, speed, pause, reduce]);

  return text;
}

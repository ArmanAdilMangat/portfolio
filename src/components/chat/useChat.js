import { useCallback, useRef, useState } from "react";
import { LINKS } from "../../data/metrics.js";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | cold | error
  const abortRef = useRef(null);

  const send = useCallback(
    async (text) => {
      const message = text.trim();
      if (!message) return;

      const history = messages.slice(-12).map(({ role, content }) => ({ role, content }));
      setMessages((m) => [...m, { role: "user", content: message }]);
      setStatus("loading");

      const coldTimer = setTimeout(() => setStatus("cold"), 8000);
      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      const killTimer = setTimeout(() => ctrl.abort(), 60000);

      try {
        const res = await fetch(`${LINKS.chatApi}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, history }),
          signal: ctrl.signal,
        });
        const data = await res.json();
        const reply = data.reply || data.error || "Hmm, I got an empty response — try again?";
        setMessages((m) => [...m, { role: "assistant", content: reply }]);
        setStatus("idle");
      } catch {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "I couldn't reach my server — it may be waking from a nap (free hosting does that). Give it ~20 seconds and try again, or email Arman at aadilmangat@gmail.com.",
          },
        ]);
        setStatus("error");
      } finally {
        clearTimeout(coldTimer);
        clearTimeout(killTimer);
      }
    },
    [messages]
  );

  return { messages, status, send };
}

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AriaBot from "./AriaBot.jsx";
import useChat from "./useChat.js";

const CHIPS = ["What is GENIE?", "Arman's best ML results?", "Is he open to remote work?"];
const SR =
  typeof window !== "undefined" &&
  (window.SpeechRecognition || window.webkitSpeechRecognition);

function Reveal({ text, animate }) {
  const reduce = useReducedMotion();
  const enabled = animate && !reduce;
  const [n, setN] = useState(enabled ? 0 : text.length);
  useEffect(() => {
    if (!enabled) return;
    setN(0);
    const iv = setInterval(() => {
      setN((v) => {
        if (v >= text.length) {
          clearInterval(iv);
          return v;
        }
        return v + 2;
      });
    }, 14);
    return () => clearInterval(iv);
  }, [text, enabled]);
  return <>{text.slice(0, n)}</>;
}

export default function ChatPanel({ onClose }) {
  const { messages, status, send } = useChat();
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const recRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = (text) => {
    const t = (text ?? input).trim();
    if (!t || status === "loading" || status === "cold") return;
    setInput("");
    send(t);
  };

  const toggleMic = () => {
    if (!SR) return;
    if (listening) {
      recRef.current?.stop();
      return;
    }
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = true;
    rec.onresult = (e) =>
      setInput(Array.from(e.results).map((r) => r[0].transcript).join(""));
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recRef.current = rec;
    setListening(true);
    rec.start();
  };

  const busy = status === "loading" || status === "cold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed z-50 inset-0 md:inset-auto md:bottom-28 md:right-5 md:w-[380px] md:h-[560px] flex flex-col md:rounded-xl border border-edge bg-bg2 shadow-2xl overflow-hidden"
      role="dialog"
      aria-label="Chat with ARIA, Arman's AI assistant"
    >
      {/* header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-edge bg-card">
        <AriaBot size={30} float={false} track={false} />
        <div className="flex-1">
          <div className="font-mono text-sm">ARIA — Arman's AI</div>
          <div className="text-xs text-mute flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${busy ? "bg-solder" : "bg-signal"}`} />
            {status === "cold" ? "waking up the server…" : busy ? "thinking…" : "online"}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="text-mute hover:text-ink text-xl leading-none px-1"
        >
          ×
        </button>
      </div>

      {/* messages */}
      <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <div>
            <p className="text-sm text-mute">
              Hi! I'm ARIA. Ask me anything about Arman's projects, skills, or results.
            </p>
            <div className="mt-3 flex flex-col items-start gap-2">
              {CHIPS.map((c) => (
                <button
                  key={c}
                  onClick={() => submit(c)}
                  className="px-3 py-1.5 rounded-full border border-signal/40 text-signal text-xs hover:bg-signal/10 transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
              m.role === "user"
                ? "ml-auto bg-signal text-bg"
                : "bg-card border border-edge text-ink"
            }`}
          >
            {m.role === "assistant" ? (
              <Reveal text={m.content} animate={i === messages.length - 1} />
            ) : (
              m.content
            )}
          </div>
        ))}
        {busy && (
          <div className="bg-card border border-edge px-3 py-2 rounded-lg text-sm text-mute w-fit">
            {status === "cold"
              ? "⚡ Server is waking up — free tier naps when idle, ~20s…"
              : "…"}
          </div>
        )}
      </div>

      {/* input */}
      <div className="p-3 border-t border-edge bg-card flex items-center gap-2">
        {SR && (
          <button
            onClick={toggleMic}
            aria-label={listening ? "Stop voice input" : "Start voice input"}
            className={`px-2.5 py-2 rounded border text-sm transition-colors ${
              listening
                ? "border-solder text-solder animate-pulse"
                : "border-edge text-mute hover:text-ink"
            }`}
          >
            🎤
          </button>
        )}
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Ask about Arman…"
          className="flex-1 bg-bg rounded px-3 py-2 text-sm border border-edge focus:border-signal/60 outline-none placeholder:text-mute"
        />
        <button
          onClick={() => submit()}
          disabled={busy || !input.trim()}
          className="px-3.5 py-2 rounded bg-signal text-bg text-sm font-medium disabled:opacity-40 transition-opacity"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
}

import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AriaBot from "./AriaBot.jsx";

const ChatPanel = lazy(() => import("./ChatPanel.jsx"));

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);

  // any element with data-open-chat (e.g. hero "Talk to my AI") opens the panel
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest("[data-open-chat]")) setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <Suspense
            fallback={
              <div className="fixed z-50 bottom-28 right-5 px-4 py-3 rounded-lg border border-edge bg-card font-mono text-xs text-mute">
                booting ARIA…
              </div>
            }
          >
            <ChatPanel onClose={() => setOpen(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          aria-label="Chat with ARIA, Arman's AI assistant"
          className="fixed z-50 bottom-5 right-5 group"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* pulse ring */}
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 0 0 2px rgba(34,211,238,0.4)" }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative block p-2 rounded-full bg-card border border-edge shadow-xl">
            <AriaBot size={56} />
          </span>
          <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-xs text-mute bg-card border border-edge rounded px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            Ask me about Arman
          </span>
        </motion.button>
      )}
    </>
  );
}

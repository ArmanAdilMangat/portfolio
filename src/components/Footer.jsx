export default function Footer() {
  return (
    <footer className="px-5 py-8 border-t border-edge">
      <div className="max-w-6xl mx-auto font-mono text-xs text-mute flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Arman Adil Mangat</span>
        <span>Built by hand — React · Flask · FAISS · Groq. No templates.</span>
      </div>
    </footer>
  );
}

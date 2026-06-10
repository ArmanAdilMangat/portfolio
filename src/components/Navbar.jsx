import { LINKS } from "../data/metrics.js";

const NAV = [
  ["GENIE", "#genie"],
  ["Benchmarks", "#benchmarks"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Certs", "#certs"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-edge">
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-signal">
          arman@lahore:~$
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-mute">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-ink transition-colors">
              {label}
            </a>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded border border-solder/60 text-solder hover:bg-solder/10 transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

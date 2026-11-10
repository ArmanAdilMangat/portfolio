const STAGES = [
  ["Mic node", "2× INMP441"],
  ["Wi-Fi TCP", "stereo PCM"],
  ["Hey Genie", "openWakeWord"],
  ["Whisper", "faster-whisper"],
  ["AIML", "362 patterns"],
  ["Mistral 7B", "fallback"],
  ["Piper", "TTS"],
  ["Wi-Fi TCP", "PCM"],
  ["Speaker node", "MAX98357A"],
];

const W = 1180;
const BOX_W = 112;
const BOX_H = 64;
const GAP = (W - STAGES.length * BOX_W) / (STAGES.length - 1);

export default function GenieDiagram() {
  return (
    <svg
      viewBox={`0 0 ${W} 110`}
      className="w-full"
      role="img"
      aria-label="GENIE voice path: mic node to laptop over Wi-Fi, wake word, Faster-Whisper, AIML router with Mistral 7B fallback, Piper TTS, back to the speaker node"
    >
      {STAGES.map(([name, sub], i) => {
        const x = i * (BOX_W + GAP);
        return (
          <g key={i}>
            <rect
              x={x}
              y={20}
              width={BOX_W}
              height={BOX_H}
              rx={6}
              fill="#151B23"
              stroke="#1F2937"
            />
            <text
              x={x + BOX_W / 2}
              y={46}
              textAnchor="middle"
              fill="#E6EDF3"
              fontSize="13"
              fontFamily="JetBrains Mono, monospace"
            >
              {name}
            </text>
            <text
              x={x + BOX_W / 2}
              y={66}
              textAnchor="middle"
              fill="#8B97A4"
              fontSize="10"
              fontFamily="JetBrains Mono, monospace"
            >
              {sub}
            </text>
            {i < STAGES.length - 1 && (
              <line
                x1={x + BOX_W}
                y1={52}
                x2={x + BOX_W + GAP}
                y2={52}
                stroke="#22D3EE"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#22D3EE" />
        </marker>
      </defs>
    </svg>
  );
}

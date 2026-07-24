"use client";

// Wavy zigzag divider with a pulsing heart anchor.
// Drop anywhere: <WavyHeartDivider />
export default function WavyHeartDivider({ className = "" }) {
  // Zigzag wave: alternating up/down segments, 20 px amplitude, 40 px pitch
  // Left half: x 0→230, Right half: x 370→600, gap for heart at centre (300±70)
  const zigzag = (x1, x2) => {
    const pitch = 40;
    let d = `M${x1},30`;
    for (let x = x1; x < x2; x += pitch) {
      const mid = x + pitch / 2;
      const end = x + pitch;
      const peak = (Math.floor((x - x1) / pitch) % 2 === 0) ? 18 : 42; // up / down
      d += ` L${Math.min(mid, x2)},${peak} L${Math.min(end, x2)},30`;
    }
    return d;
  };

  const leftPath  = zigzag(0,   230);
  const rightPath = zigzag(370, 600);

  // Heart centred at (300, 30), ~22 px wide
  const heart = "M300,38 C300,26 287,23 287,31 C287,39 300,48 300,52 C300,48 313,39 313,31 C313,23 300,26 300,38Z";

  return (
    <div className={`w-full max-w-[600px] ${className}`} style={{ height: 60 }}>
      <style>{`
        @keyframes waveFlow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -80; }
        }
        @keyframes heartPulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.18); }
        }
        .wdiv-wave {
          stroke-dasharray: 80;
          animation: waveFlow 1.8s linear infinite;
        }
        .wdiv-heart {
          transform-origin: 300px 38px;
          animation: heartPulse 1.8s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 600 60"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="wdiv-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#f9a8d4" />
            <stop offset="50%"  stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
          <radialGradient id="wdiv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ec4899" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0"    />
          </radialGradient>
        </defs>

        {/* left wave */}
        <path
          d={leftPath}
          stroke="url(#wdiv-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="wdiv-wave"
        />

        {/* right wave */}
        <path
          d={rightPath}
          stroke="url(#wdiv-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="wdiv-wave"
        />

        {/* heart glow halo */}
        <ellipse cx="300" cy="38" rx="26" ry="22" fill="url(#wdiv-glow)" className="wdiv-heart" />

        {/* heart body */}
        <path
          d={heart}
          fill="#ec4899"
          className="wdiv-heart"
          style={{ filter: "drop-shadow(0 0 4px #ec489966)" }}
        />

        {/* glossy specular on heart */}
        <ellipse cx="295" cy="32" rx="4" ry="3" fill="white" opacity="0.4" className="wdiv-heart" />
      </svg>
    </div>
  );
}

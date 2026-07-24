"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ViewBox: 1200 × 80   baseline y = 40
 *
 * Two full ECG cycles side by side so the scan loop is seamless.
 * One cycle = 600 units wide, repeated twice → total 1200.
 *
 * Each 600-unit cycle:
 *   0→80    flat
 *   80→160  spike cluster A  (Q-R-S)
 *   160→240 flat
 *   240→320 spike cluster B  (Q-R-S)
 *   320→600 flat (heart sits at x=600 centre, between cycles)
 */

const CYCLE = 600;

// One ECG cycle path segment (relative, starts at x=0 y=40)
function cycleD(ox) {
  return (
    `M${ox},40 L${ox + 80},40 ` +
    // cluster A
    `L${ox + 90},44 L${ox + 100},6 L${ox + 110},46 L${ox + 140},40 ` +
    `L${ox + 160},40 ` +
    // cluster B
    `L${ox + 170},43 L${ox + 180},12 L${ox + 190},45 L${ox + 220},40 ` +
    // flat to end of cycle
    `L${ox + CYCLE},40`
  );
}

// Full path: two cycles (0–600, 600–1200) joined
const FULL_PATH = cycleD(0) + " " + cycleD(CYCLE).replace(/^M\d+,\d+\s/, "");

const VB_W = 1200;
const VB_H = 80;
const HEART_X = 600;
const HEART_Y = 40;
const DURATION = 2800; // ms for one full sweep

export default function ECGHeartbeat() {
  const animRef = useRef(null);
  const startRef = useRef(null);
  const [scanX, setScanX] = useState(0);
  const [heartScale, setHeartScale] = useState(1);
  const [heartGlow, setHeartGlow] = useState(false);

  // Spike x positions (R-peaks) within one cycle
  const spikesInCycle = [100, 180];

  useEffect(() => {
    let lastPulse = -1;

    function tick(ts) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % DURATION;
      const x = (elapsed / DURATION) * VB_W;
      setScanX(x);

      // Pulse heart when scan crosses a spike
      spikesInCycle.forEach((sx) => {
        // check both cycles
        [sx, sx + CYCLE].forEach((absX) => {
          if (x >= absX && x < absX + 30 && lastPulse !== Math.floor(absX)) {
            lastPulse = Math.floor(absX);
            setHeartScale(1.22);
            setHeartGlow(true);
            setTimeout(() => {
              setHeartScale(1);
              setHeartGlow(false);
            }, 280);
          }
        });
      });

      animRef.current = requestAnimationFrame(tick);
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Width of the bright "active" window
  const WINDOW = 180;

  return (
    <div style={{ width: "100%" }}>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", display: "block" }}
        fill="none"
      >
        <defs>
          {/* Gradient for the bright active segment — deep crimson/magenta */}
          <linearGradient id="ecg-active" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#be185d" stopOpacity="0" />
            <stop offset="30%"  stopColor="#9d174d" stopOpacity="1" />
            <stop offset="70%"  stopColor="#831843" stopOpacity="1" />
            <stop offset="100%" stopColor="#be185d" stopOpacity="0.7" />
          </linearGradient>

          {/* Orb glow — deep rose */}
          <radialGradient id="orb-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fda4c8" stopOpacity="0.9" />
            <stop offset="40%"  stopColor="#9d174d" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#831843" stopOpacity="0" />
          </radialGradient>

          {/* Heart 3D gradient — dark rich rose */}
          <radialGradient id="heart-g" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stopColor="#f472b6" />
            <stop offset="45%"  stopColor="#9d174d" />
            <stop offset="100%" stopColor="#4c0519" />
          </radialGradient>

          {/* Heart glass sheen */}
          <linearGradient id="heart-sheen" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%"   stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>

          {/* Heart halo — deep glow */}
          <radialGradient id="heart-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#be185d" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
          </radialGradient>

          <filter id="line-glow" x="-2%" y="-120%" width="104%" height="340%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="orb-blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <filter id="halo-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* Clip for active window */}
          <clipPath id="active-clip">
            <rect
              x={scanX - WINDOW}
              y="0"
              width={WINDOW}
              height={VB_H}
            />
          </clipPath>

          {/* Clip for trail (everything behind scan head) */}
          <clipPath id="trail-clip">
            <rect x="0" y="0" width={scanX} height={VB_H} />
          </clipPath>
        </defs>

        {/* ── Faint full path (always visible as ghost) ── */}
        <path
          d={FULL_PATH}
          stroke="#9d174d"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.25"
        />

        {/* ── Trail: already-scanned portion, slightly brighter ── */}
        <path
          d={FULL_PATH}
          stroke="#be185d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          clipPath="url(#trail-clip)"
        />

        {/* ── Active bright window ── */}
        <path
          d={FULL_PATH}
          stroke="url(#ecg-active)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#line-glow)"
          clipPath="url(#active-clip)"
        />

        {/* ── Scan head dot ── */}
        <circle cx={scanX} cy={40} r="4" fill="#831843" opacity="1" filter="url(#line-glow)" />
        <circle cx={scanX} cy={40} r="2" fill="#fda4c8" opacity="0.9" />

        {/* ── Left glowing orb ── */}
        <circle cx="6"  cy="40" r="20" fill="url(#orb-g)" filter="url(#orb-blur)" opacity="0.7" />
        <circle cx="6"  cy="40" r="5.5" fill="#9d174d" />
        <circle cx="6"  cy="40" r="2.8" fill="#fda4c8" opacity="0.9" />

        {/* ── Right glowing orb ── */}
        <circle cx={VB_W - 6} cy="40" r="20" fill="url(#orb-g)" filter="url(#orb-blur)" opacity="0.7" />
        <circle cx={VB_W - 6} cy="40" r="5.5" fill="#9d174d" />
        <circle cx={VB_W - 6} cy="40" r="2.8" fill="#fda4c8" opacity="0.9" />

        {/* ── Glossy 3D Heart centred at (600, 40) ── */}
        <g style={{ transformOrigin: `${HEART_X}px ${HEART_Y}px`, transform: `scale(${heartScale})`, transition: "transform 0.2s ease" }}>
          {/* halo */}
          <ellipse
            cx={HEART_X} cy={HEART_Y + 2}
            rx={heartGlow ? 36 : 26} ry={heartGlow ? 28 : 20}
            fill="url(#heart-halo)"
            filter="url(#halo-blur)"
            style={{ transition: "rx 0.22s, ry 0.22s" }}
          />
          {/* body */}
          <path
            d={`M${HEART_X},${HEART_Y+17}
                C${HEART_X-14},${HEART_Y+7} ${HEART_X-27},${HEART_Y} ${HEART_X-27},${HEART_Y-10}
                C${HEART_X-27},${HEART_Y-20} ${HEART_X-18},${HEART_Y-25} ${HEART_X-10},${HEART_Y-25}
                C${HEART_X-5},${HEART_Y-25} ${HEART_X-1},${HEART_Y-22} ${HEART_X},${HEART_Y-18}
                C${HEART_X+1},${HEART_Y-22} ${HEART_X+5},${HEART_Y-25} ${HEART_X+10},${HEART_Y-25}
                C${HEART_X+18},${HEART_Y-25} ${HEART_X+27},${HEART_Y-20} ${HEART_X+27},${HEART_Y-10}
                C${HEART_X+27},${HEART_Y} ${HEART_X+14},${HEART_Y+7} ${HEART_X},${HEART_Y+17}Z`}
            fill="url(#heart-g)"
          />
          {/* glass sheen — top-left lobe */}
          <path
            d={`M${HEART_X},${HEART_Y-18}
                C${HEART_X-1},${HEART_Y-22} ${HEART_X-5},${HEART_Y-25} ${HEART_X-10},${HEART_Y-25}
                C${HEART_X-18},${HEART_Y-25} ${HEART_X-27},${HEART_Y-20} ${HEART_X-27},${HEART_Y-10}
                C${HEART_X-27},${HEART_Y-4} ${HEART_X-21},${HEART_Y+1} ${HEART_X-13},${HEART_Y+7}
                C${HEART_X-7},${HEART_Y-2} ${HEART_X-2},${HEART_Y-10} ${HEART_X},${HEART_Y-18}Z`}
            fill="url(#heart-sheen)"
          />
          {/* specular dot */}
          <ellipse cx={HEART_X-11} cy={HEART_Y-17} rx="5" ry="3.5" fill="white" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
}

"use client";

/**
 * Detailed SVG workplace scene illustrations for scenario backgrounds.
 * Each scene creates a recognisable room environment with furniture,
 * fixtures, and subtle animations for an immersive feel.
 */

interface WorkplaceSceneProps {
  seed: string;
}

export function hashToScene(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 4;
}

/** Office - desk with monitor, chair, window with city view, shelves, plant */
function OfficeScene() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <radialGradient id="officeCeilingGlow" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Wall */}
      <rect x="0" y="0" width="600" height="280" fill="#2A3F55" />
      {/* Warm ambient glow */}
      <rect x="0" y="0" width="600" height="280" fill="url(#officeCeilingGlow)" />
      {/* Floor */}
      <rect x="0" y="280" width="600" height="120" fill="#3D5166" />
      {/* Floor line */}
      <line x1="0" y1="280" x2="600" y2="280" stroke="#7A8FA0" strokeWidth="2" />
      {/* Floor boards */}
      <line x1="0" y1="320" x2="600" y2="320" stroke="#4A6178" strokeWidth="0.5" opacity="0.6" />
      <line x1="0" y1="360" x2="600" y2="360" stroke="#4A6178" strokeWidth="0.5" opacity="0.6" />
      <line x1="150" y1="280" x2="150" y2="400" stroke="#4A6178" strokeWidth="0.5" opacity="0.4" />
      <line x1="300" y1="280" x2="300" y2="400" stroke="#4A6178" strokeWidth="0.5" opacity="0.4" />
      <line x1="450" y1="280" x2="450" y2="400" stroke="#4A6178" strokeWidth="0.5" opacity="0.4" />

      {/* Window - large, with night city view */}
      <rect x="340" y="30" width="220" height="160" rx="6" fill="#0F172A" stroke="#7A8FA0" strokeWidth="2" />
      {/* Window frame cross */}
      <line x1="450" y1="30" x2="450" y2="190" stroke="#7A8FA0" strokeWidth="1.5" />
      <line x1="340" y1="110" x2="560" y2="110" stroke="#7A8FA0" strokeWidth="1.5" />
      {/* Sky - deeper blue with subtle gradient feel */}
      <rect x="342" y="32" width="106" height="76" fill="#0E1A30" />
      <rect x="452" y="32" width="106" height="76" fill="#0E1A30" />
      <rect x="342" y="112" width="106" height="76" fill="#101E34" />
      <rect x="452" y="112" width="106" height="76" fill="#101E34" />
      {/* City skyline - brighter buildings */}
      <rect x="355" y="130" width="20" height="58" rx="2" fill="#2A3F55" stroke="#3D5166" strokeWidth="0.5" />
      <rect x="380" y="115" width="16" height="73" rx="2" fill="#2A3F55" stroke="#3D5166" strokeWidth="0.5" />
      <rect x="400" y="140" width="24" height="48" rx="2" fill="#2A3F55" stroke="#3D5166" strokeWidth="0.5" />
      <rect x="465" y="120" width="18" height="68" rx="2" fill="#2A3F55" stroke="#3D5166" strokeWidth="0.5" />
      <rect x="490" y="135" width="22" height="53" rx="2" fill="#2A3F55" stroke="#3D5166" strokeWidth="0.5" />
      <rect x="520" y="125" width="14" height="63" rx="2" fill="#2A3F55" stroke="#3D5166" strokeWidth="0.5" />
      {/* Lit windows in buildings - brighter mix of white and warm yellow */}
      <rect x="360" y="140" width="4" height="4" rx="0.5" fill="#FDE68A" opacity="0.95" />
      <rect x="365" y="155" width="4" height="4" rx="0.5" fill="#FFFFFF" opacity="0.8" />
      <rect x="385" y="125" width="4" height="4" rx="0.5" fill="#FDE68A" opacity="0.9" />
      <rect x="385" y="145" width="4" height="4" rx="0.5" fill="#BFDBFE" opacity="0.75" />
      <rect x="470" y="130" width="4" height="4" rx="0.5" fill="#FFFFFF" opacity="0.85" />
      <rect x="470" y="150" width="4" height="4" rx="0.5" fill="#FDE68A" opacity="0.8" />
      <rect x="495" y="145" width="4" height="4" rx="0.5" fill="#BFDBFE" opacity="0.8" />
      <rect x="525" y="135" width="4" height="4" rx="0.5" fill="#FDE68A" opacity="0.85" />
      {/* Extra lit windows */}
      <rect x="360" y="155" width="4" height="4" rx="0.5" fill="#FFFFFF" opacity="0.6" />
      <rect x="405" y="150" width="4" height="4" rx="0.5" fill="#FDE68A" opacity="0.7" />
      <rect x="495" y="155" width="4" height="4" rx="0.5" fill="#FDE68A" opacity="0.65" />
      <rect x="525" y="150" width="4" height="4" rx="0.5" fill="#BFDBFE" opacity="0.55" />
      {/* Stars */}
      <circle cx="370" cy="50" r="1.2" fill="#FDE68A" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="500" cy="45" r="1" fill="#FDE68A" opacity="0.85">
        <animate attributeName="opacity" values="0.85;0.35;0.85" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="540" cy="55" r="0.8" fill="#FDE68A" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="480" cy="42" r="0.9" fill="#FDE68A" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.25;0.7" dur="3.5s" repeatCount="indefinite" />
      </circle>
      {/* Moon - brighter */}
      <circle cx="420" cy="55" r="10" fill="#FDE68A" opacity="0.5" />
      <circle cx="420" cy="55" r="14" fill="#FDE68A" opacity="0.08" />

      {/* Wall shelf */}
      <rect x="40" y="80" width="160" height="6" rx="2" fill="#5A7A90" />
      {/* Books on shelf - higher opacity */}
      <rect x="55" y="42" width="12" height="38" rx="1" fill="#6366F1" opacity="0.85" />
      <rect x="70" y="48" width="10" height="32" rx="1" fill="#A78BFA" opacity="0.75" />
      <rect x="83" y="45" width="14" height="35" rx="1" fill="#818CF8" opacity="0.8" />
      <rect x="100" y="50" width="10" height="30" rx="1" fill="#FF6B6B" opacity="0.7" />
      <rect x="113" y="46" width="12" height="34" rx="1" fill="#3B82F6" opacity="0.7" />
      {/* Small picture frame on wall */}
      <rect x="145" y="50" width="40" height="28" rx="2" fill="#1E293B" stroke="#7A8FA0" strokeWidth="1" />
      <rect x="148" y="53" width="34" height="22" rx="1" fill="#0F172A" />

      {/* Desk - large L-shape */}
      <rect x="30" y="230" width="300" height="12" rx="3" fill="#5A7A90" />
      {/* Desk front panel */}
      <rect x="30" y="242" width="300" height="50" rx="2" fill="#4A6178" opacity="0.85" />
      {/* Desk legs */}
      <rect x="40" y="292" width="8" height="55" rx="2" fill="#4A6178" />
      <rect x="320" y="292" width="8" height="55" rx="2" fill="#4A6178" />

      {/* Office chair (behind desk) */}
      <rect x="155" y="195" width="50" height="35" rx="8" fill="#6366F1" opacity="0.7" />
      <rect x="160" y="182" width="40" height="15" rx="6" fill="#6366F1" opacity="0.6" />

      {/* Monitor */}
      <rect x="130" y="150" width="120" height="80" rx="5" fill="#1E293B" stroke="#7A8FA0" strokeWidth="1.5" />
      <rect x="136" y="155" width="108" height="66" rx="3" fill="#0F172A" />
      {/* Screen glow - brighter pulse */}
      <rect x="136" y="155" width="108" height="66" rx="3" fill="#6366F1" opacity="0.22">
        <animate attributeName="opacity" values="0.22;0.35;0.22" dur="4s" repeatCount="indefinite" />
      </rect>
      {/* Screen content lines */}
      <rect x="148" y="168" width="60" height="4" rx="1" fill="#818CF8" opacity="0.6" />
      <rect x="148" y="178" width="82" height="3" rx="1" fill="#A78BFA" opacity="0.4" />
      <rect x="148" y="187" width="50" height="3" rx="1" fill="#818CF8" opacity="0.4" />
      <rect x="148" y="200" width="35" height="12" rx="3" fill="#58CC02" opacity="0.5" />
      {/* Monitor stand */}
      <rect x="178" y="230" width="24" height="10" rx="2" fill="#5A7A90" />
      <rect x="168" y="236" width="44" height="5" rx="2" fill="#5A7A90" opacity="0.8" />

      {/* Keyboard & mouse */}
      <rect x="145" y="245" width="80" height="14" rx="3" fill="#3D5166" />
      <rect x="235" y="248" width="22" height="10" rx="4" fill="#3D5166" />

      {/* Coffee mug - brighter orange */}
      <rect x="75" y="216" width="22" height="22" rx="5" fill="#F97316" opacity="0.85" />
      <path d="M97 222 Q106 226 97 236" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
      {/* Steam */}
      <path d="M82 212 Q84 202 88 210" fill="none" stroke="white" strokeWidth="1" opacity="0.45">
        <animate attributeName="d" values="M82 212 Q84 202 88 210;M82 210 Q85 198 89 208;M82 212 Q84 202 88 210" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Potted plant on desk - vivid green */}
      <rect x="285" y="208" width="26" height="22" rx="6" fill="#7C3AED" opacity="0.65" />
      <ellipse cx="298" cy="200" rx="18" ry="16" fill="#10B981" opacity="0.7">
        <animate attributeName="ry" values="16;17;16" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="288" cy="194" rx="10" ry="12" fill="#34D399" opacity="0.6" />
      <ellipse cx="308" cy="196" rx="8" ry="10" fill="#10B981" opacity="0.55" />

      {/* Pencil holder */}
      <rect x="55" y="214" width="16" height="22" rx="4" fill="#7A8FA0" opacity="0.7" />
      <line x1="59" y1="214" x2="58" y2="200" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      <line x1="63" y1="214" x2="64" y2="198" stroke="#FF6B6B" strokeWidth="1.5" opacity="0.6" />
      <line x1="67" y1="214" x2="67" y2="202" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/** Meeting room - conference table, chairs, whiteboard, clock, door */
function MeetingScene() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <radialGradient id="meetingCeilingGlow" cx="50%" cy="5%" r="60%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Wall */}
      <rect x="0" y="0" width="600" height="260" fill="#283848" />
      {/* Warm ambient glow */}
      <rect x="0" y="0" width="600" height="260" fill="url(#meetingCeilingGlow)" />
      {/* Floor */}
      <rect x="0" y="260" width="600" height="140" fill="#3D5166" />
      <line x1="0" y1="260" x2="600" y2="260" stroke="#7A8FA0" strokeWidth="2" />
      {/* Carpet pattern */}
      <rect x="60" y="270" width="480" height="120" rx="3" fill="#354A5E" opacity="0.6" />

      {/* Whiteboard on wall - brighter */}
      <rect x="140" y="25" width="320" height="130" rx="4" fill="#F8FAFC" opacity="0.2" stroke="#7A8FA0" strokeWidth="2" />
      <rect x="148" y="33" width="304" height="112" rx="2" fill="#F1F5F9" opacity="0.14" />
      {/* Whiteboard content */}
      <rect x="165" y="48" width="120" height="6" rx="2" fill="#818CF8" opacity="0.65" />
      <rect x="165" y="62" width="180" height="4" rx="2" fill="#94A3B8" opacity="0.45" />
      <rect x="165" y="74" width="100" height="4" rx="2" fill="#94A3B8" opacity="0.4" />
      {/* Bar chart on whiteboard - boosted opacity */}
      <rect x="340" y="42" width="100" height="80" rx="3" fill="white" opacity="0.1" />
      <rect x="354" y="88" width="14" height="28" rx="2" fill="#FF6B6B" opacity="0.8" />
      <rect x="374" y="72" width="14" height="44" rx="2" fill="#F59E0B" opacity="0.8" />
      <rect x="394" y="78" width="14" height="38" rx="2" fill="#059669" opacity="0.8" />
      <rect x="414" y="60" width="14" height="56" rx="2" fill="#3B82F6" opacity="0.8" />
      {/* Whiteboard tray */}
      <rect x="180" y="155" width="240" height="6" rx="2" fill="#7A8FA0" opacity="0.6" />
      {/* Markers in tray - brighter */}
      <rect x="220" y="150" width="4" height="10" rx="1" fill="#FF6B6B" opacity="0.75" />
      <rect x="230" y="151" width="4" height="10" rx="1" fill="#3B82F6" opacity="0.7" />
      <rect x="240" y="150" width="4" height="10" rx="1" fill="#059669" opacity="0.7" />

      {/* Conference table - perspective oval */}
      <ellipse cx="300" cy="320" rx="200" ry="50" fill="#5A7A90" opacity="0.65" />
      <ellipse cx="300" cy="316" rx="190" ry="45" fill="#4A6178" opacity="0.5" />
      {/* Table surface sheen */}
      <ellipse cx="300" cy="314" rx="160" ry="30" fill="#7A8FA0" opacity="0.15" />

      {/* Chairs - bottom row (facing us) - more saturated indigo */}
      {[160, 240, 360, 440].map((x) => (
        <g key={x}>
          <rect x={x - 16} y="370" width="32" height="24" rx="8" fill="#6366F1" opacity="0.65" />
          <rect x={x - 12} y="362" width="24" height="10" rx="5" fill="#818CF8" opacity="0.55" />
        </g>
      ))}
      {/* Chairs - top row (backs to us) */}
      {[200, 300, 400].map((x) => (
        <g key={`top-${x}`}>
          <rect x={x - 16} y="262" width="32" height="24" rx="8" fill="#6366F1" opacity="0.6" />
          <rect x={x - 12} y="252" width="24" height="12" rx="5" fill="#818CF8" opacity="0.5" />
        </g>
      ))}

      {/* Items on table - more visible */}
      <rect x="240" y="308" width="22" height="16" rx="2" fill="#F59E0B" opacity="0.55" transform="rotate(-5 251 316)" />
      <rect x="345" y="306" width="20" height="14" rx="2" fill="#3B82F6" opacity="0.5" transform="rotate(6 355 313)" />
      {/* Laptop on table */}
      <rect x="270" y="300" width="30" height="20" rx="2" fill="#1E293B" stroke="#7A8FA0" strokeWidth="0.5" opacity="0.65" />

      {/* Clock on wall */}
      <circle cx="540" cy="60" r="22" fill="#1E293B" stroke="#7A8FA0" strokeWidth="2" />
      <circle cx="540" cy="60" r="18" fill="none" stroke="#5A7A90" strokeWidth="1" />
      {/* Clock marks */}
      <line x1="540" y1="44" x2="540" y2="47" stroke="#B0BEC5" strokeWidth="1" />
      <line x1="540" y1="73" x2="540" y2="76" stroke="#B0BEC5" strokeWidth="1" />
      <line x1="524" y1="60" x2="527" y2="60" stroke="#B0BEC5" strokeWidth="1" />
      <line x1="553" y1="60" x2="556" y2="60" stroke="#B0BEC5" strokeWidth="1" />
      {/* Clock hands */}
      <line x1="540" y1="60" x2="540" y2="46" stroke="#B0BEC5" strokeWidth="1.5">
        <animateTransform attributeName="transform" type="rotate" from="0 540 60" to="360 540 60" dur="60s" repeatCount="indefinite" />
      </line>
      <line x1="540" y1="60" x2="552" y2="60" stroke="#7A8FA0" strokeWidth="1.2" />
      <circle cx="540" cy="60" r="2" fill="#B0BEC5" />

      {/* Door on left wall */}
      <rect x="15" y="50" width="70" height="210" rx="4" fill="#354A5E" stroke="#7A8FA0" strokeWidth="1.5" />
      <circle cx="75" cy="160" r="4" fill="#B0BEC5" opacity="0.6" />
      {/* Door frame */}
      <rect x="12" y="46" width="76" height="4" rx="1" fill="#5A7A90" opacity="0.7" />
      <rect x="12" y="260" width="76" height="4" rx="1" fill="#5A7A90" opacity="0.7" />

      {/* Ceiling light - warmer, more visible glow */}
      <line x1="300" y1="0" x2="300" y2="12" stroke="#B0BEC5" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="300" cy="16" rx="40" ry="6" fill="#FDE68A" opacity="0.25">
        <animate attributeName="opacity" values="0.25;0.35;0.25" dur="5s" repeatCount="indefinite" />
      </ellipse>
      {/* Light cone */}
      <polygon points="272,16 300,200 328,16" fill="#FDE68A" opacity="0.06" />
    </svg>
  );
}

/** Presentation/lecture hall - large screen, podium, audience seats, spotlights */
function PresentationScene() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <radialGradient id="presentationSpotlight" cx="50%" cy="0%" r="65%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Wall - deep navy for theatre feel */}
      <rect x="0" y="0" width="600" height="280" fill="#152238" />
      {/* Warm spotlight ambient */}
      <rect x="0" y="0" width="600" height="280" fill="url(#presentationSpotlight)" />
      {/* Floor */}
      <rect x="0" y="280" width="600" height="120" fill="#1E3348" />
      <line x1="0" y1="280" x2="600" y2="280" stroke="#3D5166" strokeWidth="2" />
      {/* Stage area */}
      <rect x="120" y="270" width="360" height="14" rx="2" fill="#3D5166" />

      {/* Large projector screen */}
      <rect x="130" y="15" width="340" height="200" rx="5" fill="#0F172A" stroke="#7A8FA0" strokeWidth="2" />
      <rect x="138" y="23" width="324" height="182" rx="3" fill="#0C1222" />
      {/* Screen glow - brighter */}
      <rect x="138" y="23" width="324" height="182" rx="3" fill="#6366F1" opacity="0.18">
        <animate attributeName="opacity" values="0.18;0.3;0.18" dur="5s" repeatCount="indefinite" />
      </rect>
      {/* Slide title - brighter */}
      <rect x="170" y="48" width="160" height="8" rx="3" fill="#818CF8" opacity="0.7" />
      {/* Slide body lines - brighter */}
      <rect x="170" y="72" width="240" height="4" rx="2" fill="#94A3B8" opacity="0.45" />
      <rect x="170" y="84" width="210" height="4" rx="2" fill="#94A3B8" opacity="0.38" />
      <rect x="170" y="96" width="190" height="4" rx="2" fill="#94A3B8" opacity="0.38" />
      {/* Pie chart on slide - brighter */}
      <circle cx="380" cy="140" r="40" fill="none" stroke="#3D5166" strokeWidth="1.5" />
      <path d="M380 100 A40 40 0 0 1 415 155" fill="#FF6B6B" opacity="0.65" />
      <path d="M380 100 A40 40 0 0 0 350 172" fill="#059669" opacity="0.55" />
      <path d="M350 172 A40 40 0 0 0 415 155" fill="#FBBF24" opacity="0.55" />

      {/* Podium */}
      <rect x="265" y="225" width="70" height="55" rx="5" fill="#3D5166" />
      <rect x="258" y="220" width="84" height="8" rx="3" fill="#5A7A90" />
      {/* Podium mic */}
      <line x1="320" y1="220" x2="330" y2="208" stroke="#B0BEC5" strokeWidth="1.5" />
      <circle cx="332" cy="206" r="3" fill="#B0BEC5" opacity="0.65" />
      {/* Podium light */}
      <rect x="282" y="235" width="36" height="4" rx="1" fill="#7A8FA0" opacity="0.45" />

      {/* Audience seats - 3 rows, perspective - more visible */}
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[70, 130, 190, 410, 470, 530].map((x) => (
            <g key={`${row}-${x}`}>
              <circle
                cx={x}
                cy={305 + row * 30}
                r={7 - row * 0.5}
                fill="#7A8FA0"
                opacity={0.55 - row * 0.08}
              />
              <ellipse
                cx={x}
                cy={316 + row * 30}
                rx={11 - row}
                ry={6}
                fill="#5A7A90"
                opacity={0.4 - row * 0.06}
              />
            </g>
          ))}
        </g>
      ))}

      {/* Spotlights at top - warmer, more dramatic */}
      <ellipse cx="300" cy="8" rx="50" ry="5" fill="#FBBF24" opacity="0.2" />
      <polygon points="270,8 300,215 330,8" fill="#FBBF24" opacity="0.07" />

      {/* Wall sconces - brighter */}
      <rect x="20" y="60" width="14" height="24" rx="4" fill="#5A7A90" opacity="0.65" />
      <circle cx="27" cy="56" r="8" fill="#FDE68A" opacity="0.18">
        <animate attributeName="opacity" values="0.18;0.28;0.18" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="566" y="60" width="14" height="24" rx="4" fill="#5A7A90" opacity="0.65" />
      <circle cx="573" cy="56" r="8" fill="#FDE68A" opacity="0.18">
        <animate attributeName="opacity" values="0.18;0.28;0.18" dur="3.5s" repeatCount="indefinite" />
      </circle>

      {/* Exit sign - brighter green */}
      <rect x="530" y="25" width="40" height="14" rx="2" fill="#059669" opacity="0.6" />
      <rect x="534" y="28" width="32" height="8" rx="1" fill="#34D399" opacity="0.45" />
    </svg>
  );
}

/** Break room - kitchen counter, stools, coffee machine, fridge, window */
function BreakRoomScene() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <radialGradient id="breakroomSunrise" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Wall */}
      <rect x="0" y="0" width="600" height="260" fill="#2D4052" />
      {/* Warm sunrise ambient glow */}
      <rect x="0" y="0" width="600" height="260" fill="url(#breakroomSunrise)" />
      {/* Floor - tiles */}
      <rect x="0" y="260" width="600" height="140" fill="#3D5166" />
      <line x1="0" y1="260" x2="600" y2="260" stroke="#7A8FA0" strokeWidth="2" />
      {/* Tile grid */}
      {[0, 1, 2].map((row) => (
        <g key={`row-${row}`}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
            <rect key={`tile-${row}-${col}`} x={col * 75} y={265 + row * 45} width="74" height="44" fill="none" stroke="#4A6178" strokeWidth="0.5" opacity="0.4" />
          ))}
        </g>
      ))}

      {/* Window with morning sky */}
      <rect x="180" y="18" width="240" height="120" rx="5" fill="#0F172A" stroke="#7A8FA0" strokeWidth="2" />
      {/* Window cross */}
      <line x1="300" y1="18" x2="300" y2="138" stroke="#7A8FA0" strokeWidth="1.5" />
      <line x1="180" y1="78" x2="420" y2="78" stroke="#7A8FA0" strokeWidth="1.5" />
      {/* Sky panes - warmer, deeper blue */}
      <rect x="182" y="20" width="116" height="56" fill="#1E3A5F" opacity="0.75" />
      <rect x="302" y="20" width="116" height="56" fill="#1E3A5F" opacity="0.75" />
      <rect x="182" y="80" width="116" height="56" fill="#1E3A5F" opacity="0.65" />
      <rect x="302" y="80" width="116" height="56" fill="#1E3A5F" opacity="0.65" />
      {/* Sunrise glow - warmer, more orange */}
      <rect x="182" y="100" width="236" height="36" fill="#F97316" opacity="0.25" />
      <rect x="182" y="80" width="236" height="22" fill="#FBBF24" opacity="0.1" />
      {/* Blinds */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="184" y1={30 + i * 18} x2="416" y2={30 + i * 18} stroke="#5A7A90" strokeWidth="0.5" opacity="0.35" />
      ))}

      {/* Counter - full width, warmer wood tone */}
      <rect x="15" y="200" width="570" height="14" rx="3" fill="#5A7A90" />
      {/* Counter front */}
      <rect x="15" y="214" width="570" height="46" rx="3" fill="#4A6178" opacity="0.7" />
      {/* Counter drawers */}
      <rect x="200" y="222" width="60" height="30" rx="2" fill="none" stroke="#7A8FA0" strokeWidth="0.8" opacity="0.5" />
      <rect x="268" y="222" width="60" height="30" rx="2" fill="none" stroke="#7A8FA0" strokeWidth="0.8" opacity="0.5" />
      <circle cx="230" cy="237" r="2" fill="#7A8FA0" opacity="0.5" />
      <circle cx="298" cy="237" r="2" fill="#7A8FA0" opacity="0.5" />
      {/* Backsplash tiles */}
      <rect x="15" y="155" width="570" height="45" fill="#354A5E" opacity="0.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <rect key={`bs-${i}`} x={20 + i * 47} y="158" width="44" height="18" rx="1" fill="none" stroke="#5A7A90" strokeWidth="0.5" opacity="0.5" />
      ))}

      {/* Coffee machine - detailed */}
      <rect x="42" y="148" width="60" height="52" rx="6" fill="#3D5166" stroke="#7A8FA0" strokeWidth="1" />
      <rect x="50" y="155" width="44" height="24" rx="3" fill="#1E293B" />
      {/* Machine buttons - brighter green pulse */}
      <circle cx="68" cy="190" r="3.5" fill="#58CC02" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.55;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="82" cy="190" r="3" fill="#FF6B6B" opacity="0.55" />
      {/* Coffee cup under machine */}
      <rect x="60" y="200" width="18" height="14" rx="4" fill="#F97316" opacity="0.75" />

      {/* Microwave */}
      <rect x="130" y="152" width="70" height="48" rx="4" fill="#3D5166" stroke="#7A8FA0" strokeWidth="1" />
      <rect x="138" y="158" width="40" height="34" rx="2" fill="#1E293B" />
      {/* Microwave door handle */}
      <rect x="180" y="164" width="3" height="22" rx="1" fill="#7A8FA0" />
      {/* Buttons */}
      <circle cx="190" cy="172" r="2.5" fill="#7A8FA0" opacity="0.5" />
      <rect x="186" y="180" width="8" height="5" rx="1" fill="#58CC02" opacity="0.4" />

      {/* Bar stools - much brighter */}
      {[310, 385, 460, 535].map((x, i) => {
        const colours = ["#FF6B6B", "#FBBF24", "#059669", "#3B82F6"];
        return (
          <g key={x}>
            {/* Seat */}
            <ellipse cx={x} cy="300" rx="16" ry="6" fill={colours[i]} opacity="0.65" />
            <ellipse cx={x} cy="298" rx="14" ry="5" fill={colours[i]} opacity="0.5" />
            {/* Stool leg */}
            <rect x={x - 2} y="306" width="4" height="40" rx="2" fill="#5A7A90" opacity="0.6" />
            {/* Foot rest ring */}
            <ellipse cx={x} cy="336" rx="10" ry="3" fill="none" stroke="#5A7A90" strokeWidth="1" opacity="0.45" />
            {/* Base */}
            <ellipse cx={x} cy="348" rx="14" ry="4" fill="#5A7A90" opacity="0.45" />
          </g>
        );
      })}

      {/* Fridge - tall, right side, sits on floor */}
      <rect x="490" y="60" width="80" height="200" rx="6" fill="#3D5166" stroke="#7A8FA0" strokeWidth="1.5" />
      <line x1="490" y1="160" x2="570" y2="160" stroke="#7A8FA0" strokeWidth="1" />
      {/* Fridge handles */}
      <rect x="560" y="100" width="4" height="22" rx="2" fill="#7A8FA0" />
      <rect x="560" y="175" width="4" height="22" rx="2" fill="#7A8FA0" />
      {/* Fridge magnets - brighter */}
      <circle cx="510" cy="90" r="4" fill="#FF6B6B" opacity="0.6" />
      <circle cx="525" cy="100" r="3" fill="#059669" opacity="0.55" />
      <rect x="515" y="110" width="16" height="12" rx="1" fill="#FBBF24" opacity="0.45" />

      {/* Plant on counter - vivid green */}
      <rect x="400" y="172" width="26" height="28" rx="6" fill="#7C3AED" opacity="0.6" />
      <ellipse cx="413" cy="165" rx="18" ry="16" fill="#10B981" opacity="0.65">
        <animate attributeName="ry" values="16;17;16" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="403" cy="158" rx="10" ry="12" fill="#34D399" opacity="0.55" />

      {/* Notice board on wall */}
      <rect x="25" y="30" width="100" height="80" rx="4" fill="#354A5E" stroke="#7A8FA0" strokeWidth="1" />
      {/* Sticky notes - more vivid */}
      <rect x="35" y="42" width="28" height="22" rx="2" fill="#FBBF24" opacity="0.55" transform="rotate(-2 49 53)" />
      <rect x="68" y="40" width="32" height="26" rx="2" fill="#FF6B6B" opacity="0.5" transform="rotate(3 84 53)" />
      <rect x="33" y="72" width="38" height="20" rx="2" fill="#3B82F6" opacity="0.5" />
      <rect x="76" y="74" width="28" height="18" rx="2" fill="#059669" opacity="0.45" transform="rotate(-1 90 83)" />

      {/* Ceiling light */}
      <rect x="260" y="0" width="80" height="6" rx="2" fill="#5A7A90" opacity="0.5" />
      <rect x="275" y="6" width="50" height="12" rx="3" fill="#7A8FA0" opacity="0.4" />
      <ellipse cx="300" cy="22" rx="30" ry="4" fill="#FDE68A" opacity="0.22">
        <animate attributeName="opacity" values="0.22;0.32;0.22" dur="4s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

/** Foreground layers — furniture that should occlude the character */

function OfficeForeground() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      {/* Desk surface */}
      <rect x="30" y="230" width="300" height="12" rx="3" fill="#5A7A90" />
      {/* Desk front panel */}
      <rect x="30" y="242" width="300" height="50" rx="2" fill="#4A6178" opacity="0.85" />
      {/* Desk legs */}
      <rect x="40" y="292" width="8" height="55" rx="2" fill="#4A6178" />
      <rect x="320" y="292" width="8" height="55" rx="2" fill="#4A6178" />
      {/* Items on desk that sit in front */}
      <rect x="145" y="245" width="80" height="14" rx="3" fill="#3D5166" />
      <rect x="235" y="248" width="22" height="10" rx="4" fill="#3D5166" />
      <rect x="75" y="216" width="22" height="22" rx="5" fill="#F97316" opacity="0.85" />
      <path d="M97 222 Q106 226 97 236" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.7" />
      <rect x="55" y="214" width="16" height="22" rx="4" fill="#7A8FA0" opacity="0.7" />
    </svg>
  );
}

function MeetingForeground() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      {/* Conference table */}
      <ellipse cx="300" cy="320" rx="200" ry="50" fill="#5A7A90" opacity="0.65" />
      <ellipse cx="300" cy="316" rx="190" ry="45" fill="#4A6178" opacity="0.5" />
      <ellipse cx="300" cy="314" rx="160" ry="30" fill="#7A8FA0" opacity="0.15" />
      {/* Items on table */}
      <rect x="240" y="308" width="22" height="16" rx="2" fill="#F59E0B" opacity="0.55" transform="rotate(-5 251 316)" />
      <rect x="345" y="306" width="20" height="14" rx="2" fill="#3B82F6" opacity="0.5" transform="rotate(6 355 313)" />
      <rect x="270" y="300" width="30" height="20" rx="2" fill="#1E293B" stroke="#7A8FA0" strokeWidth="0.5" opacity="0.65" />
      {/* Front row chairs */}
      {[160, 240, 360, 440].map((x) => (
        <g key={x}>
          <rect x={x - 16} y="370" width="32" height="24" rx="8" fill="#6366F1" opacity="0.65" />
          <rect x={x - 12} y="362" width="24" height="10" rx="5" fill="#818CF8" opacity="0.55" />
        </g>
      ))}
    </svg>
  );
}

function PresentationForeground() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      {/* Audience seats - all rows */}
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[70, 130, 190, 410, 470, 530].map((x) => (
            <g key={`${row}-${x}`}>
              <circle
                cx={x}
                cy={305 + row * 30}
                r={7 - row * 0.5}
                fill="#7A8FA0"
                opacity={0.55 - row * 0.08}
              />
              <ellipse
                cx={x}
                cy={316 + row * 30}
                rx={11 - row}
                ry={6}
                fill="#5A7A90"
                opacity={0.4 - row * 0.06}
              />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function BreakRoomForeground() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      {/* Only bar stools in front of character — counter is behind */}
      {[310, 385, 460, 535].map((x, i) => {
        const colours = ["#FF6B6B", "#FBBF24", "#059669", "#3B82F6"];
        return (
          <g key={x}>
            <ellipse cx={x} cy="300" rx="16" ry="6" fill={colours[i]} opacity="0.65" />
            <ellipse cx={x} cy="298" rx="14" ry="5" fill={colours[i]} opacity="0.5" />
            <rect x={x - 2} y="306" width="4" height="40" rx="2" fill="#5A7A90" opacity="0.6" />
            <ellipse cx={x} cy="336" rx="10" ry="3" fill="none" stroke="#5A7A90" strokeWidth="1" opacity="0.45" />
            <ellipse cx={x} cy="348" rx="14" ry="4" fill="#5A7A90" opacity="0.45" />
          </g>
        );
      })}
    </svg>
  );
}

const SCENES = [OfficeScene, MeetingScene, PresentationScene, BreakRoomScene];
const FOREGROUNDS = [OfficeForeground, MeetingForeground, PresentationForeground, BreakRoomForeground];

export function WorkplaceScene({ seed }: WorkplaceSceneProps) {
  const sceneIndex = hashToScene(seed);
  const Scene = SCENES[sceneIndex];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Scene />
    </div>
  );
}

export function WorkplaceSceneForeground({ seed }: WorkplaceSceneProps) {
  const sceneIndex = hashToScene(seed);
  const Foreground = FOREGROUNDS[sceneIndex];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Foreground />
    </div>
  );
}

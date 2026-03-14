"use client";

import { CommunicationStyle } from "@/types";

interface SceneCharacterProps {
  seed: string;
  style: CommunicationStyle;
  expression?: "neutral" | "speaking" | "thinking";
  animated?: boolean;
}

function hashSeed(seed: string): number[] {
  const values: number[] = [];
  for (let i = 0; i < 10; i++) {
    let hash = 0;
    const str = seed + i.toString();
    for (let j = 0; j < str.length; j++) {
      const char = str.charCodeAt(j);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    values.push(Math.abs(hash));
  }
  return values;
}

const SKIN_TONES = [
  "#F5D0A9",
  "#D4A574",
  "#C68642",
  "#8D5524",
  "#6B3A2A",
  "#E8C39E",
];
const HAIR_COLOURS = [
  "#2C1810",
  "#4A3728",
  "#8B6914",
  "#C4A35A",
  "#1A1A2E",
  "#6B3A2A",
  "#D4A574",
  "#333333",
];

// Clothing colours - professional, muted tones
const SHIRT_COLOURS = [
  "#3B4F6B", // Navy
  "#4A5568", // Charcoal
  "#5B6A80", // Slate
  "#2D4A3E", // Forest
  "#5C3D6E", // Plum
  "#6B4423", // Brown
  "#2F4858", // Dark teal
  "#4A3F35", // Espresso
];

const TROUSER_COLOURS = [
  "#1E293B", // Dark navy
  "#374151", // Graphite
  "#292524", // Near black
  "#1F2937", // Charcoal
  "#2D3748", // Slate
];

export function SceneCharacter({
  seed,
  expression = "neutral",
  animated = true,
}: SceneCharacterProps) {
  const hash = hashSeed(seed);

  const skinTone = SKIN_TONES[hash[0] % SKIN_TONES.length];
  const hairColour = HAIR_COLOURS[hash[1] % HAIR_COLOURS.length];
  const hasGlasses = hash[2] % 3 === 0;
  const hairStyle = hash[3] % 4;
  const faceShape = hash[4] % 3;
  const eyeStyle = hash[5] % 3;
  const shirtColour = SHIRT_COLOURS[hash[6] % SHIRT_COLOURS.length];
  const trouserColour = TROUSER_COLOURS[hash[7] % TROUSER_COLOURS.length];
  const isFemale = hash[8] % 2 === 0;

  const faceRx = faceShape === 0 ? 14 : faceShape === 1 ? 13 : 13.5;
  const faceRy = faceShape === 0 ? 15 : faceShape === 1 ? 16 : 14;

  const mouthOpen = expression === "speaking";
  const eyebrowRaise = expression === "thinking" ? -1.5 : 0;

  const blinkDelay = (hash[6] % 3000) / 1000;

  // viewBox: character is about 60 wide, 160 tall
  // Head centred at x=30, y=20-ish
  // Feet at y=155-ish

  return (
    <svg
      viewBox="0 0 60 160"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* === LEGS === */}
      {/* Left leg */}
      <rect x="18" y="105" width="10" height="40" rx="4" fill={trouserColour} />
      {/* Right leg */}
      <rect x="32" y="105" width="10" height="40" rx="4" fill={trouserColour} />
      {/* Shoes */}
      <ellipse cx="23" cy="147" rx="8" ry="4" fill="#1a1a1a" />
      <ellipse cx="37" cy="147" rx="8" ry="4" fill="#1a1a1a" />

      {/* === BODY / TORSO === */}
      {/* Torso */}
      <path
        d={isFemale
          ? "M18 60 Q17 75 18 105 L42 105 Q43 75 42 60 Q40 55 30 53 Q20 55 18 60Z"
          : "M16 60 Q15 75 18 105 L42 105 Q45 75 44 60 Q42 55 30 53 Q18 55 16 60Z"
        }
        fill={shirtColour}
      />
      {/* Shirt collar / neckline */}
      {isFemale ? (
        <path
          d="M24 55 Q30 60 36 55"
          fill="none"
          stroke={skinTone}
          strokeWidth="2"
        />
      ) : (
        <>
          {/* Collar */}
          <path d="M24 55 L28 62 L30 58" fill="white" opacity="0.25" />
          <path d="M36 55 L32 62 L30 58" fill="white" opacity="0.2" />
          {/* Tie or button line */}
          <line x1="30" y1="58" x2="30" y2="90" stroke="white" strokeWidth="0.5" opacity="0.15" />
        </>
      )}

      {/* === ARMS === */}
      {/* Left arm */}
      <path
        d="M16 60 Q10 80 14 100"
        fill="none"
        stroke={shirtColour}
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Left hand */}
      <circle cx="14" cy="100" r="5" fill={skinTone} />

      {/* Right arm */}
      <path
        d="M44 60 Q50 80 46 100"
        fill="none"
        stroke={shirtColour}
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Right hand */}
      <circle cx="46" cy="100" r="5" fill={skinTone} />

      {/* === NECK === */}
      <rect x="26" y="44" width="8" height="12" rx="3" fill={skinTone} />

      {/* === HEAD === */}
      <g>
        {/* Hair behind (long hair) */}
        {hairStyle === 2 && (
          <ellipse cx="30" cy="24" rx="17" ry="15" fill={hairColour} />
        )}

        {/* Face */}
        <ellipse cx="30" cy="28" rx={faceRx} ry={faceRy} fill={skinTone} />

        {/* Cheek blush */}
        <ellipse cx="20" cy="32" rx="3" ry="2" fill="#E8A0A0" opacity="0.12" />
        <ellipse cx="40" cy="32" rx="3" ry="2" fill="#E8A0A0" opacity="0.12" />

        {/* Hair */}
        {hairStyle === 0 && (
          <ellipse cx="30" cy="17" rx="15" ry="10" fill={hairColour} />
        )}
        {hairStyle === 1 && (
          <>
            <ellipse cx="30" cy="17" rx="16" ry="10" fill={hairColour} />
            <rect x="14" y="14" width="7" height="13" rx="3.5" fill={hairColour} />
            <rect x="39" y="14" width="7" height="13" rx="3.5" fill={hairColour} />
          </>
        )}
        {hairStyle === 2 && (
          <>
            <ellipse cx="30" cy="17" rx="16" ry="10" fill={hairColour} />
            <rect x="12" y="14" width="8" height="24" rx="4" fill={hairColour} />
            <rect x="40" y="14" width="8" height="24" rx="4" fill={hairColour} />
          </>
        )}
        {hairStyle === 3 && (
          <ellipse cx="30" cy="18" rx="14" ry="8" fill={hairColour} />
        )}

        {/* Eyes with blink */}
        <g
          style={{
            transformOrigin: "30px 27px",
            animation: animated
              ? `blink 4s ease-in-out ${blinkDelay}s infinite`
              : undefined,
          }}
        >
          {eyeStyle === 0 && (
            <>
              <ellipse cx="24" cy="27" rx="2.8" ry="3.2" fill="white" />
              <ellipse cx="36" cy="27" rx="2.8" ry="3.2" fill="white" />
              <circle cx="24.4" cy="27.4" r="1.6" fill="#2C1810" />
              <circle cx="36.4" cy="27.4" r="1.6" fill="#2C1810" />
            </>
          )}
          {eyeStyle === 1 && (
            <>
              <ellipse cx="24" cy="27" rx="3" ry="2.8" fill="white" />
              <ellipse cx="36" cy="27" rx="3" ry="2.8" fill="white" />
              <circle cx="24.4" cy="27.2" r="1.5" fill="#1A1A2E" />
              <circle cx="36.4" cy="27.2" r="1.5" fill="#1A1A2E" />
            </>
          )}
          {eyeStyle === 2 && (
            <>
              <ellipse cx="24" cy="27" rx="2.6" ry="3" fill="white" />
              <ellipse cx="36" cy="27" rx="2.6" ry="3" fill="white" />
              <circle cx="24.3" cy="27.4" r="1.5" fill="#4A3728" />
              <circle cx="36.3" cy="27.4" r="1.5" fill="#4A3728" />
            </>
          )}
          {/* Eye shine */}
          <circle cx="25" cy="26.2" r="0.8" fill="white" opacity="0.9" />
          <circle cx="37" cy="26.2" r="0.8" fill="white" opacity="0.9" />
        </g>

        {/* Eyebrows */}
        <g
          style={{
            transition: "transform 0.3s ease-out",
            transform: `translateY(${eyebrowRaise}px)`,
          }}
        >
          <path
            d="M21 23 Q24 21.5 27 22.5"
            fill="none"
            stroke={hairColour}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M33 22.5 Q36 21.5 39 23"
            fill="none"
            stroke={hairColour}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Nose */}
        <path
          d="M28.5 30 Q30 33 31.5 30"
          fill="none"
          stroke={skinTone}
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Mouth */}
        {mouthOpen ? (
          <>
            <ellipse cx="30" cy="36" rx="3.2" ry="2" fill="#C0766E">
              {animated && (
                <animate
                  attributeName="ry"
                  values="2;2.5;2;1.5;2"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
            <ellipse cx="30" cy="35.5" rx="2.2" ry="0.6" fill="white" opacity="0.6" />
          </>
        ) : expression === "thinking" ? (
          <ellipse cx="30" cy="36.5" rx="1.6" ry="1.6" fill="#C0766E" opacity="0.8" />
        ) : (
          <path
            d="M26 35 Q30 38 34 35"
            fill="none"
            stroke="#C0766E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}

        {/* Glasses */}
        {hasGlasses && (
          <g fill="none" stroke="#444" strokeWidth="1.1">
            <rect x="19.5" y="24" width="9" height="7.5" rx="2.5" />
            <rect x="31.5" y="24" width="9" height="7.5" rx="2.5" />
            <line x1="28.5" y1="27.5" x2="31.5" y2="27.5" />
            <line x1="19.5" y1="26.5" x2="16" y2="25" />
            <line x1="40.5" y1="26.5" x2="44" y2="25" />
          </g>
        )}
      </g>
    </svg>
  );
}

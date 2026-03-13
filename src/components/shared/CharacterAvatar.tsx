"use client";

import { CommunicationStyle } from "@/types";
import { STYLES } from "@/data/styles";

interface CharacterAvatarProps {
  name: string;
  seed: string;
  style: CommunicationStyle;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  expression?: "neutral" | "speaking" | "thinking";
  neutral?: boolean;
  animated?: boolean; // Enable idle animations (blink, float)
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

const SIZE_MAP = {
  sm: 48,
  md: 72,
  lg: 96,
  xl: 128,
  "2xl": 180,
  "3xl": 280,
};

export function CharacterAvatar({
  name,
  seed,
  style,
  size = "md",
  expression = "neutral",
  neutral = false,
  animated = true,
}: CharacterAvatarProps) {
  const hash = hashSeed(seed);
  const px = SIZE_MAP[size];

  const displayColour = neutral ? "#475569" : STYLES[style].colour;
  const displayBg = neutral ? "#F1F5F9" : STYLES[style].colourLight;

  const skinTone = SKIN_TONES[hash[0] % SKIN_TONES.length];
  const hairColour = HAIR_COLOURS[hash[1] % HAIR_COLOURS.length];
  const hasGlasses = hash[2] % 3 === 0;
  const hairStyle = hash[3] % 4;
  const faceShape = hash[4] % 3;
  const eyeStyle = hash[5] % 3;

  const faceRx = faceShape === 0 ? 18 : faceShape === 1 ? 16 : 17;
  const faceRy = faceShape === 0 ? 18 : faceShape === 1 ? 20 : 17;

  const mouthOpen = expression === "speaking";
  const eyebrowRaise = expression === "thinking" ? -1.5 : 0;

  const gradId = `bg-${seed.replace(/\s/g, "")}-${neutral ? "n" : "s"}`;
  const blinkId = `blink-${seed.replace(/\s/g, "")}`;

  // Deterministic blink delay so characters blink at different times
  const blinkDelay = (hash[6] % 3000) / 1000;
  const floatDelay = (hash[7] % 2000) / 1000;

  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: px,
        height: px,
        animation: animated
          ? `idle-float 3s ease-in-out ${floatDelay}s infinite`
          : undefined,
      }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 0 2px ${displayColour}80, 0 2px 6px rgba(0,0,0,0.1)`,
          animation:
            expression === "speaking"
              ? "breathe 2s ease-in-out infinite"
              : undefined,
        }}
      />
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: px,
          height: px,
          backgroundColor: displayBg,
        }}
      >
        <svg
          viewBox="0 0 80 80"
          width={px}
          height={px}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Avatar of ${name}`}
        >
          <defs>
            <radialGradient id={gradId} cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor={displayBg} />
              <stop offset="100%" stopColor={`${displayColour}15`} />
            </radialGradient>
          </defs>
          <rect width="80" height="80" fill={`url(#${gradId})`} />

          {/* Neck */}
          <rect x="34" y="52" width="12" height="10" rx="3" fill={skinTone} />

          {/* Shoulders / clothing */}
          <ellipse
            cx="40"
            cy="72"
            rx="24"
            ry="14"
            fill={displayColour}
            opacity="0.85"
          />
          <ellipse cx="40" cy="72" rx="22" ry="12" fill={displayColour} />
          <path
            d="M34 62 L40 67 L46 62"
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Hair behind - long hair only, kept close to head */}
          {hairStyle === 2 && (
            <ellipse cx="40" cy="30" rx="20" ry="18" fill={hairColour} />
          )}

          {/* Face */}
          <ellipse cx="40" cy="36" rx={faceRx} ry={faceRy} fill={skinTone} />
          <ellipse
            cx="28"
            cy="40"
            rx="4"
            ry="2.5"
            fill="#E8A0A0"
            opacity="0.15"
          />
          <ellipse
            cx="52"
            cy="40"
            rx="4"
            ry="2.5"
            fill="#E8A0A0"
            opacity="0.15"
          />

          {/* Hair */}
          {hairStyle === 0 && (
            <ellipse cx="40" cy="22" rx="19" ry="12" fill={hairColour} />
          )}
          {hairStyle === 1 && (
            <>
              <ellipse cx="40" cy="22" rx="20" ry="12" fill={hairColour} />
              <rect
                x="20"
                y="18"
                width="8"
                height="16"
                rx="4"
                fill={hairColour}
              />
              <rect
                x="52"
                y="18"
                width="8"
                height="16"
                rx="4"
                fill={hairColour}
              />
            </>
          )}
          {hairStyle === 2 && (
            <>
              <ellipse cx="40" cy="22" rx="20" ry="12" fill={hairColour} />
              <rect
                x="18"
                y="18"
                width="10"
                height="28"
                rx="5"
                fill={hairColour}
              />
              <rect
                x="52"
                y="18"
                width="10"
                height="28"
                rx="5"
                fill={hairColour}
              />
            </>
          )}
          {hairStyle === 3 && (
            <ellipse cx="40" cy="24" rx="17" ry="9" fill={hairColour} />
          )}

          {/* Eyes - with blink animation */}
          <g
            style={{
              transformOrigin: "40px 35px",
              animation: animated
                ? `blink 4s ease-in-out ${blinkDelay}s infinite`
                : undefined,
            }}
          >
            {eyeStyle === 0 && (
              <>
                <ellipse cx="33" cy="35" rx="3.5" ry="4" fill="white" />
                <ellipse cx="47" cy="35" rx="3.5" ry="4" fill="white" />
                <circle cx="33.5" cy="35.5" r="2" fill="#2C1810" />
                <circle cx="47.5" cy="35.5" r="2" fill="#2C1810" />
              </>
            )}
            {eyeStyle === 1 && (
              <>
                <ellipse cx="33" cy="35" rx="4" ry="3.5" fill="white" />
                <ellipse cx="47" cy="35" rx="4" ry="3.5" fill="white" />
                <circle cx="33.5" cy="35.3" r="1.8" fill="#1A1A2E" />
                <circle cx="47.5" cy="35.3" r="1.8" fill="#1A1A2E" />
              </>
            )}
            {eyeStyle === 2 && (
              <>
                <ellipse cx="33" cy="35" rx="3.2" ry="3.8" fill="white" />
                <ellipse cx="47" cy="35" rx="3.2" ry="3.8" fill="white" />
                <circle cx="33.3" cy="35.5" r="1.9" fill="#4A3728" />
                <circle cx="47.3" cy="35.5" r="1.9" fill="#4A3728" />
              </>
            )}
            {/* Eye shine */}
            <circle cx="34.5" cy="34" r="1" fill="white" opacity="0.9" />
            <circle cx="48.5" cy="34" r="1" fill="white" opacity="0.9" />
            <circle cx="33" cy="35.5" r="0.4" fill="white" opacity="0.5" />
            <circle cx="47" cy="35.5" r="0.4" fill="white" opacity="0.5" />
          </g>

          {/* Eyebrows - animated for expression changes */}
          <g
            style={{
              transition: "transform 0.3s ease-out",
              transform: `translateY(${eyebrowRaise}px)`,
            }}
          >
            <path
              d={`M29 30 Q32.5 28 36 29`}
              fill="none"
              stroke={hairColour}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d={`M44 29 Q47.5 28 51 30`}
              fill="none"
              stroke={hairColour}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Nose */}
          <path
            d="M38.5 38 Q40 41.5 41.5 38"
            fill="none"
            stroke={skinTone}
            strokeWidth="1.2"
            opacity="0.5"
          />

          {/* Mouth - with smooth expression transitions */}
          <g
            style={{
              transition: "opacity 0.3s ease-out",
            }}
          >
            {mouthOpen ? (
              <>
                <ellipse cx="40" cy="44" rx="4" ry="2.5" fill="#C0766E">
                  {animated && (
                    <animate
                      attributeName="ry"
                      values="2.5;3;2.5;2;2.5"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                  )}
                </ellipse>
                <ellipse
                  cx="40"
                  cy="43.5"
                  rx="3"
                  ry="0.8"
                  fill="white"
                  opacity="0.6"
                />
              </>
            ) : expression === "thinking" ? (
              /* Thinking - small 'o' mouth */
              <ellipse cx="40" cy="44.5" rx="2" ry="2" fill="#C0766E" opacity="0.8" />
            ) : (
              /* Neutral/happy - gentle smile */
              <path
                d="M35 43 Q40 46 45 43"
                fill="none"
                stroke="#C0766E"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </g>

          {/* Glasses */}
          {hasGlasses && (
            <g fill="none" stroke="#444" strokeWidth="1.3">
              <rect x="27" y="30" width="12" height="10" rx="3" />
              <rect x="41" y="30" width="12" height="10" rx="3" />
              <line x1="39" y1="35" x2="41" y2="35" />
              <line x1="27" y1="34" x2="23" y2="32" />
              <line x1="53" y1="34" x2="57" y2="32" />
            </g>
          )}
        </svg>
      </div>

      {/* Speaking indicator */}
      {expression === "speaking" && (
        <div
          className="absolute -bottom-0.5 -right-0.5 rounded-full flex items-center justify-center"
          style={{
            width:
              size === "sm" ? 14 : size === "md" ? 18 : size === "3xl" ? 40 : size === "2xl" ? 32 : size === "xl" ? 26 : 22,
            height:
              size === "sm" ? 14 : size === "md" ? 18 : size === "3xl" ? 40 : size === "2xl" ? 32 : size === "xl" ? 26 : 22,
            backgroundColor: displayColour,
            boxShadow: `0 0 8px ${displayColour}60`,
            animation: "breathe 1.5s ease-in-out infinite",
          }}
        >
          <svg viewBox="0 0 16 16" className="w-3/4 h-3/4">
            <path
              d="M3 8 Q5.5 4.5 8 8 Q10.5 11.5 13 8"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Thinking indicator */}
      {expression === "thinking" && (
        <div
          className="absolute -top-1 -right-1 rounded-full flex items-center justify-center"
          style={{
            width:
              size === "sm" ? 14 : size === "md" ? 18 : size === "3xl" ? 40 : size === "2xl" ? 32 : size === "xl" ? 26 : 22,
            height:
              size === "sm" ? 14 : size === "md" ? 18 : size === "3xl" ? 40 : size === "2xl" ? 32 : size === "xl" ? 26 : 22,
            backgroundColor: "#F59E0B",
            boxShadow: "0 0 8px rgba(245, 158, 11, 0.5)",
            animation: "breathe 2s ease-in-out infinite",
          }}
        >
          <svg viewBox="0 0 16 16" className="w-3/4 h-3/4">
            <text
              x="8"
              y="12"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              ?
            </text>
          </svg>
        </div>
      )}
    </div>
  );
}

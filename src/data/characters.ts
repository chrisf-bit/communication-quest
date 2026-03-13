import { Character } from "@/types";

export const CHARACTERS: Character[] = [
  // Direct style characters
  {
    id: "jordan-cole",
    name: "Jordan Cole",
    role: "VP of Operations",
    organisation: "Nexus Group",
    style: "direct",
    avatarSeed: "jordan-cole",
    personality:
      "Fast-paced, decisive, and impatient with waffle. Respects people who get to the point. Values results above process.",
  },
  {
    id: "sam-hartley",
    name: "Sam Hartley",
    role: "Head of Commercial",
    organisation: "Redline Partners",
    style: "direct",
    avatarSeed: "sam-hartley",
    personality:
      "Blunt and competitive. Driven by targets and deadlines. Cuts through complexity quickly - sometimes too quickly.",
  },
  {
    id: "alex-tran",
    name: "Alex Tran",
    role: "Programme Director",
    organisation: "Atlas Consulting",
    style: "direct",
    avatarSeed: "alex-tran",
    personality:
      "Strategic and no-nonsense. Runs tight meetings and expects preparation. Prefers options to open-ended questions.",
  },

  // Expressive style characters
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Marketing Director",
    organisation: "BrightPath Media",
    style: "expressive",
    avatarSeed: "priya-sharma",
    personality:
      "Creative, energetic, and full of ideas. Thrives on brainstorming and hates being boxed in. Inspires others but can lose focus.",
  },
  {
    id: "marcus-webb",
    name: "Marcus Webb",
    role: "Head of Innovation",
    organisation: "Forge Labs",
    style: "expressive",
    avatarSeed: "marcus-webb",
    personality:
      "Visionary and persuasive. Loves pitching new concepts and building excitement. Sometimes jumps ahead before the detail is ready.",
  },
  {
    id: "nina-okafor",
    name: "Nina Okafor",
    role: "Client Engagement Lead",
    organisation: "Horizon Group",
    style: "expressive",
    avatarSeed: "nina-okafor",
    personality:
      "Warm, sociable, and relationship-driven. Builds rapport quickly and brings energy to every room. Can prioritise people over process.",
  },

  // Supportive style characters
  {
    id: "tom-brennan",
    name: "Tom Brennan",
    role: "Team Lead, Customer Success",
    organisation: "Steadfast Solutions",
    style: "supportive",
    avatarSeed: "tom-brennan",
    personality:
      "Calm, reliable, and people-first. Takes time to check in on the team. Uncomfortable with conflict and sudden change.",
  },
  {
    id: "leah-morgan",
    name: "Leah Morgan",
    role: "HR Business Partner",
    organisation: "Clearwater Health",
    style: "supportive",
    avatarSeed: "leah-morgan",
    personality:
      "Empathetic and careful. Thinks about the human impact of every decision. Needs reassurance that change will be handled well.",
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Operations Manager",
    organisation: "Keystone Logistics",
    style: "supportive",
    avatarSeed: "david-chen",
    personality:
      "Steady, loyal, and consistent. Values trust and follow-through above all. Prefers to build consensus rather than push decisions.",
  },

  // Analytical style characters
  {
    id: "rachel-finch",
    name: "Rachel Finch",
    role: "Head of Data & Insights",
    organisation: "Meridian Analytics",
    style: "analytical",
    avatarSeed: "rachel-finch",
    personality:
      "Precise, thorough, and evidence-driven. Won't commit to anything without data. Asks probing questions and spots gaps quickly.",
  },
  {
    id: "owen-grant",
    name: "Owen Grant",
    role: "Quality Assurance Lead",
    organisation: "Calibre Systems",
    style: "analytical",
    avatarSeed: "owen-grant",
    personality:
      "Meticulous and process-oriented. Values accuracy above speed. Can seem cautious but catches issues others miss.",
  },
  {
    id: "fiona-banks",
    name: "Fiona Banks",
    role: "Finance Director",
    organisation: "Sterling Group",
    style: "analytical",
    avatarSeed: "fiona-banks",
    personality:
      "Sharp, detail-focused, and sceptical of vague proposals. Wants numbers, timelines, and risk analysis before making decisions.",
  },
];

export function getCharacter(id: string): Character | undefined {
  return CHARACTERS.find((c) => c.id === id);
}

export function getCharactersByStyle(style: string): Character[] {
  return CHARACTERS.filter((c) => c.style === style);
}

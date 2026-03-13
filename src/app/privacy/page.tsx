"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Database,
  Eye,
  Trash2,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Lock,
  Globe,
  UserCheck,
} from "lucide-react";
import { revokeConsent } from "@/lib/consent";

type SectionId =
  | "what-we-collect"
  | "how-we-store"
  | "legal-basis"
  | "your-rights"
  | "children"
  | "third-parties"
  | "cookies"
  | "changes"
  | "contact";

const SECTIONS: {
  id: SectionId;
  title: string;
  icon: typeof Shield;
  content: React.ReactNode;
}[] = [
  {
    id: "what-we-collect",
    title: "What We Collect",
    icon: Database,
    content: (
      <div className="space-y-3">
        <p>
          Communication Quest collects and stores the following data locally on your device:
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Game progress</strong> - workouts completed, scores, XP earned, proficiency
              levels, and streak data
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Assessment results</strong> - your communication style profile from the
              placement quiz
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Session history</strong> - records of your last 20 training sessions
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Consent preferences</strong> - your privacy consent choice and timestamp
            </span>
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect your name, email address, IP address, or any
          personally identifiable information unless you explicitly provide it when creating an
          account (future feature).
        </p>
      </div>
    ),
  },
  {
    id: "how-we-store",
    title: "How We Store Your Data",
    icon: Lock,
    content: (
      <div className="space-y-3">
        <p>
          All data is stored in your browser&apos;s <strong>local storage</strong>. This means:
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>Data stays on your device - it is never transmitted to our servers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              Data is specific to your browser - using a different browser or device starts fresh
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>Clearing your browser data will remove all stored progress</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>No cookies are used by this application</span>
          </li>
        </ul>
        <p>
          When cloud accounts are introduced in a future update, data will be stored securely in
          encrypted databases with industry-standard protections. This policy will be updated
          before that change takes effect, and you will be asked to re-consent.
        </p>
      </div>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    icon: UserCheck,
    content: (
      <div className="space-y-3">
        <p>
          Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act
          2018, our legal basis for storing data on your device is:
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Consent (Article 6(1)(a))</strong> - You provide explicit consent via the
              storage consent banner before any data is stored
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Legitimate interest (Article 6(1)(f))</strong> - Essential storage is
              necessary for the application to function as expected
            </span>
          </li>
        </ul>
        <p>
          You may withdraw your consent at any time by using the controls in the &quot;Your
          Rights&quot; section below or by clearing your browser&apos;s local storage.
        </p>
      </div>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Eye,
    content: (
      <div className="space-y-3">
        <p>Under UK GDPR, you have the following rights regarding your data:</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Right of access</strong> - All your data is stored in your browser and
              visible to you through the Progress page
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Right to erasure</strong> - You can delete all data at any time using the
              button below, or by clearing your browser&apos;s local storage
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Right to withdraw consent</strong> - You can withdraw your storage consent
              at any time
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Right to data portability</strong> - Your data is stored as standard JSON
              in your browser and can be exported
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>Right to lodge a complaint</strong> - You may contact the Information
              Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                ico.org.uk
              </a>
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    icon: Shield,
    content: (
      <p>
        This application is designed for professional workplace training and is not directed at
        children under the age of 16. We do not knowingly collect data from children. If you
        believe a child has provided data through this application, please contact us and we will
        take steps to delete that information.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
    icon: Globe,
    content: (
      <div className="space-y-3">
        <p>
          This application is hosted on <strong>Vercel</strong> (Vercel Inc., San Francisco, CA).
          Vercel may collect standard web server logs including IP addresses and request metadata
          as part of their hosting service. Vercel&apos;s privacy practices are governed by their
          own{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p>
          No other third-party services receive data from this application. We do not use
          analytics tracking, advertising networks, or social media integrations.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Local Storage",
    icon: Database,
    content: (
      <div className="space-y-3">
        <p>
          This application does <strong>not use cookies</strong>.
        </p>
        <p>
          We use browser <strong>local storage</strong> (a similar but distinct technology) to
          save your game progress and preferences. Unlike cookies, local storage data is never
          automatically sent to servers with HTTP requests.
        </p>
        <p>
          Under the Privacy and Electronic Communications Regulations 2003 (PECR), local storage
          is treated similarly to cookies. We obtain your consent before storing any data.
        </p>
        <p>We use two local storage entries:</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>conversation-quest-consent</strong> - Your consent preferences (essential,
              always stored after consent)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <span>
              <strong>conversation-quest-progress</strong> - Your game progress and session data
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: Eye,
    content: (
      <p>
        We may update this privacy policy to reflect changes in our practices or for legal
        reasons. When we make material changes, we will update the version number and
        &quot;last updated&quot; date at the top of this page. If the changes require
        re-consent (such as introducing server-side data storage), you will be prompted to
        review and accept the updated policy before continuing to use the application.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    content: (
      <div className="space-y-3">
        <p>
          If you have questions about this privacy policy or wish to exercise your data rights,
          contact us at:
        </p>
        <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
          <p className="font-medium text-white">Rapid Learn Limited</p>
          <p className="text-white/60 text-sm mt-1">
            Email:{" "}
            <a
              href="mailto:privacy@rapid-learn.co.uk"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              privacy@rapid-learn.co.uk
            </a>
          </p>
          <p className="text-white/60 text-sm mt-1">
            Registered in England and Wales
          </p>
        </div>
        <p className="text-white/50 text-sm">
          We aim to respond to all data protection enquiries within 30 days.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  const [expanded, setExpanded] = useState<Set<SectionId>>(new Set(["what-we-collect"]));
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  function toggleSection(id: SectionId) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleDeleteData() {
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }
    // Clear all app data
    if (typeof window !== "undefined") {
      localStorage.removeItem("conversation-quest-progress");
      revokeConsent();
    }
    setDeleteConfirm(false);
    window.location.href = "/";
  }

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)]"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #1a1040 50%, #0f172a 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124, 58, 237, 0.15)" }}
            >
              <Shield size={24} className="text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-fredoka)]">
                Privacy Policy
              </h1>
              <p className="text-white/50 text-sm">
                Version 1.0 - Last updated: 13 March 2026
              </p>
            </div>
          </div>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4">
            Communication Quest is operated by Rapid Learn Limited. We are committed to protecting
            your privacy and being transparent about how we handle your data. This policy explains
            what data we collect, how it is stored, and your rights under UK GDPR.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-2">
          {SECTIONS.map(({ id, title, icon: Icon, content }) => {
            const isOpen = expanded.has(id);
            return (
              <div
                key={id}
                className="rounded-xl overflow-hidden transition-all"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isOpen ? "rgba(124, 58, 237, 0.3)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <button
                  onClick={() => toggleSection(id)}
                  className="w-full flex items-center gap-3 px-4 sm:px-5 py-3.5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <Icon size={18} className={isOpen ? "text-purple-400" : "text-white/40"} />
                  <span
                    className={`flex-1 text-sm sm:text-base font-medium ${isOpen ? "text-white" : "text-white/70"}`}
                  >
                    {title}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-white/40" />
                  ) : (
                    <ChevronDown size={18} className="text-white/40" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 text-white/70 text-sm leading-relaxed">
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Data management */}
        <div
          className="mt-8 p-5 sm:p-6 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <Trash2 size={18} className="text-white/50" />
            Manage Your Data
          </h2>
          <p className="text-white/60 text-sm mb-4">
            Delete all stored data including your progress, assessment results, and consent
            preferences. This action cannot be undone.
          </p>
          <button
            onClick={handleDeleteData}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{
              background: deleteConfirm
                ? "linear-gradient(135deg, #dc2626, #b91c1c)"
                : "rgba(239, 68, 68, 0.1)",
              color: deleteConfirm ? "#fff" : "#f87171",
              border: deleteConfirm ? "none" : "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            {deleteConfirm ? "Confirm - Delete All Data" : "Delete All My Data"}
          </button>
          {deleteConfirm && (
            <button
              onClick={() => setDeleteConfirm(false)}
              className="ml-3 px-4 py-2.5 rounded-lg text-sm text-white/50 hover:text-white/70 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Footer */}
        <p className="text-white/30 text-xs text-center mt-8">
          Rapid Learn Limited - Registered in England and Wales
        </p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Home, BarChart3, BookOpen, Info, Play } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/workout", label: "Play", icon: Play },
  { href: "/practice", label: "Practice", icon: BookOpen },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/method", label: "Styles", icon: Info },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(15, 23, 42, 0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 group-hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #58CC02, #46A302)",
                boxShadow: "0 2px 8px rgba(88, 204, 2, 0.25)",
              }}
            >
              <MessageCircle size={20} className="text-white" />
            </div>
            <span className="font-semibold text-white hidden sm:inline tracking-tight">
              Conversation Quest
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#58CC02] text-white shadow-sm"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden items-center gap-0.5">
            {NAV_ITEMS.slice(0, 4).map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-lg text-[10px] font-medium transition-colors
                    ${
                      isActive
                        ? "text-[#58CC02]"
                        : "text-white/75"
                    }
                  `}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

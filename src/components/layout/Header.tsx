"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessagesSquare, Home, BarChart3, BookOpen, Info, Play, ArrowRight, Package, LogIn, LogOut, User, LayoutDashboard } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { useOptionalAuth } from "@/components/providers/AuthProvider";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/workout", label: "Play", icon: Play },
  { href: "/practice", label: "Practice", icon: BookOpen },
  { href: "/packs", label: "Packs", icon: Package },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/method", label: "Styles", icon: Info },
];

export function Header() {
  const pathname = usePathname();
  const { progress } = useProgress();
  const auth = useOptionalAuth();

  const isDemo = progress?.isDemo ?? false;
  const isAuthenticated = !!auth?.user;

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
                background: "linear-gradient(135deg, #F97316, #EA580C)",
                boxShadow: "0 2px 8px rgba(249, 115, 22, 0.25)",
              }}
            >
              <MessagesSquare size={20} className="text-white" />
            </div>
            <span className="font-semibold text-white hidden sm:inline tracking-tight">
              Communication Quest
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
            {isAuthenticated ? (
              <>
                <Link
                  href="/facilitator"
                  className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === "/facilitator"
                      ? "bg-[#58CC02] text-white shadow-sm"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <LayoutDashboard size={18} />
                  <span className="hidden lg:inline">Dashboard</span>
                </Link>
                <button
                  onClick={() => auth?.signOut()}
                  className="ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <User size={18} />
                  <span className="hidden lg:inline text-xs truncate max-w-[120px]">
                    {auth?.user?.email}
                  </span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <LogIn size={18} />
                  Sign In
                </Link>
                {isDemo && (
                  <Link
                    href="/signup"
                    className="ml-1 flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                    }}
                  >
                    Sign Up
                    <ArrowRight size={16} />
                  </Link>
                )}
              </>
            )}
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden items-center gap-0.5">
            {NAV_ITEMS.slice(0, 5).map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] font-medium transition-colors
                    ${
                      isActive
                        ? "text-[#58CC02]"
                        : "text-white/75"
                    }
                  `}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              );
            })}
            {isAuthenticated ? (
              <button
                onClick={() => auth?.signOut()}
                className="ml-1 flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] font-medium text-white/75"
              >
                <User size={18} />
                Account
              </button>
            ) : (
              <Link
                href="/login"
                className="ml-1 flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] font-medium text-white/75"
              >
                <LogIn size={18} />
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { useOptionalAuth } from "@/components/providers/AuthProvider";
import {
  Shield,
  Plus,
  Building2,
  Users,
  Copy,
  Check,
  Link as LinkIcon,
  Clock,
  UserPlus,
} from "lucide-react";

interface Org {
  id: string;
  name: string;
  created_at: string;
}

interface Cohort {
  id: string;
  org_id: string;
  name: string;
  join_code: string;
  seat_limit: number;
  starts_at: string;
  expires_at: string;
  memberCount: number;
}

interface OrgMember {
  user_id: string;
  org_id: string;
  role: string;
}

export default function AdminPage() {
  const auth = useOptionalAuth();
  const [orgs, setOrgs] = useState<Org[]>([]);
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [members, setMembers] = useState<OrgMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Forms
  const [showNewOrg, setShowNewOrg] = useState(false);
  const [newOrgName, setNewOrgName] = useState("");
  const [showNewCohort, setShowNewCohort] = useState(false);
  const [newCohortOrgId, setNewCohortOrgId] = useState("");
  const [newCohortName, setNewCohortName] = useState("");
  const [newCohortSeats, setNewCohortSeats] = useState("30");
  const [newCohortWeeks, setNewCohortWeeks] = useState("12");
  const [showAddFacilitator, setShowAddFacilitator] = useState(false);
  const [facOrgId, setFacOrgId] = useState("");
  const [facEmail, setFacEmail] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    const res = await fetch("/api/admin");
    const data = await res.json();
    if (data.error) {
      setError(data.error);
    } else {
      setOrgs(data.orgs);
      setCohorts(data.cohorts);
      setMembers(data.members);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (auth?.user) loadData();
  }, [auth?.user, loadData]);

  const handleAction = useCallback(async (body: Record<string, unknown>) => {
    setActionLoading(true);
    setError(null);
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setActionLoading(false);
    if (data.error) {
      setError(data.error);
      return false;
    }
    await loadData();
    return true;
  }, [loadData]);

  const handleCopy = useCallback((code: string) => {
    const url = `${window.location.origin}/join/${code}`;
    navigator.clipboard.writeText(url);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  }, []);

  if (!auth?.user) {
    return <Shell><p className="text-white/60">Please sign in.</p></Shell>;
  }

  if (loading) {
    return <Shell><p className="text-white/60">Loading...</p></Shell>;
  }

  if (error === "Unauthorised") {
    return (
      <Shell>
        <div className="text-center space-y-4">
          <Shield size={48} className="text-[#7C3AED] mx-auto" />
          <h2 className="text-xl font-bold text-white">Admin Access Only</h2>
          <p className="text-sm text-white/60">This page is restricted.</p>
        </div>
      </Shell>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-3.5rem)]"
      style={{
        background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Admin</h1>
          <div className="flex gap-2">
            <ActionButton icon={Building2} label="New Org" onClick={() => setShowNewOrg(true)} />
            <ActionButton icon={Plus} label="New Cohort" onClick={() => { setShowNewCohort(true); if (orgs.length > 0) setNewCohortOrgId(orgs[0].id); }} />
            <ActionButton icon={UserPlus} label="Add Facilitator" onClick={() => { setShowAddFacilitator(true); if (orgs.length > 0) setFacOrgId(orgs[0].id); }} />
          </div>
        </div>

        {error && error !== "Unauthorised" && (
          <div className="rounded-xl p-3 text-sm text-red-300" style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
            {error}
          </div>
        )}

        {/* New Org Form */}
        {showNewOrg && (
          <FormCard title="Create Organisation" onCancel={() => setShowNewOrg(false)}>
            <input
              type="text"
              placeholder="Organisation name"
              value={newOrgName}
              onChange={(e) => setNewOrgName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
            />
            <button
              disabled={actionLoading || !newOrgName.trim()}
              onClick={async () => {
                const ok = await handleAction({ action: "createOrg", name: newOrgName.trim() });
                if (ok) { setShowNewOrg(false); setNewOrgName(""); }
              }}
              className="w-full py-2.5 rounded-xl font-bold text-white text-sm disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
            >
              {actionLoading ? "Creating..." : "Create Organisation"}
            </button>
          </FormCard>
        )}

        {/* New Cohort Form */}
        {showNewCohort && (
          <FormCard title="Create Cohort" onCancel={() => setShowNewCohort(false)}>
            <select
              value={newCohortOrgId}
              onChange={(e) => setNewCohortOrgId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
            >
              {orgs.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
            </select>
            <input
              type="text"
              placeholder="Cohort name (e.g. March 2026 Intake)"
              value={newCohortName}
              onChange={(e) => setNewCohortName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Seats</label>
                <input
                  type="number"
                  value={newCohortSeats}
                  onChange={(e) => setNewCohortSeats(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
                />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1 block">Duration (weeks)</label>
                <input
                  type="number"
                  value={newCohortWeeks}
                  onChange={(e) => setNewCohortWeeks(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
                />
              </div>
            </div>
            <button
              disabled={actionLoading || !newCohortName.trim() || !newCohortOrgId}
              onClick={async () => {
                const ok = await handleAction({
                  action: "createCohort",
                  orgId: newCohortOrgId,
                  name: newCohortName.trim(),
                  seatLimit: parseInt(newCohortSeats) || 30,
                  weeks: parseInt(newCohortWeeks) || 12,
                });
                if (ok) { setShowNewCohort(false); setNewCohortName(""); }
              }}
              className="w-full py-2.5 rounded-xl font-bold text-white text-sm disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
            >
              {actionLoading ? "Creating..." : "Create Cohort"}
            </button>
          </FormCard>
        )}

        {/* Add Facilitator Form */}
        {showAddFacilitator && (
          <FormCard title="Add Facilitator" onCancel={() => setShowAddFacilitator(false)}>
            <select
              value={facOrgId}
              onChange={(e) => setFacOrgId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
            >
              {orgs.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
            </select>
            <input
              type="email"
              placeholder="Facilitator email"
              value={facEmail}
              onChange={(e) => setFacEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              style={{ background: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(255,255,255,0.15)" }}
            />
            <p className="text-xs text-white/40">The facilitator must have signed up to the app first.</p>
            <button
              disabled={actionLoading || !facEmail.trim() || !facOrgId}
              onClick={async () => {
                const ok = await handleAction({ action: "addFacilitator", orgId: facOrgId, email: facEmail.trim() });
                if (ok) { setShowAddFacilitator(false); setFacEmail(""); }
              }}
              className="w-full py-2.5 rounded-xl font-bold text-white text-sm disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
            >
              {actionLoading ? "Adding..." : "Add Facilitator"}
            </button>
          </FormCard>
        )}

        {/* Organisations */}
        <Section title="Organisations">
          {orgs.length === 0 ? (
            <p className="text-sm text-white/50">No organisations yet.</p>
          ) : (
            <div className="space-y-2">
              {orgs.map((org) => {
                const orgCohorts = cohorts.filter((c) => c.org_id === org.id);
                const orgFacilitators = members.filter((m) => m.org_id === org.id && (m.role === "facilitator" || m.role === "admin"));
                return (
                  <div
                    key={org.id}
                    className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Building2 size={18} className="text-[#7C3AED]" />
                        <span className="text-sm font-bold text-white">{org.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span>{orgCohorts.length} cohort{orgCohorts.length !== 1 ? "s" : ""}</span>
                        <span>{orgFacilitators.length} facilitator{orgFacilitators.length !== 1 ? "s" : ""}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Section>

        {/* Cohorts */}
        <Section title="Cohorts">
          {cohorts.length === 0 ? (
            <p className="text-sm text-white/50">No cohorts yet.</p>
          ) : (
            <div className="space-y-2">
              {cohorts.map((cohort) => {
                const org = orgs.find((o) => o.id === cohort.org_id);
                const daysLeft = Math.max(0, Math.ceil((new Date(cohort.expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
                const isCopied = copiedCode === cohort.join_code;
                return (
                  <div
                    key={cohort.id}
                    className="rounded-xl p-4 space-y-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-white">{cohort.name}</span>
                        <span className="text-xs text-white/40 ml-2">{org?.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span className="flex items-center gap-1">
                          <Users size={12} />
                          {cohort.memberCount}/{cohort.seat_limit}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {daysLeft}d left
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/50 font-mono" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
                        <LinkIcon size={12} />
                        <span className="truncate">/join/{cohort.join_code}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(cohort.join_code)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                        style={{
                          background: isCopied
                            ? "linear-gradient(135deg, #059669, #047857)"
                            : "linear-gradient(135deg, #7C3AED, #6D28D9)",
                        }}
                      >
                        {isCopied ? <Check size={12} /> : <Copy size={12} />}
                        {isCopied ? "Copied" : "Copy Link"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, label, onClick }: { icon: typeof Plus; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
      style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}

function FormCard({ title, onCancel, children }: { title: string; onCancel: () => void; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{
        background: "rgba(15, 23, 42, 0.9)",
        border: "2px solid rgba(124, 58, 237, 0.3)",
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <button onClick={onCancel} className="text-xs text-white/50 hover:text-white/80">Cancel</button>
      </div>
      {children}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-bold text-white/70 uppercase tracking-wider">{title}</h2>
      {children}
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4"
      style={{ background: "linear-gradient(160deg, #0F172A 0%, #1A1035 40%, #0D1520 100%)" }}
    >
      {children}
    </div>
  );
}

"use client";

export default function AppearanceSettings() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <h2 className="text-2xl font-bold text-white">Appearance</h2>

      <div className="mt-6">
        <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none">
          <option>Dark Mode</option>
          <option>Light Mode</option>
          <option>System Default</option>
        </select>
      </div>
    </div>
  );
}

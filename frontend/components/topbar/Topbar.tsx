"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-[#050816] px-8 py-5">
      {/* Search */}
      <div className="relative w-80">
        <Search size={18} className="absolute left-4 top-3 text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <Bell className="text-slate-400" />

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white">
          S
        </div>
      </div>
    </header>
  );
}

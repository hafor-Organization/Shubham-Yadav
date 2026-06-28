"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        size={20}
        className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-slate-400
    "
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search internships, companies, domains..."
        className="
    w-full
    rounded-3xl
    border
    border-slate-800
    bg-slate-950/60
    py-4
    pl-12
    pr-5
    text-white
    outline-none
    backdrop-blur-xl
    placeholder:text-slate-500
    focus:border-blue-500
    "
      />
    </div>
  );
}

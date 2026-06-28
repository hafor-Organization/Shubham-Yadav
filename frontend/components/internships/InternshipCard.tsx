"use client";

import { Building2, MapPin, Clock3, IndianRupee, Bookmark } from "lucide-react";

interface InternshipCardProps {
  company: string;
  title: string;
  domain: string;
  location: string;
  duration: string;
  stipend: string;
}

export default function InternshipCard({
  company,
  title,
  domain,
  location,
  duration,
  stipend,
}: InternshipCardProps) {
  return (
    <div
      className="
   rounded-3xl
   border
   border-slate-800
   bg-slate-950/60
   p-6
   backdrop-blur-xl
   transition-all
   duration-300
   hover:scale-[1.02]
   "
    >
      {/* Company */}{" "}
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-3">
            <Building2 size={20} className="text-white" />
          </div>

          <div>
            <h3 className="font-semibold text-white">{company}</h3>

            <p className="text-sm text-slate-400">{domain}</p>
          </div>
        </div>
        <button className="text-slate-400 transition hover:text-blue-500">
          <Bookmark size={20} />
        </button>
      </div>
      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-white">{title}</h2>
      {/* Details */}
      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <MapPin size={16} />
          {location}
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <Clock3 size={16} />
          {duration}
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <IndianRupee size={16} />
          {stipend}
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-8 flex gap-3">
        <button
          className="
      flex-1
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      py-3
      text-sm
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-[1.02]
      "
        >
          Apply →
        </button>

        <button
          className="
      rounded-2xl
      border
      border-slate-700
      px-5
      py-3
      text-white
      transition
      hover:bg-slate-900
      "
        >
          Save
        </button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Building2, MapPin, Clock3, IndianRupee } from "lucide-react";

interface RecommendationCardProps {
  company: string;
  title: string;
  location: string;
  duration: string;
  stipend: string;
}

export default function RecommendationCard({
  company,
  title,
  location,
  duration,
  stipend,
}: RecommendationCardProps) {
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
      <div className="flex items-center gap-3">
        {" "}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-3">
          {" "}
          <Building2 size={20} className="text-white" />{" "}
        </div>
        <div>
          <p className="text-sm text-slate-400">Company</p>

          <h3 className="font-semibold text-white">{company}</h3>
        </div>
      </div>
      {/* Title */}
      <h2 className="mt-6 text-xl font-bold text-white">{title}</h2>
      {/* Info */}
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
      {/* Button */}
      <Link
        href="/internships"
        className="
    mt-6
    inline-flex
    w-full
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    to-violet-600
    px-5
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
      </Link>
    </div>
  );
}

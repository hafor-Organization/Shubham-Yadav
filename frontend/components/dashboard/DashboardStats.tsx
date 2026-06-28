"use client";

import { BriefcaseBusiness, Bookmark, Sparkles, Trophy } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      title: "Applied",
      value: "12",
      icon: BriefcaseBusiness,
    },
    {
      title: "Saved",
      value: "8",
      icon: Bookmark,
    },
    {
      title: "Recommendations",
      value: "15",
      icon: Sparkles,
    },
    {
      title: "Profile Score",
      value: "85%",
      icon: Trophy,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{stat.title}</p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-3">
                <Icon size={22} className="text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

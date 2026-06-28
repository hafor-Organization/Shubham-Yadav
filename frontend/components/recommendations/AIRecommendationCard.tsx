"use client";

import MatchScoreBadge from "./MatchScoreBadge";

export default function AIRecommendationCard({ internship }: any) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{internship.title}</h2>

          <p className="mt-2 text-slate-400">{internship.company}</p>
        </div>

        <MatchScoreBadge score={internship.score} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {internship.skills.map((skill: string) => (
          <span
            key={skill}
            className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        className="
        mt-6
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-violet-600
        py-3
        text-white
        "
      >
        Apply Now
      </button>
    </div>
  );
}

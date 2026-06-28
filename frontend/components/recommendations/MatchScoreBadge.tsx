"use client";

export default function MatchScoreBadge({ score }: { score: number }) {
  let color = "";

  if (score >= 90) {
    color = "bg-green-500/20 text-green-400";
  } else if (score >= 75) {
    color = "bg-yellow-500/20 text-yellow-400";
  } else {
    color = "bg-red-500/20 text-red-400";
  }

  return (
    <div className={`rounded-full px-4 py-2 text-sm font-semibold ${color}`}>
      {score}% Match
    </div>
  );
}

"use client";

export default function ApplicationStatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Applied: "bg-blue-500/20 text-blue-400",
    "Under Review": "bg-yellow-500/20 text-yellow-400",
    Shortlisted: "bg-green-500/20 text-green-400",
    Rejected: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}

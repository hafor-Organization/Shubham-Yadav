"use client";

import ApplicationTable from "@/components/applications/ApplicationTable";

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Google",
      date: "12 June 2026",
      status: "Under Review",
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      company: "Amazon",
      date: "10 June 2026",
      status: "Shortlisted",
    },
    {
      id: 3,
      title: "AI Engineer Intern",
      company: "Microsoft",
      date: "8 June 2026",
      status: "Rejected",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">My Applications</h1>

        <p className="mt-2 text-slate-400">
          Track the status of your internship applications.
        </p>
      </div>

      <ApplicationTable applications={applications} />
    </div>
  );
}

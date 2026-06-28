"use client";

import { Building2, CalendarDays } from "lucide-react";

export default function RecentApplications() {
  const applications = [
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      appliedAt: "2 days ago",
      status: "Under Review",
    },
    {
      company: "Amazon",
      role: "Backend Developer Intern",
      appliedAt: "5 days ago",
      status: "Shortlisted",
    },
    {
      company: "Infosys",
      role: "Full Stack Developer Intern",
      appliedAt: "1 week ago",
      status: "Applied",
    },
  ];

  return (
    <div
      className="
   rounded-3xl
   border
   border-slate-800
   bg-slate-950/60
   p-6
   backdrop-blur-xl
   "
    >
      {" "}
      <h2 className="text-2xl font-bold text-white">Recent Applications </h2>
      <p className="mt-2 text-sm text-slate-400">
        Track your latest internship applications.
      </p>
      <div className="mt-8 space-y-5">
        {applications.map((item, index) => (
          <div
            key={index}
            className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/50
        p-5
        "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-3">
                <Building2 size={20} className="text-white" />
              </div>

              <div>
                <h3 className="font-semibold text-white">{item.role}</h3>

                <p className="mt-1 text-sm text-slate-400">{item.company}</p>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <CalendarDays size={14} />
                  Applied {item.appliedAt}
                </div>
              </div>
            </div>

            <span
              className="
          rounded-full
          bg-blue-600/20
          px-4
          py-2
          text-xs
          font-medium
          text-blue-400
          "
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

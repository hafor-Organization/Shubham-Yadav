"use client";

import ApplicationStatusBadge from "./ApplicationStatusBadge";

export default function ApplicationCard({ application }: any) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{application.title}</h2>

          <p className="mt-2 text-slate-400">{application.company}</p>

          <p className="mt-3 text-sm text-slate-500">
            Applied on {application.date}
          </p>
        </div>

        <ApplicationStatusBadge status={application.status} />
      </div>

      <button
        className="
        mt-6
        rounded-2xl
        border
        border-red-500
        px-5
        py-3
        text-red-400
        transition
        hover:bg-red-500
        hover:text-white
        "
      >
        Withdraw Application
      </button>
    </div>
  );
}

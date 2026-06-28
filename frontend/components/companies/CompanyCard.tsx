"use client";

export default function CompanyCard({ company }: any) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{company.name}</h2>

          <p className="mt-1 text-slate-400">{company.industry}</p>
        </div>

        <div className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
          {company.openings} Openings
        </div>
      </div>

      <p className="text-slate-500">📍 {company.location}</p>

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
        View Company
      </button>
    </div>
  );
}

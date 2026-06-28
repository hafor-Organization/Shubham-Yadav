"use client";

export default function AccountSettings() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <h2 className="text-2xl font-bold text-white">Account Information</h2>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />
      </div>
    </div>
  );
}

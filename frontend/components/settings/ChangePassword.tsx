"use client";

export default function ChangePassword() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <h2 className="text-2xl font-bold text-white">Change Password</h2>

      <div className="mt-6 space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />
      </div>
    </div>
  );
}

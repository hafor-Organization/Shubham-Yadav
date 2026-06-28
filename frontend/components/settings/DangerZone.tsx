"use client";

export default function DangerZone() {
  return (
    <div className="rounded-3xl border border-red-500/40 bg-red-950/20 p-6">
      <h2 className="text-2xl font-bold text-red-400">Danger Zone</h2>

      <p className="mt-3 text-slate-400">
        Permanently delete your account and all associated data.
      </p>

      <button
        className="
        mt-6
        rounded-2xl
        bg-red-600
        px-6
        py-3
        font-semibold
        text-white
        "
      >
        Delete Account
      </button>
    </div>
  );
}

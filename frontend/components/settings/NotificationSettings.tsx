"use client";

export default function NotificationSettings() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <h2 className="text-2xl font-bold text-white">Notifications</h2>

      <div className="mt-6 space-y-5 text-slate-300">
        <label className="flex items-center justify-between">
          Email Notifications
          <input type="checkbox" className="accent-blue-500" />
        </label>

        <label className="flex items-center justify-between">
          Internship Alerts
          <input type="checkbox" className="accent-blue-500" />
        </label>

        <label className="flex items-center justify-between">
          Recommendation Updates
          <input type="checkbox" className="accent-blue-500" />
        </label>
      </div>
    </div>
  );
}

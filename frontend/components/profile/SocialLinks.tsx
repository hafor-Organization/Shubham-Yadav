"use client";

import { Globe } from "lucide-react";

export default function SocialLinks() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-950/60
      p-8
      backdrop-blur-xl
      "
    >
      <h2 className="text-2xl font-bold text-white">Social Links</h2>

      <p className="mt-2 text-sm text-slate-400">
        Add your professional profiles to showcase your work.
      </p>

      {/* GitHub */}
      <div className="mt-8">
        <input
          type="url"
          placeholder="https://github.com/username"
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-white
          outline-none
          focus:border-blue-500
          "
        />
      </div>

      {/* LinkedIn */}
      <div className="mt-6">
        <input
          type="url"
          placeholder="https://linkedin.com/in/username"
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-white
          outline-none
          focus:border-blue-500
          "
        />
      </div>

      {/* Portfolio */}
      <div className="mt-6">
        <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
          <Globe size={18} />
          Portfolio Website
        </label>

        <input
          type="url"
          placeholder="https://yourportfolio.com"
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-white
          outline-none
          focus:border-blue-500
          "
        />
      </div>

      {/* Save Button */}
      <button
        className="
        mt-8
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-violet-600
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-lg
        hover:shadow-blue-500/20
        "
      >
        Save Links
      </button>
    </div>
  );
}

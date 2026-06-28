"use client";

import Link from "next/link";

export default function ProfileCompletion() {
  const progress = 80;

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
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <h2 className="text-xl font-bold text-white">Profile Completion </h2>
          <p className="mt-2 text-sm text-slate-400">
            Complete your profile to improve AI recommendations.
          </p>
        </div>
        <div className="text-3xl font-bold text-blue-500">{progress}%</div>
      </div>
      {/* Progress Bar */}
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="
      h-full
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      transition-all
      "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Add skills and interests to reach 100%.
        </p>

        <Link
          href="/profile"
          className="
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      px-5
      py-2
      text-sm
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-[1.03]
      "
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}

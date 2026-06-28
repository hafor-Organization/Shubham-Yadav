"use client";

import { User } from "lucide-react";

export default function ProfileHeader() {
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
      {" "}
      <div className="flex flex-col items-center gap-6 md:flex-row">
        {/* Avatar */}
        <div
          className="
      flex
      h-28
      w-28
      items-center
      justify-center
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      "
        >
          <User size={42} className="text-white" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">Shubham Yadav</h1>

          <p className="mt-2 text-slate-400">shubham@gmail.com</p>

          <p className="mt-2 text-slate-400">Delhi University</p>

          <div className="mt-4 inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
            Student
          </div>
        </div>

        {/* Button */}
        <button
          className="
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      px-6
      py-3
      text-sm
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-[1.03]
      "
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

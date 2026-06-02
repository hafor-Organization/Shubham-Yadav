"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, BriefcaseBusiness } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {""}
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Background Glows */}
          <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 flex h-full w-full items-center justify-between gap-8 px-12">
            {/* Left Side */}
            <div className="flex-1 max-w-[420px]">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 p-2">
                  <BriefcaseBusiness size={18} className="text-white" />
                </div>

                <h1 className="text-xl font-bold text-white">
                  Intern
                  <span className="text-blue-500">AI</span>
                </h1>
              </div>

              <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white">
                Find Your Dream Internship
              </h2>

              <p className="mb-5 text-xs leading-relaxed text-slate-400">
                Discover personalized internship opportunities powered by AI
                recommendations.
              </p>

              <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs font-medium text-slate-300">
                <div>✓ 5000+ Internships</div>
                <div>✓ AI Recommendations</div>
                <div>✓ Top Hiring Companies</div>
                <div>✓ Resume Matching</div>
              </div>
            </div>

            {/* Right Side Login */}
            <div className="w-[380px] shrink-0">
              <div className="rounded-2xl bg-white/5 p-5 backdrop-blur-xl">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-white">
                    Welcome Back 👋
                  </h2>

                  <p className="mt-0.5 text-[11px] text-slate-400">
                    Sign in to continue your journey.
                  </p>
                </div>

                <form
                  className="space-y-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-300">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-white outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-300">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 pr-9 text-xs text-white outline-none transition focus:border-blue-500"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-slate-400 transition hover:text-slate-200"
                      >
                        {showPassword ? (
                          <EyeOff size={14} />
                        ) : (
                          <Eye size={14} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <label className="flex cursor-pointer select-none items-center gap-1.5 text-slate-400">
                      <input type="checkbox" className="accent-blue-500" />
                      Remember me
                    </label>

                    <Link
                      href="/forgot-password"
                      className="font-medium text-blue-500 hover:text-blue-400"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                  >
                    Sign In
                  </button>
                </form>

                <div className="my-3 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-800" />

                  <span className="text-[10px] font-bold tracking-wider text-slate-500">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="rounded-lg bg-slate-900/40 py-2 text-[11px] text-white transition hover:bg-slate-800">
                    Google
                  </button>

                  <button className="rounded-lg bg-slate-900/40 py-2 text-[11px] text-white transition hover:bg-slate-800">
                    GitHub
                  </button>
                </div>

                <p className="mt-4 text-center text-[11px] text-slate-400">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

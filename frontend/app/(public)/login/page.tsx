"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, BriefcaseBusiness } from "lucide-react";

import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      router.push("/dashboard");
    } catch (error: any) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-16">
        {/* Left Side */}
        <div className="hidden max-w-xl flex-1 md:block">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 p-3">
              <BriefcaseBusiness size={22} className="text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">
                Intern
                <span className="text-blue-500">AI</span>
              </h1>

              <p className="text-sm text-slate-400">Find. Match. Grow.</p>
            </div>
          </div>

          <h2 className="mb-4 text-5xl font-bold leading-tight text-white">
            Find Your Dream
            <span className="block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Internship
            </span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Discover personalized internship opportunities powered by AI
            recommendations and get matched with top companies.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div>✓ 5000+ Internships</div>
            <div>✓ AI Recommendations</div>
            <div>✓ Top Hiring Companies</div>
            <div>✓ Resume Matching</div>
          </div>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">Welcome Back</h2>

              <p className="mt-2 text-sm text-slate-400">
                Access your personalized internship dashboard.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 pr-12 text-sm text-white outline-none focus:border-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-3 text-sm font-semibold text-white"
              >
                {loading ? "Signing In..." : "Sign In →"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-800" />

              <span className="text-xs text-slate-500">OR</span>

              <div className="h-px flex-1 bg-slate-800" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="rounded-2xl border border-slate-700 bg-slate-900/40 py-3 text-sm text-white transition hover:bg-slate-800">
                Google
              </button>

              <button className="rounded-2xl border border-slate-700 bg-slate-900/40 py-3 text-sm text-white transition hover:bg-slate-800">
                GitHub
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-slate-400">
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
  );
}

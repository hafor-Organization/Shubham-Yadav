"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, BriefcaseBusiness } from "lucide-react";
import api from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/signup", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        alert("Account created successfully! Please login.");

        router.push("/login");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-20">
        {/* Left */}
        <div className="hidden max-w-xl flex-1 md:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 p-3">
              <BriefcaseBusiness size={24} className="text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">
                Intern
                <span className="text-blue-500">AI</span>
              </h1>

              <p className="text-sm text-slate-400">Find. Match. Grow.</p>
            </div>
          </div>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-white">
            Start Your
            <span className="block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Create your profile and receive AI-powered internship
            recommendations.
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-2xl">
            <div className="mb-7">
              <h2 className="text-3xl font-bold text-white">Create Account</h2>

              <p className="mt-2 text-sm text-slate-400">
                Join InternAI and start exploring opportunities.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSignup}>
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Shubham Yadav"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                />
              </div>

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
                    placeholder="Create password"
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

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 pr-12 text-sm text-white outline-none focus:border-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-3.5 text-slate-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-3 text-sm font-semibold text-white"
              >
                {loading ? "Creating Account..." : "Create Account →"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

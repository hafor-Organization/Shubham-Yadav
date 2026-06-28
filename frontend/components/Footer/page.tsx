"use client";

import Link from "next/link";
import { BriefcaseBusiness, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600">
                <BriefcaseBusiness size={22} className="text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Intern
                  <span className="gradient-text">AI</span>
                </h2>

                <p className="text-xs text-slate-400">Find. Match. Grow.</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Discover internships, receive AI-powered recommendations, and
              accelerate your career journey with smart matching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/internships"
                  className="hover:text-white transition"
                >
                  Internships
                </Link>
              </li>

              <li>
                <Link
                  href="/recommendations"
                  className="hover:text-white transition"
                >
                  Recommendations
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Resources</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Connect</h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>support@internai.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} InternAI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

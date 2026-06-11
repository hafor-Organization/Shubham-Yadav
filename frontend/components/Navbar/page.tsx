"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Internships",
      href: "/internships",
    },
    {
      name: "Companies",
      href: "/companies",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <header
      className="
   fixed
   top-0
   left-0
   right-0
   z-50
   border-b
   border-slate-800/50
   bg-slate-950/80
   backdrop-blur-xl
   "
    >
      {" "}
      <div
        className="
     mx-auto
     flex
     h-20
     max-w-svw
     items-center
     justify-between
     px-6
     lg:px-10
     "
      >
        {/* Logo */}{" "}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {" "}
          <div
            className="
         flex
         h-10
         w-10
         items-center
         justify-center
         rounded-xl
         bg-gradient-to-r
         from-blue-500
         to-violet-500
         "
          >
            {" "}
            <BriefcaseBusiness size={22} className="text-white" />{" "}
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">
              Intern
              <span className="text-blue-500">AI</span>
            </h1>

            <p className="text-xs text-slate-400">Find. Match. Grow.</p>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav
          className="
      hidden
      items-center
      gap-10
      md:flex
      "
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
          text-sm
          font-medium
          text-slate-300
          transition-all
          duration-300
          hover:text-blue-500
          hover:-translate-y-0.5
          "
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Desktop Buttons */}
        <div
          className="
      hidden
      items-center
      gap-4
      md:flex
      "
        >
          <Link
            href="/login"
            className="
        rounded-xl
        px-4
        py-2
        text-sm
        font-medium
        text-slate-300
        transition
        hover:bg-slate-800
        hover:text-white
        "
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        to-violet-600
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-blue-500/20
        "
          >
            Get Started →
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
      text-white
      md:hidden
      "
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
      absolute
      left-0
      right-0
      top-20
      border-t
      border-slate-800
      bg-slate-950
      shadow-2xl
      md:hidden
      "
        >
          <div
            className="
        flex
        flex-col
        gap-4
        p-6
        "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
            rounded-lg
            px-2
            py-2
            text-slate-300
            transition
            hover:bg-slate-800
            hover:text-blue-500
            "
              >
                {link.name}
              </Link>
            ))}

            <div
              className="
          mt-4
          flex
          flex-col
          gap-3
          "
            >
              <Link
                href="/login"
                className="
            rounded-xl
            border
            border-slate-700
            px-4
            py-3
            text-center
            text-white
            transition
            hover:border-blue-500
            "
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-violet-600
            px-4
            py-3
            text-center
            font-semibold
            text-white
            "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

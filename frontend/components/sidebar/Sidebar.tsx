"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Building2,
  User,
  FileText,
  Sparkles,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  };
  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Internships",
      href: "/dashboard/internships",
      icon: BriefcaseBusiness,
    },
    {
      title: "Companies",
      href: "/dashboard/companies",
      icon: Building2,
    },
    {
      title: "Applications",
      href: "/dashboard/applications",
      icon: FileText,
    },
    {
      title: "Recommendations",
      href: "/dashboard/recommendations",
      icon: Sparkles,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800 bg-[#050816] p-6">
      <h1 className="mb-10 text-2xl font-bold text-white">
        Intern<span className="text-blue-500">AI</span>
      </h1>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
          >
            <item.icon size={18} />
            {item.title}
          </Link>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="absolute bottom-8 flex items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-slate-900"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}

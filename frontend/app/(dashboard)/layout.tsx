import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#050816]">
      <Sidebar />

      <div className="ml-64 flex-1">
        <Topbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

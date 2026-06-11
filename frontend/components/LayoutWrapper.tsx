"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const authPages = ["/login", "/signup", "/forgot-password"];

  const hideLayout = authPages.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}

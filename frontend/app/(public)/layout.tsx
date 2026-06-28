import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}

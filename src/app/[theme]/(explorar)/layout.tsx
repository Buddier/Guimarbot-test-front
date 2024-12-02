import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/explorar/nav";
import { FooterSection } from "@/components/main/footer";

interface ExplorarLayoutProps {
  children: React.ReactNode;
}

export default async function ExplorarLayout({
  children,
}: ExplorarLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main/main-nav";
import { FooterSection } from "@/components/main/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainNav items={siteConfig.mainNav} />
      <main className="flex-1">
        {children}
        <FooterSection />
      </main>
    </div>
  );
}

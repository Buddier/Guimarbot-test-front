import "@/styles/globals.css";

import { type ReactNode } from "react";
import { type Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ShadcnThemeProvider } from "@/components/shadcn-theme-provider";
import { ThemeProvider } from "@/components/theme-provider";

export async function generateMetadata(params: {
  params: { theme: string };
}): Promise<Metadata> {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
  };
}

interface RootLayoutProps {
  children: ReactNode;
  params: any;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { theme } = await params;
  return (
    <html lang="en" suppressHydrationWarning className={`theme-${theme}`}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ShadcnThemeProvider>
            <Toaster />
            {children}
          </ShadcnThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

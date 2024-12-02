"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ChevronsDown, Github, Library, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MainNavItem } from "@/types";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "../shadcn-theme-provider"
//import { useSession } from "next-auth/react";
//import { UserAccountNav } from "@/components/user-account-nav";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { sanitizeName } from "@/lib/utils";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const featureList = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const { currentTheme } = useTheme()
  const themePath = sanitizeName(currentTheme.name)
  //const { data: session } = useSession();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href={`/${themePath}`} className="font-bold text-lg flex items-center">
        <Image
          src="/logo.png"
          alt="LibraryManagerLogo"
          className="h-9 w-9 mr-2"
          width={36}
          height={36}
        />
        GuimarBot
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href={`/${themePath}`} className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    GuimarBot
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {items?.map(({ href, title }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={`/${themePath}${href}`}>{title}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              {
                /*session && session.user ? (
                <UserAccountNav user={session.user} />
              ) : (*/
                <Button
                  variant="default"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={`/${themePath}/login`}>Acceder</Link>
                </Button>
                /*)*/
              }

              <Separator className="mb-2 mt-2" />

              <ModeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {items?.map(({ href, title }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={`/${themePath}${href}`} className="text-base px-2">
                  {title}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ModeToggle />
        {
          /*session && session.user ? (
          <UserAccountNav user={session.user} />
        ) : (*/
          <Button variant="default" size="lg" asChild>
            <Link href={`/${themePath}/login`}>Acceder</Link>
          </Button>
          /*)*/
        }
      </div>
    </header>
  );

  /*return (
    <div className="sticky top-0 flex h-20 items-center gap-3 border-b bg-background px-10 md:px-9">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6">
        <Link
          href="/"
          className="font-bold text-lg flex items-center"
        >
          <Library className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          <span className="sr-only">Library Manager</span>
        </Link>
        {items
          ?.filter((item) => {
            if (!session || !session.user) {
              // Usuario no autenticado: mostrar solo elementos que no requieran autenticación
              return !item.authRequired;
            } else {
              // Usuario autenticado: mostrar todos los elementos que no requieran permisos de admin,
              // y los que requieran admin solo si el usuario es admin
              if (item.adminRequired) {
                return session.user.role === "ADMIN";
              }
              return true; // Mostrar elementos que no requieran permisos de admin
            }
          })
          .map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-muted-foreground",
                "transition-colors hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Library Manager</span>
            </Link>
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  item.href.startsWith(`/${segment}`)
                    ? ""
                    : "text-muted-foreground",
                  "hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <SearchBar />
        <ModeToggle />

        {session && session.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Button variant="default" asChild>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );*/
}

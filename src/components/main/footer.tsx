import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-12 sm:py-16">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="font-bold text-lg flex items-center">
              <Image
                src="/logo.png"
                alt="LibraryManagerLogo"
                className="h-9 w-9 mr-2"
                width={36}
                height={36}
              />
              Library Manager
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contacto</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

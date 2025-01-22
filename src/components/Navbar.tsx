import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

type NavbarProps = {
  logo: string;
  menu: Array<{
    title: string;
    url?: string;
    page?: {
      title: string;
      url: string;
    };
  }>;
};

export function Navbar({ logo, menu }: NavbarProps) {
  return (
    <header className="w-full">
      <div className="container flex justify-between mx-auto p-6 md:px-6">
        {/* Menu lateral para telas menores */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Abrir menu de navegação"
            >
              <MenuIcon className="h-10 w-10" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-4 bg-white">
            <div className="flex flex-col gap-4">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.url || item.page?.url || "#"}
                  prefetch={false}
                  className="text-lg font-medium hover:underline"
                >
                  {item.title || item.page?.title}
                </Link>
              ))}
              <Link
                href="/contato"
                prefetch={false}
                className="text-lg font-medium hover:underline"
              >
                Contato
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex lg:hidden" prefetch={false}>
          <Image src={logo} alt="Logo" width={100} height={80} priority />
        </Link>

        {/* Navbar em telas maiores */}
        <div className="hidden flexitems-center gap-6 mx-auto py-4">
          {/* Logo */}
          <Link href="/" prefetch={false} className="flex-shrink-0">
            <Image src={logo} alt="Logo" width={150} height={100} />
          </Link>

          {/* Menu */}
          <nav className="ml-auto flex items-center gap-6">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.url || item.page?.url || "#"}
                prefetch={false}
                className="text-lg font-medium hover:text-slate-700"
              >
                {item.title || item.page?.title}
              </Link>
            ))}
            <Link href="/contato" prefetch={false}>
              <Button
                variant="outline"
                className="text-lg hover:bg-slate-900 hover:text-white"
              >
                Contato
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

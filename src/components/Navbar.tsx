import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

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
    <header className="container mx-auto flex h-20 items-center px-4 md:px-6 relative">
      {/* Menu Lateral para telas menores */}
      <Sheet>
        <SheetTrigger className="absolute" asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <div className="flex flex-col gap-2 py-6">
            {menu.map((item, index) => (
              <Button key={index} variant="link" className="text-lg">
                <Link href={item.url || item.page?.url || "#"} prefetch={false}>
                  {item.title || item.page?.title}
                </Link>
              </Button>
            ))}
            <Button variant="outline" className="text-lg">
              Contato
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Navbar em telas maiores */}
      <div className="flex justify-between w-full">
        {/* Logo */}
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        <nav className="ml-auto hidden lg:flex gap-6">
          {menu.map((item, index) => (
            <Button key={index} variant="link" className="text-lg">
              <Link href={item.url || item.page?.url || "#"} prefetch={false}>
                {item.title || item.page?.title}
              </Link>
            </Button>
          ))}
          <Link href="/contato" prefetch={false}>
            <Button
              variant="outline"
              className="text-lg hover:bg-slate-950 hover:text-slate-50"
            >
              Contato
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

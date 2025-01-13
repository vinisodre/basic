import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type NavbarProps = {
  logo: string;
  menuItems: Array<{
    links: Array<{
      page: {
        title: string;
        slug: {
          current: string;
        };
      };
    }>;
  }>;
};

export function Navbar({ logo, menuItems }: NavbarProps) {
  return (
    <header className="container mx-auto flex h-20 items-center px-4 md:px-6 relative">
      <Sheet>
        <SheetTrigger className="absolute" asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <div className="flex flex-col gap-2 py-6">
            {/* Mapear os itens do menu para o menu lateral */}
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.links.map((link, i) => (
                  <Button key={i} variant="link" className="text-lg">
                    <Link href={`/${link.page.slug.current}`}>
                      {link.page.title}
                    </Link>
                  </Button>
                ))}
              </div>
            ))}
            <Button variant="outline" className="text-lg">
              Contato
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex justify-between w-full">
        {/* Logo */}
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <img src={logo} alt="Logo" width={100} />
        </Link>

        {/* Navbar em telas maiores */}
        <nav className="ml-auto hidden lg:flex gap-6">
          <div className="bg-accent flex gap-2 ">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.links.map((link, i) => (
                  <Button key={i} variant="link" className="text-lg">
                    <Link href={`/${link.page.slug.current}`}>
                      {link.page.title}
                    </Link>
                  </Button>
                ))}
              </div>
            ))}
          </div>
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

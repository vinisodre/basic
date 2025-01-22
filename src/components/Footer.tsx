import Link from "next/link";
// import { footerMenu } from "@/constants";
import { main } from "@/app/queries";
import Image from "next/image";

type FooterProps = {
  logo: string;
  menufooter: Array<{
    sectionTitle: string;
    links: Array<{
      title: string;
      url?: string;
      page?: { title: string; url: string };
    }>;
  }>;
};

export function Footer({ logo, menufooter }: FooterProps) {
  return (
    <footer className="bg-muted w-full pt-6">
      <div className="bg-gray-100 py-8 md:py-12 lg:py-16 flex flex-col justify-center items-center mx-auto">
        <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1 ">
            <Link href="/" className="flex items-start gap-2">
              <Image src={logo} alt={main[0].name} width={100} height={100} />
            </Link>
            <p className="text-muted-foreground text-xs">{main[0].address}</p>
          </div>

          {menufooter.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">{item.sectionTitle}</h3>
              {item.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.url || link.page?.url || "#"}
                  className="hover:underline"
                >
                  {link.title || link.page?.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container px-4 md:px-6 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; 2024.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:underline">
              Feito com carinho por Vinicius Sodré
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// TODO Fazer schema do footer para exibir as informações desta área. verificar se as informações sao  exibidas em setings tb.

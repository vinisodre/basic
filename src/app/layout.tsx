import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";
import { menus } from "@/sanity/sanityQueries";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

export const metadata: Metadata = {
  title: "CIEP320 - Santa Cruz da Serra",
  description: "Site do CIEP 320 - Santa Cruz da Serra",
};

async function getData(): Promise<SanityDocument> {
  const query = menus();
  const data = await sanityFetch<SanityDocument>({ query });

  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Topbar text={data.topbar[0].text} />
        <Navbar logo={data.menu.logo} menu={data.menu.menuItems[0].links} />
        {children}
        <Footer logo={data.menu.logo} menufooter={data.menu.menufooter} />
      </body>
    </html>
  );
}

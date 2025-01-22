import { sanityFetch } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
import { portableTextConfig } from "@/utils/portableTextConfig";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

async function getData(slug: string): Promise<SanityDocument | null> {
  const query = `*[_type == "blogPost" && link.current == "${slug}"]{
    title,
    description,
    content,
    "link": link.current,
    buttonText,
    "image": image.asset->url
  }[0]`;

  const data = await sanityFetch<SanityDocument>({ query });

  return data;
}

export default async function Post({ params }: { params: { post: string } }) {
  const data = await getData(params.post);

  if (!data) {
    return <p>Post não encontrado</p>; // ajustar para uma pagina especial
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <div className="">
          <div className="container mx-auto py-12 px-4 md:px-6 lg:py-16">
            <article className="prose prose-red mx-auto max-w-3xl">
              <Image
                src={data.image}
                alt={data.title}
                width={1200}
                height={600}
                priority
              />
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {data.title}
              </h1>
              <div className="mt-4 flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Author Avatar"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <span className="text-sm">Published on August 13, 2024</span>
              </div>
              <div className="mt-16">
                <PortableText
                  value={data.content}
                  components={portableTextConfig}
                />
              </div>
              <div className="mt-8 gap-2 flex items-center justify">
                <Link href="/blog" className="text-black ">
                  <Button variant="link" className="text-lg">
                    <ArrowLeft className="" /> Voltar
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

//Verificar se esta parte do código deve ficar aqui
export async function generateStaticParams() {
  // Query para obter todos os slugs dos posts
  const query = `*[_type == "blogPost"]{ "link": link.current }`;
  const posts = await sanityFetch<{ link: string }[]>({ query });

  // Retorna uma lista de parâmetros para cada post
  return posts.map((post) => ({
    post: post.link,
  }));
}

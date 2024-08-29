

import { sanityFetch } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
import { Hero } from "@/components/Hero";

async function getData(slug: string): Promise<SanityDocument | null> {
  const query = `*[_type == "page" && slug.current == "${slug}" ]{
    title,
  "slug": slug.current,
  pageBuilder[]{
    _type=="hero" => {
      _type,
      "image": image.asset->url,
      title,
      subtitle,
      hasButton,
      link,
      linkText
    }
  }
  }[0]`;

  const data = await sanityFetch<SanityDocument>({ query });

  console.log("console da página", data);
  return data || null; // Retorna null se não houver dados
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) {
    return <h1>Página {params.slug} não encontrada</h1>; // Pode retornar algo mais específico se os dados forem nulos
  }

  const heroData = data.pageBuilder.find((item) => item._type === "hero");

  return (
    <div>
      <h1>{data.title}</h1>
      {heroData && (
        <Hero
          title={heroData.title}
          subtitle={heroData.subtitle}
          hasButton={heroData.hasButton}
          link={heroData.link}
          linkText={heroData.linkText}
          image={heroData.image}
        />
      )}
      
    </div>
  );
}




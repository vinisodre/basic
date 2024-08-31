

import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { Hero } from "@/components/Hero";
import { TwoColumnsText } from "@/components/TwoColumnsText";
import { ImageTextBlock } from "@/components/ImageTextBlock";

import { getPageDataQuery } from "@/sanity/sanityQueries";
import AreaBlock  from "@/components/AreaBlock";

async function getData(slug: string): Promise<SanityDocument | null> {
  const query = getPageDataQuery(slug);
  const data = await sanityFetch<SanityDocument>({ query });

  console.log("console da página", data);
  return data || null; // Retorna null se não houver dados
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) {
    return <h1>Página {params.slug} não encontrada</h1>; // Pode retornar algo mais específico se os dados forem nulos
  }

  return (
    <div>
      {data.pageBuilder.map((block, index) => {
        switch (block._type) {
          case "hero":
            return (
              <Hero
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                hasButton={block.hasButton}
                link={block.link}
                linkText={block.linkText}
                image={block.image}
              />
            );
          case "twoColumnsText":
            return (
              <TwoColumnsText
                key={index}
                title={block.title}
                column1={block.column1}
                column2={block.column2}
                hasButton={block.hasButton}
                buttonText={block.buttonText}
                link={block.link}
              />
            );
          case "imageText":
            return (
              <ImageTextBlock
                key={index}
                title={block.title}
                content={block.content}
                hasOneButton={block.hasOneButton}
                hasTwoButtons={block.hasTwoButtons}
                linkButtonOne={block.linkButtonOne}
                linkButtonTwo={block.linkButtonTwo}
                textButtonOne={block.textButtonOne}
                textButtonTwo={block.textButtonTwo}
                image={block.image}
                alt={block.alt}
              />
            );
            case "areasBlock":
            return (
              <AreaBlock
                key={index}
                areas={block.areas}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}




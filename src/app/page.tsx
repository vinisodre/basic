import { Hero } from "@/components/Hero";
import { ImageGalery } from "@/components/ImageGaleryBlock";
import { ImageTextBlock } from "@/components/ImageTextBlock";
import { TwoColumnsText } from "@/components/TwoColumnsText";
import AreaBlock from "@/components/AreaBlock";

import Image from "next/image";

import { areas, imagesExamples, blogPosts } from "@/constants";
import { BlogBlock } from "@/components/Blog-block";

export default function Home() {
  return (
    <main className="">
      <Hero
        title="TESTE"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        hasButton
        link="/"
        linkText="Saiba mais"
      />
      {/* <AreaBlock  /> */}

      <TwoColumnsText
        title="Sobre nós"
        column1="Nossa história e nossa missão."
        column2=" Nossos valores."
        hasButton
      />

      <ImageTextBlock
        title="Nossos Serviços"
        content="Aqui mostraremos os nossos Serviços e os valores que nos foram dadas."
        hasOneButton={true}
        hasTwoButtons={false}
        linkButtonOne="/"
        textButtonOne="Saiba mais"
        image="https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wAWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="teste"
      />

      <ImageGalery
        title="Título"
        description="um subtitulo para chamar a atenção"
        images={imagesExamples}
      />

      <BlogBlock blockTitle="BLOG" hasButton />
    </main>
  );
}

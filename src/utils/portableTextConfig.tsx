// utils/portableTextComponents.ts
import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

export const portableTextConfig = {
  types: {
    // Renderização para imagens
    image: ({ value }: { value: { asset: { url: string } } }) => (
      <Image
        src={urlFor(value.asset).url()!}
        alt="Image"
        width={400}
        height={200}
        className="rounded-lg my-4"
      />
    ),
  },
  block: {
    // Renderização para elementos do texto
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-medium my-3">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-xl font-medium my-2">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-base my-2 bg-blue-400">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    // Renderização para links
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: { href: string };
    }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        {children}
      </a>
    ),
    // Renderização para texto em negrito
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    // Renderização para texto em itálico
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    // Renderização para código inline
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded">
        {children}
      </code>
    ),
  },
  list: {
    // Renderização para listas não ordenadas
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc pl-5 space-y-2">{children}</ul>
    ),
    // Renderização para listas ordenadas
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal pl-5 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    // Renderização para itens de lista
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="ml-2">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="ml-2">{children}</li>
    ),
  },
};

export default portableTextConfig;

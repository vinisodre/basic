import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

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
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-bold my-4">{children}</h3>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc ml-8 my-4">{children}</ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal ml-8 my-4">{children}</ol>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-2">{children}</li>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="text-xl my-4">{children}</p>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: { href: string };
    }) => (
      <Link href={value.href} prefetch={false} className="">
        {children}
      </Link>
    ),
  },
};

export default portableTextConfig;

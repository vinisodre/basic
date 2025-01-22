import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from "next-sanity";

export const portableTextConfig: PortableTextReactComponents = {
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
    h1: (props: PortableTextComponentProps<any>) => (
      <h1 className="text-4xl font-bold my-4">{props.children}</h1>
    ),
    h2: (props: PortableTextComponentProps<any>) => (
      <h2 className="text-3xl font-bold my-4">{props.children}</h2>
    ),
    h3: (props: PortableTextComponentProps<any>) => (
      <h3 className="text-2xl font-bold my-4">{props.children}</h3>
    ),
    blockquote: (props: PortableTextComponentProps<any>) => (
      <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
        {props.children}
      </blockquote>
    ),
    ul: (props: PortableTextComponentProps<any>) => (
      <ul className="list-disc ml-8 my-4">{props.children}</ul>
    ),
    ol: (props: PortableTextComponentProps<any>) => (
      <ol className="list-decimal ml-8 my-4">{props.children}</ol>
    ),
    li: (props: PortableTextComponentProps<any>) => (
      <li className="mb-2">{props.children}</li>
    ),
    p: (props: PortableTextComponentProps<any>) => (
      <p className="text-xl my-4">{props.children}</p>
    ),
  },
  marks: {
    link: (
      props: PortableTextMarkComponentProps<{ href: string; _type: string }>
    ) => (
      <Link href={props.value?.href || "#"} prefetch={false} className="">
        {props.children}
      </Link>
    ),
  },
  list: (props: PortableTextComponentProps<any>) => (
    <ul className="list-disc ml-8 my-4">{props.children}</ul>
  ),
  listItem: (props: PortableTextComponentProps<any>) => (
    <li className="mb-2">{props.children}</li>
  ),
  hardBreak: () => <br />,
  unknownMark: (props: PortableTextMarkComponentProps<any>) => (
    <span className="unknown-mark">{props.children}</span>
  ),
  unknownType: (props: PortableTextComponentProps<any>) => (
    <div className="unknown-type">{props.children}</div>
  ),
  unknownBlockStyle: (props: PortableTextComponentProps<any>) => (
    <div className="unknown-block-style">{props.children}</div>
  ),
  unknownList: (props: PortableTextComponentProps<any>) => (
    <ul className="unknown-list">{props.children}</ul>
  ),
  unknownListItem: (props: PortableTextComponentProps<any>) => (
    <li className="unknown-list-item">{props.children}</li>
  ),
};

export default portableTextConfig;

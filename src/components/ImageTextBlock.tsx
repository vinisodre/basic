import Link from "next/link";
import { PortableText } from "next-sanity";
import { portableTextConfig } from "@/utils/portableTextConfig";
import Image from "next/image";

type ImageTextBlockProps = {
  title: string;
  content: string;
  hasOneButton?: boolean;
  hasTwoButtons?: boolean;
  linkButtonOne?: string;
  linkButtonTwo?: string;
  textButtonOne?: string;
  textButtonTwo?: string;
  image: string;
  alt: string;
};

export function ImageTextBlock({
  title,
  image,
  alt,
  content,
  hasOneButton,
  linkButtonOne,
  textButtonOne,
  hasTwoButtons,
  linkButtonTwo,
  textButtonTwo,
}: ImageTextBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={650}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
          <PortableText value={content} components={portableTextConfig} />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {hasOneButton && linkButtonOne && (
            <Link
              href={linkButtonOne}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-4 my-4 w-full sm:w-4/12   items-center justify-center rounded-md  text-sm font-medium shadow hover:bg-slate-950 hover:text-slate-50"
              prefetch={false}
            >
              {textButtonOne}
            </Link>
          )}

          {hasTwoButtons && linkButtonOne && linkButtonTwo && (
            <>
              <Link
                href={linkButtonTwo}
                target="_self"
                rel="noopener noreferrer"
                className="inline-flex p-4 my-4 w-full sm:w-4/12  items-center justify-center rounded-md  text-sm font-medium shadow hover:bg-slate-950 hover:text-slate-50"
                prefetch={false}
              >
                {textButtonTwo}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

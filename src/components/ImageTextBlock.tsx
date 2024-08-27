import Link from "next/link";
import { imageText } from "@/app/queries";
import { PortableText } from "next-sanity";

type ImageTextBlockProps = {
  title: string;
  description: string;
  hasOneButton?: boolean;
  hasTwoButtons?: boolean;
  linkButtonOne?: string;
  linkButtonTwo?: string;
  buttonTextOne?: string;
  buttonTextTwo?: string;
  image: string;
  alt: string;
};

const {
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
} = imageText[0];

export function ImageTextBlock() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="rounded-lg overflow-hidden">
        <img
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

          <PortableText className="text-muted-foreground" value={content} />
        </div>
        <div className="space-x-4">
          {hasOneButton && linkButtonOne && (
            <Link
              href={linkButtonOne}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              {textButtonOne}
            </Link>
          )}

          {hasTwoButtons && linkButtonOne && linkButtonTwo && (
            <>
              <Link
                href={linkButtonTwo}
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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

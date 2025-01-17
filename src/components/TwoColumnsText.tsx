import Link from "next/link";
import ArrowRightIcon from "./ui/ArrowRightIcon";
import { Button } from "./ui/Button";
import { PortableText } from "next-sanity";
import portableTextConfig from "@/utils/portableTextConfig";

interface TwoColumnsTextProps {
  title?: string;
  column1?: string;
  column2?: string;
  hasButton?: boolean;
  buttonText?: string;
  link?: string;
}

export function TwoColumnsText({
  title,
  column1,
  column2,
  hasButton = false,
  buttonText = "Saiba mais",
  link = "#",
}: TwoColumnsTextProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <PortableText value={column1} components={portableTextConfig} />
          </div>
          <div>
            <PortableText value={column2} components={portableTextConfig} />
          </div>
        </div>
        {hasButton && (
          <div className="flex justify-end">
            <Link href={link}>
              <Button variant="link">
                {buttonText} <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

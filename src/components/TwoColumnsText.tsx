/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GeyURwRwJkY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


import Link from "next/link";
import ArrowRightIcon from "./ui/ArrowRightIcon";
import { Button } from "./ui/Button";

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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-muted-foreground">{column1}</p>
          </div>
          <div>
            <p className="text-muted-foreground">{column2}</p>
          </div>
        </div>
        {hasButton && (
          <div className="flex justify-end">
            <Link href={link} >
            <Button variant="link" >
              {buttonText} <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Button>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
}

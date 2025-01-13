import Link from "next/link";
import { Button } from "./Button";

export type UserProps = {
  name: string;
  subject?: string;
  image: string;
  slug: string;
};

export default function User({ name, subject, image, slug }: UserProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full w-32 h-32"
      />
      <div className="space-y-1 text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{subject}</p>
        <Link href={`/professores/professor/${slug}`} prefetch={false}>
          <Button variant={"ghost"} size={"sm"}>
            Ver Mais
          </Button>
        </Link>
      </div>
    </div>
  );
}

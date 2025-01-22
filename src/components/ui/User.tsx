import Link from "next/link";
import Image from "next/image";

export type UserProps = {
  name: string;
  subject?: string;
  image: string;
  slug: string;
};

export default function User({ name, subject, image, slug }: UserProps) {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full w-32 h-32 shadow-lg"
      />
      <div className=" text-center mt-4">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-base text-muted-foreground">{subject}</p>
        <Link
          href={`/professores/professor/${slug}`}
          prefetch={false}
          className="inline-flex items-center font-medium text-primary hover:underline mt-4"
        >
          Ver Mais
        </Link>
      </div>
    </div>
  );
}
